<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <!-- Left Side - Contact Form -->
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Hubungi Kami</h2>
          <p class="text-gray-600 mb-8">
            Kami siap melayani Anda dengan layanan terbaik untuk perawatan dan perbaikan kendaraan Anda.
          </p>
          
          <!-- Success Message -->
          <div 
            v-if="showSuccess" 
            class="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded"
          >
            <div class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p class="text-green-700 font-medium">Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.</p>
            </div>
          </div>

          <!-- Contact Form -->
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <!-- Nama -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Nama Lengkap <span class="text-red-500">*</span>
              </label>
              <input 
                v-model="formData.name"
                type="text" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                :class="{'border-red-500': errors.name}"
                placeholder="Masukkan nama lengkap"
              />
              <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Email <span class="text-red-500">*</span>
              </label>
              <input 
                v-model="formData.email"
                type="email" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                :class="{'border-red-500': errors.email}"
                placeholder="email@example.com"
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
            </div>

            <!-- Telepon -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Nomor Telepon <span class="text-red-500">*</span>
              </label>
              <input 
                v-model="formData.phone"
                type="tel" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                :class="{'border-red-500': errors.phone}"
                placeholder="08xx-xxxx-xxxx"
              />
              <p v-if="errors.phone" class="mt-1 text-sm text-red-500">{{ errors.phone }}</p>
            </div>

            <!-- Subjek -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Subjek <span class="text-red-500">*</span>
              </label>
              <select 
                v-model="formData.subject"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
              >
                <option value="">-- Pilih Subjek --</option>
                <option value="Informasi Layanan">Informasi Layanan</option>
                <option value="Booking Service">Booking Service</option>
                <option value="Pembatalan/Perubahan Booking">Pembatalan/Perubahan</option>
                <option value="Keluhan">Keluhan</option>
                <option value="Saran">Saran</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <!-- Pesan -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Pesan <span class="text-red-500">*</span>
              </label>
              <textarea 
                v-model="formData.message"
                required
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                :class="{'border-red-500': errors.message}"
                placeholder="Tuliskan pesan Anda..."
              ></textarea>
              <p v-if="errors.message" class="mt-1 text-sm text-red-500">{{ errors.message }}</p>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
            >
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSubmitting ? 'Mengirim...' : 'Kirim Pesan' }}
            </button>
          </form>

          <div class="mt-6 pt-6 border-t border-gray-200">
            <h3 class="font-semibold text-gray-900 mb-4">Atau Hubungi Kami Langsung:</h3>
            <div class="space-y-4">
              <!-- Phone -->
              <div class="flex items-start">
                <div class="bg-orange-500 p-2 rounded-lg mr-3">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <div class="text-sm font-semibold text-gray-900">Telepon / WhatsApp</div>
                  <a href="https://wa.me/6282255615571?text=Halo%20CAS%20Garage%2C%20saya%20ingin%20bertanya%20tentang..." target="_blank" rel="noopener noreferrer" class="text-sm text-orange-500 hover:text-orange-600">+62 822-5561-5571</a>
                </div>
              </div>
              
              <!-- Email -->
              <div class="flex items-start">
                <div class="bg-orange-500 p-2 rounded-lg mr-3">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <div class="text-sm font-semibold text-gray-900">Email</div>
                  <a href="mailto:casgarage@gmail.com" class="text-sm text-orange-500 hover:text-orange-600 break-all">casgarage@gmail.com</a>
                </div>
              </div>

              <!-- Address -->
              <div class="flex items-start">
                <div class="bg-orange-500 p-2 rounded-lg mr-3">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <div class="text-sm font-semibold text-gray-900">Alamat Bengkel</div>
                  <p class="text-sm text-gray-600">
                    Tamansari Bukit Mutiara, Gn. Samarinda Baru<br>
                    Kec. Balikpapan Utara, Kota Balikpapan<br>
                    Kalimantan Timur 76128
                  </p>
                </div>
              </div>

              <!-- Jam Operasional -->
              <div class="flex items-start">
                <div class="bg-orange-500 p-2 rounded-lg mr-3">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <div class="text-sm font-semibold text-gray-900">Jam Operasional</div>
                  <p class="text-sm text-gray-600">Senin - Sabtu: 09.00 - 17.00 WITA</p>
                  <p class="text-sm text-gray-600">Minggu: Tutup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right Side - Google Maps -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8957089097926!2d116.86263701066028!3d-1.2321933355644414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1470c2c14e327%3A0x9a853fdfed0699c7!2sCAS%20Garage!5e0!3m2!1sen!2sid!4v1763588331275!5m2!1sen!2sid" 
            width="100%" 
            height="100%" 
            style="border:0; min-height: 500px;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactInfo',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      errors: {},
      isSubmitting: false,
      showSuccess: false
    }
  },
  methods: {
    validateForm() {
      this.errors = {}
      
      // Validate name
      if (this.formData.name.length < 3) {
        this.errors.name = 'Nama minimal 3 karakter'
      }
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(this.formData.email)) {
        this.errors.email = 'Email tidak valid'
      }
      
      // Validate phone
      const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/
      if (!phoneRegex.test(this.formData.phone.replace(/[-\s]/g, ''))) {
        this.errors.phone = 'Nomor telepon tidak valid'
      }
      
      // Validate message
      if (this.formData.message.length < 10) {
        this.errors.message = 'Pesan minimal 10 karakter'
      }
      
      return Object.keys(this.errors).length === 0
    },
    
    async handleSubmit() {
      if (!this.validateForm()) {
        return
      }
      
      this.isSubmitting = true
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Show success message
      this.showSuccess = true
      this.isSubmitting = false
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccess = false
      }, 5000)
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>