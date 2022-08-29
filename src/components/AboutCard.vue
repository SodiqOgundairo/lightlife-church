<template>
  <div class="row bg-light">
    <div class="col-md-5 about-card">
      <div
        class="card bg-dark bg-opacity-50 shadow-lg glass border-light p-2 shadow-lg rounded-3 text-white"
      >
        <div class="card-body">
          <p class="h5 card-title mb-4 theme"> <span class="head fs-3">  About</span> LLC</p>
          <p class="card-text fw-lighter text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            nihil, ab nisi, quibusdam eligendi iusto ut impedit, aliquid at
            voluptatum reiciendis nam praesentium! Ducimus nostrum, iure magnam
            dignissimos tempore error? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Mollitia nihil, ab nisi, quibusdam eligendi iusto
            ut impedit, aliquid at voluptatum reiciendis nam praesentium!
            Ducimus nostrum, iure magnam dignissimos tempore error?
          </p>
          <router-link to="/about" class="btn btn-sm btn-light shadow-sm">
            <small class="theme">Read More </small>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCard-vue",
};
</script>

<style scoped>
.card-title {
  position: relative;
}

/*.card-title::before {
  content: "";
  position: absolute;
  border-top: 2px solid white;
  width: 40px;
  top: 25px;
}*/

.about-card {
  position: absolute;
  top: 310px;
  z-index: 1;
  left: 50px;
}

.fw-lighter {
  font-size: small;
}

.btn:hover {
  background-color: #562250;
  border: none;
  box-shadow: 0px 5px 0px 5px rgba(0, 0, 0, 0.239);
  color: white;
}

@media (max-width: 767px) {
  .bg-light {
    padding: 40px;
    width: fit-content;
  }

  .card-title {
    color: #562250;
  }

  .about-card {
    position: relative;
    top: 0px;
    z-index: 1;
    left: 0px;
    /*background-color: #562250;*/
    border: none;
    backdrop-filter: none;
    margin: 10px 0px 10px 0px;
  }

  .btn{
    color: #562250;
  }
}
</style>
