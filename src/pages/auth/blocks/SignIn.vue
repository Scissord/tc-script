<script setup>
import { ref } from 'vue';
import { Button, Input } from '@components';
import { useRouter } from 'vue-router';
const props = defineProps({
  handleSignIn: { type: Function },
})

const router = useRouter();

const login = ref('');
const password = ref('');
</script>

<template>
  <form @submit.prevent="handleLogin" class="w-1/2 flex flex-col justify-between p-12">
    <div class="flex flex-col gap-2">
      <div class="flex items-center justify-center">
        <img
          src="/pics/logo.png"
          class="w-24"
        />
      </div>
      <h1 class="text-4xl font-semibold text-center">
        Авторизация
      </h1>
    </div>

    <div class="flex flex-col gap-4">
      <div>
        <label for="login" class="block text-sm font-medium">
          Логин
        </label>
        <Input
          id="login"
          type="text"
          v-model="login"
          placeholder="username"
          required
        />
      </div>

      <div>
        <label for="password" class="block text-sm font-medium">
          Пароль
        </label>
        <Input
          id="password"
          type="password"
          v-model="password"
          placeholder="******"
          required
        />
      </div>
    </div>

    <Button
      type="submit"
      text="Принять"
      className="rounded-lg w-full bg-blue-500 focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-700"
      @click="async () => {
        await handleSignIn(login, password);
        router.push('/');
      }"
    />

    <div class="flex flex-col">
      <p class="text-sm text-center text-gray-600">
        Forgot your password?
        <a href="#" class="text-blue-600 hover:underline">Restore access</a>
      </p>
    </div>
  </form>
</template>

<style scoped>
</style>
