import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Boone Shop – Áo Thun Unisex",
  description:
    "Cửa hàng bán áo thun unisex hiện đại tại Việt Nam. Chất liệu cao cấp, thiết kế đơn giản, giá cả hợp lý.",
  keywords: ["áo thun", "unisex", "Boone Shop", "thời trang Việt Nam"],
  authors: [{ name: "Boone Shop" }],
  openGraph: {
    title: "Boone Shop – Áo Thun Unisex",
    description:
      "Cửa hàng bán áo thun unisex hiện đại tại Việt Nam. Chất liệu cao cấp, thiết kế đơn giản.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <CartDrawer />
        <Toaster position="top-center" toastOptions={{
          style: {
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0,0,0,0.1)',
            color: '#1d1d1f',
            fontFamily: '"SF Pro Text", sans-serif',
            borderRadius: '12px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
          }
        }} />
      </body>
    </html>
  );
}
