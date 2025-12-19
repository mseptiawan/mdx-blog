// src/app/blog/[slug]/page.tsx
import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components"; // Impor komponennya
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);

    return (
      <article className="max-w-3xl mx-auto p-10">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">{post.frontmatter.title}</h1>
        </header>

        <div className="prose prose-slate max-w-none">
          {/* Masukkan mdxComponents ke sini */}
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    );
  } catch (e) {
    notFound();
  }
}
