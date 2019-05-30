<template>
  <section class="fm_container">
    <!-- 头部 -->
    <Header></Header>
    <div class="fm_main">
      <!-- 左侧菜单 -->
      <Menu></Menu>
      <!-- 主体内容 -->
      <Section></Section>
    </div>
    <!-- 尾部 -->
    <Footer></Footer>
  </section>
</template>

<script>
import Header from "./header";
import Section from "./section";
import Footer from "./footer";
import Menu from "./menu";

export default {
  name: "layout",
  components: {
    // * 注册menus组件，让其可以在template调用
    Header,
    Section,
    Footer,
    Menu
  },

  data() {
    return {
      msg: "合作伙伴"
    };
  }
};
</script>
<style lang="less">
.fm_container {
  width: 100%;
  overflow: hidden;
  flex-direction: column;
  .fm_header {
    height: 50px;
    background-color: #333;
  }
  .fm_footer {
    height: 50px;
    background-color: #333;
  }
  .fm_main {
    flex: 1;
    min-height: calc(100vh - 100px);
    display: flex;
    background-color: #3d4164;
    .fm_menu {
      flex: 0 0 200px;
      height: 100%;
      width: 200px;
      min-height: calc(100vh - 100px);
    }
    .fm_content {
      flex: 1;
      background-color: #f5f5f5;
      min-height: calc(100vh - 100px);
    }
  }
}
</style>
