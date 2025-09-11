"use client"; // Error boundaries must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className=" py-10 space-y-2">
      <h2 className=" text-xl font-medium text-red-500">{error.message}!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
