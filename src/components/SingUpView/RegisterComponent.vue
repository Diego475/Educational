<template>
  <b-row class="d-flex justify-content-center mb-3">
    <b-col cols="6" class="mb-3">
      <b-card>
        <b-form-group label-cols="2" label="Email" class="mb-4">
          <b-form-input
            type="email"
            placeholder="name@example.com"
          ></b-form-input>
        </b-form-group>
        <b-form-group label-cols="2" label="Логин" class="mb-4">
          <b-form-input placeholder="Введите логин"></b-form-input>
        </b-form-group>
        <b-form-group label-cols="2" label="Имя" class="mb-4">
          <b-form-input placeholder="Введите имя"></b-form-input>
        </b-form-group>
        <b-form-group label-cols="2" label="Пароль" class="mb-4">
          <b-form-input
            placeholder="Введите пароль"
            class="pr-5"
          ></b-form-input>
        </b-form-group>
        <b-form-group label-cols="4" label="Повторите пароль" class="mb-4">
          <b-form-input></b-form-input>
        </b-form-group>
        <b-form-group label-cols="3" label="Категория" class="mb-4">
          <b-form-select
            v-model="selected"
            :options="options"
            class="mb-3"
            value-field="item"
            text-field="item"
            disabled-field="notEnabled"
          ></b-form-select>
        </b-form-group>
        <b-button disabled block variant="primary" size="lg"
          >Продолжить</b-button
        >
      </b-card>
    </b-col>
  </b-row>
</template>


<script>
export default {
  data() {
    return {
      selected: "Ученик/Студент",
      options: [
        { item: "Ученик/Студент" },
        { item: "Учитель/Преподователь" },
        { item: "Школа/ССУЗ/ВУЗ" },
      ],
    };
  },
};
</script>