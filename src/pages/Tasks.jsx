import React, { useState } from 'react';
import '../styles/Tasks.scss';
const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      status: 'Nguyễn Thế Khải',
      title: 'gọi điện cho khách hàng',
      associatedContact: 'Bob Williams',
      lastContacted: '2023-04-28',
      dueDate: '2023-02-10',
    },
    {
      id: 2,
      status: 'Jane Smith',
      title: 'hẹn khách lên phòng',
      associatedContact: 'Bob Williams',
      lastContacted: '2023-04-28',
      dueDate: '2023-02-10',
    },
    {
      id: 3,
      status: 'Alice Johnson',
      title: 'hẹn lên chốt hợp đồng',
      associatedContact: 'Charlie Brown',
      lastContacted: '2023-05-03',
      dueDate: '2023-03-05',
    },
  ]);

  // State for search input and filtered tasks
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter tasks based on the search term
    const filtered = tasks.filter((task) =>
      task.status.toLowerCase().includes(value) ||
      task.title.toLowerCase().includes(value) ||
      task.associatedContact.toLowerCase().includes(value)
    );
    setFilteredTasks(filtered);
  };

  // Handle cell edit
  const handleEdit = (id, field, value) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, [field]: value } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks); // Update filtered list as well
  };

  return (
    <div className="tasks">
      <header className="tasks-header">
        <h1>Tasks</h1>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
      </header>
      <section className="tasks-content">
        <table className="tasks-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Title</th>
              <th>Associated Contact</th>
              <th>Last Contacted</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>
                  <input
                    type="text"
                    value={task.status}
                    onChange={(e) => handleEdit(task.id, 'status', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={task.title}
                    onChange={(e) => handleEdit(task.id, 'title', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={task.associatedContact}
                    onChange={(e) => handleEdit(task.id, 'associatedContact', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={task.lastContacted}
                    onChange={(e) => handleEdit(task.id, 'lastContacted', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={task.dueDate}
                    onChange={(e) => handleEdit(task.id, 'dueDate', e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredTasks.length === 0 && <p>No tasks found.</p>}
      </section>
    </div>
  );
};

export default Tasks;