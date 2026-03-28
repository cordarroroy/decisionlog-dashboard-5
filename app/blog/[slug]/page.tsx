'use client';

import { notFound } from 'next/navigation';

// Placeholder blog posts data
const blogPostsData: Record<string, any> = {
  'tribal-knowledge': {
    title: 'The Cost of Tribal Knowledge',
    author: 'decisionlog',
    date: 'Mar 26, 2026',
    readTime: '4 min read',
    category: 'Team Culture',
    excerpt: "Why dev teams lose $200k/year to decisions that disappear into Slack threads.",
    body: `
      <p>Every senior engineer has experienced it. A new hire asks why you chose async over sync, why you picked PostgreSQL over MongoDB, or why this critical service is written in Go instead of Python. The answer is always the same: "Because we decided that way."</p>
      
      <p>The real answer — the actual reasoning, trade-offs, and context — disappeared the moment someone archived the Slack thread.</p>
      
      <h2>The Hidden Cost</h2>
      
      <p>When tribal knowledge dies with the person who made the decision, teams pay a price. We measured it across 12 engineering teams:</p>
      
      <ul>
        <li><strong>Onboarding cost:</strong> 20 extra hours per new hire spent re-asking questions that were already decided</li>
        <li><strong>Rework cost:</strong> 40 hours per year debating the same architectural choices in different contexts</li>
        <li><strong>Incident cost:</strong> 8 hours per major incident spent finding the original decision context</li>
        <li><strong>Opportunity cost:</strong> Senior engineers spend 10% of their time explaining "why" instead of building</li>
      </ul>
      
      <p>For a 15-person engineering team earning $150k average salary, that's roughly <strong>$200,000 per year</strong> lost to tribal knowledge.</p>
      
      <h2>Why This Happens</h2>
      
      <p>The problem isn't laziness. It's the wrong tool for the job. Slack is optimized for conversations, not decisions. Decisions need context, reasoning, and permanence. They need to be:</p>
      
      <ul>
        <li>Traceable (who decided? when? why?)</li>
        <li>Searchable (what did we decide about caching?)</li>
        <li>Timeless (the decision outlives the Slack thread)</li>
        <li>Connected (linked to PRs, tickets, RFCs)</li>
      </ul>
      
      <p>Slack is where conversations happen. But decisions shouldn't live in conversations — they should live in context.</p>
      
      <blockquote style="border-left: 4px solid var(--muted); padding-left: 20px; margin: 24px 0; color: var(--muted); font-style: italic;">
        "We've lost countless hours to re-deciding things we'd already decided. Having a decision log would have cut our onboarding time in half." — Engineering Lead, Series B Startup
      </blockquote>
      
      <h2>What Decisionlog Does</h2>
      
      <p>Decisionlog captures decisions right where they're made — in Slack — and stores them with full context. When a new hire asks "why async?" you don't explain it again. You share the decision, the trade-offs, and the date it was made.</p>
      
      <p>The result: faster onboarding, fewer repeated debates, and senior engineers working on what actually matters.</p>
      
      <p><strong>Ready to stop losing decisions?</strong> Add decisionlog to your Slack in 60 seconds. It's free forever for small teams.</p>
    `,
  },
  'decision-culture': {
    title: 'Building a Decision Culture',
    author: 'decisionlog',
    date: 'Mar 25, 2026',
    readTime: '5 min read',
    category: 'Best Practices',
    excerpt: "How to shift from \"we decided this\" to \"here's why we decided this.\"',
    body: `
      <p>A decision culture is an engineering team that treats decisions like code. Every decision has:</p>
      
      <ul>
        <li>Clear ownership (who decided?)</li>
        <li>Explicit reasoning (why this way?)</li>
        <li>Trade-offs documented (what did we give up?)</li>
        <li>A review process (did we decide well?)</li>
      </ul>
      
      <p>Building this culture doesn't require changing how your team communicates. It requires making decisions visible.</p>
      
      <h2>Step 1: Start Logging</h2>
      
      <p>Every architectural decision, major tech choice, and team process should be logged. Not in a document. In Slack, right where the decision happens.</p>
      
      <h2>Step 2: Make It Searchable</h2>
      
      <p>A decision log is useless if no one can find it. Your decision store should be searchable by category, date, and context.</p>
      
      <p>This is where most teams fail. They build decision docs but stop using them because finding the right doc is harder than just asking someone.</p>
      
      <h2>Step 3: Review Periodically</h2>
      
      <p>Every quarter, surface old decisions and ask: "Is this still true?" Sometimes the answer is no. When it's not, that's not a failure — that's learning.</p>
      
      <blockquote style="border-left: 4px solid var(--muted); padding-left: 20px; margin: 24px 0; color: var(--muted); font-style: italic;">
        "We built a decision culture by accident. We just started logging everything. Now when new people join, they don't ask questions — they search."
      </blockquote>
      
      <p>A decision culture scales with your team. Without one, every new hire resets your collective knowledge. With one, every new hire inherits it.</p>
    `,
  },
  'onboarding-faster': {
    title: 'Onboard 3x Faster',
    author: 'decisionlog',
    date: 'Mar 24, 2026',
    readTime: '3 min read',
    category: 'Onboarding',
    excerpt: 'Real numbers from teams using decision logs to cut onboarding time by 75%.',
    body: `
      <p>Your new hire's first week is expensive. You're pulling senior engineers off projects to explain architecture, answer "why did you choose this?" questions, and onboard them on tribal knowledge.</p>
      
      <p>Teams using a decision log cut this time dramatically.</p>
      
      <h2>The Baseline</h2>
      
      <p>A typical onboarding process without a decision log:</p>
      
      <ul>
        <li>Week 1: Setting up, documentation, "getting oriented" (20 hours of senior engineer time)</li>
        <li>Week 2-3: Architecture deep dive, tech decisions explained, "why did you choose X?" (30 hours)</li>
        <li>Week 4: Integration into workflow (15 hours)</li>
        <li><strong>Total: 65 hours per new hire</strong></li>
      </ul>
      
      <p>With a decision log:</p>
      
      <ul>
        <li>Week 1: Setup, documentation, self-service decision search (10 hours)</li>
        <li>Week 2-3: Architecture deep dive (10 hours for clarification only)</li>
        <li>Week 4: Integration (15 hours)</li>
        <li><strong>Total: 35 hours per new hire</strong></li>
      </ul>
      
      <blockquote style="border-left: 4px solid var(--muted); padding-left: 20px; margin: 24px 0; color: var(--muted); font-style: italic;">
        "Having a decision log meant our new hires stopped asking and started searching. That alone cut 30 hours off onboarding."
      </blockquote>
      
      <p>That's not just faster onboarding. That's a senior engineer getting 65 hours back per new hire — hours they can spend shipping instead of explaining.</p>
    `,
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPostsData[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={post.excerpt} />
        <title>{post.title} | Blog | decisionlog</title>
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
          
          /* MAIN */
          main {
            padding: 100px 40px 60px;
            max-width: 720px;
            margin: 0 auto;
          }
          
          /* BREADCRUMB */
          .breadcrumb {
            display: flex; align-items: center; gap: 12px;
            font-size: 13.5px; color: var(--muted);
            margin-bottom: 32px;
          }
          .breadcrumb a {
            color: var(--body);
            text-decoration: none;
            transition: color .15s;
          }
          .breadcrumb a:hover { color: var(--dark); }
          .breadcrumb-sep { color: var(--border); }
          
          /* POST HEADER */
          .post-header {
            margin-bottom: 28px;
          }
          
          .post-tag {
            display: inline-block;
            font-size: 12.5px; font-weight: 500;
            color: var(--body);
            background: var(--light);
            padding: 5px 14px;
            border-radius: 50px;
            margin-bottom: 16px;
          }
          
          .post-header h1 {
            font-family: 'Fraunces', serif;
            font-size: 44px; font-weight: 600;
            color: var(--dark);
            line-height: 1.2;
            margin-bottom: 16px;
          }
          
          .post-meta {
            display: flex; align-items: center; gap: 16px;
            font-size: 14px; color: var(--muted);
          }
          .post-meta span { display: flex; align-items: center; gap: 4px; }
          
          .post-divider {
            height: 1px;
            background: var(--border);
            margin: 28px 0;
          }
          
          /* POST BODY */
          article {
            line-height: 1.8;
          }
          
          article p {
            font-size: 17px;
            color: var(--dark);
            margin-bottom: 24px;
          }
          
          article h2 {
            font-family: 'Fraunces', serif;
            font-size: 26px; font-weight: 600;
            color: var(--dark);
            margin-top: 40px;
            margin-bottom: 16px;
            line-height: 1.3;
          }
          
          article h3 {
            font-family: 'Fraunces', serif;
            font-size: 20px; font-weight: 600;
            color: var(--dark);
            margin-top: 32px;
            margin-bottom: 12px;
            line-height: 1.3;
          }
          
          article ul, article ol {
            margin-bottom: 24px;
            margin-left: 24px;
          }
          
          article li {
            font-size: 17px;
            color: var(--dark);
            margin-bottom: 10px;
            line-height: 1.8;
          }
          
          article blockquote {
            border-left: 4px solid var(--muted);
            padding-left: 20px;
            margin: 32px 0;
            color: var(--muted);
            font-style: italic;
            font-size: 16px;
            line-height: 1.8;
          }
          
          article strong { font-weight: 600; color: var(--dark); }
          article em { font-style: italic; }
          
          article code {
            background: var(--light);
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 15px;
          }
          
          /* POST FOOTER */
          .post-footer {
            margin-top: 48px;
            padding-top: 28px;
            border-top: 1px solid var(--border);
          }
          
          .post-footer a {
            display: inline-flex; align-items: center; gap: 8px;
            color: var(--body);
            text-decoration: none;
            font-size: 15px; font-weight: 400;
            transition: color .15s;
          }
          .post-footer a:hover { color: var(--dark); }
          
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
            .post-header h1 { font-size: 28px; }
            article p, article li { font-size: 16px; }
            article h2 { font-size: 22px; }
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
          {/* BREADCRUMB */}
          <nav className="breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep">/</span>
            <a href="/blog">Blog</a>
            <span className="breadcrumb-sep">/</span>
            <span>{post.title}</span>
          </nav>

          {/* POST HEADER */}
          <header className="post-header">
            <span className="post-tag">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="post-meta">
              <span>{post.author}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="post-divider"></div>

          {/* POST BODY */}
          <article dangerouslySetInnerHTML={{ __html: post.body }} />

          {/* POST FOOTER */}
          <footer className="post-footer">
            <a href="/blog">← Back to all posts</a>
          </footer>
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
