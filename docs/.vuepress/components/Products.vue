<template>
  <v-row class="product-home">
    <v-col xs="12" sm="6" md="4" lg="3" xl="3" v-for="(item,key) in filtered" :key="key">
      <product :item="item"></product>
    </v-col>
  </v-row>
</template>

<script>
const products = require('../../productInfo')
export default {
  name: "Products",
  props: {
    tags: {
      type: Array,
      default: () => {
        return ['module', 'node', 'gateway', 'cavityFilter']
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    locale() {
      return this.$lang
    },
    productItem() {
      return this.locale === 'zh-CN' ? products.zh : products.en
    },
    filtered() {
      return this.productItem.filter(item => {
        return this.tags.includes(item.tag)
      })
    },
  }
}
</script>

<style scoped>

</style>
