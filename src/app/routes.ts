import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { VerifyEmail } from "./pages/VerifyEmail";
import { Dashboard } from "./pages/Dashboard";
import { Transactions } from "./pages/Transactions";
import { BudgetGoals } from "./pages/BudgetGoals";
import { Investments } from "./pages/Investments";
import { Settings } from "./pages/Settings";
import { HelpSupport } from "./pages/HelpSupport";
import { Accounts } from "./pages/Accounts";
import { Reports } from "./pages/Reports";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Login,
  },
  {
    path: "/verify",
    Component: VerifyEmail,
  },
  {
    path: "/app",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "dashboard", Component: Dashboard },
      { path: "accounts", Component: Accounts },
      { path: "transactions", Component: Transactions },
      { path: "reports", Component: Reports },
      { path: "budget", Component: BudgetGoals },
      { path: "investments", Component: Investments },
      { path: "settings", Component: Settings },
      { path: "help", Component: HelpSupport },
    ],
  },
]);
