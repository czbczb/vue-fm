<template>
  <aside class="fm_menu">
    <div class="userInfo" v-if="userInfo">{{userInfo.name}}</div>
    <Menu
      v-if="menuList && menuList.length > 0"
      :theme="menuTheme"
      :open-names="['用户信息']"
      @on-select="navRouter"
      :active-name="activeName"
    >
      <Submenu v-for="(item,key) in menuList" :key="key" :name="item.title">
        <template slot="title">
          <Icon :type="item.icon"/>
          {{item.title}}
        </template>
        <MenuItem
          v-if="item.children && item.children.length > 0"
          v-for="(navItem, navItemKey) in item.children"
          :key="navItemKey"
          :name="navItem.title"
          :to="navItem.router"
        >
          <Icon :type="navItem.icon"/>
          {{navItem.title}}
        </MenuItem>
      </Submenu>
    </Menu>
  </aside>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Navigation",
  data: function() {
    return {
      menuTheme: "dark",
      activeName: "用户列表"
    };
  },
  computed: {
    ...mapState(["userInfo", 'menuList'])
  },
  async mounted() {
    await this.$store.dispatch("getMenuList");
    await this.$store.dispatch("getUserInfo");
    console.log(this.$store.state.userInfo);
    console.log(this.$store.state.menuList);
    console.log(this.userInfo);
    console.log(this.menuList);
  },
  methods: {
    navRouter(name) {
      this.activeName = name;
    }
  }
};
</script>

<style lang="less">
.userInfo {
  background: #333;
  color: #fff;
}
.fm_menu {
  flex: 0 0 200px;
  height: 100%;
  width: 200px;
}
</style>

