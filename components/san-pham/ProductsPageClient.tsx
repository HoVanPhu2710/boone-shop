"use client";
import React, { useState, useMemo } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { Product } from "@/lib/types";

interface ProductsPageClientProps {
  initialProducts: Product[];
}

export function ProductsPageClient({ initialProducts }: ProductsPageClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Mới nhất");

  const filteredProducts = useMemo(() => {
    let result = initialProducts;

    // Search
    if (searchTerm) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by Size
    if (selectedSizes.length > 0) {
      result = result.filter(p => p.sizes.some(size => selectedSizes.includes(size)));
    }

    // Filter by Color
    if (selectedColors.length > 0) {
      result = result.filter(p => p.colors?.some(color => selectedColors.includes(color)));
    }

    // Sort
    if (sortBy === "Giá tăng dần") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "Giá giảm dần") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [initialProducts, searchTerm, selectedSizes, selectedColors, sortBy]);

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

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
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`border rounded-md py-1.5 px-3 text-sm transition-colors font-['SF_Pro_Text',sans-serif] ${
                      selectedSizes.includes(size) 
                        ? "border-[#0071e3] text-[#0071e3] bg-blue-50" 
                        : "border-black/10 hover:border-[#0071e3] hover:text-[#0071e3] bg-white"
                    }`}
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
                {["Trắng", "Đen", "Xám", "Be", "Xanh navy", "Xanh dương", "Hồng", "Trắng/Đen", "Xám loang", "Nâu", "Kem"].map((color) => (
                  <label key={color} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="hidden" 
                      checked={selectedColors.includes(color)}
                      onChange={() => toggleColor(color)}
                    />
                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                      selectedColors.includes(color)
                        ? "border-[#0071e3] bg-[#0071e3]"
                        : "border-black/20 group-hover:border-[#0071e3]"
                    }`}>
                      {selectedColors.includes(color) && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="apple-body text-sm text-black/80">{color}</span>
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
              <p className="apple-caption text-black/60">{filteredProducts.length} sản phẩm</p>
              <div className="flex items-center gap-2 apple-caption">
                <span className="text-black/60">Sắp xếp:</span>
                <select 
                  className="bg-transparent font-medium outline-none cursor-pointer"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option>Mới nhất</option>
                  <option>Bán chạy</option>
                  <option>Giá tăng dần</option>
                  <option>Giá giảm dần</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center text-black/50">
                <p>Không tìm thấy sản phẩm nào phù hợp.</p>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}
