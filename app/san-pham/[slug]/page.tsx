import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Shield, RefreshCw, Truck } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { AddToCartSection } from "@/components/san-pham/AddToCartSection";
import { supabase } from "@/lib/supabase";
import { Product } from "@/lib/types";

export const revalidate = 60; // revalidate every 60 seconds if not dynamic

function formatVND(n: number) {
  return new Intl.NumberFormat("vi-VN").format(n) + " ₫";
}

export default async function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Fetch product detail
  const { data: productData } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  const product = productData as Product | null;

  if (!product) {
    notFound();
  }

  // Fetch related products (same category or recent)
  const { data: relatedData } = await supabase
    .from("products")
    .select("*")
    .neq("id", product.id)
    .limit(4);
    
  const relatedProducts = (relatedData as Product[]) || [];

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
                src={product.image_url} 
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
              {product.original_price && (
                <span className="text-[17px] text-black/40 line-through font-['SF_Pro_Text',sans-serif]">
                  {formatVND(product.original_price)}
                </span>
              )}
            </div>

            <p className="text-[17px] leading-relaxed text-black/70 mb-8 font-['SF_Pro_Text',sans-serif]">
              {product.full_description || product.description}
            </p>

            <div className="mb-8 p-5 bg-[#f5f5f7] rounded-xl border border-black/5">
              <p className="text-[14px] text-[#1d1d1f] font-semibold mb-1 font-['SF_Pro_Text',sans-serif]">Chất liệu</p>
              <p className="text-[14px] text-black/70 font-['SF_Pro_Text',sans-serif]">{product.material || "100% Cotton cao cấp."}</p>
            </div>

            {/* Interactive Client Component for Add to Cart */}
            <AddToCartSection product={product} />

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
