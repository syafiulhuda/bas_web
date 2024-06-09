<!-- eslint-disable no-unused-vars -->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import { reactive } from 'vue'
import { useAuthStore } from './stores/auth'

const auth = useAuthStore()

const data = reactive({
  variable1: 'test variable slot',
  counter: 1,
  variable2: [1, 2, 3, 4]
})

const tambahCounter = () => {
  data.counter++
}
const minusCounter = () => {
  data.counter--
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo_2_bg.png" width="150" height="150" />
    <div class="wrapper">
      <Header> </Header>
      <!-- <nav v-if="!auth.isloggedIn">
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/transaction">Transaction</RouterLink>
      </nav>
      <RouterLink v-else to="/">Login</RouterLink> -->
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
