<template>
    <div>
        这个是登录页
    </div>
</template>

<script>
export default {
  created() {
    // 测试
    this.$http.get(this.$api.islogin).then(res => {
      console.log(res.data);
    });
  }
};
</script>

<style scoped>

</style>