import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — DecisionLog Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== params.slug).slice(0, 2);

  return (
    <div className="px-6 py-20">
      <div className="max-w-2xl mx-auto">

        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[13px] text-[#999896] hover:text-[#44433F] transition-colors mb-10"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          All posts
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] font-semibold tracking-[.08em] uppercase text-[#999896] bg-[#EBEBEB] px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-[12.5px] text-[#999896]">{post.date}</span>
          </div>
          <h1 className="font-serif text-[clamp(32px,4.5vw,52px)] font-medium leading-[1.08] tracking-[-1.8px] text-[#0A0A09] mb-5">
            {post.title}
          </h1>
          <p className="text-[13.5px] text-[#999896]">By {post.author}</p>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E4E4E2] mb-10" />

        {/* Content */}
        <article
          className="prose-decisionlog"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Inline styles for prose */}
        <style>{`
          .prose-decisionlog { color: #44433F; font-size: 16px; line-height: 1.75; font-weight: 300; }
          .prose-decisionlog h2 { font-family: 'Georgia', serif; font-size: 24px; font-weight: 500; letter-spacing: -0.5px; color: #0A0A09; margin: 2.5rem 0 1rem; line-height: 1.2; }
          .prose-decisionlog h3 { font-family: 'Georgia', serif; font-size: 20px; font-weight: 500; color: #0A0A09; margin: 2rem 0 0.75rem; }
          .prose-decisionlog p { margin-bottom: 1.4rem; }
          .prose-decisionlog strong { font-weight: 600; color: #111110; }
          .prose-decisionlog em { font-style: italic; }
          .prose-decisionlog ul { list-style: none; padding: 0; margin-bottom: 1.4rem; }
          .prose-decisionlog ul li { padding-left: 1.5rem; position: relative; margin-bottom: 0.5rem; }
          .prose-decisionlog ul li::before { content: '—'; position: absolute; left: 0; color: #C8C8C6; }
          .prose-decisionlog ol { padding-left: 1.5rem; margin-bottom: 1.4rem; }
          .prose-decisionlog ol li { margin-bottom: 0.5rem; }
          .prose-decisionlog blockquote { border-left: 2px solid #E4E4E2; padding-left: 1.25rem; margin: 2rem 0; color: #999896; font-style: italic; }
          .prose-decisionlog a { color: #0A0A09; text-decoration: underline; text-underline-offset: 3px; }
          .prose-decisionlog a:hover { color: #44433F; }
          .prose-decisionlog code { background: #F2F2F0; border-radius: 4px; padding: 1px 6px; font-size: 13px; color: #111; }
        `}</style>

        {/* CTA Box */}
        <div className="mt-16 bg-[#0A0A09] rounded-[24px] p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 65%)" }} />
          <p className="text-[11.5px] font-semibold tracking-[.12em] uppercase text-[rgba(255,255,255,0.35)] mb-3 relative">Ready to try it?</p>
          <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-medium tracking-[-1.5px] text-white leading-[1.1] mb-3 relative">
            Log your first decision<br />
            <span className="italic font-light text-[rgba(255,255,255,0.4)]">in under 60 seconds.</span>
          </h2>
          <p className="text-[15px] font-light text-[rgba(255,255,255,0.42)] mb-7 relative">
            Free forever for small teams. Native Slack shortcut.
          </p>
          <a
            href="https://slack.com/apps/A0ALMK3KXEZ-decisionlog"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2.5 bg-white text-[#0A0A09] px-7 py-3.5 rounded-full text-[14.5px] font-semibold shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] transition-all"
          >
            Add to Slack
          </a>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-16">
            <p className="text-[11.5px] font-semibold tracking-[.12em] uppercase text-[#999896] mb-6">More from the blog</p>
            <div className="space-y-3">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="flex items-start gap-4 bg-[#F9F9F8] border border-[#E4E4E2] rounded-[16px] p-6 hover:border-[#C8C8C6] hover:-translate-y-0.5 transition-all group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10.5px] font-semibold tracking-[.08em] uppercase text-[#999896]">{rp.category}</span>
                      <span className="text-[11.5px] text-[#C8C8C6]">·</span>
                      <span className="text-[11.5px] text-[#999896]">{rp.date}</span>
                    </div>
                    <h3 className="font-serif text-[18px] font-medium tracking-[-0.3px] text-[#0A0A09] leading-snug">{rp.title}</h3>
                  </div>
                  <svg className="text-[#C8C8C6] group-hover:text-[#44433F] transition-colors mt-1 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
