<template>
  <div>
    <NavHeader />
    <BlogReg></BlogReg>
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