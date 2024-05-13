<template>
    <div>
      <div v-for="(item, index) in items" :key="index">
        <list-item 
        :item="item"
        class="item"
        v-on:itemchanged="$emit('reloadlist')"
        />
      </div>
    </div>
</template>

<script>
import listItem from "./listItem"
export default {
  props: ['items'],
  components: {
    listItem
  }
}
</script>

<style scoped>
   .item {
    background-color: #f5f5f5; 
    padding: 10px; 
    margin-top: 5px;
    border-bottom: 1px solid #ccc;
}
</style>