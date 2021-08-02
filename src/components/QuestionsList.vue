<template>
  <div class="questionList">
    <p>имя:  {{userName}}</p>
    <div style="position: fixed; bottom: 20px; right: 20px; color: red;">{{selectedArray}}</div>
    <QuestionItem
    v-for="question in questions"
    :key="question.id"
    :question="question"
    :TextData="TextData"
    @selectedRadio="CreateSelectedRadioArray">
    </QuestionItem>
  </div>
</template>

<script>
import QuestionItem from '@/components/QuestionItem.vue';

export default {
  components: {
    QuestionItem,
  },
  props: {
    userName: {
      type: String,
      required: true,
    },
    questions: {
      type: Array,
      required: true,
    },
    TextData: {
      type: Object,
      default: function TextDataDefault() {
        return {
          popupData: {
            successTitle: 'successTitle',
            successText: 'successText',
            confirmButtonText: 'confirmButtonText',
            errorTitle: 'errorTitle',
            errorText: 'errorText',
          },
          buttonData: {
            start: 'Начать',
            checkButtonData: {
              yes: {
                id: 1,
                value: 'Да',
              },
              no: {
                id: 2,
                value: 'Нет',
              },
              maybe: {
                id: 3,
                value: 'Возможно',
              },
            },
          },
        };
      },
    },
  },
  data() {
    return {
      selectedArray: [],
    };
  },
  methods: {
    CreateSelectedRadioArray(radioId, questionId) {
      this.selectedArray[questionId] = radioId;
    },
  },
};
</script>

<style scoped>
  .questionList{
    display: flex;
    flex-wrap: wrap;
  }
</style>
