<template>
  <div class="pdfIcon-wrap">
    <div class="pdfIcon">
      <button @click="download">
        <span
            class="button iconfont iconpdf"
            style="font-size: 24px"
            :title="pdfIconTitle"
        >
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PdfIcon",
  data() {
    return {}
  },
  computed: {
    lang() {
      return this.$lang
    },
    pdfIconTitle() {
      return this.lang === 'zh-CN' ? '下载 PDF' : 'Download PDF'
    }
  },
  methods: {
    download() {
      console.log(this.$frontmatter)
      // window.open('https://main.qcloudimg.com/raw/document/product/pdf/213_2753_cn.pdf')
      print()
    }
  }
}
</script>

<style lang="stylus" scoped>
.pdfIcon-wrap
  display flex
  flex-flow row-reverse
</style>
