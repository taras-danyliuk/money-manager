<template>
  <div class="category">
    <p class="category--title">{{ title }}</p>
    <div class="category--icon">$</div>
  </div>
</template>

<script>
export default {
  name: 'category',
  props: ['title'],
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .category {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 10px;
    width: 150px;
    flex-shrink: 0;
  }

  .category--title {
    font-size: 16px;
    margin: 0 0 10px;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .category--icon {
    border-radius: 25px;
    width: 50px;
    height: 50px;
    background-color: lightyellow;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
