import type { BlogPost } from "./types";

const post: BlogPost = {
  slug: "catatan-akhir-pekan",
  title: "Catatan kecil dari akhir pekan",
  date: "2026-09-12",
  category: "Jurnal",
  excerpt:
    "Jalan pagi, obrolan panjang, dan pengingat sederhana bahwa bahagia kadang tinggal di hal biasa.",
  readingTime: "3 menit membaca",
  coverWord: "hari.",
  sections: [
    {
      heading: "Pagi tanpa terburu-buru",
      paragraphs: [
        "Akhir pekan kemarin dimulai tanpa alarm. Cahaya matahari masuk pelan dari sela tirai, dan untuk sekali ini aku tidak langsung meraih ponsel begitu membuka mata.",
        "Aku berjalan ke kedai kecil dekat rumah, memesan kopi susu, lalu memilih duduk di meja dekat jendela. Tidak ada agenda besar. Hanya melihat orang-orang memulai harinya masing-masing.",
      ],
    },
    {
      heading: "Hal biasa yang ternyata cukup",
      paragraphs: [
        "Siangnya kuhabiskan dengan membaca beberapa halaman buku dan mengobrol lama dengan seorang teman. Topiknya berpindah-pindah, dari rencana kecil sampai kenangan yang sudah lama tidak kami ceritakan.",
        "Pulangnya aku sadar: akhir pekan yang baik tidak harus selalu diisi perjalanan jauh atau cerita besar. Terkadang, ruang untuk bernapas dan orang yang tepat sudah lebih dari cukup.",
      ],
    },
  ],
};

export default post;
