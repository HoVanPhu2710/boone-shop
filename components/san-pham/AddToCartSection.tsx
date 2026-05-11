"use client";

import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/lib/store/useCartStore";
import { toast } from "sonner";
import { Product } from "@/lib/types";

interface AddToCartSectionProps {
  product: Product;
}

export function AddToCartSection({ product }: AddToCartSectionProps) {
  const { addItem } = useCartStore();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Vui lòng chọn kích thước trước khi thêm vào giỏ hàng!");
      return;
    }
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image_url,
      size: selectedSize
    });
    toast.success("Đã thêm vào giỏ hàng");
  };

  return (
    <>
      <div className="mb-8">
        <div className="flex justify-between items-end mb-3">
          <p className="text-[17px] font-semibold text-[#1d1d1f] font-['SF_Pro_Text',sans-serif]">Kích thước</p>
          <Link href="#" className="text-[14px] text-[#0071e3] hover:underline font-['SF_Pro_Text',sans-serif]">
            Hướng dẫn chọn size
          </Link>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {product.sizes?.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-3 rounded-lg border font-medium text-[15px] transition-all font-['SF_Pro_Text',sans-serif] ${
                selectedSize === size
                  ? "border-[#0071e3] bg-[#0071e3] text-white shadow-md"
                  : "border-black/20 text-[#1d1d1f] hover:border-[#0071e3] bg-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        {!selectedSize && (
          <p className="text-[13px] text-[#ff3b30] mt-2 font-['SF_Pro_Text',sans-serif]">
            * Vui lòng chọn một kích thước.
          </p>
        )}
      </div>

      <button 
        onClick={handleAddToCart}
        className="apple-btn-primary w-full py-4 text-[17px] font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
      >
        Thêm vào giỏ hàng
      </button>
    </>
  );
}
