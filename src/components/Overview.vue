<template>
  <section id="services" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Unggulan Kami</h2>
        <div class="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Kami menyediakan berbagai layanan perawatan dan perbaikan kendaraan dengan teknisi berpengalaman dan peralatan modern
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
        
        <div class="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="bg-orange-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Tune Up</h3>
          <p class="text-gray-600 mb-4">
            Service berkala untuk menjaga performa optimal mesin kendaraan Anda
          </p>
          <div class="text-orange-600 font-semibold mb-4">Mulai dari Rp 200.000</div>
          <router-link 
            to="/services/tune-up" 
            class="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
          >
            Selengkapnya
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </router-link>
        </div>

        
        <div class="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="bg-orange-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Service Berkala</h3>
          <p class="text-gray-600 mb-4">
            Perawatan rutin kendaraan sesuai interval untuk menjaga performa optimal
          </p>
          <div class="text-orange-600 font-semibold mb-4">Mulai dari Rp 300.000</div>
          <router-link 
            to="/services/service-berkala" 
            class="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
          >
            Selengkapnya
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </router-link>
        </div>

        
        <div class="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="bg-orange-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Engine Tuning</h3>
          <p class="text-gray-600 mb-4">
            Optimasi performa mesin untuk menghasilkan tenaga maksimal
          </p>
          <div class="text-orange-600 font-semibold mb-4">Mulai dari Rp 1.500.000</div>
          <router-link 
            to="/services/engine-tuning" 
            class="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
          >
            Selengkapnya
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </router-link>
        </div>
      </div>

      
      <div class="mt-16 grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div class="text-center">
          <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">Teknisi Berpengalaman</h4>
          <p class="text-gray-600 text-sm">Tim profesional dengan sertifikasi dan pengalaman bertahun-tahun</p>
        </div>

        <div class="text-center">
          <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">Spare Part Original</h4>
          <p class="text-gray-600 text-sm">Menggunakan spare part berkualitas dengan garansi resmi</p>
        </div>

        <div class="text-center">
          <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">Pengerjaan Cepat</h4>
          <p class="text-gray-600 text-sm">Efisien dan tepat waktu tanpa mengorbankan kualitas</p>
        </div>

        <div class="text-center">
          <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">Harga Terjangkau</h4>
          <p class="text-gray-600 text-sm">Harga kompetitif dan transparan tanpa biaya tersembunyi</p>
        </div>
      </div>

      
      <div class="text-center mt-12">
        <router-link 
          to="/services" 
          class="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          Lihat Semua Layanan
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Overview'
}
</script>