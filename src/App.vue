<template>
  <div>
  <Header />

  <router-view/>
  <!-- <HomeView/> -->
  </div>
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
// import HomeView from './views/HomeView.vue';

export default {
  name: "App",

  components: { 
    Header, 
    Footer },


};
</script>

<style>

</style>
