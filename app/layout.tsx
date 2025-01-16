import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/dir/styles/globals.css" ;
import Footer from "@/dir/components/footer";
import NavBar from "@/dir/components/navbar";
//import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuButton, SidebarProvider, SidebarSeparator } from "@/components/ui/sidebar";
import ChatPanel from "@/dir/components/chatPanel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen flex flex-col">
          <NavBar /> {/* Sticky Navbar */}
          <main className="flex flex-row flex-grow overflow-hidden"> {/* Main Content Area with flex for left and right sections */}
              {/* Left section for the main content */}           
              <div className="flex-grow overflow-auto"
                style={{
                  backgroundImage: "url('/roulette/Grad_Bg.PNG')",
                  backgroundSize: "cover", 
                  backgroundPosition: "center", 
                  backgroundRepeat: "no-repeat", 
              }}>
                {children} 
              </div>
              
              {/* Right section for Sidebar (Chat Panel) */}
              <div className="min-w-[280px] flex-grow overflow-auto hidden lg:block">
                <ChatPanel/>
              </div>              
          </main>

          <Footer /> {/* Sticky Footer */}
        </div>
      </body>
    </html>
  );
}
