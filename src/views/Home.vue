<template>
  <div>
    <HomeWrap />
    <NavHeader />
    <OurAdvantages />
    <ForWhom />
    <QuestionsComponent />
    <FeedbackComponent />
  </div>
</template>

<script>
// Connected components
import HomeWrap from "@/components/HomeWrap";
import NavHeader from "@/components/HeaderComponent";
import OurAdvantages from "@/components/OurAdvantages";
import ForWhom from "../components/ForWhom";
import QuestionsComponent from "@/components/QuestionsComponent";
import FeedbackComponent from "@/components/FeedbackComponent";

export default {
  //Use components
  components: {
    HomeWrap,
    NavHeader,
    OurAdvantages,
    ForWhom,
    QuestionsComponent,
    FeedbackComponent,
  },
};
</script>

<style>
.paralax {
  width: 100%;
  min-height: 100vh;
  background: url("../../public/img/wrap.jpeg") 0 0 / cover no-repeat fixed;
}

.paralax__bg__color {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #343a40ed;
}

.fa-globe {
  color: #00b7ff;
}

.fa-heart {
  color: red;
}

.fa-mouse-pointer {
  color: var(--gray-dark);
}
</style>
