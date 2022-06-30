<template>

        <label for="deviceName">裝置名稱</label>
        <br>
        <input type="text" v-model="deviceName">
        <br>
        <router-link to="new-2" class="btn btn-primary ">確認</router-link>

</template>

<script>
export default {
  data(){
    return{
        deviceName:'',
    }
    }
  
}

</script>