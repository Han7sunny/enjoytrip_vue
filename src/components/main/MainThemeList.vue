<template>
  <div class="gdlr-core-pbf-wrapper" style="padding: 73px 0px 0px 0px">
    <div class="gdlr-core-pbf-background-wrap"></div>
    <div class="gdlr-core-pbf-wrapper-content gdlr-core-js">
      <div class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
        <div class="gdlr-core-pbf-element">
          <div
            class="gdlr-core-title-item gdlr-core-item-pdb clearfix gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
            style="padding-bottom: 0px"
          >
            <div class="gdlr-core-title-item-title-wrap">
              <h3
                class="gdlr-core-title-item-title gdlr-core-skin-title"
                style="
                  font-size: 28px;
                  font-weight: 700;
                  letter-spacing: 0px;
                  text-transform: none;
                "
              >
                여행 테마 코스<span
                  class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"
                ></span>
              </h3>
            </div>
          </div>
        </div>
        <div class="gdlr-core-pbf-element">
          <div
            class="gdlr-core-button-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align"
            style="padding-bottom: 52px"
          >
          <router-link :to="{name:'theme'}">
            <a
              class="gdlr-core-button gdlr-core-button-transparent gdlr-core-button-no-border"
              style="
                font-size: 15px;
                font-weight: 400;
                letter-spacing: 0px;
                color: #e66836;
                padding: 8px 0px 0px 0px;
              "
              ><span class="gdlr-core-content">더 많은 여행 테마 보기</span
              ><i
                class="gdlr-core-pos-right fa fa-long-arrow-right"
                style="font-size: 17px"
              ></i
            ></a></router-link>
          </div>
        </div>
        <div class="gdlr-core-pbf-element">
          <div
            class="tourmaster-tour-category clearfix"
            style="padding-bottom: 0px"
          >
            <theme-list-item v-for="theme in themeList" :key="theme.themeId" :theme="theme"></theme-list-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getThemeList } from "@/api/theme";
import ThemeListItem from "@/components/theme/ThemeListItem.vue";
export default {
  name: "MainThemeList",
  data(){
      return{
        themeList : []
      }
    },
    components:{
      ThemeListItem
    },
    created(){
      getThemeList(
        ({ data }) => {
            this.themeList = data.slice(0,6);
        },
          (error) => {
            console.log(error); // 추후 에러 페이지
        }
      );
    }
};
</script>

<style></style>
