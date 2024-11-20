<script setup>
import { ref } from 'vue';
import ScriptCard from './blocks/ScriptCard';
import TabsCard from './blocks/TabsCard';

const tab = ref(1);

const handleChangeTab = (val) => {
  tab.value = val;
};
</script>

<template>
    <div class="h-screen bg-script-bg">
    <div class="py-8 px-12 flex flex-col gap-8 h-full">
      <div class="flex items-center justify-center gap-8 h-full">
        <ScriptCard
          :tab="tab"
        />
        <TabsCard
          :tab="tab"
          :handleChangeTab="handleChangeTab"
        />
      </div>
    </div>
  </div>
</template>
