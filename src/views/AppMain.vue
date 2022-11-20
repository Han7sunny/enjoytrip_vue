<template>
  <div class="traveltour-body-outer-wrapper">
    <div class="traveltour-body-wrapper clearfix traveltour-with-frame">
      <the-search></the-search>
      <content-list></content-list>
      <main-theme-list></main-theme-list>
      <the-highlight></the-highlight>
      <review-list></review-list>
    </div>
  </div>
</template>

<script>
import TheSearch from "@/components/main/TheSearch.vue";
import ContentList from "@/components/main/ContentList.vue";
import MainThemeList from "@/components/main/MainThemeList.vue";
import TheHighlight from "@/components/main/TheHighlight.vue";
import ReviewList from "@/components/main/ReviewList.vue";
export default {
  name: "AppMain",
  components: {
    TheSearch,
    ContentList,
    MainThemeList,
    TheHighlight,
    ReviewList,
  },
};
</script>

<style></style>
