<template>
    <div class="breadCrumbWrapper">
      <span>{{msg}}</span>
    </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  data() {
    return {
      msg: "面包屑"
    };
  }
};
</script>

<style lang="less">
.breadCrumbWrapper{
    height: 50px;
    background-color: rgb(212, 142, 142)
}
</style>