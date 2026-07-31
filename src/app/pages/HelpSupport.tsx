import { useState } from "react";
import { Search, ChevronDown, ChevronUp, PlayCircle, List, PieChart, TrendingUp, CreditCard, MessageCircle, Phone, Mail, ExternalLink } from "lucide-react";
import { faqCategories } from "../data/mockData";

const iconMap: Record<string, React.ElementType> = {
  "play-circle": PlayCircle,
  "list": List,
  "pie-chart": PieChart,
  "trending-up": TrendingUp,
  "credit-card": CreditCard,
};

export function HelpSupport() {
  const [search, setSearch] = useState("");
  const [openCategory, setOpenCategory] = useState<string | null>("1");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const filteredCategories = faqCategories.map(cat => ({
    ...cat,
    questions: cat.questions.filter(
      q =>
        q.q.toLowerCase().includes(search.toLowerCase()) ||
        q.a.toLowerCase().includes(search.toLowerCase()) ||
        cat.title.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(cat => cat.questions.length > 0);

  return (
    <div className="p-6 flex flex-col gap-6 max-w-screen-xl" style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* Header */}
      <div>
        <h1 className="text-[#191c1d] font-bold" style={{ fontSize: 24 }}>Help & Support</h1>
        <p className="text-[#3f4945] font-normal mt-1" style={{ fontSize: 14 }}>
          Find answers to common questions or get in touch with our team.
        </p>
      </div>

      {/* Search bar */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-[rgba(0,0,0,0.04)]">
        <h2 className="text-[#191c1d] font-bold mb-3" style={{ fontSize: 16 }}>How can we help you?</h2>
        <div className="relative max-w-lg">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#707975]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for help articles..."
            className="w-full h-11 bg-[#f2f4f4] border border-[#bfc9c4] rounded-xl pl-11 pr-4 text-[#191c1d] placeholder-[#707975] outline-none focus:border-[#00342b] focus:ring-2 focus:ring-[rgba(0,52,43,0.15)] transition-all"
            style={{ fontSize: 14 }}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* FAQ Categories */}
        <div className="flex-1">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {faqCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || PlayCircle;
              return (
                <button
                  key={cat.id}
                  onClick={() => setOpenCategory(openCategory === cat.id ? null : cat.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border font-semibold transition-all ${
                    openCategory === cat.id
                      ? "bg-[#00342b] text-white border-[#00342b]"
                      : "bg-white text-[#3f4945] border-[#bfc9c4] hover:border-[#00342b] hover:text-[#00342b]"
                  }`}
                  style={{ fontSize: 12 }}
                >
                  <Icon size={13} />
                  {cat.title}
                  <span className={`px-1.5 py-0.5 rounded-full ${openCategory === cat.id ? "bg-[rgba(255,255,255,0.2)] text-white" : "bg-[#f2f4f4] text-[#707975]"}`} style={{ fontSize: 10 }}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* FAQ Accordions */}
          {filteredCategories.length === 0 ? (
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[rgba(0,0,0,0.04)] text-center">
              <p className="text-[#707975] font-normal" style={{ fontSize: 14 }}>No results found for "{search}"</p>
              <p className="text-[#707975] font-normal mt-1" style={{ fontSize: 13 }}>Try a different search term or browse categories above.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {filteredCategories.map((cat) => {
                const Icon = iconMap[cat.icon] || PlayCircle;
                const isOpen = openCategory === cat.id;
                return (
                  <div key={cat.id} className="bg-white rounded-xl shadow-sm border border-[rgba(0,0,0,0.04)] overflow-hidden">
                    {/* Category header */}
                    <button
                      onClick={() => setOpenCategory(isOpen ? null : cat.id)}
                      className="w-full flex items-center justify-between px-5 py-4 hover:bg-[#f8fafa] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#f0fdf4] flex items-center justify-center">
                          <Icon size={16} className="text-[#217128]" />
                        </div>
                        <div className="text-left">
                          <p className="text-[#191c1d] font-bold" style={{ fontSize: 15 }}>{cat.title}</p>
                          <p className="text-[#707975] font-normal" style={{ fontSize: 12 }}>{cat.count} articles</p>
                        </div>
                      </div>
                      {isOpen ? <ChevronUp size={18} className="text-[#3f4945]" /> : <ChevronDown size={18} className="text-[#3f4945]" />}
                    </button>

                    {/* Questions */}
                    {isOpen && (
                      <div className="border-t border-[#f2f4f4]">
                        {cat.questions.map((qa, qi) => {
                          const qKey = `${cat.id}-${qi}`;
                          const qOpen = openQuestion === qKey;
                          return (
                            <div key={qi} className="border-b border-[#f2f4f4] last:border-0">
                              <button
                                onClick={() => setOpenQuestion(qOpen ? null : qKey)}
                                className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-[#f8fafa] transition-colors text-left"
                              >
                                <p className={`font-semibold pr-4 ${qOpen ? "text-[#00342b]" : "text-[#191c1d]"}`} style={{ fontSize: 14 }}>
                                  {qa.q}
                                </p>
                                {qOpen ? <ChevronUp size={16} className="text-[#3f4945] flex-shrink-0" /> : <ChevronDown size={16} className="text-[#3f4945] flex-shrink-0" />}
                              </button>
                              {qOpen && (
                                <div className="px-5 pb-4">
                                  <p className="text-[#3f4945] font-normal" style={{ fontSize: 13, lineHeight: "20px" }}>{qa.a}</p>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="lg:w-72 flex flex-col gap-4">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[rgba(0,0,0,0.04)]">
            <h3 className="text-[#191c1d] font-bold mb-4" style={{ fontSize: 15 }}>Contact Support</h3>
            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-3 p-3 rounded-lg border border-[#bfc9c4] hover:border-[#00342b] hover:bg-[#f0fdf4] transition-all w-full text-left">
                <div className="w-9 h-9 rounded-lg bg-[#f0fdf4] flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={16} className="text-[#217128]" />
                </div>
                <div>
                  <p className="text-[#191c1d] font-semibold" style={{ fontSize: 13 }}>Live Chat</p>
                  <p className="text-[#707975] font-normal" style={{ fontSize: 11 }}>Usually replies in minutes</p>
                </div>
              </button>
              <button className="flex items-center gap-3 p-3 rounded-lg border border-[#bfc9c4] hover:border-[#00342b] hover:bg-[#f0fdf4] transition-all w-full text-left">
                <div className="w-9 h-9 rounded-lg bg-[#f0fdf4] flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-[#217128]" />
                </div>
                <div>
                  <p className="text-[#191c1d] font-semibold" style={{ fontSize: 13 }}>Email Support</p>
                  <p className="text-[#707975] font-normal" style={{ fontSize: 11 }}>support@ledgr.io</p>
                </div>
              </button>
              <button className="flex items-center gap-3 p-3 rounded-lg border border-[#bfc9c4] hover:border-[#00342b] hover:bg-[#f0fdf4] transition-all w-full text-left">
                <div className="w-9 h-9 rounded-lg bg-[#f0fdf4] flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-[#217128]" />
                </div>
                <div>
                  <p className="text-[#191c1d] font-semibold" style={{ fontSize: 13 }}>Phone Support</p>
                  <p className="text-[#707975] font-normal" style={{ fontSize: 11 }}>Mon–Fri, 9am–6pm EST</p>
                </div>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[rgba(0,0,0,0.04)]">
            <h3 className="text-[#191c1d] font-bold mb-3" style={{ fontSize: 15 }}>Quick Links</h3>
            <div className="flex flex-col gap-1">
              {[
                "System Status",
                "Privacy Policy",
                "Terms of Service",
                "Community Forum",
                "Video Tutorials",
              ].map((link) => (
                <button key={link} className="flex items-center justify-between py-2 px-1 text-[#3f4945] hover:text-[#00342b] transition-colors w-full text-left border-b border-[#f2f4f4] last:border-0">
                  <span className="font-semibold" style={{ fontSize: 13 }}>{link}</span>
                  <ExternalLink size={13} className="flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
