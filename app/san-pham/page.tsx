"use client";
import React, { useState } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";

import { products } from "@/lib/data/products";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      {/* ══════════════════════════════════════
          MAIN CONTENT — Light Background
      ══════════════════════════════════════ */}
      <main className="section-light min-h-screen pb-20">
        
        {/* PAGE HEADER & SEARCH */}
        <div className="max-w-[1200px] mx-auto px-6 pt-12 pb-8 border-b border-black/5">
          <h1 className="apple-headline-section text-center mb-8">Tất Cả Sản Phẩm</h1>
          
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-black/40" />
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm áo thun..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#ffffff] border-none outline-none py-3 pl-12 pr-4 shadow-sm"
              style={{
                borderRadius: "11px",
                fontSize: "17px",
                color: "#1d1d1f",
                fontFamily: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline = "2px solid #0071e3";
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = "none";
              }}
            />
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 pt-8 flex flex-col md:flex-row gap-10">
          
          {/* ══════════════════════════════════════
              SIDEBAR FILTERS
          ══════════════════════════════════════ */}
          <aside className="w-full md:w-[240px] shrink-0">
            <div className="flex items-center gap-2 mb-6 text-[#1d1d1f] font-semibold">
              <Filter className="w-5 h-5" />
              <span style={{ fontSize: "17px", letterSpacing: "-0.374px" }}>Bộ Lọc</span>
            </div>

            {/* Filter Group: Size */}
            <div className="mb-8 border-t border-black/5 pt-5">
              <h3 className="apple-body font-semibold mb-4 flex justify-between items-center cursor-pointer">
                Kích thước <ChevronDown className="w-4 h-4" />
              </h3>
              <div className="flex flex-wrap gap-2">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className="border border-black/10 rounded-md py-1.5 px-3 text-sm hover:border-[#0071e3] hover:text-[#0071e3] transition-colors bg-white font-['SF_Pro_Text',sans-serif]"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Group: Color */}
            <div className="mb-8 border-t border-black/5 pt-5">
              <h3 className="apple-body font-semibold mb-4 flex justify-between items-center cursor-pointer">
                Màu sắc <ChevronDown className="w-4 h-4" />
              </h3>
              <div className="space-y-2">
                {["Trắng", "Đen", "Xám", "Be", "Xanh navy"].map((color) => (
                  <label key={color} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 rounded border border-black/20 flex items-center justify-center group-hover:border-[#0071e3]">
                      {/* Checkbox mock */}
                    </div>
                    <span className="apple-body text-sm text-black/80">{color}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter Group: Price */}
            <div className="mb-8 border-t border-black/5 pt-5">
              <h3 className="apple-body font-semibold mb-4 flex justify-between items-center cursor-pointer">
                Giá <ChevronDown className="w-4 h-4" />
              </h3>
              <div className="space-y-2">
                {["Dưới 200.000 ₫", "200.000 ₫ - 400.000 ₫", "Trên 400.000 ₫"].map((price) => (
                  <label key={price} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 rounded-full border border-black/20 flex items-center justify-center group-hover:border-[#0071e3]">
                      {/* Radio mock */}
                    </div>
                    <span className="apple-body text-sm text-black/80">{price}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* ══════════════════════════════════════
              PRODUCT GRID
          ══════════════════════════════════════ */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <p className="apple-caption text-black/60">{products.length} sản phẩm</p>
              <div className="flex items-center gap-2 apple-caption">
                <span className="text-black/60">Sắp xếp:</span>
                <select className="bg-transparent font-medium outline-none cursor-pointer">
                  <option>Mới nhất</option>
                  <option>Bán chạy</option>
                  <option>Giá tăng dần</option>
                  <option>Giá giảm dần</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            {/* Pagination / Load More */}
            <div className="mt-16 text-center border-t border-black/5 pt-10">
              <button className="apple-pill-link apple-pill-link-light">
                Tải thêm sản phẩm <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <p className="apple-caption mt-4 text-black/40">Hiển thị 12 trên 45 sản phẩm</p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
