<template>
  <div class="modal-shaded">
    <div class="modal-block">
      <component
        :is="modalProperties.component"
        v-bind:submit="modalProperties.submit"
        v-bind:close="closeModal"
      />
    </div>
  </div>
</template>

<script>
import AddSourceForm from './AddSourceForm'

export default {
  name: 'modal',
  components: {AddSourceForm},
  props: ['modalProperties', 'closeModal'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .modal-shaded {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.4);
  }

  .modal-block {
    min-height: 300px;
    background: lightgrey;
  }
</style>
