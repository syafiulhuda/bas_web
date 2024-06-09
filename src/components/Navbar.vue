<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <div class="container">
    <nav>
      <router-link to="/home" class="navbar rounded">Home</router-link>
      <router-link to="/about" class="navbar rounded">About</router-link>
      <router-link to="/transaction" class="navbar rounded">Transaction</router-link>
    </nav>
  </div>
  <RouterView />
</template>

<style>
.container {
  width: auto;
  display: flex;
  justify-content: space-around;

  padding-bottom: 20px;
  /* background-color: aqua; */
}

.navbar {
  padding: 10px 15px;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  background-color: #1f1f1f;
  border-radius: 5px;
  margin-right: 10px;
  font-weight: bold;
}

.navbar:hover {
  background-color: #fff;
  color: #1f1f1f;
}
</style>
