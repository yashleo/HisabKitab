'use client';

import { usePathname } from 'next/navigation';

interface NavItem {
  href: string;
  label: string;
}

const navigationItems: NavItem[] = [
  { href: '/home', label: 'Home' },
  { href: '/expenses', label: 'Expenses' },
  { href: '/dashboard', label: 'Dashboard' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">HisabKitab</h1>
          </div>
          <nav className="flex items-center space-x-6">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button className="text-sm font-medium text-red-600 hover:text-red-800">
              Logout
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
