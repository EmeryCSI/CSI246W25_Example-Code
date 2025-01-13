/**
 * Client-side Counter Component
 * Demonstrates client-side state management using React's useState hook
 * Renders a counter with an increment button
 */
"use client"; // Marks this component for client-side rendering
import { useState } from "react";

export default function page() {
  // Initialize counter state with useState hook
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {/* Display the current counter value */}
      <h2>Counter: {counter}</h2>
      {/* Button to increment counter using state updater function */}
      <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
    </div>
  );
}
