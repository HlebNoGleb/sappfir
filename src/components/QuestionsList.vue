<template>
  <div class="questionList">
    <div style="position: fixed; bottom: 40px; right: 20px; color: red;">{{selectedArray}}</div>
    <div style="position: fixed; bottom: 20px; right: 20px; color: red;">{{resultArray}}</div>
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
      resultArray: [],
    };
  },
  methods: {
    CreateSelectedRadioArray(radioId, questionId) {
      this.selectedArray[questionId] = radioId;
      if (this.selectedArray.length === this.questions.length) {
        if (!this.selectedArray.includes(undefined)) {
          this.resultArray = this.CreateResultArray();
          this.$emit('clicked', this.resultArray);
        }
      }
    },
    CreateResultArray() {
      const step = 8;
      const resultArray = [];
      const firstArray = [];
      const secondArray = [];

      let sum = 0;
      let sum1 = 0;

      for (let i = 0; i < step; i += 1) {
        for (let j = i; j < this.selectedArray.length; j += step) {
          if (j < 24) {
            sum += this.selectedArray[j];
          } else {
            sum1 += this.selectedArray[j];
          }
        }
        firstArray.push(sum);
        secondArray.push(sum1);
        sum = 0;
        sum1 = 0;
      }
      resultArray.push(firstArray);
      resultArray.push(secondArray);

      return resultArray;
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
