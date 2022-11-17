<template>
  <div id="app">
    <the-header></the-header>
    <router-view />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "@/components/common/TheHeader.vue";
import TheFooter from "@/components/common/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
@import "@/assets/plugins/revslider/public/assets/css/settings.css";
@import "@/assets/plugins/tourmaster/plugins/elegant-font/style.css";
@import "@/assets/plugins/tourmaster/tourmaster.css";
@import "@/assets/plugins/goodlayers-core/plugins/combine/style.css";
@import "@/assets/plugins/goodlayers-core/include/css/page-builder.css";
@import "@/assets/css/tourmaster-style-custom.css";
@import "@/assets/css/style-core.css";
@font-face {
  font-family: "ArcaMajora";
  src: "@/assets/css/fonts/ArcaMajora3-Heavy.eot";
  /* IE9 Compat Modes /
  src: "@/assets/css/fonts/ArcaMajora3-Heavy.eot?#iefix"
      format("embedded-opentype"),
    / IE6-IE8 / "@/assets/css/fonts/ArcaMajora3-Heavy.woff2" format("woff2"),
    / Super Modern Browsers / "@/assets/css/fonts/ArcaMajora3-Heavy.woff"
      format("woff"),
    / Pretty Modern Browsers / "@/assets/css/fonts/ArcaMajora3-Heavy.ttf"
      format("truetype"),
    / Safari, Android, iOS /
      "@/assets/css/fonts/ArcaMajora3-Heavy.svg#svgFontName" format("svg"); / Legacy iOS */
}
@import "@/assets/css/traveltour-style-custom.css";
</style>
