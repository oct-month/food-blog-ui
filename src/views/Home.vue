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

    <!-- 滚动图 -->
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >
        <b-carousel-slide
          caption="First Slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=54"
          >
          <h1>Hello World</h1>
        </b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=58"
          >
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"
              >
          </template>
        </b-carousel-slide>
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>
      </b-carousel>
      <p class="mt-4">
        Slide #: {{ slide }}<br>
        Sliding: {{ sliding }}
      </p>
    </div>

    <b-button class="left" v-b-toggle.user-bar>显示侧边栏</b-button>
  </div>
</template>


<script>
export default {
  name: 'Home',
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>
