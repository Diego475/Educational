<template>
<div>
    <HomeWrap />
    <NavHeader />
    <OurAdvantages />
    <ForWhom />
    <QuestionsComponent />
    <FeedbackComponent />
    <FooterComponent/>
</div>
</template>

<script>
import HomeWrap from "@/components/HomeView/HomeWrap";
import NavHeader from "@/components/HeaderComponent";
import OurAdvantages from "@/components/HomeView/OurAdvantages";
import ForWhom from "@/components/HomeView/ForWhom";
import QuestionsComponent from "@/components/HomeView/QuestionsComponent";
import FeedbackComponent from "@/components/HomeView/FeedbackComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
    components: {
        HomeWrap,
        NavHeader,
        OurAdvantages,
        ForWhom,
        QuestionsComponent,
        FeedbackComponent,
        FooterComponent
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
