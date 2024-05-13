<template>
  <div class="todoListContainer">
    <div class="heading">
      <h2 id="title" >Todo List</h2>
      <add-item-form
      v-on:reloadlist="getList()"/>
    </div>
    <list-view :items="items"
    v-on:reloadlist="getList()"/>
  </div>
</template>

<script>
import addItemForm from "./addItemForm"
import listView from "./listView"
export default {
   components: {
    addItemForm,
    listView
   },
   data: function(){
    return {
      items: []
    }
   },
   methods:{
    getList(){
      axios.get('api/items')
      .then( response => {
        this.items = response.data;
      })
      .catch (error => {
        console.log(error);
      })
    }
   },

   created(){
    this.getList();
   }
}
</script>

<style scoped>
.todoListContainer {
  width: 350px;
  margin: auto;
  border: 1px solid #ccc; 
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  background-color: #fff; 
  padding: 20px;
}

.heading {
  background-color: #3498db;
  padding: 10px;
  border-top-left-radius: 5px; 
  border-top-right-radius: 5px;
  color: #fff;
}

#title {
  text-align: center;
  margin: 0;
}
</style>