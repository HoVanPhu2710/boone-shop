"use client";

import Link from "next/link";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { useCartStore } from "@/lib/store/useCartStore";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Trang chủ", href: "/" },
  { name: "Sản phẩm", href: "/san-pham" },
  { name: "Bộ sưu tập", href: "#" },
  { name: "Giảm giá", href: "#" },
  { name: "Về chúng tôi", href: "#" },
];

export function Navbar() {
  const { items, openCart } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "rgba(0,0,0,0.80)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        height: "48px",
      }}
    >
      <div
        className="max-w-[980px] mx-auto px-6 flex items-center justify-between"
        style={{ height: "48px" }}
      >
        <Link
          href="/"
          className="text-xl font-black tracking-widest"
          style={{
            color: "#ffffff",
            fontFamily: '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
            letterSpacing: "0.15em",
          }}
        >
          BOONE
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition-opacity duration-150 hover:opacity-60"
              style={{
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "-0.12px",
                textDecoration: "none",
                fontFamily: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button aria-label="Tìm kiếm" className="transition-opacity hover:opacity-60 text-white">
            <Search className="w-[18px] h-[18px]" />
          </button>
          <button 
            aria-label="Giỏ hàng" 
            className="relative transition-opacity hover:opacity-60 text-white"
            onClick={openCart}
          >
            <ShoppingBag className="w-[18px] h-[18px]" />
            {mounted && totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold bg-[#0071e3] text-white">
                {totalItems}
              </span>
            )}
          </button>
          <button aria-label="Menu" className="md:hidden transition-opacity hover:opacity-60 text-white">
            <Menu className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>
    </header>
  );
}
