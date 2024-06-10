<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}

.v-card {
  background-color: #1f1f1f;
  color: #fff; /* Optional: Set contrasting text color for better readability */
}
</style>

<template>
  <div class="container">
    <Navbar />
  </div>

  <v-row align="center" justify="center" dense>
    <v-col cols="12" md="6">
      <v-card
        append-icon="mdi-check"
        class="mx-auto"
        prepend-icon="mdi-account"
        subtitle="prepend-icon and append-icon"
        title="QRIS CBvZ Bikin Blooming Seven Lancar"
      >
        <v-card-text
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text
        >
      </v-card>
    </v-col>
  </v-row>
</template>
