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
  <v-card variant="tonal" class="pa-5 black-background mr-3">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="4">
          <img alt="Bank Logo" class="logo" src="@/assets/logo_bg.png" width="150" height="150" />
        </v-col>
        <v-col cols="12" md="8">
          <div class="container">
            <v-responsive class="mx-auto mb-3">
              <v-text-field
                dense
                hide-details="auto"
                label="Username"
                type="email"
                :rules="[rules.required]"
                v-model="data.username"
              ></v-text-field>
            </v-responsive>
            <v-responsive class="mx-auto mb-2">
              <v-text-field
                dense
                hint="Enter your password to access this website"
                label="Password"
                type="password"
                :rules="[rules.required]"
                v-model="data.password"
              ></v-text-field>
            </v-responsive>
            <v-responsive class="mx-auto mb-2">
              <v-btn
                block
                dense
                height="40"
                rounded="xl"
                size="x-large"
                @click="login"
                class="button"
              >
                Login
              </v-btn>
            </v-responsive>
            <v-snackbar v-model="data.snackbar">
              {{ data.pesanLogin }}
              <template v-slot:actions>
                <v-btn color="pink" variant="text" @click="data.snackbar = false"> Close </v-btn>
              </template>
            </v-snackbar>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
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
</style>
