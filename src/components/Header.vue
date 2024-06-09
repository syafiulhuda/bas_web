<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->

<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  }
})

import { reactive } from 'vue'

const data = reactive({ param_from_slot: 'Hai from part1 Header' })
</script>

<template>
  <div>
    <!-- <h1>Welcome to {{ text }}</h1> -->
    <h1>Centrale <span class="bank">Bank</span> van <span class="zimb">Zimbabwe</span></h1>

    <slot />
    <slot name="part_1_header" />

    <slot name="part_1_header" :param1="param_from_slot"></slot>
  </div>
</template>

<style scoped>
div {
  color: white;
  font-weight: bolder;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 1.5rem;
}

h1 {
  color: white;
}

.bank {
  color: #7fffd4;
}
.zimb {
  color: #7faeff;
}
</style>
