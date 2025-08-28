'use client';
import { useState } from 'react';

export default function Home() {
  const [isStockExpanded, setIsStockExpanded] = useState(false);

  const keyMetrics = [
    {
      id: 1,
      title: 'Total Products',
      value: '340',
      icon: (
        <svg
          className="w-7 h-7 text-blue-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="3" y="7" width="18" height="13" rx="2" ry="2" />
          <path d="M16 3v4M8 3v4M3 10h18" />
        </svg>
      ),
      color: 'from-blue-800 to-blue-900',
      change: '+12',
      changeType: 'positive',
    },
    {
      id: 2,
      title: 'News Published',
      value: '12',
      icon: (
        <svg
          className="w-7 h-7 text-green-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      color: 'from-green-800 to-green-900',
      change: '+3',
      changeType: 'positive',
    },
    {
      id: 3,
      title: 'Low Stock Alerts',
      value: '8',
      icon: (
        <svg
          className="w-7 h-7 text-yellow-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 9v2m0 4h.01M12 5.5v1" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
      color: 'from-yellow-800 to-yellow-900',
      change: '-2',
      changeType: 'negative',
    },
    {
      id: 4,
      title: "Today's Sales",
      value: '$2,450',
      icon: (
        <svg
          className="w-7 h-7 text-purple-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      color: 'from-purple-800 to-purple-900',
      change: '+15%',
      changeType: 'positive',
    },
  ];

  const recentNews = [
    {
      id: 1,
      title: 'COVID-19 Vaccine Drive – Register Now!',
      date: 'Jan 15, 2024',
      category: 'Health Alerts',
      urgent: true,
      icon: (
        <svg
          className="w-7 h-7 text-red-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2v20m-4-4h8" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'New Premium Skincare Line Arrival',
      date: 'Jan 14, 2024',
      category: 'New Products',
      urgent: false,
      icon: (
        <svg
          className="w-7 h-7 text-yellow-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      id: 3,
      title: '20% Off All Vitamins & Supplements',
      date: 'Jan 13, 2024',
      category: 'Promotions',
      urgent: false,
      icon: (
        <svg
          className="w-7 h-7 text-blue-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M7 10h10l-5 7z" />
        </svg>
      ),
    },
  ];

  const stockAlerts = [
    { id: 1, name: 'Paracetamol 500mg', stock: 15, threshold: 50, status: 'critical' },
    { id: 2, name: 'Vitamin C 1000mg', stock: 25, threshold: 30, status: 'warning' },
    { id: 3, name: 'Ibuprofen 400mg', stock: 8, threshold: 40, status: 'critical' },
    { id: 4, name: 'Omega-3 Fish Oil', stock: 35, threshold: 25, status: 'warning' },
    { id: 5, name: 'Zinc Supplements', stock: 5, threshold: 20, status: 'critical' },
  ];

  const getStockStatusColor = (status) => {
    switch (status) {
      case 'critical':
        return 'text-red-400 bg-red-950 border-red-700';
      case 'warning':
        return 'text-yellow-400 bg-yellow-950 border-yellow-700';
      default:
        return 'text-green-400 bg-green-950 border-green-700';
    }
  };

  const getStockStatusText = (status) => {
    switch (status) {
      case 'critical':
        return 'Critical';
      case 'warning':
        return 'Low';
      default:
        return 'Good';
    }
  };

  const displayedStockAlerts = isStockExpanded ? stockAlerts : stockAlerts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212]">
      <div className="max-w-7xl mx-auto p-6 sm:p-8 lg:p-10">
        {/* Header */}
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-3 select-none">
            Dashboard Overview
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl">
            Quick stats and updates about your HealthTargetParapharmacetica operations.
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10">
          {keyMetrics.map((metric, index) => (
            <div
              key={metric.id}
              className={`bg-gradient-to-br ${metric.color} rounded-2xl p-7 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="text-3xl">{metric.icon}</div>
                <div
                  className={`text-sm font-semibold px-3 py-1 rounded-full select-none ${
                    metric.changeType === 'positive' ? 'bg-green-600' : 'bg-red-600'
                  }`}
                >
                  {metric.change}
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-1">{metric.value}</h3>
              <p className="text-blue-200 text-sm opacity-90">{metric.title}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-10">
          {/* Recent News Section */}
          <div className="xl:col-span-2">
            <div className="bg-[#1E1E1E]/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-5">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3 select-none">
                  <svg
                    className="w-6 h-6 text-blue-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Recent News
                </h2>
                <a
                  href="/news"
                  className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-2 self-start sm:self-auto hover:bg-blue-900/20 px-3 py-2 rounded-xl transition-all select-none"
                >
                  View All News
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="space-y-4">
                {recentNews.map((news, index) => (
                  <div
                    key={news.id}
                    className={`flex items-start space-x-5 p-5 rounded-2xl border transition-all duration-250 hover:scale-[1.02] cursor-pointer ${
                      news.urgent
                        ? 'border-red-600/40 bg-red-900/20 hover:bg-red-900/30'
                        : 'border-gray-700/40 bg-gray-800/25 hover:bg-gray-800/40'
                    }`}
                    style={{ animationDelay: `${index * 160}ms` }}
                  >
                    <div className="text-2xl flex-shrink-0 select-none">{news.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white mb-2 line-clamp-2 hover:text-blue-400 transition-colors select-text">
                        {news.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                        <span className="text-sm text-gray-400 select-text">{news.date}</span>
                        <span
                          className={`px-4 py-1 rounded-full text-xs font-medium w-fit select-none ${
                            news.urgent
                              ? 'bg-red-900 text-red-400 border border-red-600'
                              : 'bg-blue-900 text-blue-400 border border-blue-600'
                          }`}
                        >
                          {news.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="xl:col-span-1">
            <div className="bg-[#1E1E1E]/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 select-none">
                <svg
                  className="w-6 h-6 text-yellow-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Quick Actions
              </h2>

              <div className="space-y-5">
                <a
                  href="/products/addnew"
                  className="w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white py-4 px-6 rounded-3xl font-semibold hover:from-blue-900 hover:to-blue-950 transition-all duration-250 flex items-center justify-center gap-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 select-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 4v16m8-8H4" />
                  </svg>
                  Create New Product
                </a>
                <a
                  href="/news/addnews"
                  className="w-full bg-gradient-to-r from-green-800 to-green-900 text-white py-4 px-6 rounded-3xl font-semibold hover:from-green-900 hover:to-green-950 transition-all duration-250 flex items-center justify-center gap-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 select-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Post News Update
                </a>
                <button
                  onClick={() => alert('This Page requires backend, coming soon!')}
                  className="w-full bg-gradient-to-r from-purple-800 to-purple-900 text-white py-4 px-6 rounded-3xl font-semibold hover:from-purple-900 hover:to-purple-950 transition-all duration-250 flex items-center justify-center gap-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 select-none"
                  type="button"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  View Reports
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stock Alerts Section */}
        <div className="mt-10">
          <div className="bg-[#1E1E1E]/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3 select-none">
                <svg
                  className="w-6 h-6 text-red-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Stock Alerts
              </h2>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400 select-none">Products at Risk</span>
                <button
                  onClick={() => setIsStockExpanded(!isStockExpanded)}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-2 hover:bg-blue-900/25 px-3 py-2 rounded-lg transition-all select-none"
                  type="button"
                  aria-expanded={isStockExpanded}
                >
                  {isStockExpanded ? 'Show Less' : 'Show All'}
                  <svg
                    className={`w-4 h-4 transition-transform ${isStockExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="block lg:hidden space-y-4">
              {displayedStockAlerts.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-700/40 rounded-3xl p-5 border border-gray-600/40"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-semibold text-white text-base select-text">{product.name}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border select-none ${getStockStatusColor(
                        product.status
                      )}`}
                    >
                      {getStockStatusText(product.status)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm select-text">
                    <div>
                      <span className="text-gray-400">Stock: </span>
                      <span
                        className={`font-semibold ${
                          product.stock < 10
                            ? 'text-red-400'
                            : product.stock < 20
                            ? 'text-yellow-400'
                            : 'text-green-400'
                        }`}
                      >
                        {product.stock}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Threshold: </span>
                      <span className="text-gray-300">{product.threshold}</span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-700 text-white py-3 px-5 rounded-3xl text-sm font-semibold hover:bg-blue-800 transition-colors select-none">
                    Restock
                  </button>
                </div>
              ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-5 px-6 font-semibold text-gray-300 text-sm uppercase tracking-wide select-none">
                      Product Name
                    </th>
                    <th className="text-left py-5 px-6 font-semibold text-gray-300 text-sm uppercase tracking-wide select-none">
                      Current Stock
                    </th>
                    <th className="text-left py-5 px-6 font-semibold text-gray-300 text-sm uppercase tracking-wide select-none">
                      Threshold
                    </th>
                    <th className="text-left py-5 px-6 font-semibold text-gray-300 text-sm uppercase tracking-wide select-none">
                      Status
                    </th>
                    <th className="text-left py-5 px-6 font-semibold text-gray-300 text-sm uppercase tracking-wide select-none">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayedStockAlerts.map((product, index) => (
                    <tr
                      key={product.id}
                      className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors duration-200"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <td className="py-5 px-6 font-medium text-white select-text">{product.name}</td>
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-bold text-lg ${
                              product.stock < 10
                                ? 'text-red-400'
                                : product.stock < 20
                                ? 'text-yellow-400'
                                : 'text-green-400'
                            }`}
                          >
                            {product.stock}
                          </span>
                          <span className="text-gray-400 text-sm select-none">units</span>
                        </div>
                      </td>
                      <td className="py-5 px-6 text-gray-400 select-none">{product.threshold} units</td>
                      <td className="py-5 px-6">
                        <span
                          className={`px-4 py-1 rounded-full text-xs font-semibold border select-none ${getStockStatusColor(
                            product.status
                          )}`}
                        >
                          {getStockStatusText(product.status)}
                        </span>
                      </td>
                      <td className="py-5 px-6">
                        <button className="bg-blue-700 text-white px-6 py-2 rounded-2xl text-sm font-semibold hover:bg-blue-800 transition-shadow duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 select-none">
                          Restock
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {stockAlerts.length === 0 && (
              <div className="text-center py-12 select-none">
                <svg
                  className="w-16 h-16 text-green-400 mx-auto mb-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-xl font-semibold text-white mb-2">All Good!</h3>
                <p className="text-gray-400">No stock alerts - everything is well stocked!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
