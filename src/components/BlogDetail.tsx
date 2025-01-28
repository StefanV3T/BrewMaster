import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './BlogDetail.css';
import { Clock, Coffee } from 'lucide-react';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';

type BlogPostMeta = {
    title: string;
    excerpt: string;
    image: string;
    author: string;
    date: string;
    category: string;
    slug: string;
};

type RecipePostMeta = BlogPostMeta & {
    ingredients?: string[];
    time?: string;
    difficulty?: string;
};

type BrewingMethodPostMeta = BlogPostMeta & {
    description?: string; // Additional details related to brewing methods
    duration?: string; // Duration of the brewing method
};

type BlogPost = BlogPostMeta & {
    content: string;
};

const BlogDetail: React.FC = () => {
    const url = window.location.href;
    const location = useLocation();
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [recommendedPosts, setRecommendedPosts] = useState<BlogPostMeta[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const loadPost = async () => {
            setLoading(true);
            setTimeout(async () => {
                try {
                    // const { attributes, html } = await import(`../blogs/${slug}.md`) as { attributes: BlogPost, html: string };

                    // const postData = { ...attributes, content: html };
                    // setPost(postData);

                    const markdownFiles = import.meta.glob('../blogs/*.md');
                    const matchingFile = Object.entries(markdownFiles).find(([path]) => path.includes(slug || ''));

                    if (!matchingFile) {
                        throw new Error('Post not found');
                    }
                    const { attributes, html } = await matchingFile[1]() as { attributes: BlogPost, html: string };

                    const postData = { ...attributes, content: html };
                    setPost(postData);

                    const posts = await Promise.all(
                        Object.entries(markdownFiles).map(async ([path, resolver]) => {
                            const { attributes } = (await resolver()) as { attributes: BlogPost };
                            return { ...attributes, slug: path.split('/').pop()?.replace('.md', '') || '' };
                        })
                    );
                    setRecommendedPosts(posts.filter(p => p.slug !== slug)); // Exclude the current post
                } catch (error) {
                    console.error('Error loading the post:', error);
                } finally {
                    setLoading(false);
                }
            }, 100)

        };

        if (slug) {
            loadPost();
        }
    }, [slug, location]);

    if (!post) return <p>Loading...</p>;

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
    };

    const categorizedPosts = recommendedPosts.reduce((acc: { blog: BlogPostMeta[], recipe: RecipePostMeta[], brewingMethod: BrewingMethodPostMeta[] }, post) => {
        if (post.category === 'recipe') {
            acc.recipe.push(post as RecipePostMeta);
        } else if (post.category === 'brewing method') {
            acc.brewingMethod.push(post as BrewingMethodPostMeta);
        } else {
            acc.blog.push(post);
        }
        return acc;
    }, { blog: [], recipe: [], brewingMethod: [] });

    return (
        <>

            <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-lg:flex-col flex lg:space-x-40 bg-white">


                {/* Blog Content */}
                <div className="lg:w-2/3 w-full" id="blog-content">
                    {loading ? (
                        <div className="flex justify-center items-center w-full pt-32">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        <div>
                            <p className="py-5 text-sm text-coffee">
                                <a href="/" className="text-coffee hover:text-coffee-dark">Home</a>
                                <span className="mx-2">/</span>
                                <a href="#" className="text-coffee hover:text-coffee-dark">{post.title}</a>
                            </p>
                                {post.category === 'recipe' ? (
                                    <span className='bg-coffee text-white px-4 py-2 rounded-md mr-2 my-4'>{post.category}</span>
                                ) : post.category === 'brewing method' ? (
                                    <span className='bg-coffee-light text-white px-4 py-2 rounded-md mr-2 my-4'>{post.category}</span>
                                ) : (
                                    <span className='bg-coffee-dark text-white px-4 py-2 rounded-md mr-2 my-4'>{post.category}</span>

                                )}


                                <div className="text-base text-gray-800">
                                    <div dangerouslySetInnerHTML={{ __html: post.content }} className="markdownContent" />
                                </div>

                                <p className="text-lg text-gray-600 mb-2 mt-4">{post.author}</p>
                            {post.date ? (
                                <p className="text-sm text-gray-500 mb-8">{formatDate(post.date)}</p>
                            ) : (
                                <p></p>
                            )
                            }

                            <a href="#blog-content">
                                <button className="btn btn-primary mr-5">Back to top</button>
                            </a>
                                <a href="/">
                                    <button className="btn text-gray-600">Back to home</button>
                                </a>
                                <div className="share-buttons w-full flex mt-8">
                                    <button className='btn bg-coffee-light text-gray-50 px-4 py-2 rounded-md mr-2'><FacebookShareButton url={url}>Share on Facebook</FacebookShareButton></button>
                                    <button className='btn bg-coffee-light text-gray-50 px-4 py-2 rounded-md mx-2'><TwitterShareButton url={url} title="Check out this amazing coffee brewing guide!">Share on Twitter</TwitterShareButton></button>
                                    <button className='btn bg-coffee-light text-gray-50 px-4 py-2 rounded-md mx-2'><LinkedinShareButton url={url}>Share on LinkedIn</LinkedinShareButton></button>

                                </div>

                        </div>
                    )}


                    {/* Recommended Posts in horizontal layout */}
                    <h3 className="text-xl font-semibold text-gray-900 mt-16">Recommended blogs</h3>
                    <div className="flex lg:space-x-8 space-x-2 mt-2">
                        {categorizedPosts.blog.map((recommended) => (

                            <div key={recommended.slug} className="w-1/3 lg:p4">
                                <a href={`/blog/${recommended.slug}`}>
                                <img src={recommended.image} alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
                                <Link to={`/blog/${recommended.slug}`} className="text-lg font-medium text-coffee hover:text-coffee-dark">
                                    {recommended.title}
                                </Link>
                                <p className="text-sm text-gray-600 mt-2">{recommended.excerpt}</p>
                                </a>
                            </div>

                        ))}
                    </div>

                    {/* Recipe Posts */}
                    <h3 className="text-xl font-semibold text-gray-900 mt-16">Recommended recipes</h3>
                    <div className="flex lg:space-x-8 space-x-2 mt-2">
                        {categorizedPosts.recipe.map((recommended) => (
                            <div key={recommended.slug} className="w-1/3 border lg:p-4 rounded-lg shadow-lg">
                                <a href={`/blog/${recommended.slug}`}>

                                <img src={recommended.image} alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
                                <Link to={`/blog/${recommended.slug}`} className="text-lg font-medium text-coffee hover:text-coffee-dark">
                                    {recommended.title}
                                </Link>
                                <div className="mt-2 text-sm text-gray-600">
                                    <p>{recommended.excerpt}</p>
                                    <ul className="mt-2">
                                        {recommended.ingredients && recommended.ingredients.length > 0 && (
                                            <>
                                                <li><strong>Ingredients:</strong></li>
                                                {recommended.ingredients.map((ingredient, index) => (
                                                    <li key={index}>- {ingredient}</li>
                                                ))}
                                            </>
                                        )}
                                        {recommended.time && <li><strong>Time:</strong> {recommended.time}</li>}
                                        {recommended.difficulty && <li><strong>Difficulty:</strong> {recommended.difficulty}</li>}
                                    </ul>
                                </div>
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Brewing Method Posts */}
                    <h3 className="text-xl font-semibold text-gray-900 mt-16">Recommended brewing methods</h3>
                    <div className="flex lg:space-x-8 space-x-2 mt-2">
                        {categorizedPosts.brewingMethod.map((recommended) => (
                            <div key={recommended.slug} className="w-1/3 border lg:p-4 rounded-lg shadow-lg">
                                <a href={`/blog/${recommended.slug}`}>

                                <img src={recommended.image} alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
                                <Link to={`/blog/${recommended.slug}`} className="text-lg font-medium text-coffee hover:text-coffee-dark">
                                    {recommended.title}
                                </Link>
                                <div className="mt-2 text-sm text-gray-600">
                                    <p>{recommended.excerpt}</p>
                                    {recommended.description && (
                                        <p className="mt-2"><strong>Description:</strong> {recommended.description}</p>
                                    )}
                                    {recommended.duration && (
                                        <p className="mt-2"><strong>Duration:</strong> {recommended.duration}</p>
                                    )}
                                </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3 w-full bg-gray-50 p-6 rounded-lg shadow-lg border-l-2 sidebar">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Blogs</h3>
                    <ul className="space-y-4 blog">
                        {categorizedPosts.blog.map((recommended) => (
                            <li key={recommended.slug} className="border-b pb-4">
                                <a href={`/blog/${recommended.slug}`}>
                                <img src={recommended.image} alt="" />
                                <Link to={`/blog/${recommended.slug}`} className="text-lg font-medium text-coffee hover:text-coffee-dark">
                                    {recommended.title}
                                </Link>
                                <p className="text-sm text-gray-600 mt-2">{recommended.excerpt}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Recipes</h3>
                    <ul className="space-y-4 blog">
                        {categorizedPosts.recipe.map((recommended) => (
                            <li key={recommended.slug} className="border-b pb-4">
                                <a href={`/blog/${recommended.slug}`}>
                                <img src={recommended.image} alt="" />
                                <Link to={`/blog/${recommended.slug}`} className="text-lg font-medium text-coffee hover:text-coffee-dark">
                                    {recommended.title}
                                </Link>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {recommended.time}
                                </div>
                                <div className="flex items-center">
                                    <Coffee className="w-4 h-4 mr-1" />
                                    {recommended.difficulty}
                                </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Brewing methods</h3>
                    <ul className="space-y-4 blog">
                        {categorizedPosts.brewingMethod.map((recommended) => (
                            <li key={recommended.slug} className="border-b pb-4">
                                <a href={`/blog/${recommended.slug}`}>
                                <img src={recommended.image} alt="" />
                                <Link to={`/blog/${recommended.slug}`} className="text-lg font-medium text-coffee hover:text-coffee-dark">
                                    {recommended.title}
                                </Link>
                                <p className="text-sm text-gray-600 mt-2">{recommended.description}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>

    );
};

export default BlogDetail;
