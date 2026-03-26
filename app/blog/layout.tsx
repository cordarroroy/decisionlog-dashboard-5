import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — DecisionLog",
  description: "Insights on decision culture, team alignment, and building better engineering teams.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-[#111110] font-sans">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-[#E4E4E2]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="font-serif text-[17px] font-semibold tracking-tight text-[#0A0A09]">
            decisionlog
          </Link>
          <ul className="hidden md:flex items-center gap-1 list-none">
            <li><Link href="/" className="text-[13.5px] text-[#44433F] px-3 py-1.5 rounded-lg hover:bg-[#F2F2F0] transition-colors">Home</Link></li>
            <li><Link href="/blog" className="text-[13.5px] text-[#0A0A09] font-medium px-3 py-1.5 rounded-lg bg-[#F2F2F0]">Blog</Link></li>
            <li><Link href="/pricing" className="text-[13.5px] text-[#44433F] px-3 py-1.5 rounded-lg hover:bg-[#F2F2F0] transition-colors">Pricing</Link></li>
            <li><Link href="/login" className="text-[13.5px] text-[#44433F] px-3 py-1.5 rounded-lg hover:bg-[#F2F2F0] transition-colors">Sign In</Link></li>
          </ul>
          <a
            href="https://slack.com/apps/A0ALMK3KXEZ-decisionlog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13.5px] font-medium bg-[#0A0A09] text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            Add to Slack
          </a>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="pt-14">{children}</main>

      {/* FOOTER */}
      <footer className="border-t border-[#E4E4E2] px-6 py-10 mt-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="font-serif text-[17px] font-semibold text-[#0A0A09]">decisionlog</Link>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-[13px] text-[#999896] hover:text-[#44433F] transition-colors">Blog</Link>
            <Link href="/pricing" className="text-[13px] text-[#999896] hover:text-[#44433F] transition-colors">Pricing</Link>
            <Link href="/privacy" className="text-[13px] text-[#999896] hover:text-[#44433F] transition-colors">Privacy Policy</Link>
            <Link href="/login" className="text-[13px] text-[#999896] hover:text-[#44433F] transition-colors">Sign In</Link>
          </div>
          <p className="text-[13px] text-[#999896]">DecisionLog © 2026</p>
        </div>
      </footer>
    </div>
  );
}
