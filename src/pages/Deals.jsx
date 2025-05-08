import React, { useState } from 'react';
import '../styles/Deals.scss';

const Deals = () => {
  const [deals, setDeals] = useState([
    {
      id: 1,
      dealName: 'Website Redesign',
      status: 'Proposal Sent',
      closeDate: '2023-04-28',
      dealOwner: 'Nguyễn Thế Khải',
      amount: '5000',
    },
    {
      id: 2,
      dealName: 'SEO Optimization',
      status: 'Negotiation',
      closeDate: '2023-05-15',
      dealOwner: 'Jane Smith',
      amount: '3000',
    },
    {
      id: 3,
      dealName: 'Social Media Campaign',
      status: 'Closed Won',
      closeDate: '2023-06-01',
      dealOwner: 'Alice Johnson',
      amount: '7000',
    },
  ]);

  // State for search input and filtered deals
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDeals, setFilteredDeals] = useState(deals);

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter deals based on the search term
    const filtered = deals.filter((deal) =>
      deal.dealName.toLowerCase().includes(value) ||
      deal.status.toLowerCase().includes(value) ||
      deal.dealOwner.toLowerCase().includes(value)
    );
    setFilteredDeals(filtered);
  };

  // Handle cell edit
  const handleEdit = (id, field, value) => {
    const updatedDeals = deals.map((deal) =>
      deal.id === id ? { ...deal, [field]: value } : deal
    );
    setDeals(updatedDeals);
    setFilteredDeals(updatedDeals); // Update filtered list as well
  };

  return (
    <div className="deals">
      <header className="deals-header">
        <h1>Deals</h1>
        <input
          type="text"
          placeholder="Search deals..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
      </header>
      <section className="deals-content">
        <table className="deals-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Deal Name</th>
              <th>Status</th>
              <th>Close Date</th>
              <th>Deal Owner</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredDeals.map((deal) => (
              <tr key={deal.id}>
                <td>{deal.id}</td>
                <td>
                  <input
                    type="text"
                    value={deal.dealName}
                    onChange={(e) => handleEdit(deal.id, 'dealName', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={deal.status}
                    onChange={(e) => handleEdit(deal.id, 'status', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={deal.closeDate}
                    onChange={(e) => handleEdit(deal.id, 'closeDate', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={deal.dealOwner}
                    onChange={(e) => handleEdit(deal.id, 'dealOwner', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={deal.amount}
                    onChange={(e) => handleEdit(deal.id, 'amount', e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredDeals.length === 0 && <p>No deals found.</p>}
      </section>
    </div>
  );
};

export default Deals;