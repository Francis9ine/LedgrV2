import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown, Wallet, PiggyBank, CreditCard, ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react";
import { financialSummary, portfolioData, transactions, user } from "../data/mockData";

function StatCard({
  title,
  value,
  change,
  icon: Icon,
  iconBg,
  positive,
}: {
  title: string;
  value: string;
  change: number;
  icon: React.ElementType;
  iconBg: string;
  positive: boolean;
}) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col gap-3 flex-1 min-w-0 border border-[rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between">
        <span className="text-[#3f4945] font-semibold" style={{ fontSize: 13 }}>{title}</span>
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${iconBg}`}>
          <Icon size={18} className="text-white" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[#191c1d] font-bold" style={{ fontSize: 24, lineHeight: "32px" }}>{value}</span>
        <div className={`flex items-center gap-1 ${positive ? "text-[#217128]" : "text-[#ef4444]"}`}>
          {positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          <span className="font-semibold" style={{ fontSize: 12 }}>
            {positive ? "+" : ""}{change}% this month
          </span>
        </div>
      </div>
    </div>
  );
}

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

function getHourGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

export function Dashboard() {
  const recentTransactions = transactions.slice(0, 5);

  return (
    <div className="p-6 flex flex-col gap-6 max-w-screen-xl" style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#191c1d] font-bold" style={{ fontSize: 24, lineHeight: "32px" }}>
            {getHourGreeting()}, {user.name} 👋
          </h1>
          <p className="text-[#3f4945] font-normal mt-1" style={{ fontSize: 14 }}>
            Here's what's happening with your finances today.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#00342b] flex items-center justify-center text-white font-bold" style={{ fontSize: 14 }}>
            {user.name[0]}
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="flex flex-col sm:flex-row gap-4">
        <StatCard
          title="Total Balance"
          value={`$${financialSummary.totalBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
          change={financialSummary.balanceChange}
          icon={Wallet}
          iconBg="bg-[#00342b]"
          positive={true}
        />
        <StatCard
          title="Total Savings"
          value={`$${financialSummary.savings.toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
          change={financialSummary.savingsChange}
          icon={PiggyBank}
          iconBg="bg-[#217128]"
          positive={true}
        />
        <StatCard
          title="Monthly Expenses"
          value={`$${financialSummary.expenses.toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
          change={financialSummary.expensesChange}
          icon={CreditCard}
          iconBg="bg-[#ef4444]"
          positive={false}
        />
      </div>

      {/* Charts + Transactions row */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Portfolio Chart */}
        <div className="bg-white rounded-xl p-5 shadow-sm flex-1 border border-[rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-[#191c1d] font-bold" style={{ fontSize: 16 }}>Portfolio Overview</h3>
              <p className="text-[#3f4945] font-normal" style={{ fontSize: 12 }}>12-month performance</p>
            </div>
            <div className="flex items-center gap-1 text-[#217128] bg-[#dcfce7] rounded-full px-3 py-1">
              <TrendingUp size={14} />
              <span className="font-semibold" style={{ fontSize: 12 }}>+34.8%</span>
            </div>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={portfolioData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00342b" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#00342b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#707975" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#707975" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="value" stroke="#00342b" strokeWidth={2} fill="url(#portfolioGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-xl p-5 shadow-sm lg:w-80 border border-[rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#191c1d] font-bold" style={{ fontSize: 16 }}>Recent Transactions</h3>
            <button className="text-[#00342b] font-semibold" style={{ fontSize: 12 }}>View All</button>
          </div>
          <div className="flex flex-col gap-3">
            {recentTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    tx.type === "income" ? "bg-[#dcfce7]" : "bg-[#fef2f2]"
                  }`}
                >
                  {tx.type === "income" ? (
                    <ArrowUpRight size={16} className="text-[#217128]" />
                  ) : (
                    <ArrowDownRight size={16} className="text-[#ef4444]" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#191c1d] font-semibold truncate" style={{ fontSize: 13 }}>{tx.name}</p>
                  <p className="text-[#707975] font-normal" style={{ fontSize: 11 }}>{tx.category}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p
                    className={`font-bold ${tx.type === "income" ? "text-[#217128]" : "text-[#191c1d]"}`}
                    style={{ fontSize: 13 }}
                  >
                    {tx.type === "income" ? "+" : ""}${Math.abs(tx.amount).toFixed(2)}
                  </p>
                  <p className="text-[#707975] font-normal" style={{ fontSize: 11 }}>{tx.date.split(",")[0]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
