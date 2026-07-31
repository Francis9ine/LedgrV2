import { useState } from "react";
import { useNavigate } from "react-router";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/verify");  // In real app this would be /verify; for demo flow: navigate("/app/dashboard")
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-12"
      style={{ background: "linear-gradient(90deg, #f8fafa 0%, #f8fafa 100%)", fontFamily: "Manrope, sans-serif" }}
    >
      {/* Login card */}
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-[420px] flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-2 items-center">
          <div className="flex items-center gap-2 pb-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none">
                <path d="M11 1.5L1.5 7l9.5 5 9.5-5-9.5-5.5zM1.5 15.5l9.5 5 9.5-5M1.5 11l9.5 5 9.5-5" stroke="#00342B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[#00342b] font-semibold" style={{ fontSize: 24, letterSpacing: "-0.24px" }}>Ledgr</span>
          </div>
          <h2 className="text-[#191c1d] font-semibold" style={{ fontSize: 20, lineHeight: "28px" }}>
            Welcome Back
          </h2>
          <p className="text-[#3f4945] font-normal" style={{ fontSize: 12, lineHeight: "16px" }}>
            Log in to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-[#191c1d] font-semibold" style={{ fontSize: 14, lineHeight: "20px" }}>
              Email Address
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3f4945]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john.doe@example.com"
                className="w-full h-12 bg-white border border-[#bfc9c4] rounded-lg pl-11 pr-4 text-[#191c1d] placeholder-[#707975] outline-none focus:border-[#00342b] focus:ring-2 focus:ring-[rgba(0,52,43,0.2)] transition-all"
                style={{ fontSize: 14 }}
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-[#191c1d] font-semibold" style={{ fontSize: 14, lineHeight: "20px" }}>
                Password
              </label>
              <button
                type="button"
                className="text-[#00342b] font-semibold"
                style={{ fontSize: 12, lineHeight: "16px" }}
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <Lock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3f4945]" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-12 bg-white border border-[#bfc9c4] rounded-lg pl-11 pr-12 text-[#191c1d] placeholder-[#707975] outline-none focus:border-[#00342b] focus:ring-2 focus:ring-[rgba(0,52,43,0.2)] transition-all"
                style={{ fontSize: 14 }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3f4945]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full h-12 bg-[#00342b] text-white font-semibold rounded-lg shadow-sm hover:bg-[#004d3f] transition-colors"
              style={{ fontSize: 14 }}
            >
              Login
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="flex items-center justify-center gap-1" style={{ fontSize: 12 }}>
          <span className="text-[#3f4945] font-normal">Don't have an account?</span>
          <button
            onClick={() => navigate("/register")}
            className="text-[#00342b] font-semibold"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
