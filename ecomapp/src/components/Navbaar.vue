<template>
    
    <div>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <i class="fa fa-building-columns header-icon-color" ></i>
            </a>
           

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">                 
                    <router-link class="nav-link active" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                  <!-- <a class="nav-link" href="#">Contact Us</a> -->
                  <router-link class="nav-link" to="/users">Users</router-link>
                </li>
                <li class="nav-item">
                  <!-- <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">About</a> -->
                  <router-link class="nav-link" to="/about">About</router-link>
                </li>
                <li class="nav-item">                 
                  <router-link class="nav-link" to="/contactus">Contact Us</router-link>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex ">
                <input class="form-control form-control-sm me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-light btn-outline-danger btn-sm me-2" type="submit">Search</button>
              </form>
              <div class="d-flex  btn-group nav-link-authenticate">
                <button type="button" class=" btn btn-light btn-sm text-dark me-1 ">Login</button>
                <button type="button" class="btn btn-primary btn-sm">Sign-up</button>
              </div>

              <!-- <i class="fa fa-user" aria-hidden="true" style="color:white"></i>
        <i class="fa fa-user-plus" aria-hidden="true" style="color:white"></i> -->


            </div>
          </div>
        </nav>  
    </div>
    
</template>

<script>
export default {
    name:"NavBar",
}
</script>

<style scoped>
.header-icon-color{
    color: #ffffff; 
    font-size: 30px;   
}

</style>