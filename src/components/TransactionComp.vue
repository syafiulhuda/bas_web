<!-- eslint-disable no-unused-vars -->
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
  console.log('transaksi clicked', data)
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
          data.pesanLogin = 'Transaksi berhasil'
        }
        data.snackbar = true
      },
      (err) => {
        data.pesanLogin = 'Pastikan Account ID telah terdaftar'
        data.snackbar = true
      }
    )
}
</script>

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

      <v-select
        class="pb-2"
        clearable
        bg-color="#1f1f1f"
        label="Select"
        :items="['001', '002']"
        v-model="data.bank_id"
        :rules="[rules.required]"
        variant="outlined"
      ></v-select>

      <!-- <v-text-field
        class="pb-2"
        v-model="data.bank_id"
        label="Bank Code"
        variant="outlined"
        dense
        color="white"
        :rules="[rules.required]"
      ></v-text-field> -->

      <v-number-input
        class="pb-2"
        v-model="data.amount"
        label="Amount"
        type="number"
        variant="outlined"
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
