<template>
  <div class="row">
    <div class="col overlay">
      <div class="row layer  pt-5">
        <div class="col-md-10 mt-5 m-auto">
          <div class="card mt-5 border-0 bg-none">
            <div class="row g-0">
              <div class="col-md-4 d-flex justify-content-center">
                <img
                  src="../assets/img/PJ-d.png"
                  class="animate__animated animate__slideInLeft pj img-fluid"
                  alt="Pastor Juwon Owolabi"
                />
              </div>
              <div class="col-md-8 mb-5">
                <div class="card-body ms-auto">
                <div class="text-center w-75 ms-auto mb-5 animate__animated animate__slideInDown">
                <p class="h3 fw-light fst-italic theme"> <span class="head fs-1">  Welcome to</span> <span class="h2 fst-normal fw-bold"> LIGHTLIFE CHURCH </span> </p>
                <!-- <p class="h1 fw-bolder text-white"> SAVING <span class=""> ARMIES</span> FOR HIS  <span class="">  KINGDOM </span></p> -->
                <p class="h5 fst-italic text-white"> ...Empowering Saints</p>

                </div>
                <div class="rounded-3 p-3 mb-2 w-75 ms-auto shadow-sm glass glass-gradient bg-opacity-25 animate__animated animate__slideInRight">
                  <div
                    id="carouselExampleSlidesOnly"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div
                      class="carousel-inner pb-3 text-center mt-1 text-white fst-italic fw-normal"
                    >
                      <div class="carousel-item active">
                        <!-- <p class="h1 fs-extra p-0">"</p> -->
                        <p class="d-block w-100 card-title fst-normal h3">
                          BIBLE VERSE ONE
                        </p>
                        <p class="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Amet suscipit quasi unde saepe totam corporis
                          sapiente illo, error, quos nobis corrupti, quibusdam a
                          omnis quaerat maiores numquam minima quia. Quia?
                        </p>
                      </div>
                      <div class="carousel-item ">
                        <p class="d-block w-100 card-title fst-normal h3">
                          BIBLE VERSE TWO
                        </p>
                        <p class="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Amet suscipit quasi unde saepe totam corporis
                          sapiente illo, error, quos nobis corrupti, quibusdam a
                          omnis quaerat maiores numquam minima quia. Quia?
                        </p>
                      </div>
                      <div class="carousel-item ">
                        <p class="d-block w-100 card-title fst-normal h3">
                          BIBLE VERSE THREE
                        </p>
                        <p class="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Amet suscipit quasi unde saepe totam corporis
                          sapiente illo, error, quos nobis corrupti, quibusdam a
                          omnis quaerat maiores numquam minima quia. Quia?
                        </p>
                      </div>
                    </div>
                    <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  </button> -->
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
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

.overlay {
  background-image: url("../assets/img/hero3.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: soft-light;
}

@media (max-width:767px) {
  .ms-auto {
    margin: auto !important;
  }

  .pj{
    border-bottom: 2px solid #E0B043;
    border-radius: 20px;
  }
}

</style>
