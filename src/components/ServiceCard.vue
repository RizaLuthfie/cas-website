<template>
  <div class="relative pl-16">
    <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-orange-500">
      <div v-html="service.icon"></div>
    </div>
    <div>
      <h3 class="text-base font-semibold text-gray-900 mb-2">{{ service.name }}</h3>
      <p class="text-base text-gray-600 mb-3">{{ service.shortDescription }}</p>
      <div class="text-sm text-orange-600 font-semibold mb-3">{{ service.price }}</div>
      <router-link 
        :to="`/services/${service.slug}`" 
        class="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors"
      >
        Selengkapnya
        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>