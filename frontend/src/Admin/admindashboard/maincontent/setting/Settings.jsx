import React, { useEffect, useState } from 'react';

export default function Settings() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] p-4 bg-transparent">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Theme Settings
        </h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setTheme('light')}
            className={`px-6 py-2 rounded-lg font-medium border transition ${
              theme === 'light'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300'
            }`}
          >
            Light
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`px-6 py-2 rounded-lg font-medium border transition ${
              theme === 'dark'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300'
            }`}
          >
            Dark
          </button>
        </div>
      </div>
    </div>
  );
}
