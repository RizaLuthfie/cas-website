<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Booking Service</h1>
        <p class="text-xl text-orange-100">Jadwalkan Service Kendaraan Anda Sekarang</p>
      </div>
    </div>

    <!-- Booking Form Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          
          <!-- Success Message -->
          <div 
            v-if="showSuccess" 
            class="mb-8 bg-green-50 border-l-4 border-green-500 p-6 rounded-lg"
          >
            <div class="flex items-center">
              <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h3 class="text-green-800 font-semibold text-lg">Booking Berhasil!</h3>
                <p class="text-green-700 mt-1">Terima kasih {{ formData.name }}! Kami akan menghubungi Anda segera di {{ formData.phone }}</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Form Booking Service</h2>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              
              <!-- Informasi Pelanggan -->
              <div class="border-b border-gray-200 pb-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Informasi Pelanggan</h3>
                
                <div class="grid md:grid-cols-2 gap-6">
                  <!-- Nama Lengkap -->
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

                  <!-- Nomor Telepon -->
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

                  <!-- Alamat -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Alamat <span class="text-red-500">*</span>
                    </label>
                    <input 
                      v-model="formData.address"
                      type="text" 
                      required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Masukkan alamat"
                    />
                  </div>
                </div>
              </div>

              <!-- Informasi Kendaraan -->
              <div class="border-b border-gray-200 pb-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Informasi Kendaraan</h3>
                
                <div class="grid md:grid-cols-2 gap-6">
                  <!-- Jenis Kendaraan -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Jenis Kendaraan <span class="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      value="Mobil"
                      disabled
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
                    />
                    <input type="hidden" v-model="formData.vehicleType" value="Mobil" />
                    <p class="mt-1 text-xs text-gray-500">CAS Garage melayani khusus mobil</p>
                  </div>

                  <!-- Merk Kendaraan -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Merk Mobil <span class="text-red-500">*</span>
                    </label>
                    <input 
                      v-model="formData.brand"
                      type="text" 
                      required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Contoh: Toyota, Honda, Mitsubishi"
                    />
                  </div>

                  <!-- Model/Tipe -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Model/Tipe <span class="text-red-500">*</span>
                    </label>
                    <input 
                      v-model="formData.model"
                      type="text" 
                      required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Contoh: Avanza, Jazz, Xpander"
                    />
                  </div>

                  <!-- Tahun -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Tahun <span class="text-red-500">*</span>
                    </label>
                    <input 
                      v-model="formData.year"
                      type="number" 
                      required
                      min="1990"
                      :max="currentYear"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="2020"
                    />
                  </div>

                  <!-- Nomor Polisi -->
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Polisi <span class="text-red-500">*</span>
                    </label>
                    <input 
                      v-model="formData.plateNumber"
                      type="text" 
                      required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Contoh: KT 1234 AB"
                    />
                  </div>
                </div>
              </div>

              <!-- Jenis Layanan -->
              <div class="border-b border-gray-200 pb-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Jenis Layanan</h3>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Pilih Layanan <span class="text-red-500">*</span>
                  </label>
                  <select 
                    v-model="formData.serviceType"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-xs sm:text-sm"
                    @change="updateServicePrice"
                  >
                    <option value="">Pilih Layanan</option>
                    <option value="Tune Up">Tune Up (200rb)</option>
                    <option value="Service Berkala">Service Berkala (300rb)</option>
                    <option value="Over Haul">Over Haul (8jt)</option>
                    <option value="Ganti Oli">Ganti Oli (150rb)</option>
                    <option value="Engine Tuning">Engine Tuning (1,5jt)</option>
                    <option value="Porting Polish">Porting Polish (2,5jt)</option>
                    <option value="Remap ECU">Remap ECU (3jt)</option>
                  </select>
                  
                  <!-- Service Price Info -->
                  <div v-if="selectedServicePrice" class="mt-3 p-3 bg-orange-50 rounded-lg">
                    <p class="text-sm text-orange-800">
                      <span class="font-semibold">Estimasi Harga:</span> {{ selectedServicePrice }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Jadwal Service -->
              <div class="border-b border-gray-200 pb-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Jadwal Service</h3>
                
                <div class="grid md:grid-cols-2 gap-6">
                  <!-- Tanggal -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Tanggal <span class="text-red-500">*</span>
                    </label>
                    <input 
                      v-model="formData.date"
                      type="date" 
                      required
                      :min="minDate"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <!-- Waktu -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Waktu <span class="text-red-500">*</span>
                    </label>
                    <select 
                      v-model="formData.time"
                      required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                    >
                      <option value="">-- Pilih Waktu --</option>
                      <option value="09:00">09:00 WITA</option>
                      <option value="10:00">10:00 WITA</option>
                      <option value="11:00">11:00 WITA</option>
                      <option value="13:00">13:00 WITA</option>
                      <option value="14:00">14:00 WITA</option>
                      <option value="15:00">15:00 WITA</option>
                      <option value="16:00">16:00 WITA</option>
                    </select>
                  </div>
                </div>
                
                <div class="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p class="text-sm text-blue-800">
                    <span class="font-semibold">Jam Operasional:</span> Senin - Sabtu, 09:00 - 17:00 WITA
                  </p>
                </div>
              </div>

              <!-- Catatan Tambahan -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Catatan Tambahan (Opsional)
                </label>
                <textarea 
                  v-model="formData.notes"
                  rows="4"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Tuliskan keluhan atau informasi tambahan tentang kendaraan Anda..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <div class="flex flex-col sm:flex-row gap-4">
                <button 
                  type="submit"
                  :disabled="isSubmitting"
                  class="flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                >
                  <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ isSubmitting ? 'Memproses...' : 'Kirim Booking' }}
                </button>
                <button 
                  type="button"
                  @click="resetForm"
                  class="flex-1 bg-transparent border-2 border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Reset Form
                </button>
              </div>
            </form>
          </div>

          <!-- Info Box -->
          <div class="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Informasi Penting</h3>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Kami akan menghubungi Anda untuk konfirmasi booking dalam 1x24 jam</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Harap datang 10 menit sebelum waktu yang dijadwalkan</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Untuk pembatalan atau perubahan jadwal, hubungi kami minimal H-1</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

export default {
  name: 'BookingPage',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        email: '',
        address: '',
        vehicleType: 'Mobil',
        brand: '',
        model: '',
        year: '',
        plateNumber: '',
        serviceType: '',
        date: '',
        time: '',
        notes: ''
      },
      errors: {},
      isSubmitting: false,
      showSuccess: false,
      selectedServicePrice: '',
      currentYear: new Date().getFullYear(),
      minDate: new Date().toISOString().split('T')[0]
    }
  },
  methods: {
    validateForm() {
      this.errors = {}
      
      // Validate name
      if (this.formData.name.length < 3) {
        this.errors.name = 'Nama minimal 3 karakter'
      }
      
      // Validate phone
      const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/
      if (!phoneRegex.test(this.formData.phone.replace(/[-\s]/g, ''))) {
        this.errors.phone = 'Nomor telepon tidak valid'
      }
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(this.formData.email)) {
        this.errors.email = 'Email tidak valid'
      }
      
      return Object.keys(this.errors).length === 0
    },
    
    updateServicePrice() {
      const priceMap = {
        'Tune Up': 'Mulai dari Rp 200.000',
        'Service Berkala': 'Mulai dari Rp 300.000',
        'Over Haul': 'Mulai dari Rp 8.000.000',
        'Ganti Oli': 'Mulai dari Rp 150.000',
        'Engine Tuning': 'Mulai dari Rp 1.500.000',
        'Porting Polish': 'Mulai dari Rp 2.500.000',
        'Remap ECU': 'Mulai dari Rp 3.000.000'
      }
      this.selectedServicePrice = priceMap[this.formData.serviceType] || ''
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
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccess = false
        this.resetForm()
      }, 5000)
    },
    
    resetForm() {
      this.formData = {
        name: '',
        phone: '',
        email: '',
        address: '',
        vehicleType: 'Mobil',
        brand: '',
        model: '',
        year: '',
        plateNumber: '',
        serviceType: '',
        date: '',
        time: '',
        notes: ''
      }
      this.errors = {}
      this.selectedServicePrice = ''
    }
  }
}
</script>