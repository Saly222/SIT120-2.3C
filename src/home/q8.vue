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
      <h1>Form Input Bindings Example</h1>
  
      <div id="app">
        <h2>v-model with Various Form Input Elements</h2>
        <div id="definitions">
          <h2>Vue 3 Form Input Binding Concepts</h2>
          <dl>
            <!-- Part a: v-model with Various Input Elements -->
            <dt><strong>a. v-model with Various Input Elements:</strong></dt>
            <dd>
              <p><strong>Full Name:</strong> This input field allows users to enter their full name. It is bound to the <code>fullName</code> data property using <code>v-model</code>.</p>
              <p><strong>Checkbox:</strong> This input field is a checkbox that users can select. It is bound to the <code>over18</code> data property using <code>v-model</code>.</p>
              <p><strong>Radio Buttons:</strong> These radio buttons allow users to select an option. They are bound to the <code>musicInterests</code> data property using <code>v-model</code>. Users can choose between "Option 1" and "Option 2."</p>
              <p><strong>Select Dropdown:</strong> This is a select dropdown menu, and it is bound to the <code>selectedValue</code> data property using <code>v-model</code>. Users can choose between "Option 1" and "Option 2."</p>
              <p><strong>Textarea:</strong> This input field allows users to type and edit text. It is bound to the <code>messages</code> data property using <code>v-model</code>.</p>
            </dd>
  
            <!-- Part b: v-model Modifiers -->
            <dt><strong>b. v-model Modifiers:</strong></dt>
            <dd>
              <p><strong>Lazy Modifier:</strong> The "Lazy Modifier" is applied to the input field with the ID "lazy-input." It updates the data property (<code>lazyValue</code>) only after the input loses focus.</p>
              <p><strong>Number Modifier:</strong> The "Number Modifier" is applied to the input field with the ID "number-input." It converts the input value to a numeric type and binds it to the <code>numericValue</code> data property.</p>
              <p><strong>Trim Modifier:</strong> The "Trim Modifier" is applied to the input field with the ID "trim-input." It trims leading and trailing whitespace from the input value before binding it to the <code>trimmedValue</code> data property.</p>
            </dd>
          </dl>
        </div>
        
        <div id="app">
          <h1>Form Input Bindings in Vue</h1>
      
          <!-- Full Name -->
          <div class="input-container">
              <label for="fullName">Full Name:</label>
              <input type="text" v-model="fullName" id="fullName" placeholder="Enter your full name">
          </div>
      
          <!-- Over 18 Checkbox -->
          <div class="input-container">
              <label>Over 18:</label>
              <input type="checkbox" v-model="over18">
          </div>
      
          <!-- Music Interests -->
          <div class="input-container">
              <label>Music Interests:</label>
              <input type="radio" value="Option 1" v-model="musicInterests"> Option 1 (Rap)
              <input type="radio" value="Option 2" v-model="musicInterests"> Option 2 (R&B)
          </div>
      
          <!-- Messages Textarea -->
          <div class="input-container">
              <label>Messages:</label>
              <textarea v-model="messages" placeholder="Type your messages"></textarea>
          </div>
        </div>
  
        <h2>v-model Modifiers</h2>
  
        <div class="input-container">
          <label>Lazy Modifier:</label>
          <input type="text" v-model.lazy="lazyValue" placeholder="Type something">
        </div>
  
        <div class="input-container">
          <label>Number Modifier:</label>
          <input type="number" v-model.number="numericValue" placeholder="Enter a number">
        </div>
  
        <div class="input-container">
          <label>Trim Modifier:</label>
          <input type="text" v-model.trim="trimmedValue" placeholder="Enter text with spaces">
        </div>
        <button @click="submitForm">Submit</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fullName: '',
        over18: false,
        musicInterests: '',
        messages: '',
        lazyValue: '',
        numericValue: null,
        trimmedValue: ''
      };
    },
    methods: {
      submitForm() {
        // Handle form submission here
      }
    }
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