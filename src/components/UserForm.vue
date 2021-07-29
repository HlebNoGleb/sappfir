<template>
  <form @submit.prevent="createUser">
    <input type="text"
    v-model="form.name"
    v-if="UserData.name"
    > <!-- условие на проверку наличия name в UserData-->
    <input type="text"
    v-model="form.phone"
    v-if="UserData.phone"
    > <!-- условие на проверку наличия phone в UserData -->
    <button class="btn">start</button>
    <p>2123</p>
    <p>{{UserData.name}}</p>
    <p>{{UserData.phone}}</p>
  </form>
</template>

<script>
export default {
  props: ['UserData'], // принимаю объект UserData
  data() {
    return {
      form: {
        name: '',
        phone: '',
      },
    };
  },
  methods: {
    createUser() {
      if (this.form.name && this.form.phone) {
        this.$swal({
          icon: 'success',
          title: `Thanks ${this.form.name}`,
          text: 'Something went wrong!',
        });
        this.form.name = '';
        this.form.phone = '';
      } else {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    },
  },
};
</script>
