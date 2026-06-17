<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="about-view">
    <nav>
      <RouterLink to="/home">← Back to Tasks</RouterLink>
    </nav>
    <h1>About</h1>
    <h2>Routes</h2>
    <ul>
      <li><code>/home</code> — Task list</li>
      <li><code>/task/:id</code> — Task detail</li>
      <li><code>/about</code> — This page</li>
    </ul>
  </div>
</template>
<style scoped>
.about-view {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  font-family: Arial, sans-serif;
}
a {
  color: #42B883;
  text-decoration: none;
}
h1 {
  color: #1B2A4A;
  margin-bottom: 16px;
}
h2 {
  color: #1B2A4A;
  margin-top: 20px;
}
ul {
  list-style: none;
}
p, li {
  color: #4A5568;
  font-size: 15px;
  line-height: 1.6;
  text-align: left;
}
</style>