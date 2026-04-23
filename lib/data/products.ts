export interface Product {
  id: number;
  name: string;
  slug: string;
  desc?: string;
  fullDescription?: string;
  material?: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  image: string;
  sizes: string[];
  colors?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Áo Thun Trắng Basic",
    slug: "ao-thun-trang-basic",
    desc: "Cotton 100% mềm mịn, form regular fit chuẩn unisex",
    fullDescription: "Áo thun trắng basic là món đồ không thể thiếu trong tủ đồ của bất kỳ ai. Với thiết kế tối giản, dễ dàng phối hợp với mọi trang phục từ quần jeans, shorts đến chân váy. Đường may tỉ mỉ, chắc chắn, không bị giãn hay xù lông sau nhiều lần giặt.",
    material: "100% Cotton tự nhiên định lượng 250gsm, thoáng mát, thấm hút mồ hôi cực tốt.",
    price: 299000,
    badge: "Bán chạy",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Trắng"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=900&fit=crop",
  },
  {
    id: 2,
    name: "Áo Thun Đen Oversize",
    slug: "ao-thun-den-oversize",
    desc: "Form rộng thoải mái, phù hợp mọi vóc dáng",
    fullDescription: "Thiết kế oversize mang lại cảm giác năng động và phóng khoáng. Áo thun đen oversize dễ dàng che khuyết điểm cơ thể, tôn lên phong cách streetwear hiện đại. Bề mặt vải được xử lý mượt mà, chống bám bụi hiệu quả.",
    material: "Cotton pha Spandex (95% Cotton, 5% Spandex), co giãn nhẹ, giữ form cực chuẩn.",
    price: 349000,
    originalPrice: 420000,
    badge: "Giảm 17%",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Đen"],
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=900&fit=crop",
  },
  {
    id: 3,
    name: "Áo Thun Vintage Logo",
    slug: "ao-thun-vintage-logo",
    desc: "Thiết kế retro độc đáo, chất liệu cotton wash",
    fullDescription: "Lấy cảm hứng từ phong cách retro thập niên 90, chiếc áo nổi bật với logo in nhám thủ công, tạo hiệu ứng phai màu tự nhiên đầy nghệ thuật. Thích hợp cho những người yêu thích sự hoài cổ nhưng vẫn mang hơi thở hiện đại.",
    material: "Cotton Wash cao cấp định lượng 220gsm, tạo hiệu ứng màu bụi bặm, bền bỉ.",
    price: 379000,
    sizes: ["S", "M", "L"],
    colors: ["Xám", "Trắng"],
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&h=900&fit=crop",
  },
  {
    id: 4,
    name: "Áo Thun Pastel Summer",
    slug: "ao-thun-pastel-summer",
    desc: "Màu sắc tươi mát, nhẹ nhàng cho mùa hè",
    fullDescription: "Bộ sưu tập màu pastel mang lại sự tươi mát, xua tan cái nóng rực của mùa hè. Công nghệ nhuộm Eco-friendly an toàn cho mọi loại da, không gây kích ứng. Cổ áo bo gân 2 lớp chống bai nhão hoàn hảo.",
    material: "Cotton Organic 100%, cực kỳ mềm mại và thân thiện với môi trường.",
    price: 319000,
    badge: "Mới về",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Xanh dương", "Hồng"],
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=900&fit=crop",
  },
  {
    id: 5,
    name: "Áo Thun Graphic Art",
    slug: "ao-thun-graphic-art",
    desc: "In hoạ tiết nghệ thuật độc quyền từ nghệ sĩ Việt",
    fullDescription: "Mỗi chiếc áo là một tác phẩm nghệ thuật thu nhỏ. Hoạ tiết được in bằng công nghệ in kéo lụa thủ công kết hợp mực in cao cấp từ Nhật Bản, đảm bảo hình in sắc nét, không bong tróc kể cả khi giặt máy.",
    material: "100% Cotton 2 chiều, đứng form, ít nhăn.",
    price: 399000,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Đen", "Trắng"],
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=900&fit=crop",
  },
  {
    id: 6,
    name: "Áo Thun Stripe Essential",
    slug: "ao-thun-stripe-essential",
    desc: "Sọc cổ điển, dễ phối đồ với mọi phong cách",
    fullDescription: "Họa tiết kẻ sọc ngang vượt thời gian, chưa bao giờ lỗi mốt. Đường kẻ được dệt liền khối (yarn-dyed) thay vì in, giúp áo luôn giữ được màu sắc sắc nét, không bị lem hay phai màu sau thời gian dài sử dụng.",
    material: "Cotton pha French Terry mỏng, tạo cấu trúc bền bỉ nhưng vẫn thoáng khí.",
    price: 329000,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Trắng/Đen"],
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&h=900&fit=crop",
  },
  {
    id: 7,
    name: "Áo Thun Minimalist Pocket",
    slug: "ao-thun-minimalist-pocket",
    desc: "Tối giản với điểm nhấn túi vuông nhỏ trước ngực",
    fullDescription: "Sự kết hợp hoàn hảo giữa thiết kế tối giản và tính tiện dụng. Túi vuông trước ngực được may viền tỉ mỉ, tạo điểm nhấn tinh tế trên nền áo trơn. Phù hợp mặc đi làm, đi chơi hay những buổi cà phê dạo phố nhẹ nhàng.",
    material: "Premium Cotton 100%, mềm mại, không xù lông.",
    price: 259000,
    sizes: ["M", "L", "XL"],
    colors: ["Xám", "Trắng", "Đen"],
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&h=900&fit=crop",
  },
  {
    id: 8,
    name: "Áo Thun Earth Tone",
    slug: "ao-thun-earth-tone",
    desc: "Tông màu đất trầm ấm, thanh lịch",
    fullDescription: "Bộ sưu tập mang tông màu trầm ấm của đất, mang lại cảm giác bình yên, gần gũi với thiên nhiên. Form áo suông nhẹ, tay áo lỡ tạo độ rủ vừa phải, mang lại vẻ ngoài thanh lịch không kém phần hiện đại.",
    material: "Cotton Blend (70% Cotton, 30% Poly), chống nhăn tuyệt đối.",
    price: 289000,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Be", "Nâu"],
    image: "https://images.unsplash.com/photo-1618517351616-389a7f339cf0?w=800&h=900&fit=crop",
  },
  {
    id: 9,
    name: "Áo Thun Thể Thao Active",
    slug: "ao-thun-the-thao-active",
    desc: "Chuyên dụng cho các hoạt động thể thao cường độ cao",
    fullDescription: "Được thiết kế riêng cho những ngày vận động nhiều. Áo có khả năng kháng khuẩn, chống mùi hiệu quả. Công nghệ dệt lưới tại vùng nách và lưng giúp tản nhiệt nhanh chóng, giữ cơ thể luôn khô ráo.",
    material: "100% Polyester Quick-Dry công nghệ mới, siêu nhẹ, thoát mồ hôi trong 5 giây.",
    price: 249000,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Đen", "Xanh navy"],
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=900&fit=crop",
  },
  {
    id: 10,
    name: "Áo Thun Cổ V Thanh Lịch",
    slug: "ao-thun-co-v-thanh-lich",
    desc: "Cổ V cắt sâu vừa phải, tôn lên đường nét khuôn mặt",
    fullDescription: "Thay thế chiếc cổ tròn truyền thống, thiết kế cổ V mang lại diện mạo sắc sảo, nam tính và trưởng thành hơn. Đường viền cổ được gia cố kép, không bị mất form sau thời gian dài sử dụng.",
    material: "Supima Cotton nhập khẩu, bề mặt bóng bẩy sang trọng.",
    price: 310000,
    sizes: ["M", "L", "XL"],
    colors: ["Trắng", "Đen"],
    image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&h=900&fit=crop",
  },
  {
    id: 11,
    name: "Áo Thun Wash Loang",
    slug: "ao-thun-wash-loang",
    desc: "Hiệu ứng wash loang màu ngẫu nhiên (Acid Wash)",
    fullDescription: "Sản phẩm được áp dụng kỹ thuật Acid Wash thủ công, khiến mỗi chiếc áo ra lò đều là độc bản với họa tiết loang màu không trùng lặp. Đậm chất grunge bụi bặm, phá cách cho những ai muốn khẳng định cá tính riêng.",
    material: "Cotton Pháp dày dặn 280gsm, kỹ thuật wash công nghệ cao.",
    price: 450000,
    badge: "Limited",
    sizes: ["L", "XL", "XXL"],
    colors: ["Xám loang"],
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&h=900&fit=crop",
  },
  {
    id: 12,
    name: "Áo Thun Trơn Dày Dặn",
    slug: "ao-thun-tron-day-dan",
    desc: "Định lượng vải cao, form dáng cứng cáp",
    fullDescription: "Dành cho những tín đồ của dòng áo heavyweight. Áo vô cùng cứng cáp, không bị lộ khuyết điểm cơ thể. Phù hợp mặc vào những ngày thu se lạnh hoặc layering cùng áo khoác, áo sơ mi mỏng.",
    material: "100% Heavy Cotton 300gsm, đầm tay, bền bỉ cùng năm tháng.",
    price: 360000,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Trắng", "Đen", "Kem"],
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&h=900&fit=crop",
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getRelatedProducts(currentId: number, limit: number = 4): Product[] {
  return products.filter(p => p.id !== currentId).slice(0, limit);
}
