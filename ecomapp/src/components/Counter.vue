<template>
    <div class="row">
        <div class="col">
            <div class="card shadow-lg">
            <div class="card-body">
                <p class="h3 display-3">count: {{this.count}}</p>
                <button @click="this.Increment" class="btn btn-success btn-sm me-5">Add count</button>
                <button  @click="this.Decrement"  class="btn btn-success btn-sm">Minus count</button>
            </div>
        </div>
        </div>

    </div>
</template>
<script>


export default {
    name:"CounterX",
    data: function(){
      return{  
            count: 0            
        }
    },
    methods:{
        Increment:function(){
                this.count = this.count +1;
        },
        Decrement: function(){
            this.count--;
        }
    }
}
</script>
<style scoped>

</style>