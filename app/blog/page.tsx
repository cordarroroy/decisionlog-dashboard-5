import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — DecisionLog",
  description: "Insights on decision culture, team alignment, and engineering best practices.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[11.5px] font-semibold tracking-[.12em] uppercase text-[#999896] mb-4">From the team</p>
          <h1 className="font-serif text-[clamp(38px,5vw,64px)] font-medium leading-[1.05] tracking-[-2px] text-[#0A0A09] mb-4">
            The DecisionLog<br />
            <span className="italic font-light text-[#999896]">Blog</span>
          </h1>
          <p className="text-[17px] font-light text-[#44433F] leading-relaxed">
            Insights on decision culture, team alignment, and building better engineering teams.
          </p>
        </div>

        {/* Post list */}
        <div className="space-y-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-[#F9F9F8] border border-[#E4E4E2] rounded-[20px] p-8 hover:border-[#C8C8C6] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-semibold tracking-[.08em] uppercase text-[#999896] bg-[#EBEBEB] px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-[12px] text-[#999896]">{post.date}</span>
                  </div>
                  <h2 className="font-serif text-[22px] font-medium tracking-[-0.5px] text-[#0A0A09] mb-2 leading-snug group-hover:text-[#111] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[14px] font-light text-[#44433F] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="text-[12.5px] text-[#999896] mt-3">{post.author}</p>
                </div>
                <div className="text-[#C8C8C6] group-hover:text-[#44433F] transition-colors mt-1 flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
