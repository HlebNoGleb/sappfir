<template>
  <div class="home">
    home
  </div>
  <UserForm :UserData="UserData"></UserForm> <!-- отправляю UserData в UserFrom -->
</template>

<script>
// @ is an alias to /src
import UserForm from '@/components/UserForm.vue';

export default {
  name: 'Home',
  components: {
    UserForm,
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
      }, // создаю (получаю объект с UserData)
    };
  },
};
</script>
