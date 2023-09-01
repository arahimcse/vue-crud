<template>
    <div>
      <label for="username">Username/Email:</label>
      <input v-model="username" type="text" id="username" />
  
      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" />
  
      <button @click="login">Login</button>
    </div>
  </template>
  
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();

    const login = () => {
      // Perform validation and authentication logic here
      // For simplicity, let's assume the login is successful
      const userData = { username: username.value, email: 'user@example.com' };

      // Redirect to the landing page with user data as query parameters
      router.push({ name: 'landing', query: userData });
    };

    return { username, password, login };
  },
};
</script>
