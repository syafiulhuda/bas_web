<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<script setup>
import { inject, reactive } from 'vue'
import { useAuthStore } from '@/stores/auth'
import router from '@/router'

const auth = useAuthStore()

const data = reactive({
  username: '',
  password: '',
  snackbar: false,
  pesanLogin: ''
})

const myAxios = inject('myAxios')

const login = () => {
  console.log('login clicked', data)

  myAxios
    .post('auth/login', {
      username: data.username,
      password: data.password
    })
    .then(
      (res) => {
        if (res.status == 200) {
          data.pesanLogin = 'Anda berhasil login'

          auth.authenticated()

          router.push('about')
        }
        data.snackbar = true
      },
      (err) => {
        data.pesanLogin = 'Username atau password salah'
        data.snackbar = true
      }
    )
}
</script>

<template>
  <v-card title="Card title" subtitle="Subtitle" variant="tonal" class="pa-5">
    <div class="container">
      <div>
        <label>Username</label>
        <v-text-field type="text" v-model="data.username"></v-text-field>
      </div>
      <div>
        <label>Password</label>
        <v-text-field type="password" v-model="data.password"></v-text-field>
      </div>
      <div>
        <v-btn height="72" min-width="164" rounded="xl" size="x-large" @click="login">
          Login
        </v-btn>
      </div>
      <v-snackbar v-model="data.snackbar">
        {{ data.pesanLogin }}

        <template v-slot:actions>
          <v-btn color="pink" variant="text" @click="data.snackbar = false"> Close </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-card>
</template>
