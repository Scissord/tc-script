<script setup>
import { ref, reactive, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useOrder } from '@hooks'
import Script from './blocks/Script.vue';
import Tabs from './blocks/Tabs.vue';

const isOrderLoading = ref(false);
const order = reactive({});

const tab = reactive({ id: 1 })
const tabs = reactive([
  { id: 1, label: 'LeadVertex' },
  { id: 2, label: 'Скрипт' },
  { id: 3, label: 'Ещё что-то' }
]);

const route = useRoute();
const order_id = route.params.order_id;

const {
  handleGetOrder,
  handleSaveOrder
} = useOrder();

const loadOrderFromLocalStorage = () => {
  const savedOrder = localStorage.getItem('order');
  if (savedOrder) {
    Object.assign(order, JSON.parse(savedOrder));
    return true;
  }
  return false;
};

watch(
  order,
  (newOrder) => {
    localStorage.setItem('order', JSON.stringify(newOrder));
  },
  { deep: true }
);

onMounted(async () => {
  const isLoadedFromLocalStorage = loadOrderFromLocalStorage();
  if(!isLoadedFromLocalStorage) {
    isOrderLoading.value = true;
    const orderData = await handleGetOrder(order_id);
    Object.assign(order, orderData);
    isOrderLoading.value = false;
  }
})
</script>

<template>
  <div class="h-[80vh] bg-script-bg">
    <div class="py-8 px-12 flex flex-col gap-8 h-full">
      <div class="flex items-center justify-center gap-8 h-full">
        <Script/>
        <Tabs
          :tab="tab"
          :tabs="tabs"
          :order="order"
          :isOrderLoading="isOrderLoading"
          :handleSaveOrder="handleSaveOrder"
        />
      </div>
    </div>
  </div>
</template>
