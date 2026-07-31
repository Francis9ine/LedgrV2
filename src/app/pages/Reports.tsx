import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from "recharts";
import { financialSummary } from "../data/mockData";

const monthlyData = [
  { month: "Jan", income: 6800, expenses: 4200 },
  { month: "Feb", income: 6800, expenses: 3800 },
  { month: "Mar", income: 7200, expenses: 4500 },
  { month: "Apr", income: 6800, expenses: 3600 },
  { month: "May", income: 8000, expenses: 3900 },
  { month: "Jun", income: 6800, expenses: 4100 },
  { month: "Jul", income: 8000, expenses: 3120 },
];

export function Reports() {
  return (
    <div className="p-6 flex flex-col gap-6 max-w-screen-xl" style={{ fontFamily: "Manrope, sans-serif" }}>
      <div>
        <h1 className="text-[#191c1d] font-bold" style={{ fontSize: 24 }}>Reports</h1>
        <p className="text-[#3f4945] font-normal mt-1" style={{ fontSize: 14 }}>
          Detailed financial analysis and spending reports.
        </p>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total Income (YTD)", value: "$50,400", color: "text-[#217128]" },
          { label: "Total Expenses (YTD)", value: "$27,220", color: "text-[#ef4444]" },
          { label: "Net Savings (YTD)", value: "$23,180", color: "text-[#00342b]" },
          { label: "Savings Rate", value: "46%", color: "text-[#00342b]" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm border border-[rgba(0,0,0,0.04)]">
            <p className="text-[#707975] font-semibold" style={{ fontSize: 11 }}>{stat.label}</p>
            <p className={`font-bold mt-1 ${stat.color}`} style={{ fontSize: 20 }}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[rgba(0,0,0,0.04)] flex-1">
          <h3 className="text-[#191c1d] font-bold mb-4" style={{ fontSize: 16 }}>Income vs Expenses</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#707975" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#707975" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
                <Tooltip formatter={(val: number) => [`$${val.toLocaleString()}`, ""]} />
                <Legend />
                <Bar dataKey="income" name="Income" fill="#00342b" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expenses" name="Expenses" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-[rgba(0,0,0,0.04)] flex-1">
          <h3 className="text-[#191c1d] font-bold mb-4" style={{ fontSize: 16 }}>Net Savings Trend</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#707975" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#707975" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
                <Tooltip />
                <Line type="monotone" dataKey="income" name="Income" stroke="#00342b" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="expenses" name="Expenses" stroke="#ef4444" strokeWidth={2} dot={false} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
