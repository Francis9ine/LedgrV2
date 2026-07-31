import { useNavigate } from "react-router";

export function Landing() {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f8fafa 0%, #f8fafa 100%)", fontFamily: "Manrope, sans-serif" }}
    >
      {/* Ambient background blurs */}
      <div
        className="absolute rounded-full opacity-20 pointer-events-none"
        style={{
          width: 896,
          height: 896,
          background: "#afefdd",
          filter: "blur(50px)",
          left: -128,
          top: -236,
        }}
      />
      <div
        className="absolute rounded-full opacity-15 pointer-events-none"
        style={{
          width: 768,
          height: 768,
          background: "#a3f69c",
          filter: "blur(60px)",
          right: -256,
          top: 471,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center px-12 py-8 w-full max-w-md">
        <div className="flex flex-col items-center flex-1 justify-center pb-8 w-full">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-[#00342b] rounded-lg w-12 h-12 flex items-center justify-center shadow-sm flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span
              className="text-[#00342b] font-bold tracking-tight"
              style={{ fontSize: 32, lineHeight: "40px", letterSpacing: "-0.8px" }}
            >
              Ledgr
            </span>
          </div>

          {/* Welcome message */}
          <div className="flex flex-col items-center gap-2 max-w-[280px] text-center">
            <h2 className="text-[#191c1d] font-semibold" style={{ fontSize: 20, lineHeight: "28px" }}>
              Simplifying your financial life
            </h2>
            <p className="text-[#3f4945] font-normal" style={{ fontSize: 14, lineHeight: "20px" }}>
              Take control of your money with intuitive tools and clear insights.
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-4 w-full">
          <button
            onClick={() => navigate("/login")}
            className="w-full h-12 bg-[#00342b] text-white font-semibold rounded-lg shadow-sm hover:bg-[#004d3f] transition-colors"
            style={{ fontSize: 14 }}
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/login")}
            className="w-full h-12 text-[#00342b] font-semibold rounded-lg border border-transparent hover:bg-[#e8f5e9] transition-colors"
            style={{ fontSize: 14 }}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
