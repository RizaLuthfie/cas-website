<template>
  <div>
    <Navbar />
    
    <!-- About Me Section -->
    <div class="bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col gap-12">
          
          <!-- Title -->
          <div class="space-y-4 text-center mb-16">
            <h2 class="text-gray-900 text-3xl font-semibold md:text-4xl lg:text-5xl">About Me</h2>
          </div>

          <!-- Profile Section: Info (Left) + Photo (Right) -->
          <div class="max-w-5xl mx-auto w-full">
            <div class="grid md:grid-cols-2 gap-12 items-center">
              
              <!-- Info Section (Left) -->
              <div class="space-y-6">
                <h3 class="text-4xl font-bold text-gray-900">Riza Luthfie Rusmana</h3>
                
                <div class="space-y-3 text-lg">
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <p class="text-gray-600">NIM</p>
                      <p class="text-gray-900 font-semibold">11231088</p>
                    </div>
                    <div>
                      <p class="text-gray-600">Prodi</p>
                      <p class="text-gray-900 font-semibold">Informatika</p>
                    </div>
                  </div>
                  
                  <div>
                    <p class="text-gray-600">Kampus</p>
                    <p class="text-gray-900 font-semibold">Institut Teknologi Kalimantan</p>
                  </div>
                </div>
              </div>

              <!-- Photo Section (Right) -->
              <div class="flex justify-center md:justify-end">
                <img 
                  src="/images/Foto.jpg" 
                  alt="Riza Luthfie Rusmana" 
                  class="w-80 h-80 object-cover"
                />
              </div>
            </div>
          </div>

          <!-- Skills Section - 3 Cards -->
          <div class="max-w-5xl mx-auto w-full mt-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">Skills & Expertise</h3>
            <div class="grid md:grid-cols-3 gap-6">
              
              <!-- Skill Card 1 -->
              <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-gray-900 text-xl mb-2 text-center">Bermain Game</h4>
                <p class="text-gray-600 text-sm text-center leading-relaxed">
                  Suka bermain membuang waktu dengan bermain game.
                </p>
              </div>

              <!-- Skill Card 2 -->
              <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-gray-900 text-xl mb-2 text-center">Tidur</h4>
                <p class="text-gray-600 text-sm text-center leading-relaxed">
                  Suka tidur untuk jika tidak beraktivitas.
                </p>
              </div>

              <!-- Skill Card 3 -->
              <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-gray-900 text-xl mb-2 text-center">Mengerjakan Tugas</h4>
                <p class="text-gray-600 text-sm text-center leading-relaxed">
                  Mengerjakan tugas kuliah yang ada 
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

export default {
  name: 'AboutPage',
  components: {
    Navbar,
    Footer
  }
}
</script>
