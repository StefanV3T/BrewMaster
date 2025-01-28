import { Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

type BlogPostMeta = {
  title: string;
  image: string;
  description: string;
  duration: string;
  category: string;
  slug: string;
};

const BrewingMethods = () => {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const markdownFiles = import.meta.glob('../../blogs/*.md'); // Glob pattern for markdown files in _posts directory
      console.log(markdownFiles); // Log detected markdown files

      const posts = await Promise.all(
        Object.entries(markdownFiles).map(async ([path, resolver]) => {
          // Dynamically import the markdown file's attributes
          const { attributes } = (await resolver()) as { attributes: BlogPostMeta };
          console.log('Attributes:', attributes); // Log the attributes (front matter)

          // Create the metadata object
          return {
            ...attributes,
            slug: path.split('/').pop()?.replace('.md', '') || '',
          } as BlogPostMeta;
        })
      );

      // Filter the posts to include only those with category "blog"
      const filteredPosts = posts.filter(post => post.category === 'brewing method');

      console.log('Filtered Posts:', filteredPosts); // Log the filtered posts array
      setPosts(filteredPosts); // Update state with the filtered posts array
    };

    loadPosts();
  }, []);

  return (
    <section id="methods" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Brewing methods
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover different ways to brew your perfect cup of coffee. Each method brings out unique flavors and characteristics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((method) => (
            <div key={method.title} className="card group">
              <a key={method.slug} href={`/blog/${method.slug}`}>
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                <img
                    style={{ width: '100%', height: '200px' }}
                  src={method.image}
                  alt={method.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>{method.duration}</span>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrewingMethods;