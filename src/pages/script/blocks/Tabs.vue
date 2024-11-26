<script setup>
import { Loader } from '@components'
import LeadVertex from './Tabs/LeadVertex.vue';
defineProps({
  tab: Object,
  tabs: Array,
  order: Object,
  isOrderLoading: Boolean,
  handleSaveOrder: Function
})
</script>

<template>
  <div class="h-full w-1/4 bg-white border border-slate-200 rounded-lg p-4 overflow-y-auto">
    <div class="flex items-center justify-center gap-6">
      <div
        v-for="t in tabs"
        :class='["border-b-2 border-slate-200 cursor-pointer select-none", tab.id === t.id ? "border-blue-500" : ""]'
        @click="tab.id = t.id"
      >
        {{t.label}}
      </div>
    </div>
    <!-- Leadvertex -->
    <LeadVertex
      v-if="tab.id === 1 && !isOrderLoading && Object.keys(order).length > 0"
      :order="order"
      :handleSaveOrder="handleSaveOrder"
    />
    <Loader v-else/>
    <!-- Скрипт -->
    <div v-if="tab.id === 2">

    </div>

    <!-- Ещё что-то -->
    <div v-if="tab.id === 3">

    </div>
  </div>
</template>
