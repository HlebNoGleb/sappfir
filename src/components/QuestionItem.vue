<template>
  <div class="question">
    <div>
      <p>{{question.id}}</p>
      <p>{{question.title}}</p>
      <p>{{question.text}}</p>
    </div>
    <form>
      <p v-for="(button) in TextData.buttonData.checkButtonData" :key="button">
        <label>
          <input class="with-gap" name="group1" type="radio"
          @change="$emit('selectedRadio', button.id, question.id)"
          :checked="$emit('selectedRadio', button.id, question.id)" />
          <span>{{button.value}} - {{button.id}}</span>
        </label>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  props: ['question', 'TextData'],
  emits: ['selectedRadio'],
};
</script>

<style scoped>
  .question{
    border: 2px solid teal;
    margin: 20px;
    padding: 20px;
  }
</style>
