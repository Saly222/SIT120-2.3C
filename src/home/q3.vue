<template>
    <div>
        <div class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/q1">Go to Q1</router-link>
        <router-link to="/q2">Go to Q2</router-link>
        <router-link to="/q3">Go to Q3</router-link>
        <router-link to="/q4">Go to Q4</router-link>
        <router-link to="/q5">Go to Q5</router-link>
        <router-link to="/q6">Go to Q6</router-link>
        <router-link to="/q7">Go to Q7</router-link>
        <router-link to="/q8">Go to Q8</router-link>
        <router-link to="/q9">Go to Q9</router-link>
        <router-link to="/q10">Go to Q10</router-link>
        <router-link to="/q11">Go to Q11</router-link>
        
      </div>
  
      <h1>Reactivity Fundamentals Example</h1>
  
      <div>
        <h2>a. Creating Reactive Data with ref()</h2>
        <p>Vue 3 introduces the powerful <code>ref()</code> function, which is used to create reactive references to values. It allows you to define data that can be used in templates and methods. In this example, we create a reactive counter:</p>
        <p>Counter: {{ counter }}</p>
        <button @click="incrementCounter">Increment</button>
        <button @click="resetCounter">Reset</button> <!-- Added reset button -->
      </div>
  
      <div>
        <h2>b. Simplifying Your Code with <code>&lt;script setup&gt;</code></h2>
        <p>The <code>&lt;script setup&gt;</code> syntax is a revolutionary feature of Vue 3. It simplifies the structure of single-file components and allows you to define data, methods, and computed properties concisely. In this example, we use <code>&lt;script setup&gt;</code> to define a message:</p>
        <p>Message: {{ message }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      // a. Creating Reactive Data with ref()
      const counter = ref(0);
  
      const incrementCounter = () => {
        counter.value++;
      };
  
      // Method to reset the counter
      const resetCounter = () => {
        counter.value = 0;
      };
  
      // b. Simplifying Your Code with <script setup>
      const message = 'Vue 3 Reactivity Fundamentals with <script setup>';
  
      // Expose data and methods to the template
      return {
        counter,
        incrementCounter,
        resetCounter,
        message,
      };
    },
  };
  </script>
  
  <style scoped>
/* styles.css */
body {
  position: relative;
  background-color: #f0f0f0; /* Light gray background */
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.navbar {
  background-color: #1e90ff; /* Dodger Blue background */
  color: white;
  text-align: center;
  padding: 10px 0;
  margin-bottom: 20px;
}

.navbar a {
  color: #fff;
  text-decoration: none;
  margin: 0 20px;
  font-weight: bold;
  transition: color 0.3s;
}

.navbar a:hover {
  color: #ff4500; /* Orange-Red on hover */
}

.page-heading h1 {
  text-align: center;
  font-size: 2.5em;
  color: #333; /* Dark gray text color */
  text-transform: uppercase;
  margin: 20px 0;
}


</style>