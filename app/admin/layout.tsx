import AdminLayout from '../layouts/admin/AdminLayout';
import { ThemeProvider } from "@/components/theme-provider";

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <AdminLayout>
        {children}
      </AdminLayout>
    </ThemeProvider>
  );
} 