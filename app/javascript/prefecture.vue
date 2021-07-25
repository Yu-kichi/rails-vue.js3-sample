<template>
  <div id="app">
    <select v-model="selectedKey" v-on:change="selected">
        <option v-for="(value, key) in items">
            {{ key }}
        </option>
    </select>
    <br>
    <select>
        <option v-if="selectedItem" v-for="item in selectedItem">
            {{ item.name }}
        </option>
    </select>

    <VueMultiselect
      v-model="selectedKey" :options="options1" :placeholder = "placeholder">
    </VueMultiselect>

    <VueMultiselect
      v-model="selectedItem" :options="options1">
    </VueMultiselect>
    <button>Submit!</button>
  </div>
</template>

<script>
import VueMultiselect from 'vue-multiselect'
export default {
   components: { VueMultiselect },
   data() {
     return{
        selected1: null,
        options1: ['長野', '東京', '北海道'],
        selectedKey: '',
        selectedItem:'',
        placeholder: "県名を入力してください",
        items: {
            Toyota: [
                { name: 'Aqua' },
                { name: 'Prius' },
                { name: 'Collora' },
                { name: 'Vitz' },
                { name: 'Crown' },
            ],
            Honda: [
                { name: 'N-BOX' },
                { name: 'Freed' },
                { name: 'VEZEL' },
                { name: 'N-WGN' },
                { name: 'Fit' },
            ],
        }
     }
    },
    methods:{
        selected: function(){
            this.selectedItem = this.items[this.selectedKey];
        }
    }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>