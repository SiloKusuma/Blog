import catatanAkhirPekan from "./catatan-akhir-pekan";
import memulaiDariKecil from "./memulai-dari-kecil";
import seniMelambat from "./seni-melambat";

export { type BlogPost } from "./types";

export const posts = [memulaiDariKecil, seniMelambat, catatanAkhirPekan];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
