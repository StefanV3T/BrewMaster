import { useEffect, useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

type BlogPostMeta = {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  slug: string;
};

const Blog = () => {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const markdownFiles = import.meta.glob('/blogs/*.md'); // Glob pattern for markdown files in _posts directory
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
      const filteredPosts = posts.filter(post => post.category === 'blog');

      console.log('Filtered Posts:', filteredPosts); // Log the filtered posts array
      setPosts(filteredPosts); // Update state with the filtered posts array
    };

    loadPosts();
  }, []);

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Coffee knowledge Hub
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expand your coffee knowledge with our latest articles and insights
            from coffee experts around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="card group cursor-pointer">
              <a key={post.slug} href={`/blog/${post.slug}`}>
                <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                  <img
                    style={{ width: '100%', height: '200px' }}
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-coffee transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
