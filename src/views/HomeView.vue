<template>
<div class="container-fluid">
    <div class="row justify-content-center g-3 m-3">
        <div class="col-12">
            <div class="p-3 border border-3 border-dark rounded-3">
                <h4 class="d-inline-block">裝置名稱</h4>
            
                <router-link to="/new">    <font-awesome-icon icon="fa-solid fa-plus" class="ms-3 mb-1" /></router-link>
            </div>
        </div>
         <div class="col-12">
              <router-link to="/error"><div class="p-3 border border-3 border-dark rounded-3">
                
                <h4><div class="rounded-circle bg-success p-1 circle d-inline-block mb-1 me-2"></div>裝置狀態</h4>
                <!-- <router-link></router-link> -->
            </div>
            </router-link>
        </div>
         <div class="col-12">
              <div class="p-3 border border-3 border-dark rounded-3">
                <h6 class="text-secondary">水質</h6>
                <!-- <router-link></router-link> -->
            </div>
        </div>
         <div class="col-12">
              <div class="p-3 border border-3 border-dark rounded-3">
                <h6 class="text-secondary">濾芯 A</h6>
                <!-- <router-link></router-link> -->
            </div>
        </div>
        <div class="col-6">
            <div class="p-3 border border-3 border-dark rounded-3">
                        <h6 class="text-secondary">濾芯 B</h6>
                        <!-- <router-link></router-link> -->
                    </div>
        </div>
        <div class="col-6">
            <div class="p-3 border border-3 border-dark rounded-3">
                <h6 class="text-secondary">濾芯 C</h6>
                <!-- <router-link></router-link> -->
            </div>
        </div>
    </div>
</div>
</template>

<style>
.circle{
    width: 10px;
    height: 10px;
}
</style>