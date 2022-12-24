<template>
  <header>
    <nav
      class="navbar navbar-expand-md navbar-light fixed-top bg-light glass d-flex justify-content-between bg-opacity-50 animate__animated animate__flipInX"
    >
      <div class="container-fluid theme">
  
        <router-link to="/" class="navbar-brand" > <img src="../assets/img/llc.png" class="img-fluid nav-logo" alt=""> </router-link>
 
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon ms-end"></span>
        </button>
        <!-- <div class="navbar-brand"> -->
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ms-auto mb-2 px-4 mx-3 mt-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link" aria-current="page" href="#">About LLC</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/post" class="nav-link" aria-current="page" href="#">DLD</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/post" class="nav-link" aria-current="page" href="#">PJ's Teachings</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/programme" class="nav-link " aria-current="page" href="#">LLC Programmes</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/support" class="nav-link" aria-current="page" href="#">To Give</router-link>
              </li>
            </ul>
          </div>
        <!-- </div> -->
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "RandomFacts-vue",

  setup() {
    return {};
  },
};
</script>

<style scoped>
  .nav-logo{
    width: 40px;
}
</style>
