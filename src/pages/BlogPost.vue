<template>
  <main class="pt-5">
    <section>
      <div class="text-center bgg">
        <div class="bg-dark bg-opacity-50 py-5">
          <p class="h1 page-title text-white fs-extra"> DAILY LIGHT DEVOTIONAL      </p>
        </div>
      </div>
    </section>

    <article class="dld">
    <!-- <div class="bg-dark bg-opacity-25 p-md-4 p-2"> -->
    <div class="blog-post card m-3 m-md-5 bg-light bg-opacity-50 shadow-lg glass">
      <header class="card-header ">
          <div class="card-header">
            <p class=" h3 fw-bold theme">
              TITLE TITLE TITLE
              <small class="fs-6 fst-italic d-block fw-light"> 01/01/1991</small>
            </p> 
          </div>
        </header>
          <section class="card-body">
            <div class=" bg-none m-auto p-md-3 p-2 m-2">
              <div class="row g-0">
                <div class="col-md-5 gap-3 p-3 rounded-3 bg-theme-gradient m-auto d-flex align-self-center my-3">
                  <div class="card-body">
                    <p class="card-title h5 theme border-bottom text-white">
                     MEMORY VERSE
                    </p>
                    <p class="card-text text-white">
                    Herein is love, not that we loved God, but ahtat He loved us, and sent His Son to be  the propitation for our sins.
                    <span class="fst-italic text-dark">1 John 4:10 </span>
                    </p>
                  </div>
                </div>
                <div class="col-md-5 p-3 rounded-3 d-flex m-auto bg-accent-gradient my-3">
                  <div class="card-body">
                    <p class="card-title h5 accent-2 border-bottom head">
                     STUDY BIBLE
                    </p>
                    <p class="card-text accent-2">
                    Herein is love, not that we loved God, but ahtat He loved us, and sent His Son to be  the propitation for our sins.
                    <span class="fst-italic text-dark">1 John 4:10 </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-text p-lg-5 p-3">
            <p class=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, architecto? Maxime, deserunt tempore nam quos qui reiciendis sunt ducimus, consectetur tempora explicabo reprehenderit inventore officia dolor praesentium aperiam. Perspiciatis, hic?
            
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae enim accusantium placeat. Minus consequatur quas voluptatibus molestiae vitae? Error corrupti laboriosam qui nihil, officia perferendis laudantium beatae? Nemo, ullam accusantium!
          </p>
            <p class=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, architecto? Maxime, deserunt tempore nam quos qui reiciendis sunt ducimus, consectetur tempora explicabo reprehenderit inventore officia dolor praesentium aperiam. Perspiciatis, hic?
            
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae enim accusantium placeat. Minus consequatur quas voluptatibus molestiae vitae? Error corrupti laboriosam qui nihil, officia perferendis laudantium beatae? Nemo, ullam accusantium!
          </p>
            <p class=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, architecto? Maxime, deserunt tempore nam quos qui reiciendis sunt ducimus, consectetur tempora explicabo reprehenderit inventore officia dolor praesentium aperiam. Perspiciatis, hic?
          </p>
        </div>
            
          </section>
          <div class="card-footer text-muted">
            <p class="fw-bold">
              CONFESSION
            </p>
            <p class="fst-italic">
              Confession, Action, Keypoints text here
            </p>
          </div>
    <!-- </div> -->
    </div>
    </article>

    <article class="row bg-light py-5">
      <div class="col-md-10 m-auto">
        <div class="container">
          <div class="row">
            <section class="col-md-4 m-auto p-5">
              <div class="card border-0 shadow-lg">
                <img
                  src="../assets/img/story.jpeg"
                  class="card-img-top img-fluid"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">ThanksGiving Sunday</h5>
                  <small class="card-text text-muted"
                    >Sunday 7th August, 2022 is our thanksgiving Sunday. Join us 
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
                  <h5 class="card-title">Weekend of Encounter</h5>
                  <small class="card-text text-muted"
                    >Night of Encounter now Weekend of Encounters
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
                  <h5 class="card-title">Title</h5>
                  <small class="card-text text-muted"
                    >Description description description description
                  </small>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import axios from "axios";
import { onMounted, reactive } from "@vue/runtime-core";

export default {
  name: "BlogPost-vue",

  data() {
    return {
      title: "",
      description: "",
      image: "",
    };
  },

  setup() {
    const blogPost = reactive({});

    onMounted(() => {
      const post = {
        method: "GET",
        url: "https://lightlife-church-default-rtdb.firebaseio.com/blog.json",
      };

      axios
        .request(post)
        .then((response) => {
          // console.log(response.data);
          // console.table(response.data.value);
          blogPost.details = response.data;
          // console.log(blogPost.title)
        })
        .catch((error) => {
          console.error(error);
        });
    });

    return {
      blogPost,
    };
  },
};
</script>

<style>
.bgg {
  /* width: 100%;
  margin: 0px;
  padding: 0px; */
  background-image: url("../assets/img/cong2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: lighten;
}

.dld {
  /* width: 100%;
  margin: 0px;
  padding: 0px; */
  background-image: url("../assets/img/dld.jpg");
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
