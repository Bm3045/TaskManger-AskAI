import React, { useEffect, useState } from "react";

const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container-fluid bg-primary text-white py-3 px-4 rounded shadow d-flex justify-content-between align-items-center">
      <h1 className="h4 fw-bold mb-0">📝 To-Do Manager</h1>
      <div className="text-end">
        <div>{dateTime.toLocaleDateString()}</div>
        <div>{dateTime.toLocaleTimeString()}</div>
      </div>
    </div>
  );
};

export default Header;
