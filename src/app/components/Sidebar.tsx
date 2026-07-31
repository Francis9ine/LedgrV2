import { NavLink, useNavigate } from "react-router";
import {
  LayoutDashboard,
  Wallet,
  ArrowLeftRight,
  BarChart2,
  Target,
  Settings,
  HelpCircle,
  LogOut,
  TrendingUp,
  X,
} from "lucide-react";

const navItems = [
  { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/app/accounts", label: "Accounts", icon: Wallet },
  { to: "/app/transactions", label: "Transactions", icon: ArrowLeftRight },
  { to: "/app/reports", label: "Reports", icon: BarChart2 },
  { to: "/app/budget", label: "Budget & Goals", icon: Target },
  { to: "/app/investments", label: "Investments", icon: TrendingUp },
  { to: "/app/settings", label: "Settings", icon: Settings },
];

type SidebarProps = {
  onClose?: () => void;
};

export function Sidebar({ onClose }: SidebarProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col h-full bg-[#f2f4f4] border-r border-[#bfc9c4] w-64 flex-shrink-0">
      <div className="flex flex-col flex-1 gap-2 px-4 py-4 overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center justify-between pb-6">
          <div className="flex flex-col">
            <span className="font-bold text-[#00342b] text-xl leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
              Ledgr
            </span>
            <span className="text-[#3f4945] text-xs leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
              Financial Clarity
            </span>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-1 rounded-md hover:bg-[#e0e5e3] text-[#3f4945]"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#a0f399] bg-opacity-80 text-[#217128]"
                    : "text-[#3f4945] hover:bg-[#e8ecea]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={18}
                    className={isActive ? "text-[#217128]" : "text-[#3f4945]"}
                  />
                  <span
                    className="text-sm font-semibold"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => { onClose?.(); navigate("/app/accounts"); }}
            className="w-full bg-[#00342b] text-white text-sm font-semibold py-2 rounded-lg hover:bg-[#004d3f] transition-colors"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Link Account
          </button>

          <div className="border-t border-[#bfc9c4] pt-2 mt-1 flex flex-col gap-1">
            <NavLink
              to="/app/help"
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#a0f399] bg-opacity-80 text-[#217128]"
                    : "text-[#3f4945] hover:bg-[#e8ecea]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <HelpCircle size={20} className={isActive ? "text-[#217128]" : "text-[#3f4945]"} />
                  <span className="text-sm font-semibold" style={{ fontFamily: "Manrope, sans-serif" }}>
                    Help Center
                  </span>
                </>
              )}
            </NavLink>

            <button
              onClick={handleLogout}
              className="flex items-center gap-4 px-4 py-2 rounded-lg text-[#3f4945] hover:bg-[#e8ecea] transition-colors w-full text-left"
            >
              <LogOut size={18} className="text-[#3f4945]" />
              <span className="text-sm font-semibold" style={{ fontFamily: "Manrope, sans-serif" }}>
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
