<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
// import { useAuthStore } from './stores/auth'

// const auth = useAuthStore()
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo_2_bg.png" width="150" height="150" />
    <div class="wrapper">
      <Header> </Header>
      <!-- <RouterLink to="/">Login</RouterLink> -->
      <!-- <nav v-if="!auth.isLoggedIn">
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/transaction">Transaction</RouterLink>
      </nav> -->
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  line-height: 1.5;
  max-height: 100vh;
  padding-right: calc(var(--section-gap) / 2);
}

.logo {
  margin-right: 2rem;
}

.wrapper {
  display: flex; /* Gunakan Flexbox untuk wrapper */
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    padding-right: calc(var(--section-gap) / 2);
  }

  .wrapper {
    flex-direction: row;
    align-items: center;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 0;
  }
}
</style>
