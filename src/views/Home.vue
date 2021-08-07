<template>
  <UserForm v-if="!userName"
  :UserData="UserData"
  :TextData="TextData"
  @getUserName="getUserName">
  </UserForm> <!-- отправляю UserData в UserFrom -->
  <div v-else>
  <p>имя:  {{userName}}</p>
  <QuestionsList
    :questions="questions"
    :TextData="TextData"
    @clicked="getResultArray"
  ></QuestionsList>
  <button @click="calcPsychotype" class="btn">{{TextData.buttonData.end}}</button>
  </div>
</template>

<script>
// @ is an alias to /src
import UserForm from '@/components/UserForm.vue';
import QuestionsList from '@/components/QuestionsList.vue';

export default {
  name: 'Home',
  components: {
    UserForm, QuestionsList,
  },
  data() {
    return {
      UserData: {
        name: {
          isUse: true,
          value: '',
          placeholder: 'Введите ваше ФИО',
          errorText: 'Вы не ввели ФИО',
        },
        phone: {
          isUse: true,
          value: '',
          placeholder: 'Введите ваш Телефон',
          errorText: 'Вы не ввели телефон',
        },
      },
      TextData: {
        popupData: {
          successTitle: 'successTitle',
          successText: 'successText',
          confirmButtonText: 'confirmButtonText',
          errorTitle: 'errorTitle',
          errorText: 'errorText',
        },
        buttonData: {
          start: 'Начать',
          end: 'Завершить тест',
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
      },
      types: {
        Individualist: {
          id: 0,
          name: 'Индивидуалист',
        },
        Innovator: {
          id: 0,
          name: 'Инноватор',
        },
        Fashionista: {
          id: 0,
          name: 'Модник',
        },
        Conservative: {
          id: 0,
          name: 'Консерватор',
        },
        Realist: {
          id: 0,
          name: 'Реалист',
        },
        Feeling: {
          id: 0,
          name: 'Чувствующий',
        },
        OpinionLeader: {
          id: 0,
          name: 'Лидер мнений',
        },
        Closed: {
          id: 0,
          name: 'Замкнутый',
        },
      },
      questions: [
        { id: 0, title: 'questionTitle1', text: 'questionText1' },
        { id: 1, title: 'questionTitle2', text: 'questionText2' },
        { id: 2, title: 'questionTitle3', text: 'questionText3' },
        { id: 3, title: 'questionTitle4', text: 'questionText4' },
        { id: 4, title: 'questionTitle5', text: 'questionText5' },
        { id: 5, title: 'questionTitle6', text: 'questionText6' },
        { id: 6, title: 'questionTitle1', text: 'questionText1' },
        { id: 7, title: 'questionTitle2', text: 'questionText2' },
        { id: 8, title: 'questionTitle3', text: 'questionText3' },
        { id: 9, title: 'questionTitle4', text: 'questionText4' },
        { id: 10, title: 'questionTitle5', text: 'questionText5' },
        { id: 11, title: 'questionTitle6', text: 'questionText6' },
        { id: 12, title: 'questionTitle1', text: 'questionText1' },
        { id: 13, title: 'questionTitle2', text: 'questionText2' },
        { id: 14, title: 'questionTitle3', text: 'questionText3' },
        { id: 15, title: 'questionTitle4', text: 'questionText4' },
        { id: 16, title: 'questionTitle5', text: 'questionText5' },
        { id: 17, title: 'questionTitle6', text: 'questionText6' },
        { id: 18, title: 'questionTitle1', text: 'questionText1' },
        { id: 19, title: 'questionTitle2', text: 'questionText2' },
        { id: 20, title: 'questionTitle3', text: 'questionText3' },
        { id: 21, title: 'questionTitle4', text: 'questionText4' },
        { id: 22, title: 'questionTitle5', text: 'questionText5' },
        { id: 23, title: 'questionTitle6', text: 'questionText6' },
        { id: 24, title: 'questionTitle5', text: 'questionText5' },
        { id: 25, title: 'questionTitle6', text: 'questionText6' },
        { id: 26, title: 'questionTitle1', text: 'questionText1' },
        { id: 27, title: 'questionTitle2', text: 'questionText2' },
        { id: 28, title: 'questionTitle3', text: 'questionText3' },
        { id: 29, title: 'questionTitle4', text: 'questionText4' },
        { id: 30, title: 'questionTitle5', text: 'questionText5' },
        { id: 31, title: 'questionTitle6', text: 'questionText6' },
        { id: 32, title: 'questionTitle1', text: 'questionText1' },
        { id: 33, title: 'questionTitle2', text: 'questionText2' },
        { id: 34, title: 'questionTitle3', text: 'questionText3' },
        { id: 35, title: 'questionTitle4', text: 'questionText4' },
        { id: 36, title: 'questionTitle5', text: 'questionText5' },
        { id: 37, title: 'questionTitle6', text: 'questionText6' },
        { id: 38, title: 'questionTitle5', text: 'questionText5' },
        { id: 39, title: 'questionTitle6', text: 'questionText6' },
      ], // создаю (получаю объект с UserData)
      userName: '',
      resultArray: [],
    };
  },
  methods: {
    getUserName(name) {
      this.userName = name;
    },
    getResultArray(res) {
      console.log(res);
      this.resultArray = res;
    },
    calcPsychotype() {
      if (this.resultArray.length > 1) {
        console.log(this.resultArray[0]);
        console.log(this.resultArray[1]);
        const max1 = Math.max(this.resultArray[0]);
        const max2 = Math.max(this.resultArray[1]);
        console.log(max1);
        console.log(max2);
        if (max1 && max2) {
          this.$swal({
            icon: 'success',
            title: `${this.userName} ${this.TextData.popupData.successTitle}`,
            text: this.TextData.popupData.successText,
            confirmButtonText: this.TextData.popupData.confirmButtonText,
          }).then(() => {
            this.showPsychotype(max1, max2);
          });
        }
      } else {
        this.$swal({
          icon: 'error',
          title: this.TextData.popupData.errorTitle,
          text: this.TextData.popupData.errorText,
          confirmButtonText: this.TextData.popupData.confirmButtonText,
        });
      }
    },
    showPsychotype(ff, ss) {
      console.log(ff);
      console.log(ss);
    },
  },
};
</script>
