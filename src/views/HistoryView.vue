<template>
<div class="container-fluid">
    <div class="row justify-content-center g-3 m-3">
         <div class="col-12">
              <div class="p-3 border border-3 border-dark rounded-3">
                <h6 class="text-secondary">上次維修日期</h6>
                <h4>{{date}}</h4>
                <!-- <router-link></router-link> -->
            </div>
        </div>
         <div class="col-12">
              <div class="p-3 border border-3 border-dark rounded-3">
                <h6 class="text-secondary">濾芯 A</h6>
                <!-- <router-link></router-link> -->
            </div>
        </div>
         <div class="col-12">
              <div class="p-3 border border-3 border-dark rounded-3">
                <h6 class="text-secondary">濾芯 B</h6>
                <!-- <router-link></router-link> -->
            </div>
        </div>
         <div class="col-12">
              <div class="p-3 border border-3 border-dark rounded-3">
                <h6 class="text-secondary">濾芯 C</h6>
                <!-- <router-link></router-link> -->
            </div>
        </div>
         <div class="col-12">
              <div class="p-3 border border-3 border-dark rounded-3">
                <h6 class="text-secondary">購買記錄</h6>
                <!-- <router-link></router-link> -->
            </div>
        </div>
      
    </div>
</div>
</template>

<script>
export default {
  data(){
    return{
        date:'2022.03.03'
    }
    }
  
}

</script>