import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { cookies } from "next/headers";
import Header from "@/components/custom/todos/Navbar";
import { AuthProvider } from "@/components/providers/AuthProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TaskFlow - Manage Your Tasks Efficiently",
  description:
    "A simple and powerful task manager to organize your daily work and boost productivity.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
    const token = (await cookies()).get('token')?.value
    const username = (await cookies()).get('username')?.value || ""
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider initialValue={!!token} initialUsername={username}>
              <Header />
              {children}
            </AuthProvider>
            
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
