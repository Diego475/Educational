<template>
  <div>
    <slot-reg>
      <span slot="title">Аутентификация</span>
      <b-card slot="body">
        <b-form-group
          class="mb-4"
          label="Код"
          label-cols="2"
          description="На Вашу почту был оправлен одноразовый код. Введите его сюда, чтобы продолжить регистрацию."
        >
          <b-form-input
            type="text"
            placeholder="Не менее 6 символов"
          ></b-form-input>
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
};
</script>

<style scoped>
footer {
  bottom: 0;
}
</style>

