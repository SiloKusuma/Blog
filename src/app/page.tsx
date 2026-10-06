import Link from "next/link";
import { posts } from "@/content/posts";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export default function Home() {
  const [featuredPost, ...otherPosts] = posts;

  return (
    <main className="site-shell" id="top">
      <header className="site-header">
        <Link aria-label="Ruang Biru, beranda" className="brand" href="/">
          <span aria-hidden="true" className="brand-mark">
            rb.
          </span>
          <span className="brand-name">ruang biru</span>
        </Link>

        <nav aria-label="Navigasi utama" className="main-nav">
          <Link className="nav-link active" href="/">
            Beranda
          </Link>
          <a className="nav-link" href="#tulisan">
            Tulisan
          </a>
          <a className="nav-link" href="#tentang">
            Tentang
          </a>
        </nav>
      </header>

      <section aria-labelledby="welcome-title" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true" className="status-dot" />
            CATATAN PRIBADI
          </p>
          <h1 id="welcome-title">
            Halo, selamat
            <br />
            datang di <span>ruang kecilku.</span>
          </h1>
          <p className="hero-description">
            Tempat menyimpan ide, cerita sehari-hari, dan hal-hal baru yang
            sedang kupelajari. Semoga kamu menemukan sesuatu yang tinggal di
            pikiran.
          </p>
          <a className="button button-primary" href="#tulisan">
            Jelajahi tulisan <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div aria-hidden="true" className="hero-art">
          <div className="art-sun" />
          <div className="art-page art-page-back" />
          <div className="art-page art-page-front">
            <span className="art-line art-line-short" />
            <span className="art-line" />
            <span className="art-line art-line-medium" />
            <span className="art-line art-line-long" />
            <span className="art-line art-line-short" />
            <span className="art-stamp">IDE &amp; CERITA</span>
          </div>
          <span className="art-sparkle sparkle-one">✳</span>
          <span className="art-sparkle sparkle-two">✳</span>
          <span className="art-caption">pelan-pelan, satu cerita</span>
        </div>
      </section>

      <div className="content-grid">
        <section aria-labelledby="latest-title" className="posts-section" id="tulisan">
          <div className="section-heading">
            <div>
              <p className="eyebrow">DARI MEJA TULIS</p>
              <h2 id="latest-title">Tulisan terbaru</h2>
            </div>
            <span className="post-count">{posts.length} cerita</span>
          </div>

          {featuredPost ? (
            <article className="featured-post">
              <div aria-hidden="true" className="featured-illustration">
                <span className="illustration-orbit orbit-one" />
                <span className="illustration-orbit orbit-two" />
                <span className="illustration-star">✳</span>
                <span className="illustration-label">CATATAN 01</span>
                <span className="illustration-word">mulai.</span>
              </div>
              <div className="featured-copy">
                <div className="post-meta">
                  <span>{featuredPost.category}</span>
                  <span aria-hidden="true" className="meta-divider">
                    ·
                  </span>
                  <time dateTime={featuredPost.date}>
                    {formatDate(featuredPost.date)}
                  </time>
                </div>
                <h3>
                  <Link href={`/posts/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h3>
                <p>{featuredPost.excerpt}</p>
                <Link
                  className="text-link"
                  href={`/posts/${featuredPost.slug}`}
                >
                  Baca cerita <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ) : null}

          <div className="post-list">
            {otherPosts.map((post, index) => (
              <article className="post-row" key={post.slug}>
                <span aria-hidden="true" className="post-number">
                  0{index + 2}
                </span>
                <div className="post-row-copy">
                  <div className="post-meta">
                    <span>{post.category}</span>
                    <span aria-hidden="true" className="meta-divider">
                      ·
                    </span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <h3>
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p>{post.excerpt}</p>
                </div>
                <Link
                  aria-label={`Baca ${post.title}`}
                  className="row-arrow"
                  href={`/posts/${post.slug}`}
                >
                  ↗
                </Link>
              </article>
            ))}
          </div>
        </section>

        <aside aria-labelledby="about-title" className="about-card" id="tentang">
          <div aria-hidden="true" className="avatar">n.</div>
          <p className="eyebrow">SEDIKIT TENTANGKU</p>
          <h2 id="about-title">Hai, aku Nara.</h2>
          <p>
            Seorang pembelajar yang suka menulis, membaca, dan memperhatikan
            hal-hal kecil. Blog ini adalah sudut internetku untuk merapikan
            pikiran.
          </p>
          <div className="about-divider" />
          <p className="currently-label">BELAKANGAN INI</p>
          <p className="currently-reading">
            Banyak minum teh, belajar hal baru, dan mencoba hidup lebih pelan.
          </p>
          <a className="text-link about-link" href="mailto:halo@ruangbiru.id">
            Sapa aku <span aria-hidden="true">↗</span>
          </a>
        </aside>
      </div>

      <footer className="site-footer">
        <span>© 2026 Ruang Biru</span>
        <span>Dibuat dengan tenang, di Indonesia.</span>
        <a href="#top">Kembali ke atas ↑</a>
      </footer>
    </main>
  );
}
