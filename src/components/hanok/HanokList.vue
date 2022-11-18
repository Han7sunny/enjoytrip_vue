<template>
<div>
  <div class="traveltour-body-outer-wrapper ">
        <div class="traveltour-body-wrapper clearfix  traveltour-with-frame">
            <!-- <div class="traveltour-page-title-wrap  traveltour-style-large traveltour-center-align">
                <div class="traveltour-header-transparent-substitute"></div>
                <div class="traveltour-page-title-overlay"></div>
                <div class="traveltour-page-title-container traveltour-container">
                    <div class="traveltour-page-title-content traveltour-item-pdlr">
                        <h1 class="traveltour-page-title">한옥</h1>
                        <div class="traveltour-page-caption">Explore Tours By Destinations</div>
                    </div>
                </div>
            </div> -->
            <div class="traveltour-page-wrapper" id="traveltour-page-wrapper">
                <div class="gdlr-core-page-builder-body">
                    <div class="gdlr-core-pbf-wrapper  gdlr-core-hide-in-mobile" id="div_aeb3_0" data-skin="Dark Search HP4">
                        <div class="gdlr-core-pbf-background-wrap">
                            <div class="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js" id="div_aeb3_1" data-parallax-speed="0.2"></div>
                        </div>
                        <div class="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                            <div class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                                <div class="gdlr-core-pbf-element">
                                    <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" id="div_aeb3_2">
                                        <div class="gdlr-core-title-item-title-wrap">
                                            <h3 class="gdlr-core-title-item-title gdlr-core-skin-title" id="h3_aeb3_0"><span class="gdlr-core-title-item-left-icon" id="span_aeb3_0"  ><i class="icon_search"  ></i></span>한옥 체험하기<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                    </div>
                                </div>
                                <div class="gdlr-core-pbf-element">
                                    <div class="tourmaster-tour-search-item clearfix tourmaster-style-column tourmaster-column-count-6 tourmaster-item-pdlr">
                                        <div class="tourmaster-tour-search-wrap ">
                                            <form class="tourmaster-form-field tourmaster-with-border" action="https://demo.goodlayers.com/travelsearch-tours/" method="GET">
                                                <!-- <div class="tourmaster-tour-search-field tourmaster-tour-search-field-keywords">
                                                    <label>Keywords</label>
                                                    <div class="tourmaster-tour-search-field-inner">
                                                        <input name="tour-search" type="text" value="" />
                                                    </div>
                                                </div> -->
                                                <div class="tourmaster-tour-search-field tourmaster-tour-search-field-tax">
                                                    <label>State</label>
                                                    <div class="tourmaster-combobox-wrap">
                                                        <select name="state" @change="selectState" v-model="selectedState">
                                                            <option :value="state.stateId" :key="state.stateId" v-for="state in stateList" >{{state.stateName}}</option>
                                                            <!-- <option value="city-tours">City Tours</option>
                                                            <option value="cultural-thematic-tours">Cultural &amp; Thematic Tours</option>
                                                            <option value="family-friendly-tours">Family Friendly Tours</option>
                                                            <option value="holiday-seasonal-tours">Holiday &amp; Seasonal Tours</option>
                                                            <option value="indulgence-luxury-tours">Indulgence &amp; Luxury Tours</option>
                                                            <option value="outdoor-activites">Outdoor Activites</option>
                                                            <option value="relaxation-tours">Relaxation Tours</option>
                                                            <option value="wild-adventure-tours">Wild &amp; Adventure Tours</option> -->
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="tourmaster-tour-search-field tourmaster-tour-search-field-tax">
                                                    <label>City</label>
                                                    <div class="tourmaster-combobox-wrap">
                                                        <select name="city">
                                                            <option :value="city.cityId" :key="city.cityId" v-for="city in cityList" >{{city.cityName}}</option>
                                                            <!-- <option value="africa">Africa</option>
                                                            <option value="america">America</option>
                                                            <option value="asia">Asia</option>
                                                            <option value="eastern-europe">Eastern Europe</option>
                                                            <option value="europe">Europe</option>
                                                            <option value="south-america">South America</option> -->
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <!-- <div class="tourmaster-tour-search-field tourmaster-tour-search-field-date">
                                                    <label>Date</label>
                                                    <div class="tourmaster-datepicker-wrap">
                                                        <input class="tourmaster-datepicker" type="text" value="" data-date-format="d M yy" />
                                                        <input class="tourmaster-datepicker-alt" name="date" type="hidden" value="" />
                                                    </div>
                                                </div> -->
                                                <input class="tourmaster-tour-search-submit" type="submit" value="Search" @click="search"/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="gdlr-core-pbf-wrapper " id="div_91da_0">
                        <div class="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                            <div class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-pbf-wrapper-full">
                                <div class="gdlr-core-pbf-element">
                                    <div class="tourmaster-tour-item clearfix  tourmaster-tour-item-style-modern tourmaster-tour-item-column-5">
                                        <div class="tourmaster-tour-item-holder gdlr-core-js-2 clearfix" data-layout="fitrows">

                                            <hanok-list-item  v-for="hanok in hanokList" :key="hanok.zipcode" :hanok="hanok"></hanok-list-item>

                                            <!-- <div class="gdlr-core-item-list  tourmaster-item-pdlr tourmaster-item-mgb tourmaster-column-12 tourmaster-column-first">
                                                <div class="tourmaster-tour-modern tourmaster-with-thumbnail tourmaster-without-info">
                                                    <div class="tourmaster-tour-modern-inner">
                                                        <div class="tourmaster-tour-thumbnail tourmaster-media-image">
                                                            <a href="../africa-amazing-african-safari/index.html"><img src="upload/shutterstock_120562819-600x800.jpg" alt="" width="600" height="800" /></a>
                                                        </div>
                                                        <div class="tourmaster-tour-content-wrap">
                                                            <h3 class="tourmaster-tour-title gdlr-core-skin-title"><a href="../africa-amazing-african-safari/index.html" >Africa &#8211; Amazing African Safari</a></h3>
                                                            <div class="tourmaster-tour-price-wrap "><span class="tourmaster-tour-price"><span class="tourmaster-head">From</span><span class="tourmaster-tail">$100</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> -->

                                            <!-- <div class="gdlr-core-item-list  tourmaster-item-pdlr tourmaster-item-mgb tourmaster-column-12">
                                                <div class="tourmaster-tour-modern tourmaster-with-thumbnail tourmaster-without-info">
                                                    <div class="tourmaster-tour-modern-inner">
                                                        <div class="tourmaster-tour-thumbnail tourmaster-media-image">
                                                            <a href="../dubai-all-stunning-places/index.html"><img src="upload/shutterstock_151616084-600x800.jpg" alt="" width="600" height="800" /></a>
                                                        </div>
                                                        <div class="tourmaster-tour-content-wrap">
                                                            <div class="tourmaster-tour-price-wrap "><span class="tourmaster-tour-price"><span class="tourmaster-head">From</span><span class="tourmaster-tail">{{hanok.title}}</span></span>
                                                            <h3 class="tourmaster-tour-title gdlr-core-skin-title"><a href="../dubai-all-stunning-places/index.html" >{{hanok.addr}}</a></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> -->

                                            <!-- 주황색 태그 -->
                                            <!-- <div class="gdlr-core-item-list  tourmaster-item-pdlr tourmaster-item-mgb tourmaster-column-12">
                                                <div class="tourmaster-tour-modern tourmaster-with-thumbnail tourmaster-without-info">
                                                    <div class="tourmaster-thumbnail-ribbon gdlr-core-outer-frame-element" id="div_91da_1">
                                                        <div class="tourmaster-thumbnail-ribbon-cornor" id="div_91da_2"></div>조회수 급등 한옥</div>
                                                    <div class="tourmaster-tour-modern-inner">
                                                        <div class="tourmaster-tour-thumbnail tourmaster-media-image">
                                                            <a href="../switzerland-7-days-in-zurich-zermatt/index.html"><img src="upload/shutterstock_178807262-600x800.jpg" alt="" width="600" height="800" /></a>
                                                        </div>
                                                        <div class="tourmaster-tour-content-wrap">
                                                            <h3 class="tourmaster-tour-title gdlr-core-skin-title"><a href="../switzerland-7-days-in-zurich-zermatt/index.html" >Switzerland &#8211; 7 Days in Zurich, Zermatt</a></h3>
                                                            <div class="tourmaster-tour-price-wrap tourmaster-discount"><span class="tourmaster-tour-price"><span class="tourmaster-head">From</span><span class="tourmaster-tail">$4,300</span></span><span class="tourmaster-tour-discount-price">$3,500</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div -->
                                            <!-- 파란색 태그 -->
                                            <!--<div class="gdlr-core-item-list  tourmaster-item-pdlr tourmaster-item-mgb tourmaster-column-12">
                                                <div class="tourmaster-tour-modern tourmaster-with-thumbnail tourmaster-without-info">
                                                    <div class="tourmaster-thumbnail-ribbon gdlr-core-outer-frame-element" id="div_91da_7">
                                                        <div class="tourmaster-thumbnail-ribbon-cornor" id="div_91da_8"></div>최근 검색한 한옥</div>
                                                    <div class="tourmaster-tour-modern-inner">
                                                        <div class="tourmaster-tour-thumbnail tourmaster-media-image">
                                                            <a href="../austria-6-days-in-vienna-hallstatt-salzburg/index.html"><img src="upload/shutterstock_154497503-600x800.jpg" alt="" width="600" height="800" /></a>
                                                        </div>
                                                        <div class="tourmaster-tour-content-wrap">
                                                            <h3 class="tourmaster-tour-title gdlr-core-skin-title"><a href="../austria-6-days-in-vienna-hallstatt-salzburg/index.html" >Austria &#8211; 6 Days in Vienna, Hallstatt</a></h3>
                                                            <div class="tourmaster-tour-price-wrap tourmaster-discount"><span class="tourmaster-tour-price"><span class="tourmaster-head">From</span><span class="tourmaster-tail">$2,600</span></span><span class="tourmaster-tour-discount-price">$2,100</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> -->

                                        </div>
                                        <div class="gdlr-core-pagination  gdlr-core-style-circle gdlr-core-center-align tourmaster-item-pdlr"><span aria-current='page' class='page-numbers current'>1</span> <a class='page-numbers' href='page/2/index.html'>2</a>
                                            <a class="next page-numbers" href="page/2/index.html"></a>
                                        </div>
                                    </div>
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
                                <div class="textwidget"><img src="images/logo.png" alt="" /> <span class="gdlr-core-space-shortcode" id="span_91da_0"></span> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. <span class="gdlr-core-space-shortcode" id="span_91da_1"></span> <img src="upload/award-1.png" alt="" width="140" id="img_91da_0" /> <img src="upload/award-2.png" alt="" width="65" /></div>
                            </div>
                        </div>
                        <div class="traveltour-footer-column traveltour-item-pdlr traveltour-column-20">
                            <div id="tourmaster-widget-tour-category-6" class="widget widget_tourmaster-widget-tour-category traveltour-widget">
                                <h3 class="traveltour-widget-title"><span class="traveltour-widget-head-text">Top Destinations</span></h3><span class="clear"></span>
                                <div class="tourmaster-widget-tour-category">
                                    <div class="tourmaster-tour-category-widget-holder clearfix">
                                        <div class="tourmaster-tour-category-widget tourmaster-item-list  tourmaster-column-20 tourmaster-column-first tourmaster-with-thumbnail">
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
                                        <div class="tourmaster-tour-category-widget tourmaster-item-list  tourmaster-column-20 tourmaster-column-first tourmaster-with-thumbnail">
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
                                        <br /> <span class="gdlr-core-space-shortcode" id="span_91da_2"></span>
                                        <br /> Phone : +44 3656 4567
                                        <br /> <span class="gdlr-core-space-shortcode" id="span_91da_3"></span>
                                        <br /> contact@traveltourtheme.com</p>
                                    <p><span class="gdlr-core-space-shortcode" id="span_91da_4"></span>
                                        <br /> <a href="#" target="_blank"><i class="fa fa-facebook" id="i_91da_4"  ></i></a> <a href="#" target="_blank"><i class="fa fa-twitter" id="i_91da_5"  ></i></a> <a href="#" target="_blank"><i class="fa fa-linkedin" id="i_91da_6"  ></i></a> <a href="#" target="_blank"><i class="fa fa-pinterest-p" id="i_91da_7"  ></i></a> <a href="#" target="_blank"><i class="fa fa-vimeo" id="i_91da_8"  ></i></a></p>
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
import {getHanokList} from "@/api/hanok";
import {getStateList, getCityList} from "@/api/state";
import {HanokListItem} from "@/components/hanok/HanokListItem.vue"
export default {
    name : "HanokList",
    data() {
        return {
            stateList:[],
            selectedState:1,
            cityList:[],
            hanokList:[]
        }
    },
    components:{
        HanokListItem
    },
    methods : {
        selectState(){
            getCityList(    
                
                this.selectedState,
                ({data}) => {
                    this.cityList = data;
                },(error) => {
                    console.log(error); // errorpage
                }
            );
        },
        search() {
            console.log("search click")
            // 한옥 state 검색 추가
        }
    },
    created() {
        getStateList(
            ({data}) => {
                this.stateList = data;
            },(error) => {
                console.log(error); // errorpage
            }
        );
        getCityList(
            1, // seoul
            ({data}) => {
                this.cityList = data;
            },(error) => {
                console.log(error); // errorpage
            }
        );
        getHanokList(
            ({data}) => {
                this.hanokList = data;
            },(error) => {
                console.log(error); // errorpage
            }
        );
    }
}
</script>

<style>

</style>