<template>
  <div class="row">

    <div class="col overlay">
      <div class="row layer bg-vid pt-5">
        <!-- <video height="320" src="../assets/montage/llcMontage.mp4" type="video/mp4" playsinline autoplay muted loop>
        </video> -->

        <img src="../assets/montage/llcMontage.gif" alt="llcMontage" class="img-fluid montage" />
      </div>
    </div>

    <div class="card">
      .card-body
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero-vue",

  components: {},

  setup() {
    return {};
  },
};
</script>

<style scoped>
.active {
  border: none;
}

.bg-none {
  background: none !important;
}

.bg-vid{
  height: 320;
}

@media (max-width:700px){
  .bg-vid{
    height: 240px
  }

  .montage{
    height: 240px
  }
}

.montage{
  object-fit: cover;
  object-position: center;
  height: 420px;
}

</style>
