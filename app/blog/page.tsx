'use client';

import type { Metadata } from 'next';

const blogPosts = [
  {
    slug: 'tribal-knowledge',
    title: 'The Cost of Tribal Knowledge',
    excerpt: "Why dev teams lose $200k/year to decisions that disappear into Slack threads. When only the senior engineer knows why you chose async, you pay 20 hours per new hire.",
    category: 'Team Culture',
    author: 'decisionlog',
    date: 'Mar 26, 2026',
    readTime: '4 min read',
  },
  {
    slug: 'decision-culture',
    title: 'Building a Decision Culture',
    excerpt: "How to shift from \"we decided this\" to \"here's why we decided this.\" A step-by-step guide for teams that want to make better decisions faster.",
    category: 'Best Practices',
    author: 'decisionlog',
    date: 'Mar 25, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'onboarding-faster',
    title: 'Onboard 3x Faster',
    excerpt: "Real numbers from teams using decision logs to cut onboarding time by 75%. Your new hire stops asking \"why?\" and starts shipping in week one.",
    category: 'Onboarding',
    author: 'decisionlog',
    date: 'Mar 24, 2026',
    readTime: '3 min read',
  },
  {
    slug: 'rework-costs',
    title: 'The Hidden Cost of Rework',
    excerpt: "Teams that don't track decisions re-debate the same choices every quarter. We measured it: this costs 40 hours per team per year.",
    category: 'Engineering',
    author: 'decisionlog',
    date: 'Mar 23, 2026',
    readTime: '4 min read',
  },
  {
    slug: 'async-decisions',
    title: 'Making Decisions Asynchronously',
    excerpt: "Remote teams need async decision-making. But async decisions need async documentation. Here's how to do both.",
    category: 'Remote Work',
    author: 'decisionlog',
    date: 'Mar 22, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'scaling-decisions',
    title: 'Scaling Decision-Making',
    excerpt: "When your team grows from 5 to 50 people, decision-making breaks. This is how we fixed it, and how you can too.",
    category: 'Scaling',
    author: 'decisionlog',
    date: 'Mar 21, 2026',
    readTime: '7 min read',
  },
];

export default function BlogPage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Read how teams are building better decision-making practices. Articles on decision culture, onboarding, scaling, and team dynamics." />
        <title>Blog | decisionlog</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Figtree:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          
          :root {
            --white:   #ffffff;
            --off:     #F9F9F8;
            --light:   #F2F2F0;
            --border:  #E4E4E2;
            --muted:   #999896;
            --body:    #44433F;
            --dark:    #111110;
            --black:   #0A0A09;
            --r:       18px;
            --rl:      28px;
          }
          
          html { scroll-behavior: smooth; }
          body {
            font-family: 'Figtree', sans-serif;
            background: var(--white);
            color: var(--dark);
            -webkit-font-smoothing: antialiased;
            overflow-x: hidden;
          }
          
          /* NAV */
          nav {
            position: fixed; top: 0; left: 0; right: 0; z-index: 200;
            display: flex; align-items: center; justify-content: space-between;
            padding: 0 40px; height: 60px;
            background: rgba(255,255,255,0.88);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border);
          }
          .logo {
            font-family: 'Fraunces', serif;
            font-size: 18px; font-weight: 600; letter-spacing: -0.4px;
            color: var(--black); text-decoration: none;
          }
          .nav-links { display: flex; list-style: none; gap: 8px; }
          .nav-links a { font-size: 13.5px; font-weight: 400; color: var(--body); text-decoration: none; padding: 6px 14px; border-radius: 8px; transition: background .15s; }
          .nav-links a:hover { background: var(--light); }
          .nav-right { display: flex; align-items: center; gap: 8px; }
          .nav-signin { font-size: 13.5px; color: var(--body); text-decoration: none; padding: 6px 14px; border-radius: 8px; transition: background .15s; }
          .nav-signin:hover { background: var(--light); }
          .nav-cta {
            display: inline-flex; align-items: center; gap: 8px;
            background: var(--black); color: #fff;
            padding: 8px 18px; border-radius: 50px;
            font-size: 13.5px; font-weight: 500; text-decoration: none;
            transition: all .2s;
          }
          .nav-cta:hover { transform: translateY(-2px); box-shadow: 0 4px 16px rgba(0,0,0,0.16); }
          
          /* MAIN CONTENT */
          main {
            padding: 100px 40px 60px;
            max-width: 1000px;
            margin: 0 auto;
          }
          
          /* HEADER */
          .blog-header {
            margin-bottom: 48px;
          }
          .blog-header h1 {
            font-family: 'Fraunces', serif;
            font-size: 48px; font-weight: 600; color: var(--dark);
            margin-bottom: 12px; line-height: 1.2;
          }
          .blog-header p {
            font-size: 16px; color: var(--muted); line-height: 1.6;
            max-width: 600px;
          }
          
          /* GRID */
          .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
            gap: 28px;
            margin-bottom: 40px;
          }
          
          /* POST CARD */
          .post-card {
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 28px;
            background: var(--white);
            text-decoration: none;
            color: inherit;
            transition: all 0.2s ease;
            display: flex;
            flex-direction: column;
            height: 100%;
          }
          .post-card:hover {
            border-color: var(--muted);
            box-shadow: 0 8px 40px rgba(0,0,0,0.07);
            transform: translateY(-2px);
          }
          
          /* CATEGORY TAG */
          .post-tag {
            display: inline-block;
            font-size: 12.5px; font-weight: 500;
            color: var(--body);
            background: var(--light);
            padding: 5px 14px;
            border-radius: 50px;
            margin-bottom: 16px;
            width: fit-content;
          }
          
          /* POST TITLE */
          .post-card h2 {
            font-family: 'Fraunces', serif;
            font-size: 20px; font-weight: 600;
            color: var(--dark);
            margin-bottom: 12px;
            line-height: 1.4;
          }
          
          /* POST EXCERPT */
          .post-excerpt {
            font-size: 14px;
            color: var(--muted);
            line-height: 1.6;
            margin-bottom: 16px;
            flex-grow: 1;
          }
          
          /* POST META */
          .post-meta {
            display: flex;
            align-items: center;
            gap: 16px;
            font-size: 13px;
            color: var(--muted);
            border-top: 1px solid var(--border);
            padding-top: 16px;
          }
          
          /* FOOTER */
          footer {
            padding: 40px; background: var(--off);
            border-top: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .footer-links {
            display: flex;
            gap: 24px;
          }
          .footer-links a {
            font-size: 13.5px;
            color: var(--body);
            text-decoration: none;
            transition: color .15s;
          }
          .footer-links a:hover {
            color: var(--dark);
          }
          .footer-copy {
            font-size: 12px;
            color: var(--muted);
          }
          
          @media (max-width: 768px) {
            nav { padding: 0 24px; }
            nav .nav-links { display: none; }
            main { padding: 80px 24px 40px; }
            .blog-header h1 { font-size: 32px; }
            .blog-grid { grid-template-columns: 1fr; }
            footer { flex-direction: column; align-items: flex-start; gap: 20px; }
          }
        `}</style>
      </head>
      <body>
        {/* NAV */}
        <nav>
          <a href="/" className="logo">decisionlog<sup>↗</sup></a>
          <ul className="nav-links">
            <li><a href="/#features">Features</a></li>
            <li><a href="/#how">How it works</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
          <div className="nav-right">
            <a href="/signup" className="nav-signin">Sign up</a>
            <a href="https://slack.com/apps/A0ALMK3KXEZ-decisionlog" className="nav-cta">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              Add to Slack
            </a>
          </div>
        </nav>

        {/* MAIN */}
        <main>
          <header className="blog-header">
            <h1>Blog</h1>
            <p>Articles on decision culture, team dynamics, and building better engineering organizations.</p>
          </header>

          <section>
            <article className="blog-grid">
              {blogPosts.map((post) => (
                <a href={`/blog/${post.slug}`} key={post.slug} className="post-card">
                  <span className="post-tag">{post.category}</span>
                  <h2>{post.title}</h2>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </a>
              ))}
            </article>
          </section>
        </main>

        {/* FOOTER */}
        <footer>
          <a href="/" className="logo">decisionlog<sup>↗</sup></a>
          <div className="footer-links">
            <a href="/blog">Blog</a>
            <a href="/">Home</a>
            <a href="https://slack.com/apps/A0ALMK3KXEZ-decisionlog">Install</a>
          </div>
          <p className="footer-copy">© 2026 decisionlog</p>
        </footer>
      </body>
    </html>
  );
}
