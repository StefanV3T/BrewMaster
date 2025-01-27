import { Clock, Coffee } from 'lucide-react';
import { useEffect, useState } from 'react';

type BlogPostMeta = {
  title: string;
  image: string;
  time: string;
  difficulty: string;
  ingredients: string[];
  category: string;
  slug: string;
};

const Recipes = () => {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const markdownFiles = import.meta.glob('../blogs/*.md'); // Glob pattern for markdown files in _posts directory
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
      const filteredPosts = posts.filter(post => post.category === 'recipe');

      console.log('Filtered Posts:', filteredPosts); // Log the filtered posts array
      setPosts(filteredPosts); // Update state with the filtered posts array
    };

    loadPosts();
  }, []);

  return (
    <section id="recipes" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Coffee recipes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master these classic coffee recipes and impress your friends and family
            with barista-quality drinks at home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((recipe) => (
            <div key={recipe.title} className="card group">
              <a key={recipe.slug} href={`/blog/${recipe.slug}`}>
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                <img
                    style={{ width: '100%', height: '200px' }}
                  src={recipe.image}
                  alt={recipe.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {recipe.time}
                </div>
                <div className="flex items-center">
                  <Coffee className="w-4 h-4 mr-1" />
                  {recipe.difficulty}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Ingredients:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;