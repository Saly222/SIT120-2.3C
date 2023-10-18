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
      <h1>Router Example</h1>
      
      <router-view></router-view>
  </div>
  <h2>a. Vue Router</h2>
<p>
  <code>&lt;a&gt;</code> elements are used as navigation links to navigate to different routes within the Vue application when clicked.
</p>

<h2>b. Navigation Links</h2>
<p>
  The <code>&lt;router-view&gt;</code> component dynamically displays the content of the currently active route, enabling seamless navigation and content loading.
</p>

<h2>c. router-view </h2>
<p>
  Vue Router is an official Vue.js library that provides client-side routing capabilities for building single-page applications (SPAs). It maps URLs to components, enabling dynamic and multi-page experiences within a single-page application.
</p>
    </div>
  </template>
  
  <script>
    // Import Vue and Vue Router
    import { createApp } from 'vue';
    import { createRouter, createWebHistory } from 'vue-router';
  
    // Define components
    const HomeComponent = { template: '<div><h2>Home Page</h2><p>Welcome to the Home page!</p></div>' };
    const AboutComponent = { template: '<div><h2>About Page</h2><p>Learn more about us on the About page.</p></div>' };
    const ContactComponent = { template: '<div><h2>Contact Page</h2><p>Contact us for any inquiries.</p></div>' };
  
    // Create the router
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/', component: HomeComponent },
        { path: '/about', component: AboutComponent },
        { path: '/contact', component: ContactComponent },
      ],
    });
  
    // Create the Vue app
    const app = createApp({
      // Options for the app (if needed)
    });
  
    // Use the router in the app
    app.use(router);
  
    // Mount the app
    app.mount('#app');
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
  