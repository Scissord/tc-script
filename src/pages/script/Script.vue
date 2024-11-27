<script setup>
import { ref, reactive, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useOrder } from '@hooks'
import ScriptCard from './blocks/ScriptCard.vue';
import TabsCard from './blocks/TabsCard.vue';

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

const clearOtherOrdersFromLocalStorage = () => {
  const currentKey = `order-${order_id}`;
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith('order-') && key !== currentKey) {
      localStorage.removeItem(key);
    }
  });
};

const loadOrderFromLocalStorage = () => {
  const savedOrder = localStorage.getItem(`order-${order_id}`);
  if (savedOrder) {
    Object.assign(order, JSON.parse(savedOrder));
    return true;
  }
  return false;
};

watch(
  order,
  (newOrder) => {
    localStorage.setItem(`order-${order_id}`, JSON.stringify(newOrder));
  },
  { deep: true }
);

onMounted(async () => {
  clearOtherOrdersFromLocalStorage();
  const isLoadedFromLocalStorage = loadOrderFromLocalStorage();
  if(!isLoadedFromLocalStorage) {
    isOrderLoading.value = true;
    const orderData = await handleGetOrder(order_id);
    Object.assign(order, orderData);
    isOrderLoading.value = false;
  }
});
</script>

<template>
  <div class="h-[80vh] bg-script-bg">
    <div class="py-8 px-12 flex flex-col gap-8 h-full">
      <div class="flex items-center justify-center gap-8 h-full">
        <ScriptCard/>
        <TabsCard
          :tab="tab"
          :tabs="tabs"
          :order="order"
          :order_id="order_id"
          :isOrderLoading="isOrderLoading"
          :handleSaveOrder="handleSaveOrder"
        />
      </div>
    </div>
  </div>
</template>
