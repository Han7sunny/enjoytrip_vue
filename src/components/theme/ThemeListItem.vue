<template>
  <div
    class="tourmaster-tour-category-grid-3 tourmaster-item-list tourmaster-item-pdlr tourmaster-item-mgb tourmaster-column-20 tourmaster-with-thumbnail"
  >
    <div
      class="tourmaster-tour-category-item-wrap"
      style="border-radius: 3px; -moz-border-radius: 3px; -webkit-border-radius: 3px"
    >
      <div class="tourmaster-tour-category-thumbnail tourmaster-media-image">
        <img :key="theme.img1" width="600" height="600" alt="" />
      </div>
      <div class="tourmaster-tour-category-count">{{theme.contentCount}} course</div>
      <div class="tourmaster-tour-category-overlay"></div>
      <div class="tourmaster-tour-category-overlay-front"></div>
      <div class="tourmaster-tour-category-head">
        <div class="tourmaster-tour-category-head-display clearfix">
          <h3 class="tourmaster-tour-category-title">{{theme.title}}</h3>
        </div>
        <div class="tourmaster-tour-category-head-animate">
          <div class="tourmaster-tour-category-description">
            {{theme.overview}}
          </div>
          <router-link :to="{ name: 'themeDetail', params: { themeId: theme.themeId } }">
            <a class="tourmaster-tour-category-head-link">자세히 보기</a></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThemeListItem",
  props: {
    theme: Object,
  },
};
</script>

<style></style>
