import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const posts = getAllPosts().filter(
    (post) => post.category.toLowerCase() === params.category.toLowerCase()
  );

  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Kategori: {params.category}</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="p-4 border rounded hover:bg-gray-50"
          >
            {post.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
