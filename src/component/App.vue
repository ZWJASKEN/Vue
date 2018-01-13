<template>
    <div>
        测试黄敏傻逼 傻逼黄敏
        <router-view></router-view>
        <el-rate v-model="value" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
        这是底部内容
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3,
    };
  }
};
</script>

<style scoped>

</style>