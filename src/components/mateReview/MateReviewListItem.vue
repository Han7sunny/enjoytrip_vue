<template>
<router-link :to="{ name: 'mateReviewDetail', params: { postId: mateReview.postId } }">
  <div class="gdlr-core-item-list gdlr-core-column-20">
    <div
      class="gdlr-core-blog-modern gdlr-core-with-image gdlr-core-hover-overlay-content gdlr-core-opacity-on-hover gdlr-core-zoom-on-hover"
    >
      <div class="gdlr-core-blog-modern-inner">
        <div class="gdlr-core-blog-thumbnail gdlr-core-media-image">
          <img :src="mateReview.img1" alt="" width="1280" height="580" />
        </div>
        <div class="gdlr-core-blog-modern-content gdlr-core-center-align" id="div_3424_2">
          <h3 class="gdlr-core-blog-title gdlr-core-skin-title" id="h3_3424_0">
            {{mateReview.title}}
          </h3>
          <div class="gdlr-core-blog-info-wrapper gdlr-core-skin-divider">
            <span
              class="gdlr-core-blog-info gdlr-core-blog-info-font gdlr-core-skin-caption gdlr-core-blog-info-date"
              ><span class="gdlr-core-head"><i class="icon_clock_alt"></i></span
              >{{mateReview.registeredTime}}</span
            ><span
              class="gdlr-core-blog-info gdlr-core-blog-info-font gdlr-core-skin-caption gdlr-core-blog-info-author"
              ><span class="gdlr-core-head"><i class="icon_documents_alt"></i></span
              >{{mateReview.userId}}
              </span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</router-link>
</template>

<script>
export default {
  name: "MateReviewListItem",
  props:{
    mateReview : Object
  }
};
</script>

<style></style>
