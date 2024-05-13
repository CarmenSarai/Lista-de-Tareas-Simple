<template>
  <div class="addItem">
    <input type="text" v-model="item.name"/>
    <font-awesome-icon 
    icon="square-plus" 
    @click="addItem()"
    :class="[item.name ? 'active' : 'inactive', 'plus']"
    />
  </div>
</template>

<script>

export default {

   data: function(){
    return {
      item:{
        name: ""
      }
    }
   },
   methods:{
     addItem(){
      if(this.item.name ==''){
        return;
      }
     axios.post('api/item/store',{
      item:this.item
     })
     .then( response => {
       if(response.status == 201 ){
        this.item.name = "";
        this.$emit('reloadlist');
       }
     })

     .catch (error => {
      console.log(error);
     })
   }
  }
}
</script>

<style scoped>
   
.addItem {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}


input {
    background-color: #f7f7f7;
    border: 1px solid #ccc; 
    padding: 8px; 
    margin-right: 10px;
    width: 70%; 
    border-radius: 5px; 
}


.plus {
    font-size: 24px; 
    cursor: pointer;
}

.active {
    color: green;
}


.inactive {
    color: rgb(29, 26, 26);
}

</style>