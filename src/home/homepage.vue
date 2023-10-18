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
      
      <div class="Heading">
        <h1>VUE 3 Concepts Showcased</h1>
      </div>


  
      <h2>Vue 3 Concepts Checklist</h2>
      <ul>
        <li>1. <span class="completed">Template Syntax</span>
          <ul>
            <li>1a. Text Interpolation</li>
            <li>1b. Raw HTML [v-html]</li>
            <li>1c. Attribute Bindings [v-bind:id]</li>
            <li>1d. JavaScript expressions inside syntax i.e.{{ }}</li>
          </ul>
        </li>
        <li>2. <span class="incomplete">Methods</span></li>
        <li>3. <span class="completed">Reactivity Fundamentals</span>
          <ul>
            <li>3a. ref()</li>
            <li>3b. &lt;script setup&gt;</li>
          </ul>
        </li>
        <li>4. <span class="incomplete">Computed Properties</span></li>
        <li>5. <span class="completed">Class and Style Bindings</span>
          <ul>
            <li>5a. Binding HTML class [v-bind:class]</li>
            <li>5b. Binding Inline Styles [v-bind:style]</li>
          </ul>
        </li>
        <li>6. <span class="completed">List Rendering</span>
          <ul>
            <li>6a. v-for with an Object</li>
            <li>6b. v-for with a Range</li>
            <li>6c. v-for on &lt;template&gt;</li>
            <li>6d. v-for with v-if</li>
            <li>6e. v-for with a Component</li>
          </ul>
        </li>
        <li>7. <span class="completed">Event Handling: Listening to Events [v-on:click]</span>
          <ul>
            <li>7a. Inline Handlers</li>
            <li>7b. Method Handlers</li>
          </ul>
        </li>
        <li>8. <span class="completed">Form Input Bindings</span>
          <ul>
            <li>8a. v-model with &lt;input type="text&gt;, &lt;input type="checkbox&gt;, &lt;input type="radio&gt;, &lt;select&gt; and &lt;textarea&gt;</li>
            <li>8b. v-model modifiers [.lazy, .number, .trim]</li>
          </ul>
        </li>
        <li>9. <span class="incomplete">Watchers</span></li>
        <li>10. <span class="incomplete">Components</span>
          <ul>
            <li>10a. Props</li>
            <li>10b. Events [$emit]</li>
            <li>10c. Slots</li>
          </ul>
        </li>
        <li>11. <span class="incomplete">Router</span></li>
      </ul>
    </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        
      };
    },
    methods: {
      
    }
  };

  </script>
  
  <style scoped>
    .Heading {
      height: 200%;
      width: 100%;
      border-radius: 10px;
      text-align: center;
    }
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
