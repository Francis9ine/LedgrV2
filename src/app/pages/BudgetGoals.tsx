import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Target, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { budgetCategories, savingsGoals, portfolioData, financialSummary } from "../data/mockData";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-[#bfc9c4] rounded-lg p-3 shadow-lg">
        <p className="text-[#3f4945] font-semibold mb-1" style={{ fontSize: 12 }}>{label}</p>
        <p className="text-[#00342b] font-bold" style={{ fontSize: 14 }}>
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const totalBudget = budgetCategories.reduce((s, c) => s + c.budget, 0);
const totalSpent = budgetCategories.reduce((s, c) => s + c.spent, 0);
const budgetRemaining = totalBudget - totalSpent;
const spentPercent = Math.round((totalSpent / totalBudget) * 100);

const savingsRate = Math.round((financialSummary.savings / financialSummary.income) * 100);

export function BudgetGoals() {
  return (
    <div className="p-6 flex flex-col gap-6 max-w-screen-xl" style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#191c1d] font-bold" style={{ fontSize: 24 }}>Budget & Goals</h1>
          <p className="text-[#3f4945] font-normal mt-1" style={{ fontSize: 14 }}>
            Manage your spending limits and track progress toward your goals.
          </p>
        </div>
        <button className="bg-[#00342b] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#004d3f] transition-colors hidden sm:flex items-center gap-2" style={{ fontSize: 13 }}>
          <Target size={15} />
          Adjust Budget
        </button>
      </div>

      {/* Top cards */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Monthly Budget Card */}
        <div className="bg-white rounded-xl p-5 shadow-sm flex-1 border border-[rgba(0,0,0,0.04)]">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-[#3f4945] font-semibold" style={{ fontSize: 13 }}>Monthly Budget</p>
              <p className="text-[#191c1d] font-bold mt-1" style={{ fontSize: 24 }}>${totalBudget.toLocaleString()}</p>
            </div>
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${spentPercent >= 90 ? "bg-[#fef2f2] text-[#ef4444]" : "bg-[#dcfce7] text-[#217128]"}`}>
              {spentPercent >= 90 ? <AlertCircle size={13} /> : <CheckCircle size={13} />}
              <span className="font-semibold" style={{ fontSize: 11 }}>{spentPercent}% used</span>
            </div>
          </div>
          <div className="h-2.5 bg-[#f2f4f4] rounded-full overflow-hidden mb-3">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${spentPercent}%`,
                backgroundColor: spentPercent >= 90 ? "#ef4444" : "#00342b"
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#707975] font-normal" style={{ fontSize: 11 }}>Spent</p>
              <p className="text-[#191c1d] font-bold" style={{ fontSize: 15 }}>${totalSpent.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-[#707975] font-normal" style={{ fontSize: 11 }}>Remaining</p>
              <p className="text-[#217128] font-bold" style={{ fontSize: 15 }}>${budgetRemaining.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Rate to Save Card */}
        <div className="bg-[#00342b] rounded-xl p-5 shadow-sm flex-1 text-white">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-[rgba(255,255,255,0.7)] font-semibold" style={{ fontSize: 13 }}>Rate to Save</p>
              <p className="text-white font-bold mt-1" style={{ fontSize: 24 }}>{savingsRate}%</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.15)] rounded-lg p-2">
              <TrendingUp size={20} className="text-white" />
            </div>
          </div>
          <div className="h-2.5 bg-[rgba(255,255,255,0.2)] rounded-full overflow-hidden mb-3">
            <div
              className="h-full rounded-full bg-[#a0f399]"
              style={{ width: `${savingsRate}%` }}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[rgba(255,255,255,0.7)] font-normal" style={{ fontSize: 11 }}>Monthly Savings</p>
              <p className="text-white font-bold" style={{ fontSize: 15 }}>${financialSummary.savings.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-[rgba(255,255,255,0.7)] font-normal" style={{ fontSize: 11 }}>Monthly Income</p>
              <p className="text-white font-bold" style={{ fontSize: 15 }}>${financialSummary.income.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Category Breakdown + Chart */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Category breakdown bars */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[#191c1d] font-bold" style={{ fontSize: 16 }}>Budget by Category</h3>
              <button className="text-[#00342b] font-semibold" style={{ fontSize: 12 }}>Edit</button>
            </div>
            <div className="flex flex-col gap-4">
              {budgetCategories.map((cat) => {
                const pct = Math.round((cat.spent / cat.budget) * 100);
                const over = pct >= 95;
                return (
                  <div key={cat.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: cat.color === "#00342b" ? "#00342b" : cat.color }} />
                        <span className="text-[#191c1d] font-semibold" style={{ fontSize: 13 }}>{cat.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`font-semibold ${over ? "text-[#ef4444]" : "text-[#3f4945]"}`} style={{ fontSize: 12 }}>
                          ${cat.spent} / ${cat.budget}
                        </span>
                        <span className={`font-bold ${over ? "text-[#ef4444]" : "text-[#191c1d]"}`} style={{ fontSize: 12 }}>
                          {pct}%
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-[#f2f4f4] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${Math.min(pct, 100)}%`,
                          backgroundColor: over ? "#ef4444" : "#00342b"
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Portfolio chart */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#191c1d] font-bold" style={{ fontSize: 16 }}>Savings Growth</h3>
              <span className="text-[#217128] bg-[#dcfce7] rounded-full px-3 py-1 font-semibold flex items-center gap-1" style={{ fontSize: 12 }}>
                <TrendingUp size={13} />
                +34.8%
              </span>
            </div>
            <div className="h-44">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={portfolioData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00342b" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#00342b" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#707975" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "#707975" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="value" stroke="#00342b" strokeWidth={2} fill="url(#savingsGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right: Savings Goals */}
        <div className="lg:w-80 flex flex-col gap-4">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[#191c1d] font-bold" style={{ fontSize: 16 }}>Savings Goals</h3>
              <button className="text-[#00342b] font-semibold" style={{ fontSize: 12 }}>+ New Goal</button>
            </div>
            <div className="flex flex-col gap-5">
              {savingsGoals.map((goal) => {
                const pct = Math.round((goal.saved / goal.target) * 100);
                return (
                  <div key={goal.id} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${goal.color}22` }}>
                          <Target size={15} style={{ color: goal.color }} />
                        </div>
                        <span className="text-[#191c1d] font-semibold" style={{ fontSize: 14 }}>{goal.name}</span>
                      </div>
                      <span className="text-[#00342b] font-bold" style={{ fontSize: 13 }}>{pct}%</span>
                    </div>
                    <div className="h-2.5 bg-[#f2f4f4] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${pct}%`, backgroundColor: goal.color }}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#707975] font-normal" style={{ fontSize: 12 }}>
                        ${goal.saved.toLocaleString()} saved
                      </span>
                      <span className="text-[#707975] font-normal" style={{ fontSize: 12 }}>
                        ${goal.target.toLocaleString()} goal
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tips card */}
          <div className="bg-[#f0fdf4] rounded-xl p-5 border border-[#bbf7d0]">
            <h4 className="text-[#166534] font-bold mb-2" style={{ fontSize: 14 }}>💡 Budget Tip</h4>
            <p className="text-[#166534] font-normal" style={{ fontSize: 13, lineHeight: "20px" }}>
              You're on track! Your housing budget is 92% spent. Consider reviewing discretionary spending to stay within budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
