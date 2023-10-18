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
  
      <div>
        <h1>Watchers Example</h1>
        <p>Timestamp: {{ timestamp }}</p>
        <p>Formatted Date: {{ formattedDate }}</p>
        <input type="text" v-model="timestamp">
      </div>
  
      <dt><strong>Watchers Example</strong></dt>
      <dd>
        <p>
          Watchers in Vue 3 allow you to perform asynchronous or expensive operations in response to changes in a specific data property or computed property. Watchers are useful when you need to observe and react to changes in data.
        </p>
      </dd>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        timestamp: Date.now(), // Initial timestamp
        formattedDate: new Date(Date.now()).toLocaleString(),
      };
    },
    watch: {
      timestamp(newTimestamp) {
        this.formattedDate = new Date(newTimestamp).toLocaleString();
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