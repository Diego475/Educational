<template>
  <div>
    <NavHeader />
    <b-container>
      <b-row class="my-4">
        <b-col class="text-center">
          <h1>Регистрация</h1>
        </b-col>
      </b-row>
      <BlogReg />
    </b-container>
  </div>
</template>

<script>
import NavHeader from "@/components/HeaderComponent";
import BlogReg from "@/components/SingUpView/RegisterComponent";

export default {
  components: {
    NavHeader,
    BlogReg,
  },
};
</script>

<style>
</style>