import ClientLayout from '../layouts/client/ClientLayout';
import { ThemeProvider } from "@/components/theme-provider";
import { CinemaProvider } from "@/contexts/cinema-context";

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
        </ClientLayout>
      </CinemaProvider>
    </ThemeProvider>
  );
} 