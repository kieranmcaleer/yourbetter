<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit() {
      try {
        // Send a POST request to your backend API with the email and password
        // Use an axios instance or the fetch API to make the request
        const response = await axios.post('/api/login', {
          email: this.email,
          password: this.password
        })
        
        // If the login was successful, save the JWT token to localStorage or a cookie
        // Redirect the user to the home page or another authorized page
        localStorage.setItem('token', response.data.token)
        this.$router.push('/')
      } catch (error) {
        // If the login failed, show an error message
        console.log(error)
        alert('Login failed. Please check your credentials and try again.')
      }
    }
  }
}
</script>
