<template>
<div class="container-fluid">
    <div class="row justify-content-center g-3">
        <div class="col-12">
            <div class="p-3 border border-3 border-dark rounded-3">
                <h4><div class="rounded-circle bg-danger p-1 circle d-inline-block mb-1 me-2"></div>裝置狀態</h4>
            </div>
        </div>
        <div class="col-12">
            <div class="p-3 border border-3 border-dark rounded-3">
                <h4 class="d-inline-block">聯繫廠商</h4>
                <form action="">
                    <!-- <label for="">日期時間：</label> -->
                <input type="date" v-model="date"><input type="time" v-model="time">
                <br>
               <label for="name">姓名</label> <input type="text" v-model="name">
               <br>
                <label for="phone">聯絡電話</label> <input type="number" v-model="phone">
               <br>
                 <label for="email">電子郵件</label> <input type="email" v-model="email">
               <br>
                 <label for="address">地址</label> <input type="text" v-model="address">
               <br>
                <p>預估費用：{{price}}</p>

                <button class="btn btn-primary">下一步</button>

                </form>
            

            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            price:'',
            date:'',
            time:'',
            name:'',
            phone:'',
            email:'',
            address:'',

        }
    }
}
</script>