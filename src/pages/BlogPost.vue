<template>
  <meta property="og:image" :content="dld?.image">

  <main class="pt-5">
    <section>
      <div class="text-center bgg">
        <div class="bg-dark bg-opacity-50 py-5">
          <p class="h1 page-title text-white fs-bold fs-lg-extra">
            DAILY LIGHT DEVOTIONAL
          </p>
        </div>
      </div>
    </section>

    <article v-if="dld" class="dld">
      <div
        class="blog-post card m-3 m-md-5 bg-light bg-opacity-50 shadow-lg glass"
      >
        <header class="card-header">
          <div class="card-header">
            <p class="h3 fw-bold theme">
              {{ dld.title }}
              <small class="fs-6 fst-italic d-block fw-light">
                {{ blogDate }}
              </small>
            </p>
          </div>
        </header>
        <section>
          <div class="bg-none m-auto p-md-3 p-2 m-2 d-flex">
            <div class="row g-0">
              <div class="col-md-5">
                <img v-if="dld.image" :src="dld.image" class="img-fluid rounded-3">
              </div>
              <div class="col-md-6 m-auto mt-4">
                <div v-if="dld.bibleVerse" class="p-3 rounded-3 bg-theme-gradient d-flex align-self-center">
                  <div class="card-body">
                    <p class="card-title h5 theme border-bottom text-white">
                      MEMORY VERSE
                    </p>
                    <p class="card-text text-white">
                      {{ dld.memoryVerse }}
                      <span class="fst-italic text-dark">{{ dld.bibleVerse }}</span>
                    </p>
                  </div>
                </div>
                <div v-if="dld.studyBible" class="p-3 rounded-3 d-flex bg-accent-gradient my-3">
                  <div class="card-body">
                    <p class="card-title h5 accent-2 border-bottom head">
                      STUDY BIBLE
                    </p>
                    <p class="card-text accent-2">
                      {{ dld.studyBible }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-text p-lg-5 p-3">
            <p v-if="dld.texts.textOne">{{ dld.texts.textOne }}</p>
            <p v-if="dld.texts.textTwo">{{ dld.texts.textTwo }}</p>
            <p v-if="dld.texts.textThree">{{ dld.texts.textThree }}</p>
            <p v-if="dld.texts.textFour">{{ dld.texts.textFour }}</p>
            <p v-if="dld.texts.textFive">{{ dld.texts.textFive }}</p>
          </div>
        </section>
        <div class="card-footer text-muted">
          <p class="fw-bold text-black" v-if="dld.footerTitle">{{ dld.footerTitle }}</p>
          <p class="fst-italic text-black" v-if="dld.footerText">{{ dld.footerText }}</p>
          <p class="fw-bold text-black" v-if="dld.footerTitleTwo">{{ dld.footerTitleTwo }}</p>
          <p class="fst-italic text-black" v-if="dld.footerTextTwo">{{ dld.footerTextTwo }}</p>
        </div>
        <div class="card-footer bg-theme-gradient text-muted">
          <p class="fw-bold text-white h5" v-if="dld.bibleReadingPlanTitle">{{ dld.bibleReadingPlanTitle }}</p>
          <p class="fst-italic text-white" v-if="dld.bibleReadingPlanText">{{ dld.bibleReadingPlanText }}</p>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { DailyLight } from "./../services/DailyLight.js";
import moment from "moment";

export default {
  name: "BlogPost-vue",

  setup() {
    let dld = reactive(null); // Initialize as null
    let momentDate = reactive({});

    let date = new Date();
    let blogDate = date.toDateString();

    let todaysDate = date.toLocaleDateString();
    console.log(todaysDate);

    const devotionals = () => {
      return DailyLight.getAllDevotionals();
    };

    momentDate = moment().format("MMM Do YY");

    const devotionalData = devotionals().find(
      (test) => test.uniqueDate == momentDate
    );

    if (devotionalData) {
      dld = devotionalData;
    }

    return {
      dld,
      todaysDate,
      devotionals,
      blogDate,
      momentDate,
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

.img-resi {
  width: 400px;
  display: block;
}
</style>
