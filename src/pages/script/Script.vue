<script setup>
import { ref, reactive } from 'vue';
import ScriptCard from './blocks/ScriptCard';
import TabsCard from './blocks/TabsCard';

const tab = ref(1);

const handleChangeTab = (val) => {
  tab.value = val;
};

const mockTab = reactive({
  id: 1,
  next_answer_id: 2,
  groups: {
    "1": {
      text: "Добрый день! customer.name, вы интересовались товаром - product.name, всё правильно?",
      answers: [
        {
          id: 1,
          text: "Да, это верно!"
        },
        { id: 2, text: "Нет, это неверно." },
        { id: 3, text: "Вы что мошенники? Кто это?" }
      ],
    },
    "2": {
      text: "Добрый день! customer.name, вы интересовались товаром - product.name, всё правильно?",
      answers: [
        { id: 1, text: "Да, это верно!" },
        { id: 2, text: "Нет, это неверно." },
        { id: 3, text: "Вы что мошенники? Кто это?" }
      ],
    },
    "3": {
      text: "Добрый день! customer.name, вы интересовались товаром - product.name, всё правильно?",
      answers: [
        { id: 1, text: "Да, это верно!" },
        { id: 2, text: "Нет, это неверно." },
        { id: 3, text: "Вы что мошенники? Кто это?" }
      ],
    },
    "4": {
      text: "Добрый день! customer.name, вы интересовались товаром - product.name, всё правильно?",
      answers: [
        { id: 1, text: "Да, это верно!" },
        { id: 2, text: "Нет, это неверно." },
        { id: 3, text: "Вы что мошенники? Кто это?" }
      ],
    },
  },
});

const mockTabs = reactive([
  {
    id: 1,
    text: "Добрый день! customer.name, вы интересовались товаром - product.name, всё правильно?",
  },
  {
    id: 2,
    text: "Вы заказываете препарат себе или кому то из своих близких?",
  },
  {
    id: 3,
    text: "Свойства: ManBalance идет в виде 90 капсул, 1уп хватает на 45 дней применения Производство-Россия?",
  }
]);

const localTab = ref(mockTab.id);

const handleChangeMockTab = async (val) => {
  console.log(val)
  localTab.value = val;
};
</script>

<template>
    <div class="h-screen bg-script-bg">
    <div class="py-8 px-12 flex flex-col gap-8 h-full">
      <div class="flex items-center justify-center gap-8 h-full">
        <ScriptCard
          :tab="tab"
          :mockTab="mockTab"
          :localTab="localTab"
        />
        <TabsCard
          :tab="tab"
          :handleChangeTab="handleChangeTab"
          :mockTab="mockTab"
          :mockTabs="mockTabs"
          :handleChangeMockTab="handleChangeMockTab"
          :localTab="localTab"
        />
      </div>
    </div>
  </div>
</template>
