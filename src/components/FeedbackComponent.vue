<template>
  <b-container class="align-self-center text-center mb-5">
    <b-row class="justify-content-center pb-3">
      <b-col md="6" cols="12">
        <h1>Ещё остались вопросы?</h1>
      </b-col>
    </b-row>
    <template v-if="isShow">
      <b-row class="justify-content-center">
        <b-col md="6" cols="12">
          <p>
            Оставьте свои контактные данные, для того, чтобы мы смогли с Вами
            связаться
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-center pb-4">
        <b-col cols="12" md="6">
          <div>
            <b-form @submit.prevent="sendMess()">
              <b-form-group>
                <b-form-input
                  type="text"
                  placeholder="Ваше имя..."
                  aria-describedby="input-feedback-name"
                  v-model.trim="$v.name.$model"
                  :state="validateStateName('name')"
                >
                </b-form-input>
                <b-form-invalid-feedback
                  class="text-left"
                  id="input-feedback-name"
                >
                  Это поле является обязательным
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group>
                <b-form-input
                  placeholder="Ваш email..."
                  aria-describedby="input-feedback-email"
                  type="email"
                  v-model.trim="$v.email.$model"
                  :state="validateStateEmail('email')"
                ></b-form-input>
                <b-form-invalid-feedback
                  class="text-left"
                  id="input-feedback-email"
                >
                  Это поле должно быть email и обязательным
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-textarea
                placeholder="Ваши вопросы..."
                aria-describedby="input-feedback-text"
                rows="6"
                no-resize
                v-model.trim="$v.text.$model"
                :state="validateStateText('text')"
              ></b-form-textarea>
              <b-form-invalid-feedback
                class="text-left"
                id="input-feedback-text"
              >
                Это поле является обязательным и быть не более 1024 символов
              </b-form-invalid-feedback>
              <div class="mt-3">
                <b-button
                  @click.prevent="sendMess"
                  :disabled="$v.$anyError"
                  type="submit"
                  block
                  variant="secondary"
                  >Отправить</b-button
                >
              </div>
            </b-form>
          </div>
        </b-col>
      </b-row>
    </template>
    <template v-else>
      <b-alert show variant="success">
        <h4 class="alert-heading">Спасибо за сообщение!</h4>
        <p>Мы постараемся связаться с Вами в ближайшее время!</p>
      </b-alert>
    </template>
  </b-container>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";

import { validationMixin } from "vuelidate";
import { required, email, maxLength } from "vuelidate/lib/validators";

Vue.use(VueAxios, axios);
export default {
  mixins: [validationMixin],
  data() {
    return {
      name: null,
      email: null,
      text: null,
      isShow: true,
    };
  },

  validations: {
    name: {
      required,
    },
    email: {
      email,
      required,
    },
    text: {
      required,
      maxLength: maxLength(1024),
    },
  },

  methods: {
    validateStateName() {
      const { $dirty, $error } = this.$v.name;
      return $dirty ? !$error : null;
    },

    validateStateEmail() {
      const { $dirty, $error } = this.$v.email;
      return $dirty ? !$error : null;
    },

    validateStateText() {
      const { $dirty, $error } = this.$v.text;
      return $dirty ? !$error : null;
    },

    sendMess() {
      this.$v.$touch();

      if (this.$v.$anyError) {
        return;
      }

      axios.post("http://localhost:3000/api/email/send", {
        email: this.email,
        text: this.text,
        name: this.name,
      });
      this.isShow = false;
    },
  },
};
</script>

<style>
</style>