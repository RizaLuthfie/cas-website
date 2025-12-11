export const servicesData = [
  {
    id: 1,
    name: "Tune Up",
    slug: "tune-up",
    shortDescription: "Service berkala untuk menjaga performa optimal mesin kendaraan Anda",
    fullDescription: "Tune up adalah perawatan berkala yang sangat penting untuk menjaga performa mesin tetap optimal. Layanan ini mencakup pembersihan sistem bahan bakar, pengecekan dan penyetelan komponen mesin, penggantian busi, filter udara, serta penyetelan karburator atau sistem injeksi untuk memastikan mesin bekerja dengan efisien.",
    icon: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>`,
    price: "Mulai dari Rp 200.000",
    duration: "2-3 jam",
    warranty: "1 bulan",
    features: [
      "Pembersihan sistem bahan bakar",
      "Pengecekan dan penyetelan komponen mesin",
      "Penggantian busi berkualitas",
      "Penggantian filter udara",
      "Penyetelan karburator/injeksi",
      "Pengecekan sistem kelistrikan"
    ],
    spareParts: "Busi, filter udara, oli mesin, additive fuel system",
    process: "Pengecekan kondisi mesin → Pembersihan komponen → Penggantian spare part → Penyetelan mesin → Testing performa"
  },
  {
    id: 2,
    name: "Service Berkala",
    slug: "service-berkala",
    shortDescription: "Perawatan rutin kendaraan sesuai interval untuk menjaga performa optimal",
    fullDescription: "Service berkala adalah perawatan rutin yang dilakukan sesuai interval yang direkomendasikan pabrikan. Layanan ini mencakup pengecekan menyeluruh seluruh sistem kendaraan, penggantian oli dan filter, pemeriksaan rem, suspensi, dan berbagai komponen penting lainnya untuk memastikan kendaraan selalu dalam kondisi prima.",
    icon: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
    </svg>`,
    price: "Mulai dari Rp 300.000",
    duration: "2-4 jam",
    warranty: "Sesuai interval service",
    features: [
      "Penggantian oli mesin berkualitas",
      "Ganti filter oli dan filter udara",
      "Pengecekan sistem rem lengkap",
      "Inspeksi suspensi dan kaki-kaki",
      "Pengecekan sistem kelistrikan",
      "Pengecekan 50 poin kendaraan",
      "Grease dan pelumasan komponen",
      "Test drive setelah service"
    ],
    spareParts: "Oli mesin, filter oli, filter udara, grease",
    process: "Check-in kendaraan → Inspeksi menyeluruh → Penggantian oli & filter → Pengecekan sistem → Pelumasan → Test drive → Quality control"
  },
  {
    id: 3,
    name: "Over Haul",
    slug: "over-haul",
    shortDescription: "Rekondisi mesin menyeluruh untuk mengembalikan performa seperti baru",
    fullDescription: "Over haul mesin adalah proses rekondisi menyeluruh yang melibatkan pembongkaran total mesin untuk mengembalikan kondisi mesin seperti baru. Layanan ini cocok untuk mesin yang sudah berusia, mengalami penurunan performa signifikan, atau memiliki kerusakan internal. Dikerjakan oleh teknisi berpengalaman dengan spare part berkualitas dan garansi terjamin.",
    icon: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
    </svg>`,
    price: "Mulai dari Rp 8.000.000",
    duration: "1-2 minggu",
    warranty: "1 tahun",
    features: [
      "Pembongkaran mesin total",
      "Penggantian piston, ring piston, bearing",
      "Skir blok dan head cylinder",
      "Penggantian semua gasket dan seal",
      "Grinding valve dan valve seat",
      "Pembersihan menyeluruh komponen",
      "Perakitan dengan presisi tinggi",
      "Engine testing dan dyno test"
    ],
    spareParts: "Piston set, ring set, bearing set, gasket kit, valve seal, timing belt/chain, oil pump",
    process: "Pembongkaran mesin → Pengukuran komponen → Skir/bubut → Penggantian parts → Perakitan presisi → Testing → Quality control"
  },
  {
    id: 4,
    name: "Ganti Oli",
    slug: "ganti-oli",
    shortDescription: "Pergantian oli dan filter berkala untuk menjaga kesehatan mesin",
    fullDescription: "Layanan ganti oli menggunakan produk berkualitas tinggi sesuai spesifikasi kendaraan Anda. Oli yang baik adalah kunci untuk menjaga mesin tetap awet dan berperforma optimal. Kami menyediakan berbagai pilihan oli dari synthetic hingga mineral sesuai kebutuhan dan budget Anda, lengkap dengan pengecekan gratis berbagai komponen kendaraan.",
    icon: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
    </svg>`,
    price: "Mulai dari Rp 150.000",
    duration: "30-45 menit",
    warranty: "Sesuai interval service",
    features: [
      "Penggantian oli mesin berkualitas",
      "Ganti filter oli original",
      "Pengecekan level oli transmisi",
      "Pengecekan level coolant",
      "Pengecekan kebocoran oli",
      "Gratis pengecekan 20 poin",
      "Pencatatan history service"
    ],
    spareParts: "Oli mesin (synthetic/semi-synthetic/mineral), filter oli, seal drain plug",
    process: "Kuras oli lama → Ganti filter oli → Isi oli baru sesuai spesifikasi → Pengecekan kebocoran → Pengecekan level → Pencatatan service record"
  },
  {
    id: 5,
    name: "Engine Tuning",
    slug: "engine-tuning",
    shortDescription: "Optimasi performa mesin untuk menghasilkan tenaga maksimal",
    fullDescription: "Engine tuning adalah proses optimasi performa mesin melalui penyetelan dan modifikasi komponen untuk menghasilkan tenaga dan torsi yang lebih besar. Layanan ini mencakup tuning karburator/injeksi, optimasi timing pengapian, penyetelan AFR (Air Fuel Ratio), dan berbagai penyesuaian lainnya untuk memaksimalkan output mesin tanpa mengorbankan keandalan.",
    icon: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>`,
    price: "Mulai dari Rp 1.500.000",
    duration: "1-3 hari",
    warranty: "3 bulan",
    features: [
      "Tuning karburator/sistem injeksi",
      "Optimasi timing pengapian",
      "Penyetelan AFR (Air Fuel Ratio)",
      "Tuning exhaust system",
      "Optimasi intake manifold",
      "Dyno test sebelum dan sesudah",
      "Fine tuning untuk performa optimal",
      "Dokumentasi hasil dyno"
    ],
    spareParts: "Main jet, pilot jet, needle jet, spark plug upgrade, fuel additive",
    process: "Konsultasi kebutuhan → Baseline dyno test → Tuning komponen → Testing performa → Fine tuning → Final dyno test → Dokumentasi"
  },
  {
    id: 6,
    name: "Porting Polish",
    slug: "porting-polish",
    shortDescription: "Modifikasi head cylinder untuk meningkatkan aliran udara dan performa",
    fullDescription: "Porting polish adalah proses modifikasi saluran udara di head cylinder untuk meningkatkan aliran udara masuk dan keluar. Dengan teknik grinding dan polishing yang presisi, kami membentuk ulang saluran intake dan exhaust port untuk mengurangi hambatan aliran, sehingga mesin dapat bernapas lebih baik dan menghasilkan tenaga yang lebih besar.",
    icon: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
    </svg>`,
    price: "Mulai dari Rp 2.500.000",
    duration: "3-5 hari",
    warranty: "6 bulan",
    features: [
      "Pembongkaran head cylinder",
      "Grinding dan polishing intake port",
      "Grinding dan polishing exhaust port",
      "Matching port dengan manifold",
      "Grinding valve seat presisi",
      "Polishing combustion chamber",
      "Flow test untuk hasil optimal",
      "Perakitan dengan gasket baru"
    ],
    spareParts: "Gasket head, valve seal, valve spring (jika perlu), head bolt",
    process: "Pembongkaran head → Pengukuran port → Grinding presisi → Polishing → Flow test → Matching → Perakitan → Testing"
  },
  {
    id: 7,
    name: "Remap ECU",
    slug: "remap-ecu",
    shortDescription: "Tuning software ECU untuk optimasi performa dan efisiensi mesin",
    fullDescription: "Remap ECU adalah proses modifikasi software Engine Control Unit untuk mengoptimalkan performa mesin. Dengan mengubah parameter-parameter seperti fuel mapping, ignition timing, boost pressure (untuk turbo), dan limiter, kami dapat meningkatkan tenaga, torsi, dan responsivitas mesin. Cocok untuk kendaraan injeksi modern yang ingin mendapatkan performa maksimal.",
    icon: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>`,
    price: "Mulai dari Rp 3.000.000",
    duration: "1-2 hari",
    warranty: "6 bulan",
    features: [
      "Backup file ECU original",
      "Custom fuel mapping",
      "Optimasi ignition timing",
      "Boost pressure tuning (turbo)",
      "Rev limiter adjustment",
      "Speed limiter removal",
      "Dyno test sebelum dan sesudah",
      "Fine tuning untuk hasil optimal",
      "File backup disimpan"
    ],
    spareParts: "Tidak ada penggantian spare part fisik (software tuning)",
    process: "Backup ECU original → Reading ECU → Custom mapping → Flashing ECU → Dyno test → Fine tuning → Final test → Dokumentasi"
  }
];

export default servicesData;