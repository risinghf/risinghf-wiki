<template>
  <div>Redirecting ...</div>
</template>

<script>
export default {
  props: {
    to: { type: String },
  },
  mounted() {
      const { to } = this
      this.$router.push(to[to.length - 1] === '/' ? to : `${to}/`)
  }
}
</script>
