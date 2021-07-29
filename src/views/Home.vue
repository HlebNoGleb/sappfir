<template>
  <UserForm v-if="!userName"
  :UserData="UserData"
  :TextData="TextData"
  @getUserName="getUserName">
  </UserForm> <!-- отправляю UserData в UserFrom -->
  <QuestionsList v-else
    :userName="userName"
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
        buttonStartText: 'Начать',
      }, // создаю (получаю объект с UserData)
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
