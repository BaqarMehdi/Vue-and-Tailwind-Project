<template>
  <div
    class="grid min-h-[40px] w-full place-items-center overflow-x-scroll rounded-lg p-4 md:overflow-visible"
  >
    <img
      class="object-center w-30 h-12 my-12"
      src="http://dev.schoolpk.com/images/schoolpk-logo-200.png"
      alt="nature image"
    />
  </div>
  <div class="flex justify-center">
    <form class="bg-white p-8 shadow-md rounded-md w-full max-w-md" @submit.prevent="submitForm">
      <h2 class="text-center text-2xl font-bold mb-3 text-grey">Dev School</h2>

      <!-- Your form fields go here -->
      <div class="mb-4">
        <!-- <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username:</label> -->
        <input
          type="text"
          id="username"
          placeholder="Email"
          v-model="username"
          class="w-full border p-2 rounded-md"
        />
        <p v-if="!isValidEmail" class="text-red-500 text-sm mt-1">Please enter a valid email address.</p>
      </div>

      <div class="mb-6">
        <!-- <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label> -->
        <input
          type="password"
          id="password"
          placeholder="Password"
          v-model="password"
          class="w-full border p-2 rounded-md"
        />
        <p v-if="!isValidPassword" class="text-red-500 text-sm mt-1">Password must be at least 5 characters long.</p>
      </div>
      <div class="flex justify-between">
        <Span><input type="checkbox" name="" id="" />Remember me</Span>
        <button 
          type="submit"
          class="bg-blue-500 text-red py-2 px-4 rounded-md hello"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      username: "",
      password: "",
      isValidEmail: true,
      isValidPassword: true,
    };
  },
  methods: {
    submitForm() {
      this.isValidEmail = this.validateEmail(this.username);
      this.isValidPassword = this.validatePassword(this.password);

      if (this.isValidEmail && this.isValidPassword) {
        // Perform additional actions (e.g., API call, authentication)
        this.$router.push('/dashboard');
      }
    },
    validateEmail(email) {
      // Basic email validation
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    },
    validatePassword(password) {
      // Password should be at least 5 characters long
      return password.length >= 5;
    },
  },
};

</script>
<style scoped>
* {
  background-color: white;
}
.hello {
  background-color: blue;
  color: white;
}
</style>
