<template>
  <div>
    <HeaderView v-bind:initialData.title="title" v-bind:description="initialData.description" />
    <Contents v-bind:contents="initialData.contents" />
  </div>

  <div id="app">
    <h1>Vue Select Sample</h1>
    <v-select :options="options" v-model="selected"/>
  </div>
</template>

<script>
import HeaderView from "../HeaderView.vue";
import Contents from "./Contents.vue";
import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css';

export default {
  components: {
    HeaderView,
    Contents
  },
    props: {
      initialData: {
        type: Object,
        default: () => {}
      }
    },
  };
</script>