export const user = {
  name: "Francis",
  email: "francis.miller@example.com",
  phone: "+1 (555) 234-5678",
  avatar: null,
  memberSince: "January 2023",
  plan: "Premium",
};

export const financialSummary = {
  totalBalance: 24563.00,
  savings: 8240.00,
  expenses: 3120.00,
  income: 6800.00,
  balanceChange: +2.4,
  savingsChange: +5.1,
  expensesChange: -1.8,
};

export const portfolioData = [
  { month: "Jan", value: 18200 },
  { month: "Feb", value: 19100 },
  { month: "Mar", value: 17800 },
  { month: "Apr", value: 20500 },
  { month: "May", value: 21200 },
  { month: "Jun", value: 22800 },
  { month: "Jul", value: 21500 },
  { month: "Aug", value: 23100 },
  { month: "Sep", value: 22400 },
  { month: "Oct", value: 24000 },
  { month: "Nov", value: 23600 },
  { month: "Dec", value: 24563 },
];

export const investmentData = [
  { month: "Jan", value: 12400 },
  { month: "Feb", value: 13100 },
  { month: "Mar", value: 12600 },
  { month: "Apr", value: 14200 },
  { month: "May", value: 14800 },
  { month: "Jun", value: 15600 },
  { month: "Jul", value: 14900 },
  { month: "Aug", value: 16200 },
  { month: "Sep", value: 15800 },
  { month: "Oct", value: 17100 },
  { month: "Nov", value: 16700 },
  { month: "Dec", value: 18340 },
];

export type Transaction = {
  id: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  type: "income" | "expense";
  icon: string;
};

export const transactions: Transaction[] = [
  { id: "1", name: "Salary Deposit", category: "Income", date: "Jul 31, 2026", amount: 6800.00, type: "income", icon: "briefcase" },
  { id: "2", name: "Whole Foods Market", category: "Food & Groceries", date: "Jul 30, 2026", amount: -124.50, type: "expense", icon: "shopping-cart" },
  { id: "3", name: "Netflix", category: "Entertainment", date: "Jul 29, 2026", amount: -15.99, type: "expense", icon: "tv" },
  { id: "4", name: "Shell Gas Station", category: "Transport", date: "Jul 28, 2026", amount: -68.40, type: "expense", icon: "car" },
  { id: "5", name: "Freelance Payment", category: "Income", date: "Jul 27, 2026", amount: 1200.00, type: "income", icon: "briefcase" },
  { id: "6", name: "Rent Payment", category: "Housing", date: "Jul 25, 2026", amount: -1850.00, type: "expense", icon: "home" },
  { id: "7", name: "Amazon", category: "Shopping", date: "Jul 24, 2026", amount: -87.32, type: "expense", icon: "package" },
  { id: "8", name: "Gym Membership", category: "Health & Fitness", date: "Jul 23, 2026", amount: -45.00, type: "expense", icon: "activity" },
  { id: "9", name: "Uber", category: "Transport", date: "Jul 22, 2026", amount: -24.10, type: "expense", icon: "car" },
  { id: "10", name: "Starbucks", category: "Food & Groceries", date: "Jul 21, 2026", amount: -8.75, type: "expense", icon: "coffee" },
  { id: "11", name: "Electric Bill", category: "Utilities", date: "Jul 20, 2026", amount: -112.00, type: "expense", icon: "zap" },
  { id: "12", name: "Spotify", category: "Entertainment", date: "Jul 19, 2026", amount: -9.99, type: "expense", icon: "music" },
  { id: "13", name: "Dividend Income", category: "Investments", date: "Jul 18, 2026", amount: 340.00, type: "income", icon: "trending-up" },
  { id: "14", name: "H&M", category: "Shopping", date: "Jul 17, 2026", amount: -156.20, type: "expense", icon: "shopping-bag" },
  { id: "15", name: "Doctor Visit", category: "Health & Fitness", date: "Jul 16, 2026", amount: -75.00, type: "expense", icon: "heart" },
  { id: "16", name: "Internet Bill", category: "Utilities", date: "Jul 15, 2026", amount: -59.99, type: "expense", icon: "wifi" },
  { id: "17", name: "Restaurant Dinner", category: "Food & Groceries", date: "Jul 14, 2026", amount: -92.40, type: "expense", icon: "utensils" },
  { id: "18", name: "Apple App Store", category: "Entertainment", date: "Jul 13, 2026", amount: -4.99, type: "expense", icon: "smartphone" },
];

export const budgetCategories = [
  { name: "Housing", budget: 2000, spent: 1850, color: "#00342b" },
  { name: "Food & Groceries", budget: 600, spent: 456, color: "#217128" },
  { name: "Transport", budget: 300, spent: 248, color: "#4ade80" },
  { name: "Entertainment", budget: 200, spent: 154, color: "#86efac" },
  { name: "Health & Fitness", budget: 150, spent: 120, color: "#a7f3d0" },
  { name: "Shopping", budget: 400, spent: 387, color: "#d1fae5" },
  { name: "Utilities", budget: 250, spent: 172, color: "#ecfdf5" },
];

export const savingsGoals = [
  { id: "1", name: "Emergency Fund", target: 10000, saved: 8240, icon: "shield", color: "#00342b" },
  { id: "2", name: "Vacation - Italy", target: 5000, saved: 2100, icon: "plane", color: "#217128" },
  { id: "3", name: "New MacBook", target: 2500, saved: 1750, icon: "laptop", color: "#4ade80" },
];

export const investmentPositions = [
  { symbol: "AAPL", name: "Apple Inc.", shares: 15, price: 194.50, value: 2917.50, change: +2.34, changePercent: +1.22, color: "#00342b" },
  { symbol: "MSFT", name: "Microsoft Corp.", shares: 8, price: 412.80, value: 3302.40, change: +5.60, changePercent: +1.37, color: "#217128" },
  { symbol: "GOOGL", name: "Alphabet Inc.", shares: 5, price: 178.20, value: 891.00, change: -1.30, changePercent: -0.72, color: "#4ade80" },
  { symbol: "AMZN", name: "Amazon.com Inc.", shares: 12, price: 195.70, value: 2348.40, change: +3.10, changePercent: +1.61, color: "#86efac" },
  { symbol: "NVDA", name: "NVIDIA Corp.", shares: 6, price: 875.40, value: 5252.40, change: +15.20, changePercent: +1.77, color: "#a7f3d0" },
  { symbol: "TSLA", name: "Tesla Inc.", shares: 10, price: 162.30, value: 1623.00, change: -4.50, changePercent: -2.70, color: "#d1fae5" },
];

export const watchlist = [
  { symbol: "META", name: "Meta Platforms", price: 524.30, change: +8.40, changePercent: +1.63 },
  { symbol: "NFLX", name: "Netflix Inc.", price: 682.10, change: -3.20, changePercent: -0.47 },
  { symbol: "BRK.B", name: "Berkshire Hathaway", price: 412.50, change: +1.80, changePercent: +0.44 },
  { symbol: "JPM", name: "JPMorgan Chase", price: 234.60, change: +2.10, changePercent: +0.90 },
];

export const assetAllocation = [
  { name: "Technology", percentage: 45, color: "#00342b" },
  { name: "Consumer Goods", percentage: 20, color: "#217128" },
  { name: "Healthcare", percentage: 15, color: "#4ade80" },
  { name: "Finance", percentage: 12, color: "#86efac" },
  { name: "Other", percentage: 8, color: "#d1fae5" },
];

export const categoryBreakdown = [
  { name: "Food & Groceries", amount: 456, percentage: 25, color: "#00342b" },
  { name: "Housing", amount: 1850, percentage: 40, color: "#217128" },
  { name: "Transport", amount: 248, percentage: 13, color: "#4ade80" },
  { name: "Entertainment", amount: 154, percentage: 8, color: "#86efac" },
  { name: "Other", amount: 412, percentage: 14, color: "#d1fae5" },
];

export const faqCategories = [
  {
    id: "1",
    title: "Getting Started",
    icon: "play-circle",
    count: 8,
    questions: [
      { q: "How do I create an account?", a: "Click 'Get Started' on the landing page and fill in your details. You'll receive a verification email to complete your registration." },
      { q: "How do I link my bank account?", a: "Navigate to Settings or use the 'Link Account' button in the sidebar. We support over 10,000 financial institutions via secure Plaid integration." },
      { q: "Is my financial data secure?", a: "Yes. We use bank-level 256-bit AES encryption and are SOC 2 Type II certified. We never store your banking credentials." },
    ]
  },
  {
    id: "2",
    title: "Transactions",
    icon: "list",
    count: 12,
    questions: [
      { q: "Why is a transaction missing?", a: "Transactions may take 1-3 business days to appear. Try refreshing your account or manually syncing from the Transactions page." },
      { q: "Can I edit transaction categories?", a: "Yes. Click on any transaction and select 'Edit Category' to reassign it. Changes will be reflected in your budget breakdowns." },
      { q: "How do I export my transactions?", a: "Go to Transactions → Export and choose CSV or PDF format. You can filter by date range before exporting." },
    ]
  },
  {
    id: "3",
    title: "Budgeting",
    icon: "pie-chart",
    count: 9,
    questions: [
      { q: "How do I set a budget?", a: "Go to Budget & Goals, click 'Adjust Budget', and set monthly limits for each spending category." },
      { q: "What happens when I exceed a budget?", a: "You'll receive a notification when you reach 80% and 100% of any budget category limit." },
    ]
  },
  {
    id: "4",
    title: "Investments",
    icon: "trending-up",
    count: 6,
    questions: [
      { q: "How is my portfolio value calculated?", a: "Portfolio value reflects real-time market prices multiplied by your share quantities. Values update every 15 minutes during market hours." },
      { q: "Can I add manual investment accounts?", a: "Yes. Use 'Link Account' to add brokerage accounts, or manually add positions in the Investments section." },
    ]
  },
  {
    id: "5",
    title: "Account & Billing",
    icon: "credit-card",
    count: 7,
    questions: [
      { q: "How do I change my password?", a: "Go to Settings → Security → Change Password. You'll need to verify your current password first." },
      { q: "How do I cancel my subscription?", a: "Go to Settings → Account → Subscription and click 'Cancel Plan'. Your access continues until the end of the billing period." },
    ]
  },
];
