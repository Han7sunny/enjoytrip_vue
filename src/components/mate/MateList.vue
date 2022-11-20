<template>
  <div>
    <div class="traveltour-body-outer-wrapper ">
        <div class="traveltour-body-wrapper clearfix  traveltour-with-frame">
            <div class="traveltour-page-title-wrap  traveltour-style-large traveltour-center-align">
                <div class="traveltour-header-transparent-substitute"></div>
                <div class="traveltour-page-title-overlay"></div>
                <div class="traveltour-page-title-container traveltour-container">
                    <div class="traveltour-page-title-content traveltour-item-pdlr">
                        <h1 class="traveltour-page-title">여행 메이트 </h1>
                        <div class="traveltour-page-caption">새로운 여행지, 새로운 사람과 함께</div>
                    </div>
                </div>
            </div>
            <div class="gdlr-core-pbf-element">
          <div
            class="gdlr-core-button-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-right-align"
            style="padding-top: 52px;padding-bottom: 52px;"
          >
          <router-link :to="{name:'searchContent'}"> <!-- 여행지 먼저 검색하고 해당 여행지에서 메이트/후기 작성 등 누르면 MateWrite로 이동 -->
            <a
              class="gdlr-core-button gdlr-core-button-transparent gdlr-core-button-no-border"
              style="
                font-size: 15px;
                font-weight: 400;
                letter-spacing: 0px;
                color: #e66836;
                padding: 8px 0px 0px 0px;
              "
              ><span class="gdlr-core-content">여행 메이트 모집하러 가기</span
              ><i
                class="gdlr-core-pos-right fa fa-long-arrow-right"
                style="font-size: 17px"
              ></i
            ></a></router-link>
          </div>
        </div>
            <div class="traveltour-page-wrapper" id="traveltour-page-wrapper">
                <div class="gdlr-core-page-builder-body">
                    <div class="gdlr-core-pbf-section">
                        <div class="gdlr-core-pbf-section-container gdlr-core-container clearfix">
                            <div class="gdlr-core-pbf-element">
                                <div class="tourmaster-tour-category clearfix ">
                                    <mate-list-item v-for="mate in mateList" :key="mate.postId" :mate="mate"></mate-list-item>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- 기존 footer와 다름 -->
            <!-- <footer>
                <div class="traveltour-footer-wrapper  traveltour-with-column-divider">
                    <div class="traveltour-footer-container traveltour-container clearfix">
                        <div class="traveltour-footer-column traveltour-item-pdlr traveltour-column-20">
                            <div id="text-1" class="widget widget_text traveltour-widget">
                                <div class="textwidget"><img src="images/logo.png" alt="" /> <span class="gdlr-core-space-shortcode" style="margin-top: 21px ;"></span> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. <span class="gdlr-core-space-shortcode" style="margin-top: 25px ;"></span> <img src="upload/award-1.png" alt="" width="140" style="margin-right: 25px;" /> <img src="upload/award-2.png" alt="" width="65" /></div>
                            </div>
                        </div>
                        <div class="traveltour-footer-column traveltour-item-pdlr traveltour-column-20">
                            <div id="tourmaster-widget-tour-category-6" class="widget widget_tourmaster-widget-tour-category traveltour-widget">
                                <h3 class="traveltour-widget-title"><span class="traveltour-widget-head-text">Top Destinations</span></h3><span class="clear"></span>
                                <div class="tourmaster-widget-tour-category">
                                    <div class="tourmaster-tour-category-widget-holder clearfix">
                                        <div class="tourmaster-tour-category-widget tourmaster-item-list  tourmaster-column-20  tourmaster-with-thumbnail">
                                            <div class="tourmaster-tour-category-thumbnail tourmaster-media-image"><img src="upload/shutterstock_120562819-600x600.jpg" alt="" width="600" height="600" /></div>
                                            <div class="tourmaster-tour-category-overlay"></div>
                                            <div class="tourmaster-tour-category-head">
                                                <div class="tourmaster-tour-category-head-table">
                                                    <h3 class="tourmaster-tour-category-title"><a class="tourmaster-tour-category-head-link" href="#" >Africa</a></h3></div>
                                            </div>
                                        </div>
                                        <div class="tourmaster-tour-category-widget tourmaster-item-list  tourmaster-column-20 tourmaster-with-thumbnail">
                                            <div class="tourmaster-tour-category-thumbnail tourmaster-media-image"><img src="upload/Fotolia_16069076_Subscription_Monthly_XXL-600x600.jpg" alt="" width="600" height="600" /></div>
                                            <div class="tourmaster-tour-category-overlay"></div>
                                            <div class="tourmaster-tour-category-head">
                                                <div class="tourmaster-tour-category-head-table">
                                                    <h3 class="tourmaster-tour-category-title"><a class="tourmaster-tour-category-head-link" href="#" >America</a></h3></div>
                                            </div>
                                        </div>
                                        <div class="tourmaster-tour-category-widget tourmaster-item-list  tourmaster-column-20 tourmaster-with-thumbnail">
                                            <div class="tourmaster-tour-category-thumbnail tourmaster-media-image"><img src="upload/shutterstock_147744218-600x600.jpg" alt="" width="600" height="600" /></div>
                                            <div class="tourmaster-tour-category-overlay"></div>
                                            <div class="tourmaster-tour-category-head">
                                                <div class="tourmaster-tour-category-head-table">
                                                    <h3 class="tourmaster-tour-category-title"><a class="tourmaster-tour-category-head-link" href="#" >Asia</a></h3></div>
                                            </div>
                                        </div>
                                        <div class="tourmaster-tour-category-widget tourmaster-item-list  tourmaster-column-20  tourmaster-with-thumbnail">
                                            <div class="tourmaster-tour-category-thumbnail tourmaster-media-image"><img src="upload/photodune-488847-venice-m-600x600.jpg" alt="" width="600" height="600" /></div>
                                            <div class="tourmaster-tour-category-overlay"></div>
                                            <div class="tourmaster-tour-category-head">
                                                <div class="tourmaster-tour-category-head-table">
                                                    <h3 class="tourmaster-tour-category-title"><a class="tourmaster-tour-category-head-link" href="#" >Eastern Europe</a></h3></div>
                                            </div>
                                        </div>
                                        <div class="tourmaster-tour-category-widget tourmaster-item-list  tourmaster-column-20 tourmaster-with-thumbnail">
                                            <div class="tourmaster-tour-category-thumbnail tourmaster-media-image"><img src="upload/shutterstock_255194035-600x600.jpg" alt="" width="600" height="600" /></div>
                                            <div class="tourmaster-tour-category-overlay"></div>
                                            <div class="tourmaster-tour-category-head">
                                                <div class="tourmaster-tour-category-head-table">
                                                    <h3 class="tourmaster-tour-category-title"><a class="tourmaster-tour-category-head-link" href="#" >Europe</a></h3></div>
                                            </div>
                                        </div>
                                        <div class="tourmaster-tour-category-widget tourmaster-item-list  tourmaster-column-20 tourmaster-with-thumbnail">
                                            <div class="tourmaster-tour-category-thumbnail tourmaster-media-image"><img src="upload/shutterstock_124333858-600x600.jpg" alt="" width="600" height="600" /></div>
                                            <div class="tourmaster-tour-category-overlay"></div>
                                            <div class="tourmaster-tour-category-head">
                                                <div class="tourmaster-tour-category-head-table">
                                                    <h3 class="tourmaster-tour-category-title"><a class="tourmaster-tour-category-head-link" href="#" >South America</a></h3></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="traveltour-footer-column traveltour-item-pdlr traveltour-column-20">
                            <div id="text-2" class="widget widget_text traveltour-widget">
                                <h3 class="traveltour-widget-title"><span class="traveltour-widget-head-text">Contact Info</span></h3><span class="clear"></span>
                                <div class="textwidget">
                                    <p>Address : 12 Main Street Pt. London
                                        <br /> <span class="gdlr-core-space-shortcode" style="margin-top: -13px ;"></span>
                                        <br /> Phone : +44 3656 4567
                                        <br /> <span class="gdlr-core-space-shortcode" style="margin-top: -13px ;"></span>
                                        <br /> contact@traveltourtheme.com</p>
                                    <p><span class="gdlr-core-space-shortcode" style="margin-top: 20px ;"></span>
                                        <br /> <a href="#" target="_blank"><i class="fa fa-facebook" style="font-size: 18px ;color: #ffffff ;margin-right: 20px ;"  ></i></a> <a href="#" target="_blank"><i class="fa fa-twitter" style="font-size: 18px ;color: #ffffff ;margin-right: 20px ;"  ></i></a> <a href="#" target="_blank"><i class="fa fa-linkedin" style="font-size: 18px ;color: #ffffff ;margin-right: 20px ;"  ></i></a> <a href="#" target="_blank"><i class="fa fa-pinterest-p" style="font-size: 18px ;color: #ffffff ;margin-right: 20px ;"  ></i></a> <a href="#" target="_blank"><i class="fa fa-vimeo" style="font-size: 18px ;color: #ffffff ;margin-right: 20px ;"  ></i></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="traveltour-copyright-wrapper">
                    <div class="traveltour-copyright-container traveltour-container">
                        <div class="traveltour-copyright-text traveltour-item-pdlr">Copyright 2020 max-themes, All Right Reserved</div>
                    </div>
                </div>
            </footer> -->
        </div>
    </div><a href="#traveltour-top-anchor" class="traveltour-footer-back-to-top-button" id="traveltour-footer-back-to-top-button"><i class="fa fa-angle-up" ></i></a>

  </div>
</template>

<script>
import {getPostListByBoardId} from "@/api/board";
import MateListItem from "@/components/mate/MateListItem.vue"
export default {
    name:"MateList",
    data(){
        return{
            mateList : []
        }
    },
    components:{
        MateListItem
    },
    created(){
        getPostListByBoardId(
            1, // 여행 메이트
            ({ data }) => {
                this.mateList = data;
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