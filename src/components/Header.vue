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
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ms-auto mb-2 px-4 mx-3 mt-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link" aria-current="page" @click="closeNavbar">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" aria-current="page" @click="closeNavbar">About LLC</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/daily-light-devotional" class="nav-link" aria-current="page" @click="closeNavbar">DLD</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/teachings" class="nav-link" aria-current="page" @click="closeNavbar">PJ's Teachings</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/programme" class="nav-link" aria-current="page" @click="closeNavbar">LLC Programmes</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/testimonies" class="nav-link" aria-current="page" @click="closeNavbar">Testimonies</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/support" class="nav-link" aria-current="page" @click="closeNavbar">To Give</router-link>
            </li>
          </ul>
        </div>
        <!-- <router-link to="/hlc-2025-registration" class="btn-theme-gradient">Register for HLC 2025</router-link> -->
      </div>
    </nav>   
  </header>
</template>

<script>
export default {
  name: "RandomFacts-vue",
  setup() {
    const closeNavbar = () => {
      const navbarCollapse = document.getElementById('navbarCollapse');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    };

    return { closeNavbar };
  },
};
</script>

<style scoped>
  .nav-logo{
    width: 40px;
}

header {
  background-color: #2b002b !important;
}
</style>