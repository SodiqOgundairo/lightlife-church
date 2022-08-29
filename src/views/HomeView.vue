<template>
  <div>
    <Hero />
    <About />
    <Section1 />
    <Section2 />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Section1 from "../components/Section1.vue";
import Section2 from "../components/Section2.vue";
import About from "@/components/AboutCard.vue";
export default {
  name: "HomeView",

  components: { Hero, Section1, Section2, About },

  setup() {
    return {};
  },
};
</script>

<style scoped>
.bg-none {
  background: none !important;
}
</style>
