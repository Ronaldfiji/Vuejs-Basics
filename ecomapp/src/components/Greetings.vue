<template>
    <div class="row">
        <div class="col">
            <div class="card shadow-lg">
                <div class="card-body">
                    <p class="h3 display-3">Hello to you. {{ this.msg }}</p>
                    <button class="btn btn-primary btn-sm m-3" @click="this.Greet('Mornin')">Morning</button>
                    <button class="btn btn-success btn-sm m-3" @click="Greet('value:xxx')">Afternoon</button>
                    <button class="btn btn-danger btn-sm m-3" @click="this.Greet('Evening..')">Evening</button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>


export default {
    name: "GreetingS",
    data: function () {
        return {
            msg: ""
        }
    },
    methods: {
        Greet: function (value) {
            this.msg = value;
           
        }

    }
}


</script>
<style scoped>

</style>