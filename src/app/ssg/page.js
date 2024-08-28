// app/ssg/page.js
import React from 'react';

const SSGPage = async () => {
  // Fetch data at build time
  const staticTime = new Date().toISOString();

  return (
    <div>
      <h1>Static Site Generation (SSG)</h1>
      <p>Static Time: {staticTime}</p>
    </div>
  );
};

export default SSGPage;
