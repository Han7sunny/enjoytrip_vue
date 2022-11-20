<template>
<div class="traveltour-body-outer-wrapper ">
        <div class="traveltour-body-wrapper clearfix  traveltour-with-frame">
  <div class="traveltour-page-title-wrap  traveltour-style-large traveltour-center-align">
                <div class="traveltour-header-transparent-substitute"></div>
                <div class="traveltour-page-title-overlay"></div>
                <div class="traveltour-page-title-container traveltour-container">
                    <div class="traveltour-page-title-content traveltour-item-pdlr">
                        <h1 class="traveltour-page-title">Blog Grid 2 Columns No Space</h1></div>
                </div>
            </div>
            <div class="traveltour-page-wrapper" id="traveltour-page-wrapper">
                <div class="gdlr-core-page-builder-body">
                    <div class="gdlr-core-pbf-wrapper " id="div_3424_0">
                        <div class="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                            <div class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-pbf-wrapper-full-no-space">
                                <div class="gdlr-core-pbf-element">
                                    <div class="gdlr-core-blog-item gdlr-core-item-pdb clearfix  gdlr-core-style-blog-image-no-space gdlr-core-item-pdlr" id="div_3424_1">
                                        <div class="gdlr-core-blog-item-holder gdlr-core-js-2 clearfix" data-layout="fitrows">
                                            
                                        <mate-review-list-item v-for="mateReview in mateReviewList" :key="mateReview.postId" :mateReview="mateReview"></mate-review-list-item>
                                            
                                        </div>
                                        <div class="gdlr-core-pagination  gdlr-core-style-round gdlr-core-center-align gdlr-core-with-border"><span aria-current='page' class='page-numbers current'>1</span> <a class='page-numbers' href='page/2/index.html'>2</a>
                                            <a class="next page-numbers" href="page/2/index.html"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
</template>

<script>
import {getPostListByBoardId} from "@/api/board";
import MateReviewListItem from "@/components/mateReview/MateReviewListItem.vue"
export default {
    name:"MateReviewList",
    data(){
        return {
            mateReviewList : []
        }
    },
    components:{
        MateReviewListItem
    },
    created(){
        getPostListByBoardId(
            2, // 여행 메이트 후기
            ({ data }) => {
                this.mateReviewList = data;
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