<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-3 mb-4">
            <div class="text-3xl font-bold text-orange-500">CAS</div>
            <div>
              <div class="font-semibold text-white">Cihampelas Auto Service</div>
              <div class="text-sm text-gray-400">Bengkel Terpercaya Balikpapan</div>
            </div>
          </div>
          <p class="text-gray-400 mb-4">
            Bengkel spesialis perawatan dan perbaikan kendaraan dengan teknisi berpengalaman. 
            Kami berkomitmen memberikan layanan terbaik untuk kendaraan Anda.
          </p>
          <div class="flex space-x-4">
            <a href="https://www.instagram.com/cas.garage/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" class="hover:text-orange-500 transition-colors" aria-label="Instagram">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@cas.garage.balikpapan?_r=1&_t=ZS-925a08WJXGy" target="_blank" rel="noopener noreferrer" class="hover:text-orange-500 transition-colors" aria-label="TikTok">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
            <a href="https://www.youtube.com/@casgaragebalikpapan9088" target="_blank" rel="noopener noreferrer" class="hover:text-orange-500 transition-colors" aria-label="YouTube">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-semibold mb-4">Menu</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="hover:text-orange-500 transition-colors">Beranda</router-link></li>
            <li><router-link to="/services" class="hover:text-orange-500 transition-colors">Layanan</router-link></li>
            <li><router-link to="/about" class="hover:text-orange-500 transition-colors">Tentang Kami</router-link></li>
            <li><router-link to="/contact" class="hover:text-orange-500 transition-colors">Hubungi Kami</router-link></li>
          </ul>
        </div>
        
        <!-- Services -->
        <div>
          <h3 class="text-white font-semibold mb-4">Layanan Kami</h3>
          <ul class="space-y-2">
            <li><router-link to="/services/tune-up" class="text-gray-400 hover:text-orange-500 transition-colors">Tune Up</router-link></li>
            <li><router-link to="/services/service-berkala" class="text-gray-400 hover:text-orange-500 transition-colors">Service Berkala</router-link></li>
            <li><router-link to="/services/over-haul" class="text-gray-400 hover:text-orange-500 transition-colors">Over Haul</router-link></li>
            <li><router-link to="/services/ganti-oli" class="text-gray-400 hover:text-orange-500 transition-colors">Ganti Oli</router-link></li>
            <li><router-link to="/services/engine-tuning" class="text-gray-400 hover:text-orange-500 transition-colors">Engine Tuning</router-link></li>
            <li><router-link to="/services/porting-polish" class="text-gray-400 hover:text-orange-500 transition-colors">Porting Polish</router-link></li>
            <li><router-link to="/services/remap-ecu" class="text-gray-400 hover:text-orange-500 transition-colors">Remap ECU</router-link></li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Cihampelas Auto Service. Hak Cipta Dilindungi.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>