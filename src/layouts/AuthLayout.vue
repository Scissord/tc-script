<script setup>
import { onMounted, watch } from 'vue';
import { useUserStore } from '@store';
import { useRouter } from 'vue-router';

const user = useUserStore();
const router = useRouter();

onMounted(() => {
  if (user.isAuthenticated) {
    router.push('/');
  }
});
</script>

<template>
  <main class="relative">
    <Icon
      icon="fa-regular fa-circle-left"
      class="absolute top-5 left-5 text-2xl cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out"
      @click="router.push('/')"
    />
    <router-view/>
  </main>
</template>

<style>
</style>
