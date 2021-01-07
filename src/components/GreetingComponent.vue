<template>
  <div class="paralax">
    <div class="paralax__bg__color d-flex text-center">
      <b-container class="align-self-center text-white">
        <b-row>
          <b-col> Добро пожаловать на сайт </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h1 class="text-monospace font-weight-bold my-3">EduDigital</h1>
          </b-col>
        </b-row>
        <b-row class="mb-5">
          <b-col>
            проект для тестирования  разработан для учебных заведений</b-col
          >
        </b-row>
        <b-col>
          <b-button pill variant="outline-light">Присоединиться</b-button>
        </b-col>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.paralax {
  width: 100%;
  min-height: 100vh;
  background: url("https://www.marj3.com/wp-content/uploads/2020/04/0898.jpg") 0
    0 / cover no-repeat fixed;
}
.paralax__bg__color {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #343a40ed;
}
</style>