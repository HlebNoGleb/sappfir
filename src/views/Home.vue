<template>
  <UserForm v-if="!userName"
  :UserData="UserData"
  :TextData="TextData"
  @getUserName="getUserName">
  </UserForm> <!-- отправляю UserData в UserFrom -->
  <QuestionsList v-else
    :userName="userName"
    :questions="questions"
    :TextData="TextData"
  ></QuestionsList>
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
      ], // создаю (получаю объект с UserData)
      userName: '',
    };
  },
  methods: {
    getUserName(name) {
      this.userName = name;
    },
  },
};
</script>
