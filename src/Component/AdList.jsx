import React, { useEffect, useState } from 'react';

const AdList = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetch('/ad.json')
      .then(res => res.json())
      .then(data => setAds(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            📢 Advertisement List
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Table Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                  <th className="py-4 px-6 text-left font-semibold tracking-wider border-r border-gray-700 last:border-r-0">
                    <span className="flex items-center">
                      #
                    </span>
                  </th>
                  <th className="py-4 px-6 text-left font-semibold tracking-wider border-r border-gray-700 last:border-r-0">
                    <span className="flex items-center">
                      Name
                    </span>
                  </th>
                  <th className="py-4 px-6 text-left font-semibold tracking-wider border-r border-gray-700 last:border-r-0">
                    <span className="flex items-center">
                      Email
                    </span>
                  </th>
                  <th className="py-4 px-6 text-left font-semibold tracking-wider border-r border-gray-700 last:border-r-0">
                    <span className="flex items-center">
                      Subject
                    </span>
                  </th>
                  <th className="py-4 px-6 text-left font-semibold tracking-wider border-r border-gray-700 last:border-r-0">
                    <span className="flex items-center">
                      Priority
                    </span>
                  </th>
                  <th className="py-4 px-6 text-left font-semibold tracking-wider border-r border-gray-700 last:border-r-0">
                    <span className="flex items-center">
                      Message
                    </span>
                  </th>
                  <th className="py-4 px-6 text-left font-semibold tracking-wider">
                    <span className="flex items-center">
                      Image
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {ads.map((ad, index) => (
                  <tr key={ad.id} className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:shadow-lg">
                    <td className="py-4 px-6 border-r border-gray-100 last:border-r-0">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                        {index + 1}
                      </div>
                    </td>
                    <td className="py-4 px-6 border-r border-gray-100 last:border-r-0">
                      <div className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                        {ad.name}
                      </div>
                    </td>
                    <td className="py-4 px-6 border-r border-gray-100 last:border-r-0">
                      <div className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                        <a href={`mailto:${ad.email}`} className="hover:underline">
                          {ad.email}
                        </a>
                      </div>
                    </td>
                    <td className="py-4 px-6 border-r border-gray-100 last:border-r-0">
                      <div className="text-gray-700 font-medium max-w-xs">
                        {ad.subject}
                      </div>
                    </td>
                    <td className="py-4 px-6 border-r border-gray-100 last:border-r-0">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105
                        ${ad.priority === 'High' 
                          ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' :
                          ad.priority === 'Medium' 
                            ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' :
                            'bg-gradient-to-r from-green-500 to-green-600 text-white'}`}>
                        {ad.priority}
                      </span>
                    </td>
                    <td className="py-4 px-6 border-r border-gray-100 last:border-r-0">
                      <div className="text-gray-600 max-w-md line-clamp-2 leading-relaxed">
                        {ad.message}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="relative">
                        <img 
                          src={ad.image} 
                          alt="ad" 
                          className="w-14 h-14 rounded-xl object-cover border-2 border-white shadow-lg group-hover:border-blue-300 transition-all duration-300 hover:scale-110" 
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State */}
        {ads.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
              <span className="text-3xl">📢</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No advertisements yet</h3>
            <p className="text-gray-500">Advertisements will appear here once loaded</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdList;