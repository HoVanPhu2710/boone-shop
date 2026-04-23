"use client";

import { useCartStore } from "@/lib/store/useCartStore";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

function formatVND(n: number) {
  return new Intl.NumberFormat("vi-VN").format(n) + " ₫";
}

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem } = useCartStore();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration errors with persist
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 z-[100] h-full w-full sm:w-[400px] bg-[#ffffff] shadow-2xl transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/10">
          <h2 className="text-[21px] font-semibold text-[#1d1d1f] tracking-tight font-['SF_Pro_Display',sans-serif]">
            Giỏ hàng của bạn
          </h2>
          <button 
            onClick={closeCart}
            className="p-2 -mr-2 rounded-full hover:bg-black/5 transition-colors text-black/60 hover:text-black"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body - Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <ShoppingBagIcon className="w-16 h-16 text-black/20 mb-4" />
              <p className="text-[#1d1d1f] text-[17px] font-medium mb-2 font-['SF_Pro_Text',sans-serif]">Giỏ hàng trống</p>
              <p className="text-black/50 text-[14px] mb-6 font-['SF_Pro_Text',sans-serif]">Hãy chọn cho mình một chiếc áo thật ưng ý nhé.</p>
              <button onClick={closeCart} className="apple-btn-primary">
                Tiếp tục mua sắm
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4">
                  {/* Item Image */}
                  <div className="w-20 h-24 bg-[#f5f5f7] rounded-md overflow-hidden shrink-0 relative">
                    {/* Use next/image if configured, or standard img */}
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  
                  {/* Item Details */}
                  <div className="flex flex-col flex-1 py-1">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h3 className="text-[15px] font-medium text-[#1d1d1f] line-clamp-2 leading-tight font-['SF_Pro_Text',sans-serif]">
                          {item.name}
                        </h3>
                        <p className="text-[13px] text-black/60 mt-1 font-['SF_Pro_Text',sans-serif]">Size: {item.size}</p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id, item.size)}
                        className="text-black/40 hover:text-[#ff3b30] transition-colors p-1 -mr-1 -mt-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-2">
                      <div className="flex items-center border border-black/10 rounded-md">
                        <button 
                          className="px-2 py-1 text-black/60 hover:text-black disabled:opacity-30"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-[14px] font-medium text-[#1d1d1f]">
                          {item.quantity}
                        </span>
                        <button 
                          className="px-2 py-1 text-black/60 hover:text-black"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[15px] font-semibold text-[#1d1d1f] font-['SF_Pro_Text',sans-serif]">
                        {formatVND(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer - Checkout */}
        {items.length > 0 && (
          <div className="border-t border-black/10 px-6 py-6 bg-[#f5f5f7]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[17px] text-[#1d1d1f] font-medium font-['SF_Pro_Text',sans-serif]">Tổng tiền</span>
              <span className="text-[21px] font-semibold text-[#1d1d1f] tracking-tight font-['SF_Pro_Display',sans-serif]">
                {formatVND(total)}
              </span>
            </div>
            <p className="text-[13px] text-black/60 mb-6 font-['SF_Pro_Text',sans-serif]">
              Đã bao gồm thuế. Phí vận chuyển được tính ở bước thanh toán.
            </p>
            <button className="apple-btn-primary w-full py-4 text-[17px] font-medium">
              Thanh toán
            </button>
          </div>
        )}
      </div>
    </>
  );
}

// Just a simple helper icon since ShoppingBag is not imported here for the empty state
function ShoppingBagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
