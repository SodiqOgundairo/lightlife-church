<template>
  <div class="row">
    <div class="col overlay">
      <div class="row layer bg-vid pt-5">
        <!-- <video height="320" src="../assets/montage/llcMontage.mp4" type="video/mp4" playsinline autoplay muted loop>
        </video> -->

        <img
          src="../assets/montage/llcMontage.gif"
          alt="llcMontage"
          class="img-fluid montage"
        />
      </div>
    </div>

    
    <section>
      <div class="row bg-light py-5">
        <div class="col-md-10 py-5 m-auto">
          <div class="card border-0 shadow-lg rounded-0">
            <div class="row g-0">
              <div class="col-md-6 d-flex bg-accent">
                <img src="../assets/img/welcome.jpg" class="img-fluid" alt="PJ" />
              </div>

              <div class="col-md-6 gap-3 p-5 d-flex align-self-center px-4">
           
                  
                  <div class="card-body ">
                    <p class="h1 card-title accent fw-bold">LIGHTLIFE CHURCH</p>
                    <small class="text-muted h5 fst-italic"
                    >...Empowering Saints!</small
                  >
                  <p class="px-auto pt-5 text-start card-text">
                    LLC is not just a place, it is a people. It is a community
                    where sinners, the destitute, the despondent, the rejected,
                    the depressed, the confused, the hurting people can find
                    salvation, love, hope joy, purpose, peace, acceptance and
                    guidance.
                  </p>
                  <router-link to="/about" class="m-0 btn-mg btn-theme-gradient"
                    >Read More
                  </router-link>
                </div>
                  
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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

.bg-vid {
  height: 320;
}

.montage {
  object-fit: cover;
  object-position: center;
  height: 420px;
}

@media (max-width: 700px) {
  .bg-vid {
    height: 240px;
  }

  .montage {
    height: 240px;
  }
}

</style>
