// app/ssr/page.js
import React from "react";

const SSRPage = async () => {
  // Fetch data on each request
  const serverTime = new Date().toISOString();

  return (
    <div>
      <h1>Server-Side Rendering (SSR)</h1>
      <p>Server Time: {serverTime}</p>
    </div>
  );
};

export default SSRPage;
