<script setup lang="ts">
import HomePanel from './HomePanel.vue';
import { getFindNewAPI } from '@/api/Layout'
import { ref, onMounted } from 'vue';
const newList = ref<any>([])
const getNewList = async () => {
  const { data:{result} } = await getFindNewAPI()
  newList.value = result
}
onMounted(() => {
  getNewList()
})
</script>

<template>
  <div>
    <HomePanel title="新鲜好物" sub-title="更多好货">
      <template #main>
        <div>
          <ul class="goods-list">
            <li v-for="item in newList" :key="item.id">
              <RouterLink :to="`/detail/${item.id}`">
                <el-image :key=item.id :src="item.picture" lazy class="elImg" />
                <p class="name">{{ item.name }}</p>
                <p class="price">¥{{ item.price }}</p>
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
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img ,
    .elImg{
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>