<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <button @click="toggleDraggable">Toggle</button>

    <div id="sources" class="categories-wrapper">
      <payment-source
        v-for="(source, index) in sourcesSortable"
        v-bind:source="source"
        v-bind:key="index"
      />

      <div class="add-source">
        <div class="add-source--icon" @click="openAddSource">+</div>
      </div>
    </div>

    <div id="categories" class="categories-wrapper">
      <category
        v-for="(category, index) in categoriesSortable"
        v-bind:key="index"
        v-bind:category="category"
        v-bind:index="index"
        v-bind:on-drop="onDrop"/>
    </div>

    <modal
      v-if="showModal"
      v-bind:modal-properties="modalProperties"
      v-bind:close-modal="closeModal"
    />
  </div>
</template>

<script>
import Sortable from 'sortablejs'

import PaymentSource from './PaymentSource'
import Category from './Category'
import Modal from './Modal'

export default {
  name: 'Home',
  components: {PaymentSource, Category, Modal},
  data () {
    return {
      currentChoosen: 0,
      msg: 'Home',
      sources: [],
      sourcesSortable: [],
      categories: [],
      categoriesSortable: [],
      modalProperties: {},
      showModal: false,
    }
  },
  created() {
    const sources = localStorage.getItem('sources');
    const categories = localStorage.getItem('categories');

    if (sources) {
      this.sources = JSON.parse(sources);
      this.sourcesSortable = this.sources.slice();
    }
    if (categories) {
      this.categories = JSON.parse(categories);
      this.categoriesSortable = this.categories.slice();
    }
  },
  mounted () {
    this.sortableSources = new Sortable(document.getElementById('sources'), {
      sort: false,
      group: 'sources',
      onChoose: this.onChoose,
      onSort: this.onSort,
    });
    this.sortableCategories = new Sortable(document.getElementById('categories'), {
      sort: false,
      disabled: true,
      group: 'category',
    });
  },
  methods: {
    toggleDraggable() {
      const state = this.sortableSources.option('sort');

      this.sortableSources.option('sort', !state);
      this.sortableCategories.option('sort', !state);
    },
    onChoose(event) {
      this.currentChoosen = event.oldIndex;
    },
    onDrop(target) {
      console.log(`From ${this.sources[this.currentChoosen].name} to ${this.categories[target].name}`);
    },
    onSort(evt) {
      const target = evt.to.id;
      const {oldIndex, newIndex} = evt;

      this[target].move(this[target][oldIndex], newIndex - oldIndex);
      localStorage.setItem(target, JSON.stringify(this[target]));
    },
    closeModal() {
      this.showModal = false;
    },

    openAddSource() {
      this.showModal = !this.showModal;
      this.modalProperties = {
        component: 'add-source-form',
        submit: this.addSource
      }
    },
    addSource(source) {
      this.sources.push(source);
      this.sourcesSortable.push(source);

      localStorage.setItem('sources', JSON.stringify(this.sources));
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

  .add-source {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 10px;
    width: 150px;
    flex-shrink: 0;
    user-select: none;
  }

  .add-source--icon {
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
