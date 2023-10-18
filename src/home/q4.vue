<template>
    <div>
      <!-- Navigation bar -->
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
  
      <!-- Computed Properties Example -->
      <h1>Computed Properties Example</h1>
  
      <!-- Computed Property Example -->
      <div>
        <h2>Computed Property Example</h2>
        <p>Computed properties are a powerful feature in Vue 3. They allow you to define derived data based on your reactive data. Here's a simple example:</p>
        <p>Enter a number: <input v-model="number"></p>
        <p>Square of the number: {{ square }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        number: 0,
      };
    },
    computed: {
      square() {
        return this.number ** 2;
      },
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
  