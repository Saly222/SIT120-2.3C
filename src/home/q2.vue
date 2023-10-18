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
  
      <!-- Heading -->
      <h1>Q2: Exploring Vue 3 Methods</h1>
  
      <!-- Explanation -->
      <p>
        When you click the button below, it invokes the 'greetUser' method, which triggers an alert dialog with a friendly greeting. This example demonstrates how Vue methods can encapsulate actions or behaviors that can be invoked in response to user interactions or other events within a Vue application.
      </p>
  
      <!-- Example of Using a Vue Method -->
      <h2>Example of Using a Vue Method:</h2>
      <ul v-for="(method, index) in methods" :key="index">{{ method }}</ul>
      <button @click="greetUser">Click me to greet the user</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        methods: ['greetUser'],
      };
    },
    methods: {
      greetUser() {
        alert('Hello, user! Welcome to this Vue 3 example.');
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
  