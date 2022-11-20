<template>
  <div class="gdlr-core-item-list tourmaster-item-pdlr tourmaster-item-mgb tourmaster-column-12">
    <div class="tourmaster-tour-modern tourmaster-with-thumbnail tourmaster-without-info">
      <div class="tourmaster-tour-modern-inner">
        <div class="tourmaster-tour-thumbnail tourmaster-media-image">
          <img :src="hanok.img" alt="" width="600" height="800"/>
        </div>
        <div class="tourmaster-tour-content-wrap">
          <div class="tourmaster-tour-price-wrap">
            <span class="tourmaster-tour-price"
              ><span class="tourmaster-head">From</span
              ><span class="tourmaster-tail">{{ hanok.title }}</span></span
            >
            <h3 class="tourmaster-tour-title gdlr-core-skin-title">
              <router-link :to="{ name: 'hanokDetail', params: { hanokId: hanok.hanokId } }"
            >{{ hanok.addr }}</router-link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HanokListItem",
  props: {
    hanok: Object,
  },
};
</script>

<style></style>
