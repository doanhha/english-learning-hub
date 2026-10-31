import { useEffect, useState } from "react";

function ApiStatus() {
  const [message, setMessage] = useState("Connecting...");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch("/api/health");

        if (!response.ok) {
          throw new Error("API request failed");
        }

        const result = await response.json();

        setMessage(result.message);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchApi();
  }, []);

  return (
    <div>
      <h2>Backend Connection</h2>

      {error ? (
        <p style={{ color: "red" }}>
          Error: {error}
        </p>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
}

export default ApiStatus;