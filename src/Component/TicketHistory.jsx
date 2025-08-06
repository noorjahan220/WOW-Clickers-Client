import React, { useEffect, useState } from 'react';

const TicketHistory = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch('/ticket.json')
      .then(res => res.json())
      .then(data => setTickets(data))
      .catch(err => console.error('Failed to load tickets:', err));
  }, []);

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-600 mb-2">🎟️ Ticket History</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-blue-600 text-white text-left text-sm">
                  <th className="py-4 px-6 font-semibold border-r border-blue-500">#</th>
                  <th className="py-4 px-6 font-semibold border-r border-blue-500">Ticket ID</th>
                  <th className="py-4 px-6 font-semibold border-r border-blue-500">User Name</th>
                  <th className="py-4 px-6 font-semibold border-r border-blue-500">Email</th>
                  <th className="py-4 px-6 font-semibold border-r border-blue-500">Subject</th>
                  <th className="py-4 px-6 font-semibold border-r border-blue-500">Status</th>
                  <th className="py-4 px-6 font-semibold">Created At</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100 text-black text-sm">
                {tickets.map((ticket, index) => (
                  <tr key={ticket.id} className="hover:bg-blue-50 transition-all duration-200">
                    <td className="py-4 px-6 border-r border-blue-100">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </td>
                    <td className="py-4 px-6 border-r border-blue-100 font-mono">{ticket.id}</td>
                    <td className="py-4 px-6 border-r border-blue-100 font-semibold">{ticket.name}</td>
                    <td className="py-4 px-6 border-r border-blue-100">
                      <a href={`mailto:${ticket.email}`} className="hover:underline text-blue-600">
                        {ticket.email}
                      </a>
                    </td>
                    <td className="py-4 px-6 border-r border-blue-100 max-w-xs truncate">{ticket.subject}</td>
                    <td className="py-4 px-6 border-r border-blue-100">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold
                        ${
                          ticket.status === 'Open' ? 'bg-green-100 text-green-700' :
                          ticket.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                          ticket.status === 'Closed' ? 'bg-red-100 text-red-700' :
                          'bg-gray-100 text-gray-700'
                        }`
                      }>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-gray-600">
                      {new Date(ticket.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State */}
        {tickets.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-3xl">🎟️</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">No tickets found</h3>
            <p className="text-gray-500">Your ticket history will appear here once loaded.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default TicketHistory;
