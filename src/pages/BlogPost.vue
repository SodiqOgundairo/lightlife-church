<template>
  <main class="pt-5">
    <div class="text-center py-5 bg-drk bgg">
      <p class="h1 text-white fs-extra">LLC <span class="head">Blog</span></p>
    </div>

    <!-- <div class="row m-auto">
      <div class="col-md-4 m-1 p-3 m-auto" v-for="item in blogPost.details" :key="item.description">
        <div class="card m-auto">
          <div class="img-fluid"> {{item.image}} </div>
          <img src="../assets/img/llc.png" alt="" class="img-fluid w-75 p-2 mt-auto">
           <img :src={{item.image}} alt="" class="img-fluid">
          <div class="card-body">
            <p class="card-title"> {{item.title}} </p>
            <p class="card-text"> {{item.description}} </p>
          </div>
        </div>
      </div>
    </div>-->

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

<style></style>
