import { createRouter, createWebHistory } from 'vue-router';
import homepage from './src/home/homepage.vue'
import Q1 from './src/home/q1.vue'; 
import Q2 from './src/home/q2.vue'; 
import Q3 from './src/home/q3.vue'; 
import Q4 from './src/home/q4.vue'; 
import Q5 from './src/home/q5.vue'; 
import Q6 from './src/home/q6.vue'; 
import Q7 from './src/home/q7.vue'; 
import Q8 from './src/home/q8.vue'; 
import Q9 from './src/home/q9.vue'; 
import Q10 from './src/home/q10.vue'; 
import Q11 from './src/home/q11.vue'; 

const routes = [
  { path: '/', component: homepage }, 
  { path: '/q1', component: Q1 },
  { path: '/q2', component: Q2 },
  { path: '/q3', component: Q3 },
  { path: '/q4', component: Q4 },
  { path: '/q5', component: Q5 },
  { path: '/q6', component: Q6 },
  { path: '/q7', component: Q7 },
  { path: '/q8', component: Q8 },
  { path: '/q9', component: Q9 },
  { path: '/q10', component: Q10 },
  { path: '/q11', component: Q11 }
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
