<template>
  <footer class="text-secondary">
    <b-container class="py-3 text-center">
      <b-row>
        <div class="col">Авторское право © 2020-{{year.getFullYear()}}. Все права защищены.</div>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      year: new Date(),
    }
  }
};
</script>

