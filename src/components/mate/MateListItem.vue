<template>
  <div
    class="tourmaster-tour-category-grid tourmaster-item-list tourmaster-item-pdlr tourmaster-item-mgb tourmaster-column-20 tourmaster-with-thumbnail"
  >
    <div class="tourmaster-tour-category-item-wrap">
      <div class="tourmaster-tour-category-thumbnail tourmaster-media-image">
        <img src="upload/shutterstock_255194035-800x960.jpg" alt="" width="800" height="960" />
      </div>
      <div class="tourmaster-tour-category-overlay"></div>
      <div class="tourmaster-tour-category-overlay-front"></div>
      <div class="tourmaster-tour-category-head">
        <div class="tourmaster-tour-category-head-display clearfix">
          <h3 class="tourmaster-tour-category-title">
            <i class="icon_pin_alt"></i>{{ mate.stateId }} {{ mate.cityId }}
          </h3>
          <div class="tourmaster-tour-category-count">{{ mate.personnel }}</div>
        </div>
        <div class="tourmaster-tour-category-head-animate">
          <router-link :to="{ name: 'mateDetail', params: { postId: mate.postId } }">
            자세히 보기
          </router-link>
          <div class="tourmaster-tour-category-head-divider"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MateListItem",
  props: {
    mate: Object,
  },
};
</script>

<style></style>
