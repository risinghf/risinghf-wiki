<template>
  <v-row class="product-home">
    <v-col xs="12" sm="6" md="4" lg="3" xl="3" v-for="(item,key) in productItem" :key="key">
      <product :item="item"></product>
    </v-col>
  </v-row>
</template>

<script>
const products = require('../config/productInfo')
export default {
  name: "Products",
  data() {
    return {}
  },
  computed: {
    locale() {
      return this.$lang
    },
    productItem() {
      return this.locale === 'zh-CN' ? products.zh : products.en
    }
  }
}
</script>

<style scoped>

</style>
