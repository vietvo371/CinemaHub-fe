import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Cinema
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/movies" className="text-gray-600 hover:text-gray-900">
              Movies
            </Link>
            <Link href="/showtimes" className="text-gray-600 hover:text-gray-900">
              Showtimes
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 