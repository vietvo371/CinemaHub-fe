import ClientLayout from '../layouts/client/ClientLayout';
import { ThemeProvider } from "@/components/theme-provider";
import { CinemaProvider } from "@/contexts/cinema-context";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <CinemaProvider>
        <ClientLayout>
          {children}
          <Toaster />
        </ClientLayout>
      </CinemaProvider>
    </ThemeProvider>
  );
} 