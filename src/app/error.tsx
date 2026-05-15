"use client";

// TODO: Create an error boundary component
// - Display a user-friendly error message
// - Add a "Try Again" button that calls reset()

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try Again</button>
    </div>
  );
}
