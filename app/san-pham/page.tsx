import { supabase } from "@/lib/supabase";
import { ProductsPageClient } from "@/components/san-pham/ProductsPageClient";
import { Product } from "@/lib/types";

export const revalidate = 60; // revalidate every 60 seconds if not dynamic

export default async function ProductsPage() {
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <ProductsPageClient initialProducts={(products as Product[]) || []} />
  );
}
