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
  
      <h1>Event Handling Example</h1>
  
      <dl>
        <!-- a. Inline Handlers -->
        <dt><strong>a. Inline Handlers:</strong></dt>
        <dd>
          <p>In Vue 3, inline event handlers provide a convenient way to associate event listeners directly in the template. For instance, <code>@click="handler"</code> attaches a click event listener to an element, and when the event occurs, it calls the <code>handler</code> method.</p>
        </dd>
  
        <!-- b. Method Handlers -->
        <dt><strong>b. Method Handlers:</strong></dt>
        <dd>
          <p>Method event handlers, on the other hand, involve binding an event to a method defined within your component. Using the syntax <code>@event="methodName"</code>, you link the event to the specified method <code>methodName</code>. When the event takes place, Vue 3 executes the associated method.</p>
        </dd>
      </dl>
  
      <!-- a. Inline Handlers -->
      <h2>a. Inline Handlers</h2>
      <button @click="showAlertInline">Click me for an Inline Handler!</button>
  
      <!-- b. Method Handlers -->
      <h2>b. Method Handlers</h2>
      <button @click="showAlertMethod">Click me for a Method Handler!</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      showAlertInline() {
        alert('You just triggered an Inline Handler!');
      },
      showAlertMethod() {
        alert('You activated a Method Handler!');
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