<template>
    <div class="text-center" style="margin-top: 100px;">
        <h3 class="eng-font my-1 ">新會員註冊</h3>
        <form action="" class="my-5" >
           
            <label for="" class="eng-font">請輸入你的 email</label>
            <br>
            <input type="text" class="p-2 m-2 rounded-pill" v-model="email"  />
            <br>
            <label for="" class="eng-font">請輸入密碼</label>
            <br>
            <input type="password" class="p-2 m-2 rounded-pill" v-model="password" >
            <br>
            <label for="" class="eng-font">請再次輸入密碼</label>
            <br>
            <input type="password" class="p-2 m-2 rounded-pill" v-model="passwordCheck" >
            <br>
              <label for="" class="eng-font">請輸入手機號碼</label>
            <br>
            <input type="number" class="p-2 m-2 rounded-pill" v-model="phone" />
            <br>
            <button class="btn btn-light rounded-pill m-3 px-4 py-2" @click.prevent="doSignup">Sign Up</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            phone:'',
            email: '',
            password: '',
            passwordCheck:''
        }
    },
    methods: {
        doSignup() {
            console.log('1111')
            const submitForm = {
                displayName:this.displayName,
                email: this.email,
                password: this.password
            }
            this.axios.post('/signup', submitForm).then((response) => {
                console.log(response)
                this.$router.push('/')
            })
        }
    }
}

</script>