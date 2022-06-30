<template>
<div class="bg-light fixed-bottom">
    <router-link to="/"><font-awesome-icon :icon="['fa-solid', 'fa-house-chimney']" /></router-link>
<router-link to="/shop"><font-awesome-icon :icon="['fa-solid' ,'fa-store']" /></router-link>
<router-link to="/history"><font-awesome-icon :icon="['fa-solid', 'fa-clock-rotate-left']" /></router-link>
  <router-link to="/login">Login</router-link> |

</div>

</template>

<script setup>

import { ref } from 'vue'

// defineProps({
//   msg: String
// })

const count = ref(0)
</script>