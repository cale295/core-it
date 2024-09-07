import React from "react";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";
  
const features = [
    { 
      name: "Type Script",
      description: "TypeScript adalah superset JavaScript yang menambahkan tipe statis, membantu dalam pengembangan aplikasi berskala besar dan meningkatkan ketahanan terhadap kesalahan.",
      href: "https://www.typescriptlang.org",
      cta: "Learn more",
      background: <img src="/img/ts.png" alt="" className="absolute inset-0 object-cover opacity-35"></img>,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      name: "WebAssembly",
      description: "WebAssembly adalah format instruksi biner yang memungkinkan kode berjalan di web dengan performa mendekati native. Ini memungkinkan bahasa lain seperti C, C++, dan Rust untuk dijalankan di browser.",
      href: "https://webassembly.org",
      cta: "Learn more",
      background: <img src="/img/wasm.png" alt="" className="absolute inset-0 object-cover opacity-35"></img>,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      name: "IPv6 Adoption",
      description: "IPv6 adalah versi terbaru dari Protokol Internet, menawarkan jumlah alamat IP yang sangat besar dan meningkatkan keamanan dibandingkan dengan IPv4.",
      href: "https://www.worldipv6launch.org",
      cta: "Learn more",
      background: <img src="/img/ipv6.png" alt="" className="absolute inset-0 object-cover opacity-35"></img>,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      name: "Zero Trust Security Model",
      description: "Model Zero Trust mengasumsikan bahwa ancaman bisa datang dari dalam atau luar jaringan, sehingga memverifikasi semua akses dengan ketat, terlepas dari lokasi.",
      href: "https://www.microsoft.com/en-us/security/business/zero-trust",
      cta: "Learn more",
      background: <img src="/img/zerot.png" alt="" className="absolute inset-0 object-cover opacity-35"></img>,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      name: "Artificial Intelligence in Cybersecurity",
      description: "AI digunakan untuk mendeteksi dan merespons ancaman dengan lebih cepat melalui analisis pola dan perilaku yang mencurigakan.",
      href: "https://www.ibm.com/ai-cybersecurity",
      cta: "Learn more",
      background: <img src="/img/aics.png" alt="" className="absolute inset-0 object-cover opacity-35"></img>,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];
  
export function Blog() {
  return (
    <div id="news"  className="bg-slate-950 flex flex-col justify-center text-black items-center min-h-screen p-10">
      <h1 className=" text-white font-bold text-4xl md:text-8xl py-4">NEWS</h1>
      <BentoGrid className="lg:grid-rows-3 max-h-[600px] overflow-y-auto md:h-auto">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
  