<template>
    <div class="text-center" style="margin-top: 100px;">
        <h3 class="eng-font my-1 ">Log In</h3>
        <form action="" class="my-5">
          
 <div class=" bg-secondary rounded-pill p-2 input  m-2 d-inline-block">
            <label for="" class="eng-font">Email</label>
            <input type="email" class="p-2 ms-3 rounded-pill" v-model="email" />
            </div>
                    
<br>
       <div class=" bg-secondary rounded-pill p-2 input m-2 d-inline-block ">
            <label for="" class="eng-font font-white">密碼</label>
            <input type="password" class="p-2 ms-3 rounded-pill" v-model="password" />
            </div>

           
           <br>
            <router-link to="/signup">新會員註冊</router-link> ｜ <router-link to="/forgetpassw">忘記密碼</router-link>
           <br>
            <button class="btn btn-primary rounded-pill m-3 px-4 py-2" @click.prevent="doLogin" type="submit">登入</button>
        </form>
      
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        doLogin() {
            console.log(this.axios)
            const submitForm = {
                email: this.email,
                password: this.password
            }
            this.axios.post('/login', submitForm).then((response) => {
                console.log(response)
                this.$router.push('/')
            })
        },
     
        
    }
}

</script>
<style>
.input{
    width: 280px;
/* display:flex; */

}
</style>