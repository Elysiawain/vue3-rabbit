<script setup lang="ts">
import HomePanel from './HomePanel.vue';
import { getFindHotAPI } from '@/api/Layout';
import { ref, onMounted } from 'vue'
const hotList = ref<any[]>([])
const getHotList = async () => {
  const { data: { result } } = await getFindHotAPI()
  hotList.value = result
}
onMounted(() => getHotList())
</script>

<template>
  <div>
    <HomePanel title="热门好货" sub-title="大家都喜欢">
      <template #main>
        <div>
          <ul class="goods-list">
            <li v-for="item in hotList" :key="item.id">
              <RouterLink to="/">
                <el-image :key=item.id :src="item.picture" lazy class="elImg" />
                <p class="name">{{ item.title }}</p>
                <p class="desc">{{ item.alt }}</p>
              </RouterLink>
            </li>
          </ul>
        </div>
      </template>
    </HomePanel>
  </div>
</template>
<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img,
    .elImg {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>

