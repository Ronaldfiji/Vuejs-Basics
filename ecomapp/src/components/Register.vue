<template>
   
    <div class="row">
        <div class="col">
            <pre>{{this.user}}</pre>
            <div class="card shadow-lg">
                <div class="card-header bg-primary #2c3e50 text-white">
                    <h5>Join good club !</h5>
                </div>
                <div class="card-body bg-light">
                    <form @submit.prevent="this.register() ">
                        <div class="mb-2">
                            <input v-model="this.user.name" class="form-control" placeholder="Enter name" type="text" />
                        </div>
                        <div class="mb-2">
                            <input v-model="user.email" class="form-control" placeholder="Enter email" type="email" />
                        </div>
                        <div class="mb-2">
                            <input v-model="user.password" class="form-control" placeholder="Enter password" type="password" />
                        </div>                        
                        <div class="mb-2">
                            <input class="btn btn-primary btn-sm ps-5 pe-5" type="submit" value="Join" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: "RegisterForm",
    data: function () {
            return{
                user:{
                    name:'Ron',
                    email:'ron@mail.com',
                    password:'123',
                }
            }
    },
    methods:{
        register:function(){
                console.log("User data: " , this.user);
        }
    }

}
</script>
<style scoped>

</style>