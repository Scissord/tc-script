<script setup>
import { useAuth } from '@hooks';
import SignIn from './SignIn.vue';

const {
  handleSignIn,
} = useAuth();

</script>

<template>
  <div class="h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white rounded-xl shadow-md w-[70%] h-[80%] flex">
      <div class="w-1/2 flex items-center justify-center">
        <video src="/video/auth.mp4" muted autoplay loop/>
      </div>
      <SignIn
        :handleSignIn="handleSignIn"
      />
    </div>
  </div>
</template>

<style scoped>
</style>
