import { useState, useEffect } from "react";

// Simulated search API
const searchAPI = {
  search: async (query: string): Promise<string[]> => {
    // Simulate network delay
    await new Promise((resolve) =>
      setTimeout(resolve, 300 + Math.random() * 200)
    );

    // Return mock results
    if (!query.trim()) return [];

    return [
      `${query} - Product A`,
      `${query} - Product B`,
      `${query} - Service C`,
      `${query} - Item D`,
      `${query} - Article E`,
    ].slice(0, Math.min(5, query.length)); // More results for longer queries
  },
};

export function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiCallCount, setApiCallCount] = useState(0);

  const searchData = async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    // 🚨 BUG: Increment API call counter to show excessive calls
    setApiCallCount((prev) => prev + 1);
    setLoading(true);
    setError(null);

    try {
      const data = await searchAPI.search(query);
      setResults(data);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Search failed");
      setLoading(false);
    }
  };

  useEffect(() => {
    searchData(searchTerm);
  }, [searchTerm]);

  const handleClearResults = () => {
    setSearchTerm("");
    setResults([]);
    setError(null);
    setLoading(false);
  };

  const handleResetCounter = () => {
    setApiCallCount(0);
  };

  return (
    <div className="race-condition-demo">
      <div className="search-container">
        <h3>🐛 Inefficient Search Component</h3>

        <div className="input-group">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type to search... (watch the API counter!)"
            className="search-input"
          />
          <button onClick={handleClearResults} className="clear-btn">
            Clear
          </button>
        </div>

        <div className="performance-metrics">
          <div className="metric">
            <span className="metric-label">API Calls Made:</span>
            <span className="metric-value">{apiCallCount}</span>
            <button onClick={handleResetCounter} className="reset-btn">
              Reset
            </button>
          </div>
          <div className="metric">
            <span className="metric-label">Search Term Length:</span>
            <span className="metric-value">{searchTerm.length}</span>
          </div>
        </div>

        <div className="status-info">
          {loading && <p className="loading">🔄 Loading...</p>}
          {error && <p className="error">❌ Error: {error}</p>}
        </div>
      </div>

      <div className="results-container">
        <h4>Search Results:</h4>
        {results.length > 0 ? (
          <ul className="results-list">
            {results.map((result, index) => (
              <li key={index} className="result-item">
                {result}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-results">
            {searchTerm ? "No results found" : "Start typing to search..."}
          </p>
        )}
      </div>

      <div className="debug-info">
        <details>
          <summary>🔍 Performance Issues</summary>
          <div className="debug-content">
            <p>
              <strong>Problems with this implementation:</strong>
            </p>
            <ul>
              <li>
                📈 Makes {apiCallCount} API calls for "{searchTerm}" (
                {searchTerm.length} characters)
              </li>
              <li>⚡ No delay between keystrokes and API requests</li>
              <li>🔄 Constant loading states create poor UX</li>
              <li>💸 Wastes server resources and bandwidth</li>
              <li>🐌 Can overwhelm slow connections</li>
            </ul>
            <p>
              <strong>Expected behavior:</strong> Should only make 1 API call
              after user stops typing!
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
