import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#000000",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        paddingTop: "48px",
        paddingBottom: "32px",
      }}
    >
      <div className="max-w-[980px] mx-auto px-6">
        {/* Footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div
              className="text-xl font-black tracking-widest mb-3"
              style={{
                color: "#ffffff",
                fontFamily: '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
                letterSpacing: "0.15em",
              }}
            >
              BOONE
            </div>
            <p
              className="apple-caption"
              style={{ color: "rgba(255,255,255,0.56)" }}
            >
              Thương hiệu áo thun unisex Việt Nam. Chất lượng cao, phong cách tối giản.
            </p>
          </div>

          {/* Link columns */}
          {[
            {
              title: "Sản phẩm",
              links: ["Áo thun basic", "Áo thun oversize", "Áo thun in", "Mới về"],
            },
            {
              title: "Hỗ trợ",
              links: ["Đổi trả hàng", "Chọn size", "Vận chuyển", "Liên hệ"],
            },
            {
              title: "Về Boone",
              links: ["Câu chuyện", "Blog", "Tuyển dụng", "Cộng tác"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h3
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "12px",
                  letterSpacing: "0.02em",
                  fontFamily: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
                }}
              >
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="transition-opacity hover:opacity-60"
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.6)",
                        textDecoration: "none",
                        letterSpacing: "-0.12px",
                        fontFamily: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
                      }}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", letterSpacing: "-0.12px", fontFamily: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            Copyright © 2025 Boone Shop. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-6">
            {["Chính sách bảo mật", "Điều khoản sử dụng"].map((t) => (
              <Link
                key={t}
                href="#"
                className="transition-opacity hover:opacity-60"
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  letterSpacing: "-0.12px",
                  fontFamily: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
                }}
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
