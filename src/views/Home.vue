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
      UserData: { name: true, phone: true }, // создаю (получаю объект с UserData)
    };
  },
};
</script>
