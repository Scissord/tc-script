<script setup>
import { computed, watch } from 'vue';
import { Button } from '@components';
const props = defineProps({
  script: Array,
  chapters: Array,
  handleChangeScriptByButton: Function
})
</script>

<template>
  <div class="h-full rounded-lg bg-white w-3/4 border flex flex-col gap-3 px-4 py-4">
    <div v-if="script.length > 0" class="flex flex-col gap-6">
      <p class="text-xl font-bold">{{ script[0].content }}</p>
      <div
        v-for="answer in script[0].answers"
        class="flex items-center gap-3"
      >
        <Button
          :text='answer.content'
          @click="handleChangeScriptByButton(answer)"
        />
      </div>
    </div>
    <p v-else class="text-xl font-bold">
      Выберите сценарий
    </p>
  </div>
</template>
