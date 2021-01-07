<template>
  <div id="app">
    <Greeting />
    <Navbar />
    <Secondary />
    <LittleTest />
    <Accardion />
    <Communication />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/HeaderComponent";
import Greeting from "./components/GreetingComponent";
import Secondary from "./components/SecondaryComponent";
import LittleTest from "./components/LittleTest";
import Accardion from "./components/AcardionFAQComponent";
import Communication from "./components/CommunicationComponent";
import Footer from "./components/FooterComponent";
export default {
  name: "App",
  components: {
    Navbar,
    Greeting,
    Secondary,
    LittleTest,
    Accardion,
    Communication,
    Footer
  },
};
</script>

<style>
footer {
  background-color: #2d2d2d;
}
</style>
