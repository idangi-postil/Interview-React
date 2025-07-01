import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  department: string;
  displayName?: string;
}

export function DataFetcherComponent() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockUsers = [
        { id: 1, name: "Alice Johnson", department: "Engineering" },
        { id: 2, name: "Bob Smith", department: "Marketing" },
        { id: 3, name: "Carol Davis", department: "Engineering" },
        { id: 4, name: "David Wilson", department: "Sales" },
        { id: 5, name: "Eva Brown", department: "Marketing" },
      ];

      setUsers(mockUsers);
      setLoading(false);
    };

    fetchUsers();
  });

  useEffect(() => {
    const processedUsers = users.map((user) => ({
      ...user,
      displayName: user.name.toUpperCase(),
    }));

    setUsers(processedUsers);
  }, [users]);

  const getFilteredUsers = () => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredUsers.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortOrder === "asc" ? comparison : -comparison;
    });
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const toggleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="component data-fetcher-component">
      <h2>User Directory</h2>

      <div className="controls">
        <input
          type="text"
          placeholder="Search users..."
          value={filter}
          onChange={handleSearch}
          className="search-input"
        />

        <button onClick={toggleSort} className="btn-increment">
          Sort {sortOrder === "asc" ? "↑" : "↓"}
        </button>
      </div>

      {loading && (
        <div className="display-box">
          <p>Loading users...</p>
        </div>
      )}

      <div className="users-list">
        {getFilteredUsers().map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.displayName || user.name}</h3>
            <p>{user.department}</p>
          </div>
        ))}
      </div>

      <div className="display-box">
        <p>Showing {getFilteredUsers().length} users</p>
        <p className="note">Open browser console to see what's happening...</p>
      </div>
    </div>
  );
}
