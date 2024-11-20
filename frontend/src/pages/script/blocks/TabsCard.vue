<script setup>
defineProps({
  tab: Number,
  handleChangeTab: Function
})

const tabs = [
  { value: 1, label: "Приветствие" },
  { value: 2, label: "Выявление потребностей" },
  { value: 3, label: "Презентация продукта" },
  { value: 4, label: "Работа с возражениями" },
  { value: 5, label: "Предложение курсов" },
  { value: 6, label: "Предоплата" },
  { value: 7, label: "Заключение сделки" },
  { value: 8, label: "Устный договор" },
]
</script>

<template>
  <div class="w-1/3 bg-script-bg-2 h-full border rounded-lg p-5 flex flex-col gap-2">
    <div
      v-for="tabItem in tabs"
      :key="tabItem.value"
      @click="handleChangeTab(tabItem.value)"
    >
      <p
        :class="[
          'select-none cursor-pointer transition-all duration-200 ease-in-out hover:text-blue-500 p-2 rounded-md',
          tab === tabItem.value ? 'bg-script-selected' : ''
        ]"
      >
        {{ tabItem.label }}
      </p>
    </div>
  </div>
</template>
