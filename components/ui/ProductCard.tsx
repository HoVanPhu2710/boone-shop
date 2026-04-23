"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useCartStore } from "@/lib/store/useCartStore";

import { Product } from "@/lib/data/products";

import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

function formatVND(n: number) {
  return new Intl.NumberFormat("vi-VN").format(n) + " ₫";
}

export function ProductCard({ product }: ProductCardProps) {
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
      image: product.image,
      size: selectedSize
    });
    toast.success("Đã thêm vào giỏ hàng");
  };

  return (
    <div className="apple-card flex flex-col group h-full">
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "4/5" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.badge && (
          <span
            className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded"
            style={{
              backgroundColor: "#0071e3",
              color: "#ffffff",
              fontSize: "12px",
              letterSpacing: "-0.12px",
              borderRadius: "5px",
            }}
          >
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 
          className="apple-headline-tile mb-1 line-clamp-2" 
          style={{ fontSize: "17px", fontWeight: 600, lineHeight: 1.24, letterSpacing: "-0.374px", color: "#1d1d1f" }}
        >
          {product.name}
        </h3>
        
        {product.desc && (
          <p className="apple-caption mb-2" style={{ color: "rgba(0,0,0,0.56)" }}>
            {product.desc}
          </p>
        )}

        {/* Size Selector UI */}
        <div className="mt-2 mb-4">
          <p className="apple-caption text-black/60 mb-2 text-[12px]">Chọn size:</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-8 h-8 rounded-full border text-[13px] font-medium transition-colors flex items-center justify-center font-['SF_Pro_Text',sans-serif] ${
                  selectedSize === size
                    ? "border-[#0071e3] bg-[#0071e3] text-white"
                    : "border-black/10 text-[#1d1d1f] hover:border-[#0071e3] bg-white"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-baseline gap-2 mb-4 mt-auto">
          <span style={{ fontSize: "17px", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.374px", fontFamily: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            {formatVND(product.price)}
          </span>
          {product.originalPrice && (
            <span style={{ fontSize: "14px", color: "rgba(0,0,0,0.4)", textDecoration: "line-through", fontFamily: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
              {formatVND(product.originalPrice)}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <button 
            onClick={handleAddToCart}
            className="apple-btn-primary w-full py-2.5" 
            style={{ fontSize: "15px" }}
          >
            Thêm vào giỏ
          </button>
          <Link 
            href={`/san-pham/${product.slug}`} 
            className="apple-pill-link apple-pill-link-light justify-center w-full" 
            style={{ fontSize: "14px", padding: "8px 0" }}
          >
            Xem chi tiết <ChevronRight className="w-3 h-3 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
