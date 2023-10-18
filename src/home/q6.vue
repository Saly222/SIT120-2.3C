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
      <h1>List Rendering</h1>
      <p>
        In section "a," we use the "v-for" directive to loop through the properties of the "person" object. The "v-for" directive iterates over the key-value pairs in the object, allowing us to display the keys and their corresponding values.
      </p>
  
      <h3>a. v-for with an Object</h3>
      <ul>
        <li v-for="(value, key) in person" :key="key">
          {{ key }}: {{ value }}
        </li>
      </ul>
      <p>
        Section "b" demonstrates the use of "v-for" with a range. Here, we iterate through numbers from 1 to 5. The "v-for" directive generates a list of items using the specified range, and we display "Item" followed by the number in each list item.
      </p>
  
      <h3>b. v-for with a Range</h3>
      <ul>
        <li v-for="n in 5" :key="n">
          Item {{ n }}
        </li>
      </ul>
      <p>
        In section "c," we utilize "v-for" with "v-if" to filter items based on the "isVisible" property. Items that meet the condition are displayed with their names.
      </p>
      <h3>c. v-for with v-if</h3>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        person: {
          name: 'John',
          age: 30,
          country: 'USA',
        },
        items: [
          { id: 1, name: 'Item 1', isVisible: true },
          { id: 2, name: 'Item 2', isVisible: false },
          { id: 3, name: 'Item 3', isVisible: true },
        ],
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
  