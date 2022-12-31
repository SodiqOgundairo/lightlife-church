<template>
    <header class="mt-5">
        <div class="text-center bgg">
          <div class="bg-dark bg-opacity-50 py-5">
            <p class="h1 page-title text-white fs-extra"> PJ's TEACHINGS   </p>
          </div>
        </div>
      </header>

      <section class="">
        <div class="row bg-white py-5">
          <div class="col-md-10 shadow-lg m-auto p-md-5">
            <div class="card border-1 border-theme m-2 p-md-5 my-3">
              <div class="row g-0">
                <div class="col-md-6 gap-3 d-flex align-self-center">
                  <div class="card-body">
                    <p class="card-text">
                     Download all of PJ's Teachings books and Audio Sermons right from here. Be sure you will be blessed. 
                    </p>
                  </div>
                </div>
                <div class="col-md-6 d-flex">
                  <img
                    src="../assets/img/teachings.jpg"
                    class="img-fluid"
                    alt="PJ's teachings"
                  />
                </div>
              </div>
            </div>
  
            <div
              class="card border-1 border-theme m-auto p-lg-5 py-4 my-4 px-3 shadow-lg"
            >
              <p class="card-title h3 border-bottom">
                AUDIO MESSAGES
              </p>
              <p>To download Audio messages <a href="https://t.me/lightlifechurch" target="_blank" rel="noopener noreferrer" class="nav-link d-inline accent-2 fst-italic fw-bold">click here</a> </p>
            </div>
  
            <div
              class="card border-0 border-theme bg-accent-gradient m-auto p-lg-5 py-4 px-3 my-4 shadow-lg"
            >
              <p class="card-title h3 theme border-bottom">BOOKS WRITTEN BY PJ</p>
              
              <p class=""> To purchase any of PJ's books please contact: <a href="tel: +2348165271030" class=" text-white text-decoration-none fst-italic"><small> +234(0)-816-527-1030</small> </a> </p>
              
    <article class="row ">
        <div class=" m-auto">
          <div class="container-fluid">
            <div class="row">
              <section class="col-md-4 m-auto p-5">
                <div class="card border-0 shadow-lg">
                  <img
                    src="../assets/img/llc.png"
                    class="card-img-top bg-accent-gradient img-fluid"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Book 1 Title</h5>
                    <small class="card-text text-muted"
                      >N5,000
                    </small>
                  </div>
                </div>
              </section>
              
              <section class="col-md-4 m-auto p-5">
                <div class="card border-0 shadow-lg">
                  <img
                    src="../assets/img/llc.png"
                    class="card-img-top bg-theme img-fluid"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Book 2 Title</h5>
                    <small class="card-text text-muted"
                      >N5,000
                    </small>
                  </div>
                </div>
              </section>
              
              <section class="col-md-4 m-auto p-5">
                <div class="card border-0 shadow-lg">
                  <img
                    src="../assets/img/llc.png"
                    class="card-img-top bg-light img-fluid"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Book 3 Title</h5>
                    <small class="card-text text-muted"
                      >N5,000
                    </small>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </article>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
    name: "Teachings-vue",

}
</script>

<style scoped>
.bgg {
    /* width: 100%;
    margin: 0px;
    padding: 0px; */
    background-image: url("../assets/img/pjteaching.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-blend-mode: lighten;
  }

@media(max-width:550px){
    .page-title{
      font-size: xx-large;
    }
  }

</style>