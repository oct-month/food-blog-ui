<template>
  <div class="home">
    <b-card-group columns>
      <b-card
        title="鸡蛋"
        sub-title="发条绅士"
        img-src="~@/img/slide-2.jpg"
        img-alt="Image"
        img-top
        >
        <b-card-text>
          荷包蛋，儿时的美味。荷包蛋，儿时的美味。荷包蛋，儿时的美味。荷包蛋，儿时的美味。荷包蛋，儿时的美味。
        </b-card-text>
        <b-card-text class="small text-muted">2020-09-08 20:56</b-card-text>
        <template #footer>
          <b-container>
            <b-row align-v="center" no-gutters>
              <b-col cols="1" align-self="start">
                <a href="javascript:void(0);">
                  <b-img src="~@/img/like.svg"  height="30sp"></b-img>
                </a>
              </b-col>
              <b-col>
                <span class="num" style="font-size: 150%;">1</span>
              </b-col>
            </b-row>
            <b-row align-v="center" align-h="start">
                <b-input-group class="mt-3">
                  <b-form-input placeholder="发条友善的评论"></b-form-input>
                  <b-input-group-append>
                    <b-button variant="outline-secondary">发表评论</b-button>
                  </b-input-group-append>
                </b-input-group>
            </b-row>
            <b-row align-v="center" align-h="end">
              <b-button v-b-toggle.collapse-1 variant="link">查看评论>></b-button>
              <b-collapse id="collapse-1" class="mt-2">
                <b-card>
                  <b-list-group>
                    <b-list-group-item>Cras justo odio</b-list-group-item>
                    <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                    <b-list-group-item>Morbi leo risus</b-list-group-item>
                    <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
                    <b-list-group-item>Vestibulum at eros</b-list-group-item>
                  </b-list-group>
                </b-card>
              </b-collapse>
            </b-row>
          </b-container>
        </template>
      </b-card>

      <b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This card has even longer content than the first.
        </b-card-text>
        <template #footer>
          <small class="text-muted">Footer Text</small>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'Home'
}
</script>
