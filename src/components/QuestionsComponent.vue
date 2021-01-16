<template>
<b-container class="mb-5">
    <b-row class="text-center pb-5">
        <b-col>
            <h1 class="font-weight-bold mt-5">
                Почему такое тестирование эффективно?
            </h1>
        </b-col>
    </b-row>
    <b-row class="mt-3" v-for="question of questions" v-bind:key="question._id">
        <template v-if="question._id % 2 == 0">
            <b-col cols="12" md="6" class="text-center" order-md="2">
                <b-img :src="question.img" width="325" height="250"></b-img>
            </b-col>
            <b-col cols="12" md="6">
                <h1 class="mb-3 text-md-left text-center">{{ question.title }}</h1>
                {{ question.text }}
            </b-col>
        </template>
        <template v-else>
            <b-col cols="12" class="text-center" md="6">
                <b-img :src="question.img" width="325" height="250"></b-img>
            </b-col>
            <b-col cols="12" md="6">
                <h1 class="mb-3 text-md-left text-center">{{ question.title }}</h1>
                {{ question.text }}
            </b-col>
        </template>
    </b-row>
</b-container>
</template>

<script>
export default {
    data() {
        return {
            questions: [{
                    _id: 1,
                    title: "Экономия времени",
                    text: `Сейчас можно создать целую базу вопросов и сохранить их, чтобы
          использовать в дальнейшем. Не нужно писать отдельный тест для каждого
          курса — вы можете создать экзамен просто выбирая вопросы из уже
          созданной базы или воспользоваться шаблоном, который будет легко
          изменить для каждого нового курса.`,
                    img: "img/1.svg",
                },
                {
                    _id: 2,
                    title: "Мгновенные результаты",
                    text: `Кроме того очень полезной оказывается автоматическая система подсчета
          баллов. А какой простой может быть аналитика! Вы можете легко
          определить, кому из учащихся требуются ваша помощь. Согласитесь, это
          сохранит вам немало времени и нервов. Наша система может помочь Вам
          выбрать дизайн для определённых тестов.`,
                    img: "img/2.svg",
                },
                {
                    _id: 3,
                    title: "Точное оценивание",
                    text: `В отличии от других методов оценивания, такой является более
          эфективным и точным. У устных оцениях обычно принимают 2-4 темы, а в
          письменных 4-5. С таким количество тем не всегда удаётся выяснить на
          сколько учащийся знает предмет учителя. В то время, как тест, может
          состоять из несколько вопросов, но содержать большинство тем.`,
                    img: "img/3.svg",
                },
            ],
        };
    },
};
</script>
