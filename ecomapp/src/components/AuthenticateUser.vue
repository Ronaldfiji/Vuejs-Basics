<template>
    
    <div class="row">
        <div class="col">           
            <div class="card">
                <div class="card-body">                 
                    <div v-if="this.IsloogedIn">
                        <p class="h3 text-success fw-bold">Logged In </p>
                        <p class="fst-italic">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius labore autem a
                            numquam corrupti sit voluptatum consequatur! Quod ea doloremque mollitia ut eum consequuntur
                            et voluptatum odit delectus aspernatur?
                        </p>
                    </div>
                    <div v-if="!this.IsloogedIn">
                        <p class="h3 text-danger fw-bold">Logged Out </p>
                        <p class="fst-italic">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius labore autem a
                            numquam corrupti sit voluptatum consequatur! Quod ea doloremque mollitia ut eum
                            consequuntur et voluptatum odit delectus aspernatur?
                        </p>
                    </div>
                    <div>
                        <button v-if="!this.IsloogedIn" class="btn btn-primary btn-sm  m-1" @click="this.LogInUser">Login</button>
                        <button  v-if="this.IsloogedIn"  class="btn btn-danger btn-sm  m-1 " @click="this.LogOutUser">LogOff</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

   
    
</template>

<script>


export default {
    name: "AuthenticateUser",
    data:function(){
        return{
        IsloogedIn:false,
        }
    },
    methods:{
        LogInUser: function(){
            this.IsloogedIn= true;
        },
        LogOutUser: function(){
            this.IsloogedIn= false;
        }
    }

}
</script>

<style scoped>

</style>