<template>
  <section class="fm_container">
    <!-- 头部 -->
    <Header></Header>
    <div class="fm_main">
      <!-- 左侧菜单 -->
      <Navigation></Navigation>
      <!-- 主体内容 -->
      <section class="fm_content">
        <!-- 面包屑 -->
        <breadCrumb></breadCrumb>
        <!-- 导航 -->
        <router-view></router-view>
      </section>
    </div>
    <!-- 尾部 -->
    <Footer></Footer>
  </section>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'
import breadCrumb from './BreadCrumb'

export default {
  name: 'Layout',
  components: {
    // * 注册menus组件，让其可以在template调用
    Header,
    Footer,
    Navigation,
    breadCrumb
  },

  data () {
    return {
      msg: '合作伙伴'
    }
  }
}
</script>
<style lang="less">
.fm_container {
  width: 100%;
  overflow: hidden;
  flex-direction: column;
  .fm_header {
    height: 50px;
    background-color: rgb(196, 192, 192);
  }
  .fm_footer {
    height: 50px;
    background-color: rgb(196, 192, 192);
  }
  .fm_main {
    flex: 1;
    min-height: calc(100vh - 100px);
    display: flex;
    background-color: #a5a9cf;
    .fm_menu {
      flex: 0 0 240px;
      height: 100%;
      background: #515a6e;
      min-height: calc(100vh - 100px);
    }
    .fm_content {
      flex: 1;
      background-color: #f5f5f5;
      min-height: calc(100vh - 100px - 50px);
    }
  }
}
</style>
