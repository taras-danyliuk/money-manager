<template>
  <div class="hello">
    <button @click="toggleDraggable">Toggle edit mode</button>

    <div id="sources" class="categories-wrapper">
      <payment-source
        v-for="(source, index) in sourcesSortable"
        v-bind:source="source"
        v-bind:key="index"
      />

      <add-item :onClick="openAddSource"/>
    </div>

    <div id="categories" class="categories-wrapper">
      <category
        v-for="(category, index) in categoriesSortable"
        v-bind:key="index"
        v-bind:category="category"
        v-bind:index="index"
        v-bind:on-drop="onDrop"
      />

      <add-item :onClick="openAddCategory"/>
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
import addItem from './addItem'

export default {
  name: 'Home',
  components: {PaymentSource, Category, Modal, addItem},
  data () {
    return {
      currentChosen: 0,
      sources: [],
      sourcesSortable: [],
      categories: [],
      categoriesSortable: [],
      history: [],
      modalProperties: {},
      showModal: false,
    }
  },
  created() {
    const sources = localStorage.getItem('sources');
    const categories = localStorage.getItem('categories');
    const history = localStorage.getItem('history');

    if (sources) {
      this.sources = JSON.parse(sources);
      this.sourcesSortable = this.sources.slice();
    }
    if (categories) {
      this.categories = JSON.parse(categories);
      this.categoriesSortable = this.categories.slice();
    }
    if (history) {
      this.history = JSON.parse(history);
    }
  },
  mounted () {
    this.sortableSources = new Sortable(document.getElementById('sources'), {
      sort: false,
      group: 'sources',
      onChoose: this.onChoose,
      onSort: this.onSort,
      filter: '.add-item',
    });
    this.sortableCategories = new Sortable(document.getElementById('categories'), {
      sort: false,
      disabled: true,
      group: 'category',
      filter: '.add-item',
    });
  },
  methods: {
    toggleDraggable() {
      const state = this.sortableSources.option('sort');

      this.sortableSources.option('sort', !state);
      this.sortableCategories.option('sort', !state);
    },
    onChoose(event) {
      this.currentChosen = event.oldIndex;
    },
    onDrop(target) {
      console.log(`From ${this.sources[this.currentChosen].name} to ${this.categories[target].name}`);
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
    openAddCategory() {
      this.showModal = !this.showModal;
      this.modalProperties = {
        component: 'add-category-form',
        submit: this.addCategory
      }
    },
    addSource(source) {
      this.sources.push(source);
      this.sourcesSortable.push(source);

      localStorage.setItem('sources', JSON.stringify(this.sources));
    },
    addCategory(category) {
      this.category.push({
        name: category,
        amount: 0
      });
      this.sourcesSortable.push({
        name: category,
        amount: 0
      });

      localStorage.setItem('categories', JSON.stringify(this.category));
    }
  }
}
</script>

<style src="./home.css"></style>
