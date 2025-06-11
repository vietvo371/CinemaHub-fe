import React from 'react';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { AdminSidebar } from '@/components/admin/AdminSidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen flex">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <main className="p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
} 