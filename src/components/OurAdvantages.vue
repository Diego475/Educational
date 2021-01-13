<template>
  <b-container class="pb-5 pt-5">
    <b-row class="pb-5 text-center">
      <b-col>
        <h1 class="font-weight-bold">Наши преимущества</h1>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col v-for="advantage of benefits" v-bind:key="advantage.icon">
        <i class="fa fa-3x" :class="advantage.icon"></i>
        <h4>{{ advantage.title }}</h4>
        <p>
          {{ advantage.description }}
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      benefits: [
        {
          icon: "fa-globe",
          title: "Глобальность",
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          laborum voluptate iure fuga saepe unde enim quibusdam ea eos rerum
          debitis, tempore cumque distinctio, temporibus inventore obcaecati
          suscipit exercitationem doloremque.`,
        },
        {
          icon: "fa-heart",
          title: "Простота",
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores
          aspernatur, at dignissimos velit veritatis ipsam modi fuga praesentium
          nemo a sapiente architecto eligendi perspiciatis id voluptatem nostrum
          alias temporibus.`,
        },
        {
          icon: "fa-mouse-pointer",
          title: "Скорость",
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          quaerat nihil cupiditate dolorum dolor assumenda minus necessitatibus
          soluta voluptas? Excepturi minima ullam, laudantium ratione id
          consequatur quasi? Ab, veritatis rem?`,
        },
      ],
    };
  },
};
</script>