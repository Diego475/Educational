<template>
  <b-container class="mb-5">
    <div class="accordian" role="tablist">
      <b-row class="mb-4">
        <b-col>
          <h1>Часто задаваемые вопросы</h1>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col cols="12" role="tab">
          <h4 v-b-toggle.accordion-1>
            <span class="font-weight-bold">Вопрос № 1.</span> Где моя зарплата?
          </h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-collapse id="accordion-1" visible accordion="my-accordion">
            <b-card>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
              quas sed. Dicta cum commodi eligendi magni ab eveniet cupiditate
              ipsam mollitia obcaecati, fugiat voluptate minima id maiores quae
              ratione suscipit. Facere nemo ut dolores assumenda libero. Cum
              itaque atque inventore, illum vel adipisci, fugiat officia
              commodi.
            </b-card>
          </b-collapse>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col cols="12" role="tab">
          <h4 v-b-toggle.accordion-2>
            <span class="font-weight-bold">Вопрос № 2.</span> Сколько время?
          </h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-collapse id="accordion-2" accordion="my-accordion">
            <b-card>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam
              facilis nesciunt ipsa repellendus corporis nihil corrupti quia
              labore blanditiis libero eum, eos illo, quasi adipisci laudantium
              accusamus aliquid maiores.
            </b-card>
          </b-collapse>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col cols="12" role="tab">
          <h4 v-b-toggle.accordion-3>
            <span class="font-weight-bold">Вопрос № 3.</span> Когда стипендия?
          </h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-collapse id="accordion-3" accordion="my-accordion">
            <b-card>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              natus molestias accusamus architecto sed? Velit neque quasi
              debitis vero eum cum quos dolores fugiat in.
            </b-card>
          </b-collapse>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col cols="12" role="tab">
          <h4 v-b-toggle.accordion-4>
            <span class="font-weight-bold">Вопрос № 4.</span> Когда долг отдашь?
          </h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-collapse id="accordion-4" accordion="my-accordion">
            <b-card>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              mollitia aspernatur blanditiis vitae eligendi illum pariatur
              aperiam atque. Ex sed culpa ratione tempore quod beatae dolorem,
              eum provident debitis incidunt.
            </b-card>
          </b-collapse>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col cols="12" role="tab">
          <h4 v-b-toggle.accordion-5>
            <span class="font-weight-bold">Вопрос № 5.</span> Когда будет готова
            реклама?
          </h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-collapse id="accordion-5" accordion="my-accordion">
            <b-card>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga vel
              impedit tempora maiores accusamus aperiam voluptatibus quisquam
              beatae! Facilis.
            </b-card>
          </b-collapse>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {};
</script>

<style>
</style>