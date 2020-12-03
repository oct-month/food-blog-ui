<template>
  <div class="home">
    <!-- 侧边栏 -->
    <b-sidebar id="user-bar" title="美食博客" shadow sidebar-class="border-right">
      <b-list-group>
        <b-list-group-item class="d-flex align-items-center">
            <b-container fluid>
              <b-row>
                <b-col>
                  <b-avatar size="4rem" href="#" src="https://placekitten.com/300/300" class="mr-auto"></b-avatar>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <span class="mr-auto">用户名</span>
                </b-col>
              </b-row>
            </b-container>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center">
          <p>
            个性签名
          </p>
        </b-list-group-item>
        <b-list-group-item to="#" class="d-flex align-items-center">
          我的主页
        </b-list-group-item>
        <b-list-group-item button variant="success" href="#" class="d-flex align-items-center">
          + 发布博客
        </b-list-group-item>
      </b-list-group>
    </b-sidebar>

    <!-- 导航栏 -->
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">美食博客</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- 滚动图 -->
    <!-- TODO 图片大小调成一样 -->
    <div id="home-carousel">
      <b-container style="width: 45%; height: auto;">
        <b-carousel
          id="carousel-1"
          :interval="6000"
          controls
          fade
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          >
          <b-carousel-slide
            caption="美食，是人最深的乡愁。"
            text="一个人长大后，总有些滋味，只能停留在回忆里。无论去过多少地方，吃过多少珍馐佳肴，你最怀念的，还是妈妈做的家常菜。因为，时光将味道烙在了我们的味蕾上，随生而生，永不磨灭。 ----许忆"
            img-src="~@/img/slide-1.jpg"
            ></b-carousel-slide>
          <b-carousel-slide
            caption="世界上最治愈的东西,第一是美食,第二才是文字。"
            text="----丁卉"
            img-src="~@/img/slide-2.jpg"
            ></b-carousel-slide>
          <b-carousel-slide
            caption="喜爱美食，是生活的一个乐事。"
            text="佳肴不仅可以品味饱腹，还可以在享受色香味的同时，了解沉淀在美食中的历史、文化和民俗。 ----董克平"
            img-src="~@/img/slide-3.jpg"
            ></b-carousel-slide>
          <b-carousel-slide
            caption="食物是善良的，不会拒绝任何人，我们的一切情绪，都可以在食物里被安抚。"
            text="----蔡要要不吃药"
            img-src="~@/img/slide-4.jpg"
            ></b-carousel-slide>
        </b-carousel>
      </b-container>
    </div>

    <b-button class="left" v-b-toggle.user-bar>显示侧边栏</b-button>
  </div>
</template>

<style scoped>
#home-carousel {
  width: 100%;
  height: auto;
  background: url(~@/img/background.jpg);
}
</style>

<script>
export default {
  name: 'Home'
}
</script>
