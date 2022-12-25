<template>
    <div>
        <div class="row">
            <div class="col">

                <p class="h3 text-success fw-bold">User List </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae sit fuga quis quae, impedit
                    possimus nam! Excepturi fuga quas labore magnam, nam iusto illum, tenetur reprehenderit deleniti
                    quam, voluptas aut.</p>

            </div>
        </div>
        <div class="row" v-if="this.loading">
            <Spinner />
        </div>
        <div class="row" v-if="this.errorMessage">
            <p class="fw-bold text-danger"> {{ this.errorMessage }} </p>
        </div>

        <div class="row" v-if="(!this.loading && this.userslistfromapi.length > 0)">
            <div class="col">
                <table class="table table-hover text-center table-striped">
                    <thead class="bg-light">
                        <tr>
                            <th>User#</th>
                            <th>Name</th>
                            <th>Email </th>
                            <th>Company</th>
                            <th>Website</th>
                            <th>Location</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in userslistfromapi" :key="user.id">
                            <td>{{ user.id }}</td>
                            <td>
                                <router-link class="text-decoration-none fw-bold text-success " :to="('/userdetails/'+ user.id)">
                                    {{ user.name }}
                                </router-link>
                                </td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.company.name }}</td>
                            <td>{{ user.website }}</td>
                            <td>{{ user.address.city }}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import { UserService } from "@/Service/UserService"
import Spinner from "@/components/Spinner.vue"

export default {
    name: "UserList",
    components: {
        Spinner,
    },
    data: function () {
        return {
            loading: false,
            errorMessage: null,
            users: UserService.getAllUsers(),
            userslistfromapi: []
        }
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await UserService.getAllUsersFromApiCall();
            this.userslistfromapi = response.data;
            this.loading = false;
            console.log("data is : " + response.data);

        } catch (error) {
            this.loading = false;
            this.errorMessage = error;
        }
    }
}
</script>
<style scoped>

</style>