
<template>
<div id="app">
    <VueMultiselect
      v-model="selectedKey" :options="options1" @select="onSelect" :value="value">
    </VueMultiselect>
    
    <br>
    <VueMultiselect
      v-model="selectedItem" :options="options2" >
    </VueMultiselect>

    <button>Submit!</button>
</div>
</template>

<script>
import VueMultiselect from 'vue-multiselect'
import Axios from "axios";
export default {
  components: { VueMultiselect },
  data() {
    return{
        selectedKey: '',
        selectedItem:'',
        value: [],
        options1:["東京","新潟","岩手"],
        options2:[],
        items:[],
    }
  },
  created: function() {
    this.updateContents();
  },
  methods:{
    onSelect(value) {
      //this.options2 = this.replaceChildrenOptions()
      this.options2 = this.items[value];
    },
    updateContents() {
      Axios.get("/api/books/index.json").then(
      response => {
      const responseData = response.data;
      this.items = responseData
      }
    )},
    replaceChildrenOptions(){
      var selectChildren = this.selectedKey
      if (selectChildren){

      }else{
      replaceSelectOptions(selectChildren, [])
      }
    }
  },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>

