<template>
  <div>
    <Navbar />
    
    
    <div v-if="service" class="bg-white">
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ service.name }}</h2>
          <p class="mt-4 text-gray-600">{{ service.fullDescription }}</p>
          
          <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">Harga</dt>
              <dd class="mt-2 text-sm text-gray-600">{{ service.price }}</dd>
            </div>
            
            
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">Durasi Pengerjaan</dt>
              <dd class="mt-2 text-sm text-gray-600">{{ service.duration }}</dd>
            </div>
            
            
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">Garansi</dt>
              <dd class="mt-2 text-sm text-gray-600">{{ service.warranty }}</dd>
            </div>
            
            
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">Spare Part</dt>
              <dd class="mt-2 text-sm text-gray-600">{{ service.spareParts }}</dd>
            </div>
            
            
            <div class="border-t border-gray-200 pt-4 sm:col-span-2">
              <dt class="font-medium text-gray-900">Yang Termasuk</dt>
              <dd class="mt-2 text-sm text-gray-600">
                <ul class="list-disc list-inside space-y-1">
                  <li v-for="(feature, index) in service.features" :key="index">{{ feature }}</li>
                </ul>
              </dd>
            </div>
            
            
            <div class="border-t border-gray-200 pt-4 sm:col-span-2">
              <dt class="font-medium text-gray-900">Proses Pengerjaan</dt>
              <dd class="mt-2 text-sm text-gray-600">{{ service.process }}</dd>
            </div>
          </dl>
          
          
          <div class="mt-10">
            <router-link 
              to="/booking" 
              class="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
            >
              Booking Sekarang
            </router-link>
          </div>
        </div>
        
        
        <div class="w-full">
          
          <div class="p-1 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div class="p-2 bg-white rounded-lg">
              
              <div class="relative w-full rounded-lg overflow-hidden" style="padding-bottom: 75%; /* 4:3 Aspect Ratio */">
                <img 
                  :src="getServiceImage(service.slug)" 
                  :alt="service.name"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  @error="handleImageError"
                />
              </div>
            </div>
          </div>
          
          
          <div class="mt-6 bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p class="text-sm text-gray-700">
                <span class="font-semibold">{{ service.name }}</span> - Layanan profesional dengan garansi hingga {{ service.warranty }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    <div v-else class="bg-white py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Layanan Tidak Ditemukan</h2>
        <p class="text-gray-600 mb-8">Maaf, layanan yang Anda cari tidak tersedia.</p>
        <router-link 
          to="/services" 
          class="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          Kembali ke Layanan
        </router-link>
      </div>
    </div>
    
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import servicesData from '@/data/servicesData.js'

export default {
  name: 'ServiceDetailPage',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      service: null
    }
  },
  created() {
    
    const slug = this.$route.params.slug
    this.service = servicesData.find(s => s.slug === slug)
  },
  watch: {
    '$route.params.slug'(newSlug) {
      
      this.service = servicesData.find(s => s.slug === newSlug)
    }
  },
  methods: {
    getServiceImage(slug) {
      
      return `/images/services/${slug}.jpg`
    },
    handleImageError(event) {
      
      event.target.src = '/images/services/default.jpg'
    }
  }
}
</script>

<style scoped>

img {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}


@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.p-1 {
  animation: fadeIn 0.5s ease-out;
}
</style>