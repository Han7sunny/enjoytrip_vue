<template>
  <div class="traveltour-body-outer-wrapper">
    <div class="traveltour-body-wrapper clearfix traveltour-with-frame">
      <the-search></the-search>
      <content-list></content-list>
      <theme-list></theme-list>
      <the-highlight></the-highlight>
      <review-list></review-list>
    </div>
  </div>
</template>

<script>
import TheSearch from "@/components/main/TheSearch.vue";
import ContentList from "@/components/main/ContentList.vue";
import ThemeList from "@/components/main/ThemeList.vue";
import TheHighlight from "@/components/main/TheHighlight.vue";
import ReviewList from "@/components/main/ReviewList.vue";
export default {
  name: "AppMain",
  components: {
    TheSearch,
    ContentList,
    ThemeList,
    TheHighlight,
    ReviewList,
  },
};
</script>

<style></style>
