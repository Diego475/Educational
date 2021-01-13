<template>
  <div id="app">
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {
    FooterComponent,
  },
};
</script>

<style>
footer {
  background-color: #2d2d2d;
}
</style>
