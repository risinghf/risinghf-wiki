<template>
  <v-card
      class="product-list view view-third"
      @click="toPage(item.path)"
  >
    <v-img
        class="product-img"
        :src="item.src"
        :height="setProductH"
        contain
        eager
    ></v-img>
    <div class="visibility text-center">
      <p
          class="titles text-cut-2 text-capitalize"
          v-html="addBrand(item.title)"
          v-ellipsis="{ 'line': 2, 'showTitle': true, 'rightBlank': 5 }"
      ></p>
    </div>
    <div class="visibility text-center">
      <p
          class="type text-cut-2 text-capitalize"
          v-html="addBrand(item.type)"
          v-ellipsis="{ 'line': 1, 'showTitle': true, 'rightBlank': 5 }"
      ></p>
    </div>
    <div class="mask">
      <div class="d-flex fill-height justify-end flex-column">
        <div class="mask-top d-flex fill-height justify-center flex-column">
          <p class="titles text-capitalize" v-html="addBrand(item.title)"></p>
          <p class="type text-capitalize" v-html="addBrand(item.type)"></p>
          <p
              class="text text-cut-4 text-capitalize"
              v-html="addBrand(item.description)"
              v-ellipsis="{ 'line': 4, 'showTitle': true, 'rightBlank': 5 }"
          ></p>
        </div>
        <v-btn
            class="pageBtn mt-3"
            color="#FFCC00"
            outlined
            @click="e => { toPage(item.path); e.stopPropagation() }"
        >{{ detailBtn }}</v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
import { addBrand } from "../libs/tools";
import EllipsisText from "vue-ellipsis-text";

export default {
  name: "Product",
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  components: {
    EllipsisText
  },
  computed: {
    setProductH() {
      return "250px";
    },
    locale() {
      return this.$lang
    },
    detailBtn() {
      return this.locale === 'zh-CN' ? '查看详情' : 'Detail'
    }
  },
  methods: {
    addBrand(str) {
      return addBrand(str);
    },
    toPage(path) {
      this.$router.push(path[path.length - 1] === '/' ? path : `${path}/`)
    }
    // nav (path) {
    //   if (!path) return
    //   if (path.includes('://')) window.open(path, '_blank')
    //   else this.$router.push(path[path.length - 1] === '/' ? path : `${path}/`)
    // },
    // customNav(path) {
    //   this.nav(`${window.location.origin}${path}`)
    // }
  }
};
</script>

<style lang="less">
.v-card.product-list {
  border-radius: 8px;
  p {
    margin-bottom: 0 !important;
  }
  .titles {
    padding: 0 15px;
    height: 50px;
    overflow: hidden;
  }
  .type {
    padding: 0 10px;
    line-height: 50px;
  }
  .text-center{
    text-align: center !important;
  }
}
#app .v-card:hover {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
  0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12) !important;
}
.view-third {
  .mask {
    filter: alpha(opacity=0);
    opacity: 0;
    transform: translate(460px, -100px) rotate(180deg);
    transition: all 0.2s 0.4s ease-in-out;
    .titles {
      transform: translateY(-100px);
      transition: all 0.2s ease-in-out;
    }
    .type,
    .text {
      transform: translateX(300px) rotate(90deg);
      transition: all 0.2s ease-in-out;
    }
    .pageBtn {
      transform: translateY(-200px);
      transition: all 0.2s ease-in-out;
      width: 50%;
      margin: 30px auto;
    }
    background-color: rgba(75, 75, 75, 0.7);
  }
}
.view-third:hover {
  .mask {
    filter: alpha(opacity=100);
    opacity: 1;
    transition-delay: 0s;
    transform: translate(0px, 0px);
    .titles {
      transform: translateY(0px);
      transition-delay: 0.5s;
    }
    .type,
    .text {
      transform: translateX(0px) rotate(0deg);
      transition-delay: 0.4s;
    }
    .pageBtn {
      transform: translateY(-80px);
      transition-delay: 0.3s;
    }
  }
  .visibility {
    visibility: hidden;
  }
}

@media only all and (max-width: 749px) {
  .v-card.product-list {
    .titles {
      height: .666667rem;
    }
    .type {
      line-height: .666667rem;
    }
  }
}
</style>
