<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="register">
        <div>
          <label>Name:</label>
          <input type="text" v-model="name" required>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" v-model="email" required>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="password" required>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    methods: {
      register() {
        // Implement registration logic here
      }
    }
  }
  </script>