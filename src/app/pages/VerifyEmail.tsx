import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function VerifyEmail() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [countdown, setCountdown] = useState(59);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleVerify = () => {
    navigate("/app/dashboard");
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "linear-gradient(90deg, #f8fafa 0%, #f8fafa 100%)", fontFamily: "Manrope, sans-serif" }}
    >
      {/* Header */}
      <div className="h-16 flex items-center px-12 pt-8">
        <div className="flex items-center gap-2">
          <svg width="24" height="23" viewBox="0 0 24 23" fill="none">
            <path d="M12 1.5L1.5 7l10.5 5.5L23 7 12 1.5zM1.5 16l10.5 5.5L23 16M1.5 11.5l10.5 5.5L23 11.5" stroke="#00342B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[#00342b] font-bold" style={{ fontSize: 16 }}>Ledgr</span>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="bg-white rounded-xl w-full max-w-[448px] relative overflow-hidden shadow-xl border border-[rgba(191,201,196,0.3)]">
          {/* Decorative bg element */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 256,
              height: 256,
              background: "rgba(0,52,43,0.05)",
              filter: "blur(32px)",
              right: -95,
              top: -95,
            }}
          />

          <div className="relative p-8 flex flex-col gap-6">
            {/* Header section */}
            <div className="flex flex-col gap-2 items-center text-center">
              <h1 className="text-[#00342b] font-bold tracking-tight" style={{ fontSize: 32, lineHeight: "40px", letterSpacing: "-0.64px" }}>
                Verify Email
              </h1>
              <p className="text-[#3f4945] font-normal" style={{ fontSize: 14, lineHeight: "20px" }}>
                We've sent a 4-digit code to{" "}
                <strong className="font-bold text-[#191c1d]">jane.doe@example.com</strong>.<br />
                Enter it below to verify your account.
              </p>
            </div>

            {/* OTP Input Section */}
            <div className="flex flex-col gap-6">
              {/* Digit inputs */}
              <div className="flex gap-4 items-center justify-center">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={inputRefs[index]}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className={`w-16 h-20 bg-[#f2f4f4] rounded-lg text-center text-[#191c1d] font-semibold outline-none transition-all ${
                      index === 0 && digit
                        ? "border-2 border-[#00342b] shadow-[0px_0px_0px_2px_rgba(0,52,43,0.2)]"
                        : "border border-[#bfc9c4]"
                    } focus:border-2 focus:border-[#00342b] focus:shadow-[0px_0px_0px_2px_rgba(0,52,43,0.2)]`}
                    style={{ fontSize: 24 }}
                  />
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-4 pt-1">
                <button
                  onClick={handleVerify}
                  className="w-full h-12 bg-[#00342b] text-white font-semibold rounded-lg shadow-sm hover:bg-[#004d3f] transition-colors"
                  style={{ fontSize: 14 }}
                >
                  Verify
                </button>
                <div className="flex items-center justify-center gap-1" style={{ fontSize: 12 }}>
                  <span className="text-[#3f4945] font-normal">Didn't receive the code?</span>
                  <button className="flex items-center gap-1 opacity-50 text-[#00342b] font-normal">
                    Resend Code{" "}
                    <span className="text-[#3f4945]">(0:{countdown.toString().padStart(2, "0")})</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Back link */}
            <div className="flex items-center justify-center pt-2">
              <button
                onClick={() => navigate("/login")}
                className="flex items-center gap-1 text-[#3f4945] font-bold tracking-wider"
                style={{ fontSize: 11 }}
              >
                <ChevronLeft size={9} />
                Back to Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
