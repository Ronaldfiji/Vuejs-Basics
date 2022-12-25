<template>
    <div class="row">
        <div class="col m-3">
            <p class="h3">Employee</p>
            <ul class="list-group">
                <li class="list-group-item">
                    Name : {{ this.employee.name }}
                </li>
                <li class="list-group-item">
                    Name : {{ this.employee.age }}
                </li>
                <li class="list-group-item">
                    Name : {{ this.employee.designation }}
                </li>
            </ul>
        </div>
    </div>


</template>

<script>
export default {
    name: "EmployeeComponent",
    data: function () {
        return {
            employee: {
                name: "RonaldEpmloyee",
                age: 39,
                designation: "Tutor NZPTC",
            },

        }
    }
}
</script>

<style scoped>

</style>
