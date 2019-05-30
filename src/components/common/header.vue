<template>
    <div class="fm_header">header</div>
</template>
<script>
// import api from "./api/api";
export default {
  name: "Header",
  methods: {
    async getUserInfo() {
      let res = await api.userInfo.getUserInfo();
      console.log("**********用户信息1122**********");
      console.log(res);
    },
    async getMenuList() {
      let res = await api.userInfo.getMenuList();
      console.log("***********菜单列表*************");
      console.log(res);
    }
  }
};
</script>
<style lang="less">
</style>


