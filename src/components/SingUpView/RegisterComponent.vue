<template>
  <div>
    <slot-reg>
      <span slot="title">Регистрация</span>
      <b-card slot="body">
        <b-form-group class="mb-4" label-cols="2" label="Email">
          <b-form-input
            type="email"
            placeholder="name@example.com"
          ></b-form-input>
        </b-form-group>
        <b-form-group class="mb-4" label-cols="2" label="Логин">
          <b-form-input placeholder="Введите логин"></b-form-input>
        </b-form-group>
        <template
          v-if="
            selected == 'Ученик/Студент' || selected == 'Учитель/Преподователь'
          "
        >
          <b-form-group class="mb-4" label-cols="2" label="Имя">
            <b-form-input placeholder="Введите имя"></b-form-input>
          </b-form-group>
        </template>
        <template v-if="selected == 'Школа/ССУЗ/ВУЗ'">
          <b-form-group class="mb-4" label-cols="5" label="Название учреждения">
            <b-form-input
              placeholder="Введите название учреждения"
            ></b-form-input>
          </b-form-group>
        </template>
        <b-form-group class="mb-4" label-cols="2" label="Пароль">
          <b-form-input placeholder="Введите пароль"></b-form-input>
        </b-form-group>
        <b-form-group class="mb-4" label-cols="4" label="Повторите пароль">
          <b-form-input placeholder="Повторите пароль"></b-form-input>
        </b-form-group>
        <b-form-group class="mb-4" label-cols="3" label="Категория">
          <b-form-select
            class="mb-3"
            v-model="selected"
            :options="options"
            value-field="item"
            text-field="item"
          ></b-form-select>
        </b-form-group>
        <b-button disabled block variant="primary">Продолжить</b-button>
      </b-card>
    </slot-reg>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent";
import SlotReg from "@/components/slots/SingUpView/HeadingSlot";

export default {
  components: {
    FooterComponent,
    SlotReg,
  },
  data: () => {
    return {
      selected: "Ученик/Студент",
      options: [
        {
          item: "Ученик/Студент",
        },
        {
          item: "Учитель/Преподователь",
        },
        {
          item: "Школа/ССУЗ/ВУЗ",
        },
      ],
    };
  },
};
</script>
