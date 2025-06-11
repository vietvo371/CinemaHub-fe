import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function AdminHeader() {
  return (
    <header className="bg-white border-b">
      <div className="flex h-16 items-center px-4 gap-6">
        
      

        <div className="flex items-center gap-4 ml-auto">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <BellIcon className="h-6 w-6 text-gray-500" />
          </button>
          <div className="flex items-center gap-2">
            <UserCircleIcon className="h-8 w-8 text-gray-500" />
            <span className="text-sm font-medium">Admin User</span>
          </div>
        </div>
      </div>
    </header>
  );
} 