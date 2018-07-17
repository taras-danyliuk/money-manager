<template>
  <div class="add-item">
    <div class="add-item--icon" @click="onClick">+</div>
  </div>
</template>

<script>
export default {
  name: 'addItem',
  props: ['onClick'],
}
</script>

<style scoped>
  .add-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 10px;
    width: 120px;
    flex-shrink: 0;
    user-select: none;
  }

  .add-item--icon {
    border-radius: 25px;
    width: 50px;
    height: 50px;
    background-color: lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 29px;
    cursor: pointer;
  }
</style>
