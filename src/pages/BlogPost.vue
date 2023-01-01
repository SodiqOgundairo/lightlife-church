<template>
  <main class="pt-5">
    <section>
      <div class="text-center bgg">
        <div class="bg-dark bg-opacity-50 py-5">
          <p class="h1 page-title text-white fs-extra">
            DAILY LIGHT DEVOTIONAL
          </p>
        </div>
      </div>
    </section>

    <article class="dld">
      <div class="bg-dark bg-opacity-25 p-md-4 p-2"> 
      <div
        class="blog-post card m-3 m-md-5 bg-light bg-opacity-50 shadow-lg glass"
      >
        <header class="card-header">
          <div class="card-header">
           <p class="h3 fw-bold theme">
                {{ dld.title }}
              <small class="fs-6 fst-italic d-block fw-light">
                
                 {{blogDate}}
              </small>
            </p>
          </div>
        </header>
        <section class="card-body">
          <div class="bg-none m-auto p-md-3 p-2 m-2">
            <div class="row g-0">
              <div
                class="col-md-5 gap-3 p-3 rounded-3 bg-theme-gradient d-flex align-self-center"
              >
                <div class="card-body">
                  <p class="card-title h5 theme border-bottom text-white">
                    MEMORY VERSE
                  </p>
                  <p class="card-text text-white">
                    {{dld.memoryVerse}}
                    <span class="fst-italic text-dark">{{dld.bibleVerse}} </span>
                  </p>
                </div>
              </div>
              <div v-if="dld.studyBible" class="col-md-5 p-3 rounded-3 d-flex m-auto bg-accent-gradient my-3">
                  <div class="card-body">
                    <p class="card-title h5 accent-2 border-bottom head">
                     STUDY BIBLE
                    </p>
                    <p class="card-text accent-2">
                    {{dld.studyBible}}
                    
                    </p>
                  </div>
                </div>
            </div>
          </div>
          <div class="card-text p-lg-5 p-3">
            <p class="">
              {{dld.texts.textOne}}
            </p>
            <p class="">
              {{dld.texts.textTwo}}
            </p>
            <p class="">
              {{dld.texts.textThree}}
            </p>
            <p class="" v-if="dld.texts.textFour">
              {{dld.texts.textFour}}
            </p>
            <p class="" v-if="dld.texts.textFive">
              {{dld.texts.textFive}}
            </p> 
          </div>
        </section>
        <div class="card-footer text-muted">
          <p class="fw-bold"> {{dld.footerTitle}} </p>
          <p class="fst-italic"> {{dld.footerText}} </p>
          <p class="fw-bold" v-if="dld.footerTitleTwo"> {{dld.footerTitleTwo}} </p>
          <p class="fst-italic" v-if="dld.footerTextTwo"> {{dld.footerTextTwo}} </p>
 <!--
         <a href="../assets/files/DAILY_LIGHT_DEVOTIONALS.pdf" download class="my-3 d-block btn-accent text-decoration-none">
            Download Devotional for the Month
          </a> 
-->
        </div>
        </div> 
      </div> 
    </article>
  </main>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { DailyLight } from "./../services/DailyLight.js";

export default {
  name: "BlogPost-vue",

  setup() {
    let dld = reactive({});


    let date = new Date();

    let blogDate = date.toDateString()

     let todaysDate = date.toLocaleDateString().toString()
     console.log(todaysDate)

    const devotionals =() => {
      return DailyLight.getAllDevotionals()
    };

    dld = devotionals().find(test => test.uniqueDate === todaysDate)
   // let dldDate = `${dld.uniqueDate}`


    // console.log(devotionals().find(test => test.id ==  1 ))

    return {
      dld,
      todaysDate,
      devotionals,
      blogDate,
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

@media (max-width: 550px) {
  .page-title {
    font-size: xx-large;
  }
}
</style>
