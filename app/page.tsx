"use client";
import Link from "next/link";
import {
  Truck,
  Shield,
  RefreshCw,
  Award,
  ChevronRight,
} from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";

import { products } from "@/lib/data/products";

/* ─────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div>
      {/* ══════════════════════════════════════
          HERO — Black section, cinematic
      ══════════════════════════════════════ */}
      <section
        className="section-dark flex flex-col items-center justify-center text-center px-6"
        style={{
          minHeight: "90vh",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        {/* Kicker */}
        <p
          className="apple-caption mb-3"
          style={{ color: "#2997ff", fontWeight: 600, letterSpacing: "0.02em" }}
        >
          Bộ sưu tập Hè 2025
        </p>

        {/* Main headline */}
        <h1
          className="apple-headline-hero text-white text-center max-w-3xl mx-auto"
          style={{ marginBottom: "16px" }}
        >
          Boone Shop
          <br />
          Áo Thun Unisex.
        </h1>

        {/* Sub-headline */}
        <p
          className="max-w-xl mx-auto text-center"
          style={{
            fontSize: "21px",
            fontWeight: 400,
            lineHeight: 1.19,
            letterSpacing: "0.231px",
            color: "#f5f5f7",
            marginBottom: "28px",
          }}
        >
          Phong cách tối giản. Chất liệu cao cấp.
          <br />
          Thương hiệu Việt — tự hào made in Vietnam.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a href="#san-pham" className="apple-btn-primary" id="hero-cta-buy">
            Mua Ngay
          </a>
          <a
            href="#bo-suu-tap"
            className="apple-pill-link apple-pill-link-dark"
            id="hero-cta-explore"
          >
            Xem bộ sưu tập <ChevronRight className="w-3 h-3" />
          </a>
        </div>

        {/* Hero image — product on dark */}
        <div className="relative max-w-2xl w-full mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&h=700&fit=crop"
            alt="Boone Shop – Áo Thun Unisex"
            className="w-full rounded-xl object-cover"
            style={{
              borderRadius: "12px",
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Stats strip */}
        <div className="flex flex-wrap justify-center gap-12 mt-16">
          {[
            { value: "10.000+", label: "Khách hàng" },
            { value: "500+", label: "Mẫu thiết kế" },
            { value: "4,9 ★", label: "Đánh giá trung bình" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  color: "#ffffff",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  fontFamily: '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
                }}
              >
                {s.value}
              </div>
              <div className="apple-caption mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SẢN PHẨM NỔI BẬT — Light section
      ══════════════════════════════════════ */}
      <section
        id="san-pham"
        className="section-light"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div className="max-w-[980px] mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-14">
            <p
              className="apple-caption mb-2"
              style={{ color: "#0066cc", fontWeight: 600 }}
            >
              Nổi bật
            </p>
            <h2 className="apple-headline-section" style={{ color: "#1d1d1f" }}>
              Sản Phẩm Nổi Bật
            </h2>
            <p
              className="apple-body mt-4 max-w-lg mx-auto"
              style={{ color: "rgba(0,0,0,0.56)" }}
            >
              Những mẫu áo được yêu thích nhất — chất lượng cao, giá cả hợp lý.
            </p>
          </div>

          {/* Product grid — 3 cols desktop, 2 cols tablet, 1 col mobile */}
          <div
            className="grid gap-5"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            }}
          >
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {/* View all */}
          <div className="text-center mt-12">
            <Link href="/san-pham" className="apple-pill-link apple-pill-link-light" id="view-all-products">
              Xem tất cả sản phẩm <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TẠI SAO CHỌN BOONE — Dark section
      ══════════════════════════════════════ */}
      <section
        id="ly-do"
        className="section-dark"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div className="max-w-[980px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p
              className="apple-caption mb-2"
              style={{ color: "#2997ff", fontWeight: 600 }}
            >
              Cam kết của Boone
            </p>
            <h2 className="apple-headline-section" style={{ color: "#ffffff" }}>
              Tại Sao Chọn Boone?
            </h2>
            <p
              className="apple-body mt-4 max-w-lg mx-auto"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              Chúng tôi đặt chất lượng và trải nghiệm khách hàng lên hàng đầu.
            </p>
          </div>

          {/* 4 benefit cards — dark surface */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Award,
                title: "Chất liệu cao cấp",
                desc: "100% cotton tự nhiên, mềm mịn và bền màu qua nhiều lần giặt.",
              },
              {
                icon: Truck,
                title: "Giao hàng toàn quốc",
                desc: "Miễn phí vận chuyển đơn từ 500.000 ₫. Nhận hàng trong 2–4 ngày.",
              },
              {
                icon: RefreshCw,
                title: "Đổi size miễn phí",
                desc: "Đổi trả dễ dàng trong 30 ngày nếu không vừa ý.",
              },
              {
                icon: Shield,
                title: "Made in Vietnam",
                desc: "Sản phẩm được sản xuất tại Việt Nam — tự hào thương hiệu Việt.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-lg p-6 text-left"
                style={{ backgroundColor: "#272729" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(0, 113, 227, 0.15)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#2997ff" }} />
                </div>
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#ffffff",
                    lineHeight: 1.24,
                    letterSpacing: "-0.374px",
                    marginBottom: "8px",
                  }}
                >
                  {title}
                </h3>
                <p className="apple-caption" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          NEWSLETTER — Light section
      ══════════════════════════════════════ */}
      <section
        className="section-light text-center"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div className="max-w-[640px] mx-auto px-6">
          <p
            className="apple-caption mb-2"
            style={{ color: "#0066cc", fontWeight: 600 }}
          >
            Ưu đãi độc quyền
          </p>
          <h2
            className="apple-headline-section mb-4"
            style={{ color: "#1d1d1f" }}
          >
            Đăng ký nhận ưu đãi
          </h2>
          <p
            className="apple-body mb-8"
            style={{ color: "rgba(0,0,0,0.56)" }}
          >
            Nhận thông báo về mẫu mới, flash sale và ưu đãi{" "}
            <strong style={{ color: "#1d1d1f" }}>giảm tới 150.000 ₫</strong> dành
            riêng cho thành viên.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email của bạn"
              className="flex-1 outline-none transition-all"
              style={{
                padding: "10px 16px",
                borderRadius: "11px",
                border: "3px solid rgba(0,0,0,0.08)",
                backgroundColor: "#fafafc",
                fontSize: "17px",
                letterSpacing: "-0.374px",
                color: "#1d1d1f",
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline = "2px solid #0071e3";
                e.currentTarget.style.outlineOffset = "2px";
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = "none";
              }}
            />
            <button
              id="newsletter-submit"
              type="submit"
              className="apple-btn-primary whitespace-nowrap"
            >
              Đăng Ký
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
