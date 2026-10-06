import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/content/posts";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Tulisan tidak ditemukan" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="article-shell">
      <header className="article-header">
        <Link aria-label="Ruang Biru, beranda" className="brand" href="/">
          <span aria-hidden="true" className="brand-mark">
            rb.
          </span>
          <span className="brand-name">ruang biru</span>
        </Link>
        <Link className="back-link" href="/">
          ← Semua tulisan
        </Link>
      </header>

      <article className="article">
        <span className="article-category">{post.category}</span>
        <h1>{post.title}</h1>
        <p className="article-excerpt">{post.excerpt}</p>
        <div className="article-byline">
          <span aria-hidden="true" className="avatar">
            n.
          </span>
          <span>
            <span className="byline-name">Nara</span>
            {formatDate(post.date)} <span aria-hidden="true">·</span>{" "}
            {post.readingTime}
          </span>
        </div>

        <div aria-hidden="true" className="article-cover">
          <span>{post.coverWord}</span>
        </div>

        <div className="article-body">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <footer className="article-footer">
          <Link className="back-link" href="/">
            ← Kembali ke beranda
          </Link>
          <span>Terima kasih sudah membaca.</span>
        </footer>
      </article>
    </main>
  );
}
