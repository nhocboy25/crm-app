import React from 'react';
import '../styles/Contact.scss';

const Contact = () => {
  // Sample customer data
  const customers = [
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
  ];

  return (
    <div className="contact">
      <header className="contact-header">
        <h1>Customer List</h1>
        <p>Below is a list of all customers in the system.</p>
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
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.owner}</td>
                <td>{customer.lastActivity}</td>
                <td>{customer.createDate}</td>
                <td>{customer.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Contact;