'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
      <h1>Something went wrong.</h1>
      <p>An unexpected error occurred while rendering this page.</p>
      <button type="button" className="btn btn-primary" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
