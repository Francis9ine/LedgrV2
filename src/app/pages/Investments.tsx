import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown, Eye, Star } from "lucide-react";
import { investmentData, investmentPositions, watchlist, assetAllocation } from "../data/mockData";

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

const totalPortfolioValue = investmentPositions.reduce((s, p) => s + p.value, 0);

export function Investments() {
  return (
    <div className="p-6 flex flex-col gap-6 max-w-screen-xl" style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#191c1d] font-bold" style={{ fontSize: 24 }}>Investments</h1>
          <p className="text-[#3f4945] font-normal mt-1" style={{ fontSize: 14 }}>
            Monitor your portfolio performance and track market positions.
          </p>
        </div>
        <button className="bg-[#00342b] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#004d3f] transition-colors hidden sm:flex items-center gap-2" style={{ fontSize: 13 }}>
          <TrendingUp size={15} />
          Add Position
        </button>
      </div>

      {/* Portfolio value + chart */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-[rgba(0,0,0,0.04)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div>
            <p className="text-[#3f4945] font-semibold" style={{ fontSize: 13 }}>Total Portfolio Value</p>
            <p className="text-[#191c1d] font-bold mt-1" style={{ fontSize: 32, lineHeight: "40px" }}>
              ${totalPortfolioValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </p>
            <div className="flex items-center gap-1 mt-1 text-[#217128]">
              <TrendingUp size={14} />
              <span className="font-semibold" style={{ fontSize: 13 }}>+$4,820.40 (+47.8%) all time</span>
            </div>
          </div>
          <div className="flex gap-2">
            {["1W", "1M", "3M", "6M", "1Y", "All"].map((period, i) => (
              <button
                key={period}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${i === 4 ? "bg-[#00342b] text-white" : "text-[#3f4945] hover:bg-[#f2f4f4]"}`}
                style={{ fontSize: 12 }}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={investmentData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="investGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00342b" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#00342b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#707975" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#707975" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="value" stroke="#00342b" strokeWidth={2.5} fill="url(#investGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Positions + Watchlist + Allocation */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Positions table */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-white rounded-xl shadow-sm border border-[rgba(0,0,0,0.04)] overflow-hidden">
            <div className="px-5 py-4 border-b border-[#f2f4f4]">
              <h3 className="text-[#191c1d] font-bold" style={{ fontSize: 15 }}>My Positions</h3>
            </div>
            {/* Table header */}
            <div className="hidden sm:grid grid-cols-5 px-5 py-2.5 bg-[#f8fafa] text-[#707975] font-semibold" style={{ fontSize: 11 }}>
              <span className="col-span-2">Asset</span>
              <span className="text-right">Price</span>
              <span className="text-right">Value</span>
              <span className="text-right">Change</span>
            </div>
            <div className="divide-y divide-[#f2f4f4]">
              {investmentPositions.map((pos) => (
                <div key={pos.symbol} className="grid grid-cols-2 sm:grid-cols-5 gap-y-1 px-5 py-3.5 hover:bg-[#f8fafa] transition-colors items-center">
                  <div className="col-span-1 sm:col-span-2 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white flex-shrink-0" style={{ backgroundColor: "#00342b", fontSize: 12 }}>
                      {pos.symbol.slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-[#191c1d] font-bold" style={{ fontSize: 13 }}>{pos.symbol}</p>
                      <p className="text-[#707975] font-normal hidden sm:block" style={{ fontSize: 11 }}>{pos.shares} shares</p>
                    </div>
                  </div>
                  <div className="text-right sm:block">
                    <p className="text-[#191c1d] font-semibold" style={{ fontSize: 13 }}>${pos.price.toFixed(2)}</p>
                    <p className="text-[#707975] font-normal sm:hidden" style={{ fontSize: 11 }}>{pos.shares} shares</p>
                  </div>
                  <div className="text-right hidden sm:block">
                    <p className="text-[#191c1d] font-bold" style={{ fontSize: 13 }}>${pos.value.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
                  </div>
                  <div className="text-right hidden sm:block">
                    <p className={`font-bold ${pos.change >= 0 ? "text-[#217128]" : "text-[#ef4444]"}`} style={{ fontSize: 13 }}>
                      {pos.change >= 0 ? "+" : ""}{pos.changePercent.toFixed(2)}%
                    </p>
                    <p className={`font-normal ${pos.change >= 0 ? "text-[#217128]" : "text-[#ef4444]"}`} style={{ fontSize: 11 }}>
                      {pos.change >= 0 ? "+" : ""}${pos.change.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Watchlist + Allocation */}
        <div className="lg:w-72 flex flex-col gap-4">
          {/* Watchlist */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#191c1d] font-bold" style={{ fontSize: 15 }}>Watchlist</h3>
              <button className="text-[#00342b] font-semibold" style={{ fontSize: 12 }}>+ Add</button>
            </div>
            <div className="flex flex-col gap-3">
              {watchlist.map((stock) => (
                <div key={stock.symbol} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star size={14} className="text-[#f59e0b]" fill="#f59e0b" />
                    <div>
                      <p className="text-[#191c1d] font-bold" style={{ fontSize: 13 }}>{stock.symbol}</p>
                      <p className="text-[#707975] font-normal" style={{ fontSize: 11 }}>{stock.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[#191c1d] font-semibold" style={{ fontSize: 13 }}>${stock.price.toFixed(2)}</p>
                    <p className={`font-semibold ${stock.change >= 0 ? "text-[#217128]" : "text-[#ef4444]"}`} style={{ fontSize: 11 }}>
                      {stock.change >= 0 ? "+" : ""}{stock.changePercent.toFixed(2)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Asset Allocation */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[rgba(0,0,0,0.04)]">
            <h3 className="text-[#191c1d] font-bold mb-4" style={{ fontSize: 15 }}>Asset Allocation</h3>
            <div className="flex flex-col gap-3">
              {assetAllocation.map((asset) => (
                <div key={asset.name}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: asset.color === "#d1fae5" ? "#86efac" : asset.color }} />
                      <span className="text-[#3f4945] font-semibold" style={{ fontSize: 12 }}>{asset.name}</span>
                    </div>
                    <span className="text-[#191c1d] font-bold" style={{ fontSize: 12 }}>{asset.percentage}%</span>
                  </div>
                  <div className="h-1.5 bg-[#f2f4f4] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${asset.percentage}%`,
                        backgroundColor: asset.color === "#d1fae5" ? "#86efac" : asset.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
