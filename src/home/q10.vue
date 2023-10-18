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
  
      <h1>Components Example</h1>
  
      <h2>a. Props</h2>
      <p>
        Props (short for "properties") are a way to pass data from a parent component to a child component. They allow the parent to share information with the child, making it dynamic and reusable.
      </p>
  
      <h2>b. Events [$emit]</h2>
      <p>
        Events, often triggered with `$emit`, enable child components to communicate with their parent components. They're used to notify the parent about specific actions or changes within the child component.
      </p>
  
      <h2>c. Slots</h2>
      <p>
        Slots are placeholders in a component that allow the parent component to inject custom content. They offer flexibility in customizing the appearance and structure of a component while keeping the component reusable.
      </p>
  
      <!-- Child Component (a) -->
      <div>
        <p>Prop (a): {{ message }}</p>
        <button @click="emitCustomEvent">Click me (b)</button>
        <p v-if="buttonClicked">Button Clicked!</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Hello from Parent',
        buttonClicked: false,
      };
    },
    methods: {
      emitCustomEvent() {
        this.buttonClicked = true;
        this.$emit('custom-event', 'Data from Child');
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