<template>
  <div>
    <slot-reg>
      <span slot="title">Регистрация</span>
      <b-card slot="body">
        <b-form @submit.prevent="FormReg">
          <b-form-group class="mb-4" label-cols-sm="2" label="Email">
            <b-form-input
              type="email"
              placeholder="name@example.com"
              v-model.trim="$v.email.$model"
              :state="emailValidation('email')"
              aria-describedby="input-feedback-email"
            ></b-form-input>
            <b-form-invalid-feedback id="input-feedback-email">
              Это поле уникальное, обязательное и должно быть Email
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group class="mb-4" label-cols-sm="2" label="Логин">
            <b-form-input
              type="text"
              placeholder="Введите логин"
              v-model.trim="$v.login.$model"
              :state="loginValidation('login')"
              aria-describedby="loginValidate"
            ></b-form-input>
            <b-form-invalid-feedback id="loginValidate">
              Это поле обязательно и не может содержать символы
            </b-form-invalid-feedback>
          </b-form-group>
          <template
            v-if="
              selected == 'Ученик/Студент' ||
              selected == 'Учитель/Преподователь'
            "
          >
            <b-form-group class="mb-4" label-cols-sm="2" label="Имя">
              <b-form-input
                type="text"
                placeholder="Введите имя"
                v-model.trim="$v.name.$model"
                :state="nameValidation('name')"
                aria-describedby="nameValidation"
              ></b-form-input>
              <b-form-invalid-feedback id="nameValidation">
                Это поле обязательно и не должно содержать цифры
              </b-form-invalid-feedback>
            </b-form-group>
          </template>
          <template v-if="selected == 'Школа/ССУЗ/ВУЗ'">
            <b-form-group
              class="mb-4"
              label-cols-sm="5"
              label="Название учреждения"
            >
              <b-form-input
                type="text"
                placeholder="Введите название учреждения"
                v-model.trim="$v.institut.$model"
                :state="institutValidation('institut')"
                aria-describedby="institutValidation"
              ></b-form-input>
              <b-form-invalid-feedback id="institutValidation">
                Это поле обязательно
              </b-form-invalid-feedback>
            </b-form-group>
          </template>
          <b-form-group class="mb-4" label-cols-sm="2" label="Пароль">
            <b-form-input
              type="password"
              placeholder="Введите пароль"
              v-model.trim="$v.password.$model"
              :state="passwordValidation('password')"
              aria-describedby="passwordValidation"
            ></b-form-input>
            <b-form-invalid-feedback id="passwordValidation">
              Это поле обязательно и должно содержать как минимум 8 символов
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group class="mb-4" label-cols-sm="4" label="Повторите пароль">
            <b-form-input
              type="password"
              placeholder="Повторите пароль"
              v-model.trim="$v.confirm.$model"
              :state="confirmValidate('confirm')"
              aria-describedby="confirmValidate"
            ></b-form-input>
            <b-form-invalid-feedback id="confirmValidate">
              Это поле обязательно. должно совпадать с полем пароль
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group class="mb-4" label-cols-sm="3" label="Категория">
            <b-form-select
              class="mb-3"
              v-model="selected"
              :options="options"
              value-field="item"
              text-field="item"
            ></b-form-select>
          </b-form-group>
          <b-button
            type="submit"
            :disabled="$v.$anyError"
            block
            variant="primary"
            >Продолжить</b-button
          >
        </b-form>
      </b-card>
    </slot-reg>
    <FooterComponent />
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import FooterComponent from "@/components/FooterComponent";
import SlotReg from "@/components/slots/SingUpView/HeadingSlot";
import {
  email,
  required,
  alphaNum,
  minLength,
  sameAs,
} from "vuelidate/lib/validators";

export default {
  components: {
    FooterComponent,
    SlotReg,
  },

  data: () => {
    return {
      mixins: [validationMixin],
      email: null,
      login: null,
      name: null,
      password: null,
      institut: null,
      confirm: null,
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

  validations() {
    if (this.selected == "Ученик/Студент") {
      return {
        email: {
          email,
          required,
        },
        login: {
          required,
          alphaNum,
        },
        name: {
          required,
        },
        password: {
          required,
          minLength: minLength(8),
        },
        confirm: {
          required,
          sameAsPassword: sameAs("password"),
        },
        selected: {
          required,
        },
      };
    } else {
      return {
        email: {
          email,
          required,
        },
        login: {
          required,
          alphaNum,
        },
        institut: {
          required,
        },
        password: {
          required,
          minLength: minLength(8),
        },
        confirm: {
          required,
          sameAsPassword: sameAs("password"),
        },
        selected: {
          required,
        },
      };
    }
  },


  methods: {
    emailValidation() {
      const { $dirty, $error } = this.$v.email;
      return $dirty ? !$error : null;
    },

    loginValidation() {
      const { $dirty, $error } = this.$v.login;
      return $dirty ? !$error : null;
    },

    nameValidation() {
      const { $dirty, $error } = this.$v.name;
      return $dirty ? !$error : null;
    },

    institutValidation() {
      const { $dirty, $error } = this.$v.institut;
      return $dirty ? !$error : null;
    },

    passwordValidation() {
      const { $dirty, $error } = this.$v.password;
      return $dirty ? !$error : null;
    },

    confirmValidate() {
      const { $dirty, $error } = this.$v.confirm;
      return $dirty ? !$error : null;
    },

    FormReg() {
      this.$v.$touch();
      if (this.$v.$anyError) {
        return;
      }
      // Продолжить работу
    },
  },
};
</script>
