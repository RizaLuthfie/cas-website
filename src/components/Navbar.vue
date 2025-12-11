<template>
  <nav class="bg-gray-900 text-white shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo & Brand -->
        <router-link to="/" class="flex items-center space-x-3">
          <div class="text-2xl font-bold text-orange-500">CAS</div>
          <div class="text-sm">
            <div class="font-semibold">Cihampelas Auto Service</div>
            <div class="text-xs text-gray-400">Professional Car Care</div>
          </div>
        </router-link>
        
        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-8">
          <router-link 
            to="/" 
            class="hover:text-orange-500 transition-colors duration-300"
            active-class="text-orange-500 font-semibold"
          >
            Beranda
          </router-link>
          <router-link 
            to="/services" 
            class="hover:text-orange-500 transition-colors duration-300"
            active-class="text-orange-500 font-semibold"
          >
            Layanan
          </router-link>
          <router-link 
            to="/about" 
            class="hover:text-orange-500 transition-colors duration-300"
            active-class="text-orange-500 font-semibold"
          >
            Tentang Kami
          </router-link>
          <router-link 
            to="/contact" 
            class="hover:text-orange-500 transition-colors duration-300"
            active-class="text-orange-500 font-semibold"
          >
            Hubungi Kami
          </router-link>
          <router-link 
            to="/booking" 
            class="hover:text-orange-500 transition-colors duration-300"
            active-class="text-orange-500 font-semibold"
          >
            Booking
          </router-link>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen" 
          class="md:hidden focus:outline-none"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden pb-4">
        <router-link 
          to="/" 
          class="block py-2 hover:text-orange-500"
          @click="mobileMenuOpen = false"
        >
          Beranda
        </router-link>
        <router-link 
          to="/services" 
          class="block py-2 hover:text-orange-500"
          @click="mobileMenuOpen = false"
        >
          Layanan
        </router-link>
        <router-link 
          to="/about" 
          class="block py-2 hover:text-orange-500"
          @click="mobileMenuOpen = false"
        >
          Tentang Kami
        </router-link>
        <router-link 
          to="/contact" 
          class="block py-2 hover:text-orange-500"
          @click="mobileMenuOpen = false"
        >
          Hubungi Kami
        </router-link>
        <router-link 
          to="/booking" 
          class="block py-2 hover:text-orange-500"
          @click="mobileMenuOpen = false"
        >
          Booking
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      mobileMenuOpen: false
    }
  }
}
</script>