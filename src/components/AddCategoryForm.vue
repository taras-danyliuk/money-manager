<template>
  <div class="form-wrapper">
    <div class="form-wrapper--close" @click="close">&times;</div>

    <form class="add-form" v-on:submit.prevent="submitForm">
      <label class="add-form--label">Category name</label>
      <input class="add-form--input" type="text" v-model="name"/>

      <button type="submit" class="add-form--submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addCategoryForm',
  props: ['submit', 'close'],
  data() {
    return {
      name: '',
    }
  },
  methods: {
    submitForm() {
      if (this.name !== '') {
        this.submit(this.name)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-wrapper {
    min-width: 400px;
    position: relative;
  }

  .form-wrapper--close {
    position: absolute;
    height: 20px;
    width: 20px;
    top: 0;
    right: 0;
    cursor: pointer;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
  }

  .add-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 25px;
  }

  .add-form--input {
    height: 25px;
    line-height: 25px;
    font-size: 18px;
    outline: none;
    margin: 10px 0;
    width: 100%;
    background: transparent;
    border: 1px solid black;
    padding: 0 10px;
    box-sizing: border-box
  }

  .add-form--submit {
    width: 50%;
    height: 25px;
    font-size: 18px;
    background-color: lightgreen;
    color: grey;
    border-radius: 13px;
    border: none;
    outline: none;
    align-self: center;
    margin-top: 15px;
  }
</style>
