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

    <v-col cols="12" md="6">
      <v-card
        class="mx-auto"
        subtitle="prepend and append"
        title="News - CBvZ | Melayani Dengan Setulus Hati"
      >
        <template v-slot:prepend>
          <v-icon color="primary" icon="mdi-account"></v-icon>
        </template>
        <template v-slot:append>
          <v-icon color="success" icon="mdi-check"></v-icon>
        </template>
        <v-card-text
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text
        >
      </v-card>
    </v-col>

    <v-col cols="12" md="6">
      <v-card
        append-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
        class="mx-auto"
        prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
        subtitle="prepend-avatar and append-avatar"
        title="Bisnis Pasca-Pensiun Dini, Kuliner Padang Bunda Semok Manfaatkan QRIS CBvZ"
      >
        <v-card-text
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text
        >
      </v-card>
    </v-col>

    <v-col cols="12" md="6">
      <v-card
        class="mx-auto"
        subtitle="prepend and append"
        title="One Stop Sevices Bank CBvZ, Jawaban dari Meningkatnya Kebutuhan Digitalisasi Transaksi"
      >
        <template v-slot:prepend>
          <v-avatar color="blue-darken-2">
            <v-icon icon="mdi-alarm"></v-icon>
          </v-avatar>
        </template>
        <template v-slot:append>
          <v-avatar size="24">
            <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-avatar>
        </template>
        <v-card-text
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text
        >
      </v-card>
    </v-col>
  </v-row>
</template>
