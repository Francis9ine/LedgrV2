import { Link } from "lucide-react";
import { financialSummary } from "../data/mockData";

export function Accounts() {
  const accounts = [
    { id: "1", name: "Chase Checking", type: "Checking", balance: 12340.50, bank: "Chase", last4: "4829", color: "#00342b" },
    { id: "2", name: "Chase Savings", type: "Savings", balance: 8240.00, bank: "Chase", last4: "2198", color: "#217128" },
    { id: "3", name: "Fidelity Brokerage", type: "Investment", balance: 18340.70, bank: "Fidelity", last4: "7741", color: "#4ade80" },
  ];

  return (
    <div className="p-6 flex flex-col gap-6 max-w-screen-xl" style={{ fontFamily: "Manrope, sans-serif" }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#191c1d] font-bold" style={{ fontSize: 24 }}>Accounts</h1>
          <p className="text-[#3f4945] font-normal mt-1" style={{ fontSize: 14 }}>
            Manage your linked financial accounts.
          </p>
        </div>
        <button className="bg-[#00342b] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#004d3f] transition-colors flex items-center gap-2 hidden sm:flex" style={{ fontSize: 13 }}>
          <Link size={15} />
          Link Account
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {accounts.map((acc) => (
          <div key={acc.id} className="bg-white rounded-xl p-5 shadow-sm border border-[rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0" style={{ backgroundColor: acc.color, fontSize: 13 }}>
                {acc.bank[0]}
              </div>
              <span className="bg-[#f2f4f4] text-[#3f4945] font-semibold px-2.5 py-0.5 rounded-full" style={{ fontSize: 11 }}>
                {acc.type}
              </span>
            </div>
            <p className="text-[#191c1d] font-bold" style={{ fontSize: 15 }}>{acc.name}</p>
            <p className="text-[#707975] font-normal" style={{ fontSize: 12 }}>••••{acc.last4}</p>
            <p className="text-[#191c1d] font-bold mt-3" style={{ fontSize: 22 }}>
              ${acc.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </p>
          </div>
        ))}

        {/* Add account card */}
        <button className="bg-[#f8fafa] rounded-xl p-5 border-2 border-dashed border-[#bfc9c4] flex flex-col items-center justify-center gap-2 hover:border-[#00342b] hover:bg-[#f0fdf4] transition-all min-h-[140px]">
          <div className="w-10 h-10 rounded-full bg-[#f2f4f4] flex items-center justify-center">
            <Link size={18} className="text-[#3f4945]" />
          </div>
          <span className="text-[#3f4945] font-semibold" style={{ fontSize: 13 }}>Link New Account</span>
        </button>
      </div>

      {/* Total net worth */}
      <div className="bg-[#00342b] rounded-xl p-5 text-white">
        <p className="text-[rgba(255,255,255,0.7)] font-semibold" style={{ fontSize: 13 }}>Total Net Worth</p>
        <p className="text-white font-bold mt-1" style={{ fontSize: 32 }}>
          ${financialSummary.totalBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </p>
        <p className="text-[rgba(255,255,255,0.7)] font-normal mt-1" style={{ fontSize: 13 }}>
          Across {accounts.length} linked accounts
        </p>
      </div>
    </div>
  );
}
