
import React, { useState } from 'react';
import Login from './views/Login';
import LoadBoard from './views/LoadBoard';
import Dashboard from './views/Dashboard';
import PostTruck from './views/PostTruck';
import Settings from './views/Settings';
import { Truck, Grid, Settings as SettingsIcon, Bell, LogOut, User, LayoutDashboard, Search, PlusCircle } from 'lucide-react';
import { APP_NAME } from './constants';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-black text-slate-200 font-sans flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-16 md:w-64 bg-dark-900 border-r border-slate-800 flex-shrink-0 flex flex-col transition-all duration-300">
        <div className="h-16 flex items-center justify-center md:justify-start md:px-6 border-b border-slate-800">
          <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.5)]">
            <Truck className="text-white h-5 w-5" />
          </div>
          <span className="ml-3 font-bold text-lg text-white tracking-tight hidden md:block">{APP_NAME}</span>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <SidebarItem 
            icon={<LayoutDashboard size={20} />} 
            label="Dashboard" 
            active={activeTab === 'dashboard'} 
            onClick={() => setActiveTab('dashboard')}
          />
          <SidebarItem 
            icon={<Search size={20} />} 
            label="Find Loads" 
            active={activeTab === 'board'} 
            onClick={() => setActiveTab('board')}
          />
          <SidebarItem 
            icon={<PlusCircle size={20} />} 
            label="Post Truck" 
            active={activeTab === 'post-truck'} 
            onClick={() => setActiveTab('post-truck')}
          />
          <SidebarItem 
            icon={<Truck size={20} />} 
            label="My Capacity" 
            active={activeTab === 'my-loads'} 
            onClick={() => setActiveTab('my-loads')}
          />
          <SidebarItem 
            icon={<Bell size={20} />} 
            label="Alerts" 
            active={activeTab === 'alerts'} 
            onClick={() => setActiveTab('alerts')}
            badge="3"
          />
          <SidebarItem 
            icon={<SettingsIcon size={20} />} 
            label="Settings" 
            active={activeTab === 'settings'} 
            onClick={() => setActiveTab('settings')}
          />
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 md:px-2">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300">
               <User size={16} />
            </div>
            <div className="hidden md:block overflow-hidden">
              <p className="text-sm font-medium text-white truncate">Demo User</p>
              <p className="text-xs text-slate-500 truncate">Carrier One</p>
            </div>
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="ml-auto text-slate-500 hover:text-white"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-black">
        {/* Header - Mobile Only mostly */}
        <header className="md:hidden h-16 border-b border-slate-800 flex items-center px-4 bg-dark-900 justify-between flex-shrink-0">
           <div className="flex items-center gap-2">
             <Truck className="text-brand-500" />
             <span className="font-bold text-white">{APP_NAME}</span>
           </div>
           <button 
             className="text-slate-400"
             onClick={() => setActiveTab('dashboard')}
           >
             <Grid />
           </button>
        </header>

        {/* Content View */}
        <div className="flex-1 relative overflow-hidden flex flex-col">
          {activeTab === 'dashboard' && <Dashboard onNavigate={setActiveTab} />}
          {activeTab === 'board' && <LoadBoard />}
          {activeTab === 'post-truck' && <PostTruck />}
          {activeTab === 'settings' && <Settings />}
          {activeTab !== 'dashboard' && activeTab !== 'board' && activeTab !== 'post-truck' && activeTab !== 'settings' && (
             <div className="flex items-center justify-center h-full text-slate-500 flex-col">
                <SettingsIcon size={48} className="mb-4 opacity-20" />
                <p>Module under construction</p>
             </div>
          )}
        </div>
      </main>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
  badge?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, onClick, badge }) => {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 group ${
        active 
          ? 'bg-brand-500/10 text-brand-400' 
          : 'text-slate-400 hover:text-white hover:bg-white/5'
      }`}
    >
      <span className={`${active ? 'text-brand-400' : 'text-slate-400 group-hover:text-white'}`}>
        {icon}
      </span>
      <span className="ml-3 font-medium text-sm hidden md:block">{label}</span>
      {badge && (
        <span className="ml-auto bg-brand-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full hidden md:inline-block">
          {badge}
        </span>
      )}
    </button>
  );
};

export default App;
