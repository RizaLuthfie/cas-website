<template>
  <div>
    <Navbar />
    
    
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold text-orange-500">Layanan Profesional</h2>
          <p class="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Semua yang Anda Butuhkan untuk Kendaraan Anda
          </p>
          <p class="mt-6 text-lg text-gray-700">
            Kami menyediakan berbagai layanan perawatan dan perbaikan kendaraan dengan teknisi berpengalaman dan peralatan modern. Kepuasan Anda adalah prioritas kami.
          </p>
        </div>
        
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            
            <ServiceCard 
              v-for="service in services" 
              :key="service.id"
              :service="service"
            />
          </dl>
        </div>
      </div>
    </div>
    
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import ServiceCard from './ServiceCard.vue'
import servicesData from '@/data/servicesData.js'

export default {
  name: 'ServicesPage',
  components: {
    Navbar,
    Footer,
    ServiceCard
  },
  data() {
    return {
      services: servicesData
    }
  }
}
</script>