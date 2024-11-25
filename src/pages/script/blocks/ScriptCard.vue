<script setup>
import { ref } from 'vue';
import Hello from './ScriptCard/Hello';
import Needs from './ScriptCard/Needs';
import Presentation from './ScriptCard/Presentation';
import Objections from './ScriptCard/Objections';
import Courses from './ScriptCard/Courses';
import Prepay from './ScriptCard/Prepay';
import Deal from './ScriptCard/Deal';
import Contract from './ScriptCard/Contract';

const props = defineProps({
  tab: { type: Number },
  mockTab: { type: Object },
  localTab: {  type: Number },
})

const currentGroup = ref(props.mockTab.groups["1"]);

const handleChangeCurrentGroup = (val) => {
  currentGroup.value = val;
};
console.log(currentGroup.value);
</script>

<template>
  <div class="w-2/3 h-full border rounded-lg p-5 transition-all ease-in-out duration-300 overflow-y-auto flex flex-col text-black text-sm">

    <!-- <h1 class="font-bold text-2xl animate-slideIn">Скрипт холодного звонка, по товару ManBalance</h1> -->
    <!-- <Hello v-if="tab === 1" />
    <Needs v-if="tab === 2"/>
    <Presentation v-if="tab === 3"/>
    <Objections v-if="tab === 4"/>
    <Courses v-if="tab === 5"/>
    <Prepay v-if="tab === 6"/>
    <Deal v-if="tab === 7"/>
    <Contract v-if="tab === 8"/> -->

    <div class="flex flex-col gap-3">
      <p class="font-bold text-2xl">{{ currentGroup.text }}</p>
      <div
        v-for="(answer, index) in currentGroup.answers"
        :index
      >
        <Button
          text="Close"
          @click="handleChangeCurrentGroup()"
        />
      </div>
    </div>
  </div>
</template>

<style>
@keyframes slideIn {
  0% {
    transform: translateX(30%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slideIn {
  animation: slideIn 0.3s ease-out forwards;
}
</style>
