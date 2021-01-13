<template>
  <b-container class="mb-5">
    <b-row class="text-center mb-5 mt-5">
      <b-col>
        <h1 class="font-weight-bold">Кому подходит?</h1>
      </b-col>
    </b-row>
    <b-card-group deck>
      <b-card
        v-for="institut of institutions"
        v-bind:key="institut.title"
        :title="institut.title"
        :img-src="institut.src"
        :img-alt="institut.title"
        img-top
        img-height="250px"
      >
        <b-card-text>
          {{ institut.text }}
        </b-card-text>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      institutions: [
        {
          title: "Школы",
          src: "img/school.webp",
          text: `Наш сервис имеет достаточно функционала для бесплатной версии
          большинства учреждений`,
        },
        {
          title: "ВУЗы",
          src: "img/university.webp",
          text: `Учебные учреждения могут полностью контролировать своих учащихся по
          успеваемости`,
        },
        {
          title: "Колледжи",
          src: "img/college.jpeg",
          text: `Возможность создавать свои собственные тесты, и контролировать много
          аспектов`,
        },
      ],
    };
  },
};
</script>