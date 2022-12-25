<template>
    <div>

        <div class="row" v-if="this.errorMessage">
            <p class="fw-bold text-danger"> {{ this.errorMessage }} </p>
        </div>

        <div class="row">
            <div class="col">

                <div v-if="this.IsLoading">
                    <Spinner />
                </div>


                <p class="h3 fw-bold">User Details</p>
                <pre>{{ user }}</pre>
                <hr />

                <router-link class="btn btn-success btn-sm" to="/users"> Back </router-link>

            </div>

        </div>
    </div>
</template>
<script>
import { UserService } from "@/Service/UserService"
import Spinner from "@/components/Spinner.vue"

export default {
    name: "UserDetails",
    components: {
        Spinner,
    },
    data: function () {
        return {
            IsLoading: false,
            user: {},
            errorMessage: null,
        }
    },
    created: async function () {
        try {
            this.IsLoading = true;
            let userid = this.$route.params.userid;
            let res = await UserService.getUser(userid);
            this.user = res.data;
            this.IsLoading = false;

        } catch (error) {
            this.errorMessage = error;
        }
    },
}
</script>
<style scoped>

</style>