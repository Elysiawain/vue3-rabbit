<script setup lang="ts">
import HomePanel from './HomePanel.vue'
import { ref, onMounted } from 'vue'
import { getProductAPI } from '@/api/Layout'
import GoodsItem from './GoodsItem.vue';
const goodsProduct = ref<any[]>([])
const getGoodsProduct = async () => {
  const { data: { result } } = await getProductAPI()
  goodsProduct.value = result

}
onMounted(() => {
  getGoodsProduct()
})
</script>

<template>
  <div class="home-product">
    <HomePanel :title="cate.name" v-for="cate in goodsProduct" :key="cate.id">
      <template #main>
        <div class="box">
          <RouterLink class="cover" to="/">
            <el-image :key=cate.id :src="cate.picture" lazy class="elImg" />
            <strong class="label">
              <span>{{ cate.name }}馆</span>
              <span>{{ cate.saleInfo }}</span>
            </strong>
          </RouterLink>
          <!-- 调用商品组件 -->
          <GoodsItem :goodsDetail="cate" />
        </div>
      </template>
    </HomePanel>
  </div>
</template>

<style scoped lang='scss'>
.home-product {
  background: #fff;
  margin-top: 20px;

  .sub {
    margin-bottom: 2px;

    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;

      &:hover {
        background: $xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 80px;
      }
    }
  }

  .box {
    display: flex;

    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;

      img,
      .elImg {
        width: 100%;
        height: 100%;
      }

      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);

        span {
          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }
  }
}
</style>
