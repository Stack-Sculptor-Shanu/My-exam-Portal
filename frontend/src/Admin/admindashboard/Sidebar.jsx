import React from 'react';
import {
  BarChart3,
  UsersIcon,
  ClipboardList,
  FileText,
  Sliders,
  HelpCircle,
} from 'lucide-react';

const menuItems = [
  { key: 'overview', label: 'Dashboard Overview', icon: <BarChart3 size={20} /> },
  { key: 'users', label: 'User Management', icon: <UsersIcon size={20} /> },
  { key: 'exams', label: 'Exam Management', icon: <ClipboardList size={20} /> },
  { key: 'results', label: 'Results & Reports', icon: <FileText size={20} /> },
  { key: 'settings', label: 'Settings', icon: <Sliders size={20} /> },
  { key: 'support', label: 'Support & Help', icon: <HelpCircle size={20} /> },
];

export default function Sidebar({ setActiveSection }) {
  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-4 space-y-7 border-r border-gray-200 dark:border-gray-700 transition-colors">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>
      {menuItems.map(item => (
        <button
          key={item.key}
          onClick={() => setActiveSection(item.key)}
          className="flex items-center space-x-4 w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
        >
          {item.icon}
          <span className="text-sm font-medium">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
