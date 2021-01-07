<template>
  <div class="bg-1">
    <b-container class="align-self-center text-center">
      <b-row class="justify-content-center pt-4">
        <b-col md="6" cols="12">
          <h1>Ещё остались вопросы?</h1>
          <p>
            Оставьте свои контактные данные, для того, чтобы мы смогли с Вами
            связаться
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-center pb-4">
        <b-col cols="12" md="6">
          <template>
            <div>
              <b-form>
                <b-form-group>
                  <b-form-input
                    id="input-1"
                    type="email"
                    placeholder="Ваше имя..."
                  ></b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    id="input-1"
                    type="email"
                    placeholder="Ваш email..."
                  ></b-form-input>
                </b-form-group>
                <b-form-textarea
                  id="textarea-no-resize"
                  placeholder="Ваши вопросы..."
                  rows="3"
                  no-resize
                ></b-form-textarea>
                <div class="mt-3">
                  <b-button block variant="secondary">Отправить</b-button>
                </div>
              </b-form>
            </div>
          </template>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>