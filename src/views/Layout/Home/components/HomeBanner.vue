<script setup lang="ts">
import { getBannerAPI } from '@/api/Layout';
import { onMounted, ref } from 'vue'

const bannerList = ref<any>([])
const getBannerList = async () => {
  await getBannerAPI().then((res) => {
    bannerList.value=res.data?.result //?. 表示可选链操作符，用于在对象不存在某个属性时返回 undefined，而不是抛出错误。
  });
}

onMounted(() => getBannerList())

</script>



<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img
          :src=item.imgUrl
          alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>