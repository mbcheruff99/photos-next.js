// No "use client" needed - this is a Server Component (no hooks or events)
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Photos App</h1>
      <p className="mb-4">Welcome to your fullstack Next.js app!</p>
      {/* Link to the photos index page */}
      <Link href="/photos" className="text-blue-500 hover:underline">
        View All Photos →
      </Link>
    </main>
  );
}