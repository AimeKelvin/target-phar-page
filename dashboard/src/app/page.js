'use client';
import Link from 'next/link';
import NewsPage from '@/components/news/page';
import ProductPage from '@/components/products/page';

export default function Home() {
  // Sample data for the dashboard
  const keyMetrics = [
    {
      id: 1,
      title: "Total Products",
      value: "340",
      icon: "💊",
      color: "bg-blue-500",
      change: "+12",
      changeType: "positive"
    },
    {
      id: 2,
      title: "News Published",
      value: "12",
      icon: "📰",
      color: "bg-green-500",
      change: "+3",
      changeType: "positive"
    },
    {
      id: 3,
      title: "Low Stock Alerts",
      value: "8",
      icon: "📦",
      color: "bg-red-500",
      change: "-2",
      changeType: "negative"
    },
    {
      id: 4,
      title: "Today's Sales",
      value: "$2,450",
      icon: "💵",
      color: "bg-purple-500",
      change: "+15%",
      changeType: "positive"
    }
  ];

  const recentNews = [
    {
      id: 1,
      title: "COVID-19 Vaccine Drive – Register Now!",
      date: "2024-01-15",
      category: "Health Alerts",
      icon: "💉"
    },
    {
      id: 2,
      title: "New Premium Skincare Line Arrival",
      date: "2024-01-14",
      category: "New Products",
      icon: "🧴"
    },
    {
      id: 3,
      title: "20% Off All Vitamins & Supplements",
      date: "2024-01-13",
      category: "Promotions",
      icon: "💊"
    }
  ];

  const stockAlerts = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      stock: 15,
      threshold: 50,
      status: "critical"
    },
    {
      id: 2,
      name: "Vitamin C 1000mg",
      stock: 25,
      threshold: 30,
      status: "warning"
    },
    {
      id: 3,
      name: "Ibuprofen 400mg",
      stock: 8,
      threshold: 40,
      status: "critical"
    },
    {
      id: 4,
      name: "Omega-3 Fish Oil",
      stock: 35,
      threshold: 25,
      status: "warning"
    },
    {
      id: 5,
      name: "Zinc Supplements",
      stock: 5,
      threshold: 20,
      status: "critical"
    }
  ];

  const getStockStatusColor = (status) => {
    switch (status) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'warning': return 'text-orange-600 bg-orange-50 border-orange-200';
      default: return 'text-green-600 bg-green-50 border-green-200';
    }
  };

  const getStockStatusText = (status) => {
    switch (status) {
      case 'critical': return 'Critical';
      case 'warning': return 'Low';
      default: return 'Good';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-700 mb-2">Dashboard Overview</h1>
        <p className="text-lg text-gray-600">Quick stats and updates about your pharmacy operations.</p>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {keyMetrics.map((metric) => (
          <div key={metric.id} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${metric.color}`}>
                {metric.icon}
              </div>
              <div className={`text-sm font-medium ${
                metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
            <p className="text-gray-600 text-sm">{metric.title}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent News Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Recent News</h2>
              <Link 
                href="/news" 
                className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
              >
                View All News
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentNews.map((news) => (
                <div key={news.id} className="flex items-start space-x-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                  <div className="text-2xl">{news.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{news.title}</h3>
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <span>{news.date}</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
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
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            
            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add New Product
              </button>
              
              <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Post News Update
              </button>
              
              <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                View Reports
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stock Alerts Section */}
      <div className="mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Stock Alerts</h2>
            <span className="text-sm text-gray-500">Products at Risk</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Product Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Stock Left</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Threshold</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {stockAlerts.map((product) => (
                  <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{product.name}</td>
                    <td className="py-3 px-4">
                      <span className={`font-semibold ${
                        product.stock < 10 ? 'text-red-600' : 
                        product.stock < 20 ? 'text-orange-600' : 'text-green-600'
                      }`}>
                        {product.stock} units
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{product.threshold} units</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStockStatusColor(product.status)}`}>
                        {getStockStatusText(product.status)}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                        Restock
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {stockAlerts.length === 0 && (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No stock alerts</h3>
              <p className="text-gray-600">All products are well stocked!</p>
            </div>
          )}
        </div>
      </div>
      <NewsPage />
      <ProductPage />
    </div>
  );
}
