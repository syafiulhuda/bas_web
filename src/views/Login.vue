<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->

<script setup>
import router from '@/router'
import { inject, reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

const data = reactive({
  username: '',
  password: '',
  snackbar: false
})

const myAxios = inject('myAxios')

const login = () => {
  console.log('login clicked', data)

  myAxios
    .post('/auth/login', {
      username: data.username,
      password: data.password
    })
    .then(
      (res) => {
        if (res.status == 200) {
          data.pesanLogin = 'Anda Berhasil Login'
          auth.authenticated()
          router.push('home')
        }
        data.snackbar = true
      },
      () => {
        data.pesanLogin = 'Username atau Password Salah'
        data.snackbar = true
      }
    )
}

const snackbar = ref({
  visible: false,
  message: ''
})
</script>

<script>
export default {
  data: () => ({
    rules: {
      required: (value) => !!value || 'Field is required'
    }
  })
}
</script>

<template>
  <v-container class="d-flex justify-center align-center fill-height">
    <v-card class="pa-5 black-background custom-width">
      <v-row>
        <v-col cols="12" md="4" class="text-center d-flex justify-center align-center">
          <img alt="Bank Logo" class="logo" src="@/assets/logo_bg.png" width="150" height="150" />
        </v-col>
        <v-col cols="12" md="8">
          <v-form>
            <v-text-field
              dense
              hide-details="auto"
              label="Username"
              type="email"
              class="mb-4"
              :rules="[rules.required]"
              v-model="data.username"
            ></v-text-field>
            <v-text-field
              dense
              hint="Enter your password to access this website"
              label="Password"
              type="password"
              :rules="[rules.required]"
              v-model="data.password"
            ></v-text-field>
            <v-btn block @click="login" class="button">Login</v-btn>
          </v-form>
        </v-col>
      </v-row>
      <v-snackbar v-model="data.snackbar">
        {{ data.pesanLogin }}
        <template v-slot:actions>
          <v-btn color="pink" text @click="data.snackbar = false">Close</v-btn>
        </template>
      </v-snackbar>
    </v-card>
  </v-container>
</template>

<style scoped>
.black-background {
  background-color: black !important;
  color: white;
}
.text-center {
  text-align: center;
}

.button {
  font-weight: 900;
}

.logo {
  border: none;
  outline: none;
  display: block;
  margin: 0 auto;
}

.custom-width {
  max-width: 900px;
  width: 100%;
}
</style>
