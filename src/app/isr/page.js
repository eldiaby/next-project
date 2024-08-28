// app/isr/page.js
import React from 'react';

const ISRPage = async () => {
  // Fetch data at build time and set revalidation interval
  const isrTime = new Date().toISOString();

  return (
    <div>
      <h1>Incremental Static Regeneration (ISR)</h1>
      <p>ISR Time: {isrTime}</p>
    </div>
  );
};

export async function generateStaticParams() {
  // This function is used to set static generation with ISR
  return {
    revalidate: 30, // Revalidate the page every 30 seconds
  };
}

export default ISRPage;
