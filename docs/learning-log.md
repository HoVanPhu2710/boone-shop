# 📓 Boone Shop – Nhật Ký Học Tập

> Project thực hành: Xây dựng cửa hàng áo thun unisex bằng Next.js 16
> Mục tiêu: Học full-stack web development qua dự án thực tế

---

## 📅 Ngày 22/04/2025 — Buổi 1: Khởi tạo Project

### ✅ Đã làm
- Khởi tạo project Next.js 16 với `npx create-next-app`
- Cài đặt Tailwind CSS v4 + cấu hình `globals.css`
- Cài đặt **shadcn/ui** — thư viện component UI
- Cài đặt các dependencies:
  - `lucide-react` — icon library
  - `@supabase/supabase-js` — sẽ dùng cho database
  - `stripe` — sẽ dùng cho thanh toán
- Cấu hình `app/layout.tsx` với font Inter (hỗ trợ tiếng Việt)
- Build trang chủ cơ bản đầu tiên bằng tiếng Việt

### 📁 Files tạo mới
```
boone-shop/
├── app/
│   ├── layout.tsx       ← Root layout, metadata SEO, font
│   ├── page.tsx         ← Trang chủ
│   └── globals.css      ← CSS toàn cục, Tailwind config
├── components/
│   └── ui/
│       └── button.tsx   ← shadcn Button component
├── lib/
│   └── utils.ts         ← Helper: cn() để merge classNames
└── next.config.ts       ← Cấu hình Next.js
```

### 🧠 Khái niệm học được
| Khái niệm | Giải thích |
|---|---|
| `App Router` | Hệ thống routing mới của Next.js 13+ dùng thư mục `app/` |
| `layout.tsx` | Component bao ngoài tất cả các page, chỉ render 1 lần |
| `page.tsx` | Mỗi file `page.tsx` trong `app/` = 1 route URL |
| `metadata` | Export object để cấu hình `<title>`, `<meta>` tự động |
| `next/font/google` | Load Google Font tối ưu, không bị layout shift |
| `shadcn/ui` | Component library — copy code vào project (không phải npm install) |
| `cn()` | Hàm merge Tailwind class, tránh conflict |

---

## 📅 Ngày 23/04/2025 — Buổi 2: Nâng cấp Giao diện

### ✅ Đã làm
- Copy `boone-logo.png` vào `public/` để dùng trên web
- Thêm font **Outfit** cho heading (sang trọng hơn Inter)
- Thiết lập **màu thương hiệu** đỏ `#e5201e` (lấy từ logo)
- Viết lại toàn bộ `page.tsx` với thiết kế premium:
  - Announcement bar màu đỏ thương hiệu
  - Navbar với logo thật + active link indicator
  - Hero section 2 cột với shimmer animation
  - 2 floating badge (giao hàng + rating)
  - Trust badges section (4 ưu điểm)
  - Product grid 4 sản phẩm với hover effects
  - CTA Banner tối với gradient đỏ
  - Footer đầy đủ với logo inverted
- Ẩn Next.js dev indicator (`devIndicators` trong `next.config.ts`)

### 📁 Files thay đổi
```
app/layout.tsx     ← Thêm font Outfit
app/globals.css    ← Thêm brand colors, animations (shimmer, float)
app/page.tsx       ← Viết lại hoàn toàn
public/boone-logo.png  ← [MỚI] Logo thật của shop
next.config.ts     ← devIndicators config
```

### 🧠 Khái niệm học được
| Khái niệm | Giải thích |
|---|---|
| `next/image` | Component `<Image>` tối ưu hình ảnh tự động (resize, lazy load) |
| `CSS @keyframes` | Tạo animation tùy chỉnh (shimmer text, floating badge) |
| `CSS custom properties` | Biến CSS `--color-brand` dùng trong Tailwind |
| `Intl.NumberFormat` | Format số theo locale, dùng cho VND (vi-VN) |
| `group` + `group-hover` | Tailwind: hover vào cha → style con thay đổi |
| `aspect-ratio` | Giữ tỉ lệ ảnh cố định (4/5 cho product card) |
| `translate-y` + `opacity` | Tạo hiệu ứng slide-up cho nút "Thêm vào giỏ" |
| `brightness-0 invert` | Tailwind filter: chuyển ảnh sang trắng trên nền tối |

### 💡 Ghi chú thêm
- Icon "N" góc dưới trái là **Next.js Dev Indicator** — chỉ xuất hiện trong `npm run dev`, không có ở production
- `shadcn/ui` phiên bản này dùng `@base-ui/react` (không phải Radix UI như tài liệu cũ)
- Tailwind v4 dùng cú pháp `@theme inline {}` thay vì `tailwind.config.js`

---

## 📅 Ngày 23/04/2025 — Buổi 3: Trang Sản Phẩm & Apple Design System

### ✅ Đã làm
- Chuẩn hoá toàn bộ giao diện theo `DESIGN.md` (Apple Design System): SF Pro fonts, single accent color (`#0071e3`), card tĩnh (không hover animation), pill buttons.
- Tạo trang Sản phẩm (`/san-pham`) với bố cục sạch sẽ, nhiều white space.
- Thêm thanh tìm kiếm và Sidebar Filters (Kích thước, Màu sắc, Giá).
- Grid sản phẩm responsive (4 cột desktop, 2 cột mobile) với 12 sản phẩm mẫu.
- Cập nhật Navbar trong `app/page.tsx` và `app/san-pham/page.tsx` để link "Sản phẩm" hoạt động.
- Áp dụng triệt để Apple cinematic rhythm: trang chủ (section đen + sáng), trang sản phẩm (section sáng).

### 📁 Files thay đổi
```
app/san-pham/page.tsx  ← [MỚI] Trang danh sách sản phẩm
app/page.tsx           ← Cập nhật UI & Navigation
app/globals.css        ← Chuẩn hoá font SF Pro, xóa hover animation thừa
```

### 🧠 Khái niệm học được
| Khái niệm | Giải thích |
|---|---|
| `Grid Layout` | Dùng `grid-cols-2 md:grid-cols-3 lg:grid-cols-4` cho responsive |
| `Apple Minimalist UI`| Tối giản UI, loại bỏ shadows/borders thừa, dùng typography để tạo phân cấp |

---

## 📅 Ngày 23/04/2025 — Buổi 4: Tính năng Giỏ Hàng (Zustand)

### ✅ Đã làm
- Cài đặt `zustand` và cấu hình store toàn cục `useCartStore` với `persist` middleware để lưu local storage.
- Tách `Navbar` và `Footer` thành components dùng chung, đưa vào `app/layout.tsx`.
- Tạo `CartDrawer` UI với slide-in animation từ bên phải, hiển thị danh sách sản phẩm, tuỳ chỉnh số lượng, tổng tiền.
- Tích hợp badge số lượng trên icon giỏ hàng ở Navbar.
- Tạo component `ProductCard` tái sử dụng, thêm UI chọn Size (nút tròn). Tự động fallback lấy size đầu tiên nếu người dùng không chọn.
- Xóa các code lặp lại Navbar/Footer ở trang chủ và trang Sản phẩm.

### 📁 Files thay đổi
```
lib/store/useCartStore.ts     ← [MỚI] Zustand store
components/cart/CartDrawer.tsx ← [MỚI] UI Giỏ hàng (Sidebar)
components/layout/Navbar.tsx   ← [MỚI] Tách từ page.tsx
components/layout/Footer.tsx   ← [MỚI] Tách từ page.tsx
components/ui/ProductCard.tsx  ← [MỚI] Component thẻ sản phẩm dùng chung
app/layout.tsx                 ← Wrapper global layout
app/page.tsx, app/san-pham/page.tsx ← Refactor dùng ProductCard và xóa layout cũ
```

### 🧠 Khái niệm học được
| Khái niệm | Giải thích |
|---|---|
| `Zustand` | Thư viện quản lý state nhẹ, dễ dùng hơn Redux/Context |
| `Zustand Persist` | Middleware tự động lưu/đồng bộ state vào localStorage |
| `Drawer UI` | Kỹ thuật dùng `fixed`, `z-index` và `translate-x` để làm menu trượt |

---

## 📅 Ngày 23/04/2025 — Buổi 5: Product Detail Page & Dynamic Routes

### ✅ Đã làm
- Gom toàn bộ mock data (dữ liệu mẫu) từ các trang riêng lẻ vào một file trung tâm `lib/data/products.ts`.
- Bổ sung các trường dữ liệu quan trọng như `slug`, `fullDescription`, `material` cho từng sản phẩm.
- Tạo Dynamic Route tại `app/san-pham/[slug]/page.tsx` cho trang Chi tiết Sản phẩm.
- Thiết kế UI trang chi tiết chuẩn Apple:
  - Bố cục 2 cột thoáng đãng, ảnh lớn bo góc nhẹ.
  - Sử dụng Typography `SF Pro Display` cho tiêu đề lớn, `SF Pro Text` cho thông tin.
  - Bổ sung UI chọn Size lớn rõ ràng.
  - Tích hợp nút "Thêm vào giỏ hàng" kết nối trực tiếp với Zustand store.
- Hiển thị danh sách "Sản phẩm liên quan" ở cuối trang.
- Cập nhật mọi thẻ sản phẩm (`ProductCard`) để trỏ link chính xác vào trang chi tiết thông qua `slug`.

### 📁 Files thay đổi
```
lib/data/products.ts                ← [MỚI] Centralized mock data
app/san-pham/[slug]/page.tsx        ← [MỚI] Dynamic Route trang chi tiết
components/ui/ProductCard.tsx       ← Cập nhật link "Xem chi tiết"
app/page.tsx, app/san-pham/page.tsx ← Xóa dữ liệu cứng, import từ file trung tâm
```

### 🧠 Khái niệm học được
| Khái niệm | Giải thích |
|---|---|
| `Dynamic Routes` | Tạo route có biến số dạng `[slug]` trong thư mục để bắt các URL động (ví dụ `/san-pham/ao-thun-den`). |
| `React.use(params)` | Trong Next.js 15+, `params` là một Promise, cần dùng hàm `use()` của React để lấy dữ liệu đồng bộ trong Client Component. |
| `Centralized Data` | Quản lý dữ liệu ở một nơi duy nhất (Single Source of Truth) để tránh việc phải sửa nhiều file khi có thay đổi. |

---

---

## 📅 Ngày 24/04/2025 — Buổi 6: Kết nối Supabase & Refactor Server Components

### ✅ Đã làm
- Kết nối **Supabase** bằng `@supabase/supabase-js`.
- Tạo migration script (`supabase/seed.sql`) để tạo bảng `products` và thiết lập Row Level Security.
- Seed dữ liệu 12 sản phẩm mẫu vào database bằng SQL.
- Định nghĩa kiểu dữ liệu chuẩn (`lib/types.ts`) đồng bộ với schema của bảng.
- **Refactor Server Components (tối ưu SEO & hiệu năng):**
  - Chuyển `app/page.tsx` thành Server Component: Fetch trực tiếp dữ liệu top 8 sản phẩm từ database không cần dùng state hay API client-side. Thay thế sự kiện JS (`onFocus`, `onBlur`) bằng CSS thuần (`focus:outline`).
  - Chuyển `app/san-pham/page.tsx` thành Server Component: Fetch toàn bộ danh sách, truyền dữ liệu qua component con (`ProductsPageClient.tsx`) để thực hiện các thao tác tìm kiếm và lọc phía Client.
  - Chuyển `app/san-pham/[slug]/page.tsx` thành Server Component: Fetch chi tiết sản phẩm và các sản phẩm liên quan theo slug ở server. Bóc tách logic chọn Size và Add to Cart vào một component con `AddToCartSection.tsx` (dùng `"use client"`).
- Xóa bỏ dữ liệu mock tĩnh (`lib/data/products.ts`).

### 📁 Files thay đổi
```
lib/supabase.ts                        ← [MỚI] Supabase client singleton
lib/types.ts                           ← [MỚI] Centralized database interface
supabase/seed.sql                      ← [MỚI] Schema và Mock data
components/san-pham/ProductsPageClient.tsx ← [MỚI] Logic filter (Client)
components/san-pham/AddToCartSection.tsx   ← [MỚI] Logic Add to Cart (Client)
app/page.tsx                           ← Server Component refactoring
app/san-pham/page.tsx                  ← Server Component refactoring
app/san-pham/[slug]/page.tsx           ← Server Component refactoring
components/ui/ProductCard.tsx          ← Map data model Supabase (image_url, original_price, description)
```

### 🧠 Khái niệm học được
| Khái niệm | Giải thích |
|---|---|
| `Server Components vs Client Components` | Server Components dùng để fetch dữ liệu tốt cho SEO và nhẹ client. Client Components (`"use client"`) dùng khi cần state, hooks, event listeners. |
| `Supabase` | Backend-as-a-Service thay thế cho Firebase, dựa trên Postgres. |
| `CSS Focus States` | Dùng các pseudo-class `:focus` trong Tailwind thay vì xử lý bằng event handler JS, tiết kiệm JavaScript payload. |

---

## 🗓️ Kế hoạch tiếp theo (chưa làm)

- [ ] **Auth** — Đăng nhập / đăng ký với Supabase Auth
- [ ] **Stripe** — Tích hợp thanh toán
- [ ] **API Routes** — Tạo backend endpoint với Next.js Route Handlers
- [ ] **Deploy** — Đưa lên Vercel

---

*Cập nhật lần cuối: 24/04/2025*
