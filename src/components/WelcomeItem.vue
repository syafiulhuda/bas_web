<template>
  <v-card class="mx-auto custom-card" max-width="450" title="Transaction">
    <v-container class="form-container">
      <v-text-field
        class="pb-2"
        v-model="data.account_id"
        label="Account ID"
        variant="outlined"
        dense
        color="white"
        :rules="[rules.required]"
      ></v-text-field>

      <v-text-field
        class="pb-2"
        v-model="data.bank_id"
        label="Bank Code"
        variant="outlined"
        dense
        color="white"
        :rules="[rules.required]"
      ></v-text-field>

      <v-number-input
        class="pb-2"
        v-model="data.amount"
        label="Amount"
        type="number"
        variant="outlined"
        dense
        color="white"
        :rules="[rules.required]"
      ></v-number-input>

      <v-text-field
        class="pb-2"
        v-model="data.transaction_date"
        label="Transaction Date"
        variant="outlined"
        dense
        color="white"
        :rules="[rules.required]"
      ></v-text-field>

      <v-responsive class="mx-auto mb-2">
        <v-btn block dense height="40" rounded="xl" size="x-large" @click="submit" class="button">
          Kirim
        </v-btn>
      </v-responsive>
    </v-container>
  </v-card>
</template>

<script setup>
// import router from '@/router'
// import { inject, reactive, ref } from 'vue'
import { inject, reactive } from 'vue'
// import { useAuthStore } from '@/stores/auth'
import { VNumberInput } from 'vuetify/labs/VNumberInput'

const data = reactive({
  account_id: '',
  bank_id: '',
  amount: 0,
  transaction_date: '',
  pesanLogin: ''
})

const myAxios = inject('myAxios')

const submit = () => {
  console.log('login clicked', data)
  myAxios
    .post('/transaction/datatransaksi', {
      account_id: data.account_id,
      bank_id: data.bank_id,
      amount: data.amount,
      transaction_date: data.transaction_date
    })
    .then(
      (res) => {
        if (res.status == 200) {
          data.pesanLogin = 'Anda Berhasil Login'
        }
        data.snackbar = true
      },
      (err) => {
        data.pesanLogin = 'Username atau password salah'
        data.snackbar = true
      }
    )
}

// const auth = useAuthStore()

// const data = reactive({
//   account_id: '',
//   bank_code: '',
//   amount: '',
//   transaction_date: '',
//   snackbar: false
// })

// const myAxios = inject('myAxios')

// const login = () => {
//   console.log('login clicked', data)

//   myAxios
//     .post('/transaction/datatransaksi', {
//       account_id: data.account_id,
//       bank_code: data.bank_code,
//       amount: data.amount,
//       transaction_date: data.transaction_date
//     })
//     .then(
//       (res) => {
//         if (res.status == 200) {
//           data.pesanLogin = 'Transaksi Terkirim'
//           auth.authenticated()
//           router.push('home')
//         }
//         data.snackbar = true
//       },
//       () => {
//         data.pesanLogin = 'Apakah Account ID Telah Terdaftar?'
//         data.snackbar = true
//       }
//     )
// }

// const snackbar = ref({
//   visible: false,
//   message: ''
// })
</script>

<script>
export default {
  data() {
    return {
      accountId: '',
      bankCode: '',
      amount: '',
      transactionDate: '',
      rules: {
        required: (value) => !!value || 'Field is required'
      }
    }
  }
}
</script>

<style scoped>
.custom-card {
  background-color: #1f1f1f;
  color: white;
}
</style>
