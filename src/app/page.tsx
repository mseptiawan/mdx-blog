import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 border rounded-lg hover:shadow-lg"
          >
            <span className="text-sm text-blue-500 font-semibold uppercase">
              {post.category}
            </span>
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="text-gray-600">{post.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
