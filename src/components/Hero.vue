<template>
  <div class="row">

    <div class="col overlay">
      <div class="row layer bg-vid pt-5">
        <video height="320" src="../assets/montage/llcMontage.mp4" type="video/mp4" playsinline autoplay muted loop>
        </video>
        <div class="col-md-10 mt-5 m-auto">
        </div>
      </div>
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

video{
  object-fit: cover;
  object-position: center;
}

</style>
