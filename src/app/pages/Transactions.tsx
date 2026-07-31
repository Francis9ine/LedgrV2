import { useState } from "react";
import { Search, ArrowUpRight, ArrowDownRight, Filter, ChevronDown } from "lucide-react";
import { transactions, categoryBreakdown, savingsGoals, Transaction } from "../data/mockData";

type FilterType = "all" | "income" | "expense";

function CategoryTag({ category }: { category: string }) {
  const colors: Record<string, string> = {
    "Income": "bg-[#dcfce7] text-[#217128]",
    "Food & Groceries": "bg-[#fef3c7] text-[#92400e]",
    "Transport": "bg-[#dbeafe] text-[#1e40af]",
    "Entertainment": "bg-[#fce7f3] text-[#9d174d]",
    "Housing": "bg-[#ede9fe] text-[#5b21b6]",
    "Shopping": "bg-[#ffedd5] text-[#9a3412]",
    "Health & Fitness": "bg-[#e0f2fe] text-[#0c4a6e]",
    "Utilities": "bg-[#f0fdf4] text-[#166534]",
    "Investments": "bg-[#f0fdf4] text-[#166534]",
  };
  const colorClass = colors[category] || "bg-[#f3f4f6] text-[#374151]";
  return (
    <span className={`px-2 py-0.5 rounded-full font-semibold ${colorClass}`} style={{ fontSize: 11 }}>
      {category}
    </span>
  );
}

export function Transactions() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [search, setSearch] = useState("");
  const [showCount, setShowCount] = useState(10);

  const filtered = transactions.filter((tx) => {
    const matchFilter = filter === "all" || tx.type === filter;
    const matchSearch = tx.name.toLowerCase().includes(search.toLowerCase()) ||
      tx.category.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const visible = filtered.slice(0, showCount);

  const totalIncome = transactions.filter(t => t.type === "income").reduce((s, t) => s + t.amount, 0);
  const totalExpenses = transactions.filter(t => t.type === "expense").reduce((s, t) => s + Math.abs(t.amount), 0);

  return (
    <div className="p-6 flex flex-col gap-6 max-w-screen-xl" style={{ fontFamily: "Manrope, sans-serif" }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#191c1d] font-bold" style={{ fontSize: 24 }}>Transactions</h1>
          <p className="text-[#3f4945] font-normal mt-1" style={{ fontSize: 14 }}>
            Track and manage all your financial activity.
          </p>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        {/* Left column: transaction list */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Filter tabs + search */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-[rgba(0,0,0,0.04)] flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <div className="flex gap-1 p-1 bg-[#f2f4f4] rounded-lg">
              {(["all", "income", "expense"] as FilterType[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-md font-semibold capitalize transition-all ${
                    filter === f
                      ? "bg-white text-[#00342b] shadow-sm"
                      : "text-[#3f4945] hover:text-[#191c1d]"
                  }`}
                  style={{ fontSize: 13 }}
                >
                  {f === "all" ? "All Transactions" : f === "income" ? "Income" : "Expenses"}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#707975]" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search transactions..."
                className="w-full h-9 bg-[#f2f4f4] border border-[#bfc9c4] rounded-full pl-9 pr-4 text-[#191c1d] placeholder-[#707975] outline-none focus:border-[#00342b] transition-all"
                style={{ fontSize: 13 }}
              />
            </div>
          </div>

          {/* Summary row */}
          <div className="flex gap-3">
            <div className="bg-white rounded-xl p-4 shadow-sm flex-1 border border-[rgba(0,0,0,0.04)]">
              <p className="text-[#3f4945] font-semibold" style={{ fontSize: 12 }}>Total Income</p>
              <p className="text-[#217128] font-bold mt-1" style={{ fontSize: 18 }}>+${totalIncome.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm flex-1 border border-[rgba(0,0,0,0.04)]">
              <p className="text-[#3f4945] font-semibold" style={{ fontSize: 12 }}>Total Expenses</p>
              <p className="text-[#ef4444] font-bold mt-1" style={{ fontSize: 18 }}>-${totalExpenses.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm flex-1 border border-[rgba(0,0,0,0.04)]">
              <p className="text-[#3f4945] font-semibold" style={{ fontSize: 12 }}>Net</p>
              <p className={`font-bold mt-1 ${totalIncome - totalExpenses >= 0 ? "text-[#217128]" : "text-[#ef4444]"}`} style={{ fontSize: 18 }}>
                {totalIncome - totalExpenses >= 0 ? "+" : ""}${(totalIncome - totalExpenses).toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>

          {/* Transaction list */}
          <div className="bg-white rounded-xl shadow-sm border border-[rgba(0,0,0,0.04)] overflow-hidden">
            <div className="px-5 py-4 border-b border-[#f2f4f4]">
              <h3 className="text-[#191c1d] font-bold" style={{ fontSize: 15 }}>
                {filter === "all" ? "All Transactions" : filter === "income" ? "Income" : "Expenses"}
                <span className="ml-2 text-[#707975] font-normal" style={{ fontSize: 13 }}>({filtered.length})</span>
              </h3>
            </div>
            <div className="divide-y divide-[#f2f4f4]">
              {visible.map((tx) => (
                <div key={tx.id} className="flex items-center gap-4 px-5 py-3.5 hover:bg-[#f8fafa] transition-colors">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${tx.type === "income" ? "bg-[#dcfce7]" : "bg-[#fef2f2]"}`}>
                    {tx.type === "income" ? (
                      <ArrowUpRight size={18} className="text-[#217128]" />
                    ) : (
                      <ArrowDownRight size={18} className="text-[#ef4444]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#191c1d] font-semibold truncate" style={{ fontSize: 14 }}>{tx.name}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <CategoryTag category={tx.category} />
                      <span className="text-[#707975] font-normal" style={{ fontSize: 11 }}>{tx.date}</span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p
                      className={`font-bold ${tx.type === "income" ? "text-[#217128]" : "text-[#191c1d]"}`}
                      style={{ fontSize: 14 }}
                    >
                      {tx.type === "income" ? "+" : "-"}${Math.abs(tx.amount).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length > showCount && (
              <div className="px-5 py-4 border-t border-[#f2f4f4] text-center">
                <button
                  onClick={() => setShowCount(showCount + 10)}
                  className="text-[#00342b] font-semibold hover:underline"
                  style={{ fontSize: 13 }}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right column: categories + goals */}
        <div className="xl:w-72 flex flex-col gap-4">
          {/* Category Breakdown */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[rgba(0,0,0,0.04)]">
            <h3 className="text-[#191c1d] font-bold mb-4" style={{ fontSize: 15 }}>Spending by Category</h3>
            <div className="flex flex-col gap-3">
              {categoryBreakdown.map((cat) => (
                <div key={cat.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[#3f4945] font-semibold" style={{ fontSize: 12 }}>{cat.name}</span>
                    <span className="text-[#191c1d] font-bold" style={{ fontSize: 12 }}>${cat.amount}</span>
                  </div>
                  <div className="h-1.5 bg-[#f2f4f4] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${cat.percentage}%`, backgroundColor: cat.color }}
                    />
                  </div>
                  <p className="text-[#707975] font-normal mt-0.5" style={{ fontSize: 11 }}>{cat.percentage}% of total</p>
                </div>
              ))}
            </div>
          </div>

          {/* Savings Goals */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[rgba(0,0,0,0.04)]">
            <h3 className="text-[#191c1d] font-bold mb-4" style={{ fontSize: 15 }}>Savings Goals</h3>
            <div className="flex flex-col gap-4">
              {savingsGoals.map((goal) => {
                const pct = Math.round((goal.saved / goal.target) * 100);
                return (
                  <div key={goal.id}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[#191c1d] font-semibold" style={{ fontSize: 13 }}>{goal.name}</span>
                      <span className="text-[#707975] font-normal" style={{ fontSize: 11 }}>{pct}%</span>
                    </div>
                    <div className="h-2 bg-[#f2f4f4] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${pct}%`, backgroundColor: goal.color }}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[#707975] font-normal" style={{ fontSize: 11 }}>${goal.saved.toLocaleString()}</span>
                      <span className="text-[#707975] font-normal" style={{ fontSize: 11 }}>${goal.target.toLocaleString()}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
