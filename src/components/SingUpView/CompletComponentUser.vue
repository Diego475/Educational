<template>
  <div>
    <!-- Первый -->
    <slot-reg v-if="show == true">
      <span slot="title">Закончить регистрацию</span>
      <b-card slot="body">
        <b-form-group class="mb-4" label-cols="2" label="Фамилия">
          <b-form-input
            type="text"
            placeholder="Введите Вашу фамилию"
          ></b-form-input>
        </b-form-group>
        <b-form-group class="mb-4" label-cols="2" label="Отчество">
          <b-form-input
            type="text"
            placeholder="Введите Ваше отчество"
          ></b-form-input>
        </b-form-group>
        <b-button disabled block variant="primary">Зарегистрироваться</b-button>
      </b-card>
    </slot-reg>

    <!-- Второй -->
    <slot-reg v-if="show == false">
      <span slot="title">Закончить регистрацию</span>
      <b-card slot="body">
        <span class="font-weight-bold">Универсальный ключ</span>
        <b-input-group class="mt-3 mb-4" label-cols="2" label="Отчество">
          <template #append
            ><b-button variant="primary">Копировать</b-button></template
          >
          <b-form-input value="XXXXX-XXXXX-XXXXX-XXXXX" disabled></b-form-input>
        </b-input-group>
        <b-button variant="primary" block>Зарегистрироваться</b-button>
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
      show: false,
    };
  },
};
</script>


<style scoped>
footer {
  bottom: 0;
}
</style>

