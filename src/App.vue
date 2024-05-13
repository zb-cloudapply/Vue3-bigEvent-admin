<script setup>
import { useUserStore } from './stores/modules/user'
const userStore = useUserStore()
</script>

<template>
  <div>
    <router-view></router-view>
    <hr />
    {{ userStore.token }}
    <h1>
      <el-button @click="userStore.setToken('aaaaa')" type="primary"
        >登录</el-button
      >
      <el-button @click="userStore.removeToken()" type="primary"
        >退出</el-button
      >
    </h1>
  </div>
</template>

<style scoped></style>
