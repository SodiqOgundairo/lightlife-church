<template>
  <header>
    <nav
      class="navbar navbar-expand-md navbar-light fixed-top bg-light glass d-flex justify-content-between bg-opacity-25 animate__animated animate__flipInX"
    >
      <div class="container-fluid theme">
        <!-- <div class=""> -->
        <div class="col-sm">
        <router-link to="/" class="navbar-brand" href="#"> <img src="../assets/img/llc.png" class="img-fluid logo" alt=""> </router-link>
        </div>
        <!-- <a class="navbar-brand" href="#"> LIGHTLIFE CHURCH </a> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon float-end"></span>
        </button>
        <!-- </div> -->
        <div class="navbar-brand">
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link" aria-current="page" href="#">About LLC</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/post" class="nav-link" aria-current="page" href="#">LLC Blog</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/programme" class="nav-link " aria-current="page" href="#">Programmes</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/support" class="nav-link" aria-current="page" href="#">Support</router-link>
              </li>
            </ul>
          </div>
        </div>
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
  .logo{
    width: 60px;
}
</style>
