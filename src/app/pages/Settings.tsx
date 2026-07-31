import { useState } from "react";
import { Search, User, Lock, Bell, BarChart2, Sliders, ChevronRight, Camera, Shield, Smartphone } from "lucide-react";
import { user } from "../data/mockData";

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${checked ? "bg-[#00342b]" : "bg-[#d1d5db]"}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm ${checked ? "translate-x-6" : "translate-x-1"}`}
      />
    </button>
  );
}

type SettingsSection = "account" | "personal" | "security" | "notifications";

export function Settings() {
  const [activeSection, setActiveSection] = useState<SettingsSection>("account");
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    pushNotifications: true,
    weeklyDigest: true,
    budgetAlerts: true,
    transactionAlerts: false,
    investmentUpdates: true,
  });
  const [preferences, setPreferences] = useState({
    darkMode: false,
    compactView: false,
    showBalances: true,
    twoFactor: true,
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };
  const togglePref = (key: keyof typeof preferences) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const sections = [
    { id: "account" as SettingsSection, label: "Account Info", icon: User },
    { id: "personal" as SettingsSection, label: "Personal Information", icon: User },
    { id: "security" as SettingsSection, label: "Security", icon: Shield },
    { id: "notifications" as SettingsSection, label: "Notifications", icon: Bell },
  ];

  const filteredSections = sections.filter(s =>
    s.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 flex flex-col gap-6 max-w-screen-xl" style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* Header */}
      <div>
        <h1 className="text-[#191c1d] font-bold" style={{ fontSize: 24 }}>Settings</h1>
        <p className="text-[#3f4945] font-normal mt-1" style={{ fontSize: 14 }}>
          Manage your account preferences and security settings.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left sidebar nav */}
        <div className="lg:w-64 flex flex-col gap-3">
          {/* Search */}
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#707975]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search settings..."
              className="w-full h-9 bg-[#f2f4f4] border border-[#bfc9c4] rounded-full pl-9 pr-4 text-[#191c1d] placeholder-[#707975] outline-none focus:border-[#00342b] transition-all"
              style={{ fontSize: 13 }}
            />
          </div>

          {/* Profile summary */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-[rgba(0,0,0,0.04)] flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#00342b] flex items-center justify-center text-white font-bold flex-shrink-0" style={{ fontSize: 18 }}>
              {user.name[0]}
            </div>
            <div className="min-w-0">
              <p className="text-[#191c1d] font-bold truncate" style={{ fontSize: 14 }}>{user.name}</p>
              <p className="text-[#707975] font-normal truncate" style={{ fontSize: 12 }}>{user.plan} Plan</p>
            </div>
          </div>

          {/* Section nav */}
          <div className="bg-white rounded-xl shadow-sm border border-[rgba(0,0,0,0.04)] overflow-hidden">
            {filteredSections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 transition-colors border-b border-[#f2f4f4] last:border-0 ${
                    activeSection === section.id
                      ? "bg-[#a0f399] bg-opacity-50 text-[#217128]"
                      : "text-[#3f4945] hover:bg-[#f8fafa]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={16} className={activeSection === section.id ? "text-[#217128]" : "text-[#3f4945]"} />
                    <span className="font-semibold" style={{ fontSize: 13 }}>{section.label}</span>
                  </div>
                  <ChevronRight size={14} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Account Info */}
          {activeSection === "account" && (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[rgba(0,0,0,0.04)]">
              <h2 className="text-[#191c1d] font-bold mb-6" style={{ fontSize: 18 }}>Account Information</h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6 pb-6 border-b border-[#f2f4f4]">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-[#00342b] flex items-center justify-center text-white font-bold" style={{ fontSize: 28 }}>
                    {user.name[0]}
                  </div>
                  <button className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#00342b] flex items-center justify-center border-2 border-white">
                    <Camera size={12} className="text-white" />
                  </button>
                </div>
                <div>
                  <p className="text-[#191c1d] font-bold" style={{ fontSize: 18 }}>{user.name}</p>
                  <p className="text-[#707975] font-normal" style={{ fontSize: 13 }}>{user.email}</p>
                  <span className="mt-1 inline-block bg-[#dcfce7] text-[#217128] font-semibold px-3 py-0.5 rounded-full" style={{ fontSize: 11 }}>
                    {user.plan}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Full Name", value: user.name },
                  { label: "Email Address", value: user.email },
                  { label: "Phone Number", value: user.phone },
                  { label: "Member Since", value: user.memberSince },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <label className="text-[#707975] font-semibold" style={{ fontSize: 11 }}>{item.label}</label>
                    <p className="text-[#191c1d] font-semibold" style={{ fontSize: 14 }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Personal Information */}
          {activeSection === "personal" && (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[rgba(0,0,0,0.04)]">
              <h2 className="text-[#191c1d] font-bold mb-6" style={{ fontSize: 18 }}>Personal Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { label: "First Name", value: "Francis", type: "text" },
                  { label: "Last Name", value: "Miller", type: "text" },
                  { label: "Email Address", value: user.email, type: "email" },
                  { label: "Phone Number", value: user.phone, type: "tel" },
                  { label: "Date of Birth", value: "March 15, 1990", type: "text" },
                  { label: "Country", value: "United States", type: "text" },
                ].map((field) => (
                  <div key={field.label} className="flex flex-col gap-1.5">
                    <label className="text-[#191c1d] font-semibold" style={{ fontSize: 13 }}>{field.label}</label>
                    <input
                      type={field.type}
                      defaultValue={field.value}
                      className="h-10 bg-[#f8fafa] border border-[#bfc9c4] rounded-lg px-3 text-[#191c1d] outline-none focus:border-[#00342b] focus:ring-2 focus:ring-[rgba(0,52,43,0.1)] transition-all"
                      style={{ fontSize: 13 }}
                    />
                  </div>
                ))}
              </div>
              <button className="mt-6 bg-[#00342b] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[#004d3f] transition-colors" style={{ fontSize: 13 }}>
                Save Changes
              </button>
            </div>
          )}

          {/* Security */}
          {activeSection === "security" && (
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[rgba(0,0,0,0.04)]">
                <h2 className="text-[#191c1d] font-bold mb-6" style={{ fontSize: 18 }}>Security Settings</h2>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between py-3 border-b border-[#f2f4f4]">
                    <div className="flex items-center gap-3">
                      <Lock size={18} className="text-[#3f4945]" />
                      <div>
                        <p className="text-[#191c1d] font-semibold" style={{ fontSize: 14 }}>Change Password</p>
                        <p className="text-[#707975] font-normal" style={{ fontSize: 12 }}>Last changed 3 months ago</p>
                      </div>
                    </div>
                    <button className="text-[#00342b] font-semibold border border-[#00342b] px-3 py-1.5 rounded-lg hover:bg-[#f0fdf4] transition-colors" style={{ fontSize: 12 }}>
                      Update
                    </button>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-[#f2f4f4]">
                    <div className="flex items-center gap-3">
                      <Smartphone size={18} className="text-[#3f4945]" />
                      <div>
                        <p className="text-[#191c1d] font-semibold" style={{ fontSize: 14 }}>Two-Factor Authentication</p>
                        <p className="text-[#707975] font-normal" style={{ fontSize: 12 }}>Add an extra layer of security</p>
                      </div>
                    </div>
                    <Toggle checked={preferences.twoFactor} onChange={() => togglePref("twoFactor")} />
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <Shield size={18} className="text-[#3f4945]" />
                      <div>
                        <p className="text-[#191c1d] font-semibold" style={{ fontSize: 14 }}>Active Sessions</p>
                        <p className="text-[#707975] font-normal" style={{ fontSize: 12 }}>2 active sessions</p>
                      </div>
                    </div>
                    <button className="text-[#ef4444] font-semibold border border-[#ef4444] px-3 py-1.5 rounded-lg hover:bg-[#fef2f2] transition-colors" style={{ fontSize: 12 }}>
                      Sign Out All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeSection === "notifications" && (
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[rgba(0,0,0,0.04)]">
                <h2 className="text-[#191c1d] font-bold mb-6" style={{ fontSize: 18 }}>Notifications</h2>
                <div className="flex flex-col gap-1">
                  {[
                    { key: "emailAlerts" as const, label: "Email Alerts", desc: "Receive important account updates via email" },
                    { key: "pushNotifications" as const, label: "Push Notifications", desc: "Get real-time alerts on your device" },
                    { key: "budgetAlerts" as const, label: "Budget Alerts", desc: "Notify when approaching budget limits" },
                    { key: "transactionAlerts" as const, label: "Transaction Alerts", desc: "Alert for every new transaction" },
                    { key: "investmentUpdates" as const, label: "Investment Updates", desc: "Daily portfolio performance summary" },
                  ].map(({ key, label, desc }) => (
                    <div key={key} className="flex items-center justify-between py-3.5 border-b border-[#f2f4f4] last:border-0">
                      <div>
                        <p className="text-[#191c1d] font-semibold" style={{ fontSize: 14 }}>{label}</p>
                        <p className="text-[#707975] font-normal" style={{ fontSize: 12 }}>{desc}</p>
                      </div>
                      <Toggle checked={notifications[key]} onChange={() => toggleNotification(key)} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Summary */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[rgba(0,0,0,0.04)]">
                <h2 className="text-[#191c1d] font-bold mb-4" style={{ fontSize: 18 }}>Weekly Summary</h2>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#191c1d] font-semibold" style={{ fontSize: 14 }}>Weekly Financial Digest</p>
                    <p className="text-[#707975] font-normal" style={{ fontSize: 12 }}>Receive a weekly overview of your finances every Monday</p>
                  </div>
                  <Toggle checked={notifications.weeklyDigest} onChange={() => toggleNotification("weeklyDigest")} />
                </div>
              </div>

              {/* Preferences */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[rgba(0,0,0,0.04)]">
                <h2 className="text-[#191c1d] font-bold mb-4" style={{ fontSize: 18 }}>Preferences</h2>
                <div className="flex flex-col gap-1">
                  {[
                    { key: "compactView" as const, label: "Compact View", desc: "Display more data with reduced spacing" },
                    { key: "showBalances" as const, label: "Show Balances", desc: "Show account balances on dashboard" },
                  ].map(({ key, label, desc }) => (
                    <div key={key} className="flex items-center justify-between py-3.5 border-b border-[#f2f4f4] last:border-0">
                      <div>
                        <p className="text-[#191c1d] font-semibold" style={{ fontSize: 14 }}>{label}</p>
                        <p className="text-[#707975] font-normal" style={{ fontSize: 12 }}>{desc}</p>
                      </div>
                      <Toggle checked={preferences[key]} onChange={() => togglePref(key)} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
