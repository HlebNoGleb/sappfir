<template>
  <form @submit.prevent="createUser">
    <input type="text"
    v-model="form.name"
    v-if="UserData.name.isUse"
    :placeholder="[[ UserData.name.placeholder ]]">
    <!-- условие на проверку наличия name в UserData-->
    <input type="text"
    v-model="form.phone"
    v-if="UserData.phone.isUse"
    :placeholder="[[ UserData.phone.placeholder ]]">
    <!-- условие на проверку наличия phone в UserData -->
    <button class="btn">start</button>
  </form>
</template>

<script>
export default {
  // props: ['UserData'], принимаю объект UserData
  // props: {
  //   UserData: Object, принимать можно и так для определения типа
  //   типов может быть нескколько UserData: [Object, String]
  // },
  props: {
    UserData: {
      type: Object,
      // required: true, параметр обязателен для передачи
      default: function UserDataDefault() {
        return {
          name: {
            isUse: true,
            value: '',
            placeholder: 'Введите ваше ФИО',
          },
          phone: {
            isUse: true,
            value: '',
            placeholder: 'Введите ваш Телефон',
          },
        };
      },
    },
  },
  data() {
    return {
      form: {
        name: '',
        phone: '',
        errors: [],
      },
    };
  },
  methods: {
    createUser() {
      this.errors = [];
      if (this.UserData.name.isUse) {
        if (!this.form.name) {
          this.errors.push(this.UserData.name.errorText);
        }
      }
      if (this.UserData.phone.isUse) {
        if (!this.form.phone) {
          this.errors.push(this.UserData.phone.errorText);
        }
      }

      if (this.errors.length === 0) {
        this.$swal({
          icon: 'success',
          title: `Thanks ${this.form.name}`,
          text: 'u cool',
        });
        this.form.name = '';
        this.form.phone = '';
      } else {
        const errorsHtml = this.createErrorsHtml(this.errors);
        console.log(errorsHtml);
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          html: errorsHtml,
        });
      }
    },

    createErrorsHtml(errors) {
      let errorsHtml = '<ul>';

      errors.forEach((item) => {
        errorsHtml += `<li>${item}</li>`;
      });

      errorsHtml += '</ul>';
      console.log(errorsHtml);

      return errorsHtml;
    },
  },
};
</script>
