"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Shield, RefreshCw, Truck } from "lucide-react";
import { getProductBySlug, getRelatedProducts } from "@/lib/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { useCartStore } from "@/lib/store/useCartStore";

import { toast } from "sonner";

function formatVND(n: number) {
  return new Intl.NumberFormat("vi-VN").format(n) + " ₫";
}

export default function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const product = getProductBySlug(slug);

  const { addItem } = useCartStore();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

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
    <div className="section-light min-h-screen pb-20">
      {/* ══════════════════════════════════════
          BREADCRUMB
      ══════════════════════════════════════ */}
      <div className="max-w-[1200px] mx-auto px-6 pt-6 pb-4">
        <nav className="flex items-center gap-2 apple-caption text-black/60 font-['SF_Pro_Text',sans-serif]">
          <Link href="/" className="hover:text-black transition-colors">Trang chủ</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/san-pham" className="hover:text-black transition-colors">Sản phẩm</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black">{product.name}</span>
        </nav>
      </div>

      {/* ══════════════════════════════════════
          MAIN PRODUCT SECTION
      ══════════════════════════════════════ */}
      <div className="max-w-[1200px] mx-auto px-6 pt-4 pb-16 border-b border-black/10">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
          
          {/* Cột trái: Ảnh sản phẩm */}
          <div className="w-full md:w-1/2">
            <div 
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
              style={{ aspectRatio: "4/5" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Cột phải: Thông tin */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-[#0071e3] text-white text-[12px] font-semibold rounded-md mb-4 self-start font-['SF_Pro_Text',sans-serif]">
                {product.badge}
              </span>
            )}
            
            <h1 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] tracking-tight leading-tight mb-2 font-['SF_Pro_Display',sans-serif]">
              {product.name}
            </h1>
            
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-[24px] font-semibold text-[#1d1d1f] font-['SF_Pro_Display',sans-serif]">
                {formatVND(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-[17px] text-black/40 line-through font-['SF_Pro_Text',sans-serif]">
                  {formatVND(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-[17px] leading-relaxed text-black/70 mb-8 font-['SF_Pro_Text',sans-serif]">
              {product.fullDescription || product.desc}
            </p>

            <div className="mb-8 p-5 bg-[#f5f5f7] rounded-xl border border-black/5">
              <p className="text-[14px] text-[#1d1d1f] font-semibold mb-1 font-['SF_Pro_Text',sans-serif]">Chất liệu</p>
              <p className="text-[14px] text-black/70 font-['SF_Pro_Text',sans-serif]">{product.material || "100% Cotton cao cấp."}</p>
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-3">
                <p className="text-[17px] font-semibold text-[#1d1d1f] font-['SF_Pro_Text',sans-serif]">Kích thước</p>
                <Link href="#" className="text-[14px] text-[#0071e3] hover:underline font-['SF_Pro_Text',sans-serif]">
                  Hướng dẫn chọn size
                </Link>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {product.sizes.map((size) => (
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

            {/* CTA */}
            <button 
              onClick={handleAddToCart}
              className="apple-btn-primary w-full py-4 text-[17px] font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
            >
              Thêm vào giỏ hàng
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-black/10">
              <div className="flex flex-col items-center text-center">
                <Truck className="w-6 h-6 text-black/60 mb-2" />
                <span className="text-[12px] text-black/60 font-['SF_Pro_Text',sans-serif]">Giao hàng<br/>Miễn phí</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RefreshCw className="w-6 h-6 text-black/60 mb-2" />
                <span className="text-[12px] text-black/60 font-['SF_Pro_Text',sans-serif]">Đổi trả<br/>30 ngày</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="w-6 h-6 text-black/60 mb-2" />
                <span className="text-[12px] text-black/60 font-['SF_Pro_Text',sans-serif]">Bảo hành<br/>Chính hãng</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          RELATED PRODUCTS
      ══════════════════════════════════════ */}
      <div className="max-w-[1200px] mx-auto px-6 pt-16">
        <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1d1d1f] tracking-tight mb-8 font-['SF_Pro_Display',sans-serif] text-center">
          Sản phẩm liên quan
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
