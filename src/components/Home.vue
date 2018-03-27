<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <form v-on:submit.prevent="addCategory">
      <input v-model="newCategory"/>
      <button type="submit">Add</button>
    </form>

    <draggable class="categories-wrapper" v-model="categories" @start="drag=true" @end="drag=false">
      <category v-for="(title, index) in categories" v-bind:title="title" v-bind:key="index"/>
    </draggable>

  </div>
</template>

<script>
import Category from './Category'
import draggable from 'vuedraggable'

export default {
  name: 'Home',
  components: {Category, draggable},
  data () {
    return {
      msg: 'Home',
      newCategory: '',
      categories: ['Category1', 'Category2', 'Category3', 'Category4', 'Category5']
    }
  },
  methods: {
    addCategory() {
      this.categories.push(this.newCategory);
      this.newCategory = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.categories-wrapper {
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
}
</style>
