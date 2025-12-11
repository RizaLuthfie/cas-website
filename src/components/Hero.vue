<template>
  <div class="relative text-white overflow-hidden min-h-[500px]">
    <!-- Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('/images/CAS_GARAGE.jpg');"
    >
      <!-- Dark Overlay untuk readability text -->
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70"></div>
    </div>
    
    <!-- Hero Content -->
    <div class="relative container mx-auto px-4 py-24 md:py-32 z-10">
      <div class="max-w-3xl mx-auto text-center">
        <div class="mb-6">
          <span class="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Bengkel Terpercaya Balikpapan
          </span>
        </div>
        
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Solusi Lengkap Perawatan Kendaraan Anda
        </h1>
        
        <p class="text-lg md:text-xl text-gray-300 mb-8">
          Layanan profesional dengan teknisi berpengalaman dan peralatan modern untuk semua jenis kendaraan
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/services" 
            class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Layanan Kami
          </router-link>
          <router-link 
            to="/contact" 
            class="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Hubungi Kami
          </router-link>
        </div>
      </div>
    </div>
    
    <!-- Decorative Element -->
    <div class="absolute bottom-0 left-0 right-0 z-10">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>