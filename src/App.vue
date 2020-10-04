<template>
  <div id="app">
    <Hea />
    <Intro />
    <Section />
    <Section2 />
    <Price />
    <Footer />
  </div>
</template>

<script>
import Hea from "./components/Hea.vue";
import Intro from "./components/Intro.vue";
import Section from "./components/Section.vue";
import Section2 from "./components/Section2.vue";
import Price from "./components/Price.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Hea,
    Intro,
    Section,
    Section2,
    Price,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 80px; */
}
</style>
