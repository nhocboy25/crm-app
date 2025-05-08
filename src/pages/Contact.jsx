import React, { useState } from 'react';
import '../styles/Contact.scss';

const Contact = () => {
  // Sample customer data
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      owner: 'Alice Johnson',
      lastActivity: '2023-05-01',
      createDate: '2023-01-15',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      owner: 'Bob Williams',
      lastActivity: '2023-04-28',
      createDate: '2023-02-10',
      status: 'Inactive',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '555-123-4567',
      owner: 'Charlie Brown',
      lastActivity: '2023-05-03',
      createDate: '2023-03-05',
      status: 'Active',
    },
  ]);

  // State for search input and filtered customers
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState(customers);

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter customers based on the search term
    const filtered = customers.filter((customer) =>
      customer.name.toLowerCase().includes(value) ||
      customer.email.toLowerCase().includes(value) ||
      customer.phone.includes(value) ||
      customer.owner.toLowerCase().includes(value)
    );
    setFilteredCustomers(filtered);
  };

  // Handle cell edit
  const handleEdit = (id, field, value) => {
    const updatedCustomers = customers.map((customer) =>
      customer.id === id ? { ...customer, [field]: value } : customer
    );
    setCustomers(updatedCustomers);
    setFilteredCustomers(updatedCustomers); // Update filtered list as well
  };

  return (
    <div className="contact">
      <header className="contact-header">
        <h1>Customer List</h1>
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
      </header>
      <section className="contact-content">
        <table className="customer-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Contact Owner</th>
              <th>Last Activity Date</th>
              <th>Create Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>
                  <input
                    type="text"
                    value={customer.name}
                    onChange={(e) => handleEdit(customer.id, 'name', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="email"
                    value={customer.email}
                    onChange={(e) => handleEdit(customer.id, 'email', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={customer.phone}
                    onChange={(e) => handleEdit(customer.id, 'phone', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={customer.owner}
                    onChange={(e) => handleEdit(customer.id, 'owner', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={customer.lastActivity}
                    onChange={(e) => handleEdit(customer.id, 'lastActivity', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={customer.createDate}
                    onChange={(e) => handleEdit(customer.id, 'createDate', e.target.value)}
                  />
                </td>
                <td>
                  <select
                    value={customer.status}
                    onChange={(e) => handleEdit(customer.id, 'status', e.target.value)}
                  >
                    <option value="Follow đặt hẹn">Follow đặt hẹn</option>
                    <option value="Follow sau gặp">Follow sau gặp</option>
                    <option value="Chốt">Chốt</option>
                    <option value="Xịt">Xịt</option>
                    <option value="Đã kết nối và xịt">Đã kết nối và xịt</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredCustomers.length === 0 && <p>No contacts found.</p>}
      </section>
    </div>
  );
};

export default Contact;