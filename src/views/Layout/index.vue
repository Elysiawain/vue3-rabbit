<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
    <div>
        <el-button type="primary">layout路由</el-button>
        <el-button type="primary" @click="$router.push('/home')">跳转home路由</el-button>
        <el-button type="primary" @click="$router.push('/category')">跳转category路由</el-button>
    </div>
    <RouterView />
</template>

<style scoped></style>