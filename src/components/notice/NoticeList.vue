<template>
  <div>
    <div class="traveltour-body-outer-wrapper ">
        <div class="traveltour-body-wrapper clearfix  traveltour-with-frame">
            <div class="traveltour-page-title-wrap  traveltour-style-large traveltour-center-align">
                <div class="traveltour-header-transparent-substitute"></div>
                <div class="traveltour-page-title-overlay"></div>
                <div class="traveltour-page-title-container traveltour-container">
                    <div class="traveltour-page-title-content traveltour-item-pdlr">
                        <h1 class="traveltour-page-title">공지사항</h1>
                        <div class="traveltour-page-caption">Explore Tours By Destinations</div>
                    </div>
                </div>
            </div>
            <div class="traveltour-page-wrapper" id="traveltour-page-wrapper">
                <div class="gdlr-core-page-builder-body">
                    <div class="gdlr-core-pbf-section">
                        <div class="gdlr-core-pbf-section-container gdlr-core-container clearfix">
                            <div class="gdlr-core-pbf-element">
                                <div class="tourmaster-tour-category clearfix ">
                                    <!-- <div class="tourmaster-tour-category-grid tourmaster-item-list  tourmaster-item-pdlr tourmaster-item-mgb tourmaster-column-20 tourmaster-column-first tourmaster-with-thumbnail">
                                        <div class="tourmaster-tour-category-item-wrap">
                                            <div class="tourmaster-tour-category-thumbnail tourmaster-media-image"><img src="upload/shutterstock_124333858-800x960.jpg" alt="" width="800" height="960" /></div>
                                            <div class="tourmaster-tour-category-overlay"></div>
                                            <div class="tourmaster-tour-category-overlay-front"></div>
                                            <div class="tourmaster-tour-category-head">
                                                <div class="tourmaster-tour-category-head-display clearfix">
                                                    <h3 class="tourmaster-tour-category-title"><i class="icon_pin_alt" ></i>South America</h3>
                                                    <div class="tourmaster-tour-category-count">3 tours</div>
                                                </div>
                                                <div class="tourmaster-tour-category-head-animate"><a class="tourmaster-tour-category-head-link" href="../tour-destination/south-america/index.html">View all tours</a>
                                                    <div class="tourmaster-tour-category-head-divider"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
                
                <div class="container">
					<div class="board container mt-5 mb-5 pb-5">
						<table class="table table-hover text-center" data-aos="fade-up" v-if="noticeList.length">
							<thead>
								<tr class="row">
									<th class="col-1">번호</th>
									<th class="col-5">제목</th>
									<th class="col-3">작성자</th>
									<th class="col-2">작성날짜</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row"
									v-for="(notice, index) in noticeList" :key="notice.postId">
                                    <router-link :to="{name:'noticeDetail', params:{postId : notice.postId}}">
									<th class="col-1">{{index}}</th>
									<td class="col-5">{{notice.title}}</td>
									<td class="col-3">{{notice.userId}}</td>
									<td class="col-2">{{notice.registeredTime}}</td>
                                    </router-link>
								</tr>
							</tbody>
						</table>
						<div class="mt-5 text-center" v-else>작성된 공지사항이 없습니다.</div>
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
import {getPostListByBoardId} from "@/api/board"
export default {
    name:"NoticeList",
    data(){
        return {
            noticeList : []
        }
    },
    created(){
        getPostListByBoardId(
            4, // 공지사항
            ({ data }) => {
                this.noticeList = data;
            },
            (error) => {
                console.log(error);
            }
        );
    }
}
</script>

<style>

</style>