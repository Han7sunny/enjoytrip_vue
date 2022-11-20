<template>
  <div class="gdlr-core-pbf-element">
          <div
            class="tourmaster-tour-category clearfix"
            style="padding-bottom: 0px"
          >
          <theme-list-item v-for="theme in themeList" :key="theme.themeId" :theme="theme"></theme-list-item>
          </div>
        </div>
</template>

<script>
import { getThemeList } from "@/api/theme";
import ThemeListItem from "@/components/theme/ThemeListItem.vue";
export default {
    name:"ThemeList",
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
            this.themeList = data;
        },
          (error) => {
            console.log(error); // 추후 에러 페이지
        }
      );
    }
}
</script>

<style>

</style>