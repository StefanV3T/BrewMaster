import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Understanding Coffee Bean Origins',
    excerpt: 'Learn about different coffee-growing regions and how they affect flavor profiles.',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    author: 'Sarah Johnson',
    date: 'Mar 15, 2024',
  },
  {
    title: 'The Science of Coffee Extraction',
    excerpt: 'Dive deep into the chemistry behind brewing the perfect cup of coffee.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    author: 'Michael Chen',
    date: 'Mar 12, 2024',
  },
  {
    title: 'Maintaining Your Coffee Equipment',
    excerpt: 'Essential tips for keeping your coffee gear in top condition.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    author: 'Emma Davis',
    date: 'Mar 10, 2024',
  },
];

const Blog = () => {
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
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                <img
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;