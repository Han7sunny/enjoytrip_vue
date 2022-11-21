<template>
  <div class="traveltour-page-wrapper" id="traveltour-page-wrapper">
    <div class="gdlr-core-page-builder-body">
                    <div class="traveltour-page-title-wrap  traveltour-style-custom traveltour-left-align">
                <div class="traveltour-header-transparent-substitute"></div>
                <div class="traveltour-page-title-overlay"></div>
                <div class="traveltour-page-title-container traveltour-container">
                    <div class="traveltour-page-title-content traveltour-item-pdlr">
                        <h1 class="traveltour-page-title">여행 메이트 모집</h1>
                    </div>
                </div>
            </div>
                    <div class="gdlr-core-pbf-wrapper " style="padding: 60px 0px 100px 0px;">
                        <div class="gdlr-core-pbf-background-wrap" style="background-color: #f5f5f5 ;"></div>
                        <div class="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                            <div class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                                <div class="gdlr-core-pbf-column gdlr-core-column-40 gdlr-core-column-first">
                                    <div class="gdlr-core-pbf-column-content-margin gdlr-core-js " style="padding: 50px 20px 0px 20px;">
                                        <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                            <div class="gdlr-core-pbf-element">
                                                <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr" style="padding-bottom: 15px ;">
                                                    <div class="gdlr-core-title-item-title-wrap">
                                                        <h3 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 25px ;letter-spacing: 0px ;text-transform: none ;">여행 메이트<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                                </div>
                                            </div>
                                            <div class="gdlr-core-pbf-element">
                                                <div class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-left-align">
                                                    <div class="gdlr-core-divider-container" style="max-width: 40px ;">
                                                        <div class="gdlr-core-divider-line gdlr-core-skin-divider" style="border-color: #3a3a3a ;border-bottom-width: 2px ;"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="gdlr-core-pbf-element">
                                                <div class="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" style="padding-bottom: 25px ;">
                                                    <div class="gdlr-core-text-box-item-content" style="font-size: 16px ;">
                                                        <p>새로운 여행지, 새로운 사람과 함께하고 싶다면</p>
                                                        <p>함께 떠날 여행 메이트를 모집해보세요.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="gdlr-core-pbf-element">
                                                <div class="gdlr-core-contact-form-7-item gdlr-core-item-pdlr gdlr-core-item-pdb ">
                                                    <div role="form" class="wpcf7" id="wpcf7-f1979-p1977-o1" lang="en-US" dir="ltr">
                                                        <div class="screen-reader-response"></div>
                                                        <form class="quform tourmaster-form-field tourmaster-with-border" action="plugins/quform/process.php" method="post" enctype="multipart/form-data" onclick="">

                                                            <div class="quform-elements">
                                                                <div class="quform-element">
                                                                    <p>
                                                                        <br>
                                                                        <span class="wpcf7-form-control-wrap your-name">
                                                                            <input id="title" type="text" v-model="mate.title" ref="title" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="제목">
                                                                        </span> 
                                                                    </p>
                                                                </div>
                                                                <div class="tourmaster-tour-search-wrap">
                                                                    <br />
                                                                    <search-map></search-map>
                                                                </div>

                                                                <div class="quform-element">
                                                                    <p>
                                                                        <br />
                                                                        <span class="wpcf7-form-control-wrap your-name">
                                                                        <input
                                                                            id="contentTitle"
                                                                            type="text"
                                                                            size="40"
                                                                            ref="contentTitle"
                                                                            class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                            aria-invalid="false"
                                                                            :value = "refreshContent.title"
                                                                            placeholder="여행지"
                                                                            readonly  
                                                                        />
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div class="quform-element">
                                                                <p>
                                                                    <br />
                                                                    <span class="wpcf7-form-control-wrap your-name">
                                                                    <input
                                                                        id="addr"
                                                                        type="text"
                                                                        size="40"
                                                                        class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                        aria-invalid="false"
                                                                        :value = "refreshContent.addr"
                                                                        placeholder="여행지 주소"
                                                                        readonly  
                                                                    />
                                                                    </span>
                                                                </p>
                                                                </div>
                                                                <div class="quform-element">
                                                                    <p>
                                                                        <br />
                                                                        <span class="wpcf7-form-control-wrap your-name">
                                                                        <input
                                                                            id="personnel"
                                                                            type="text"
                                                                            size="40"
                                                                            class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                            aria-invalid="false"
                                                                            placeholder="여행 메이트 정원"
                                                                        />
                                                                        </span>
                                                                    </p>
                                                                </div>
                                   <div class="row">
                                                               <br/>                                 
                                                                        <div class="col-3 mb-3">
                                                                            <input type="date" class="form-control text-center" data-placeholder="시작일"
                                                                                id="startDate" v-model="startDate" aria-required="true" required @click="enterStartDate"/>
                                                                        </div>
                                                                        <div class="col-3 mb-3">
                                                                            <input type="date" class="form-control text-center" data-placeholder="종료일"
                                                                                id="endDate" v-model="endDate" required />
                                                                        </div>
                                                                                            </div>
                                                                <div class="quform-element">
                                                                    <p>
                                                                        <br>
                                                                        <span class="wpcf7-form-control-wrap your-name">
                                                                            <input id="userId" type="text" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-invalid="false" readonly value="LoginUserId">
                                                                        </span> 
                                                                    </p>
                                                                </div>
                                                                <div class="quform-element">
                                                                    <p>
                                                                        <br>
                                                                        <span class="wpcf7-form-control-wrap your-email">
                                                                            <input id="email" type="text" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-invalid="false" readonly value="LoginUserEmail">
                                                                        </span> 
                                                                    </p>
                                                                </div>
                                                                <div class="quform-element">
                                                                    <p>
                                                                        <br>
                                                                        <span class="wpcf7-form-control-wrap your-message">
                                                                            <textarea id="content" v-model="mate.content" ref="content" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="여행 메이트 모집 내용"></textarea>
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div class="quform-element">
                                                                    <p>
                                                                        <br>
                                                                        <span class="wpcf7-form-control-wrap your-message">
                                                                            <input id="img" type="file" name="img" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false"/>
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <!-- <p> -->
                                                                    <div class="quform-submit">
                                                                        <div class="quform-submit-inner">
                                                                            <button type="button" class="submit-button" @click="checkMateValue"><span>등록</span></button>
                                                                        </div>
                                                                        <div class="quform-loading-wrap"><span class="quform-loading"></span></div>
                                                                    </div>
                                                                <!-- </p> -->
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="gdlr-core-pbf-column gdlr-core-column-20">
                                    <div class="gdlr-core-pbf-column-content-margin gdlr-core-js " style="padding: 50px 20px 0px 20px;">
                                        <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                            <div class="gdlr-core-pbf-element">
                                                <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr" style="padding-bottom: 15px ;">
                                                    <div class="gdlr-core-title-item-title-wrap">
                                                        <h3 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 25px ;letter-spacing: 0px ;text-transform: none ;">Contact<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                                </div>
                                            </div>
                                            <div class="gdlr-core-pbf-element">
                                                <div class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-left-align">
                                                    <div class="gdlr-core-divider-container" style="max-width: 40px ;">
                                                        <div class="gdlr-core-divider-line gdlr-core-skin-divider" style="border-color: #3a3a3a ;border-bottom-width: 2px ;"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- <div class="gdlr-core-pbf-element">
                                                <div class="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" style="padding-bottom: 0px ;">
                                                    <div class="gdlr-core-text-box-item-content" style="font-size: 16px ;">
                                                        <p>{{this.stateName}}
                                                            <br />{{this.cityName}}</p>
                                                    </div>
                                                </div>
                                            </div> -->
                                            <div class="gdlr-core-pbf-element">
                                                <div class="gdlr-core-icon-list-item gdlr-core-item-pdlr gdlr-core-item-pdb clearfix ">
                                                    <ul>
                                                        <li class=" gdlr-core-skin-divider gdlr-core-with-hover"><span class="gdlr-core-icon-list-icon-wrap"><i class="gdlr-core-icon-list-icon-hover fa fa-envelope-o" style="font-size: 16px ;"  ></i><i class="gdlr-core-icon-list-icon fa fa-envelope-o" style="font-size: 16px ;width: 16px ;" ></i></span>
                                                            <div class="gdlr-core-icon-list-content-wrap"><span class="gdlr-core-icon-list-content" style="font-size: 16px ;">loginUserEmail</span></div>
                                                        </li>
                                                        <!-- <li class=" gdlr-core-skin-divider gdlr-core-with-hover"><span class="gdlr-core-icon-list-icon-wrap"><i class="gdlr-core-icon-list-icon-hover fa fa-phone" style="font-size: 16px ;"  ></i><i class="gdlr-core-icon-list-icon fa fa-phone" style="font-size: 16px ;width: 16px ;" ></i></span>
                                                            <div class="gdlr-core-icon-list-content-wrap"><span class="gdlr-core-icon-list-content" style="font-size: 16px ;">+1-3524-3356</span></div>
                                                        </li> -->
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="gdlr-core-pbf-element">
                                                <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr" style="padding-bottom: 15px ;">
                                                    <div class="gdlr-core-title-item-title-wrap">
                                                        <h3 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 25px ;letter-spacing: 0px ;text-transform: none ;">Map<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                                </div>
                                            </div>
                                            <div class="gdlr-core-pbf-element">
                                                <div class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-left-align">
                                                    <div class="gdlr-core-divider-container" style="max-width: 40px ;">
                                                        <div class="gdlr-core-divider-line gdlr-core-skin-divider" style="border-color: #3a3a3a ;border-bottom-width: 2px ;"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="gdlr-core-pbf-element">
                                                <div class="gdlr-core-wp-google-map-plugin-item gdlr-core-item-pdlr gdlr-core-item-pdb " style="padding-bottom: 0px ;">
                                                    <div class="wpgmp_map_container wpgmp-map-2" rel="map2">
                                                        <div class="wpgmp_map " style="width:100%; height:250px;" id="map2"></div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="gdlr-core-pbf-wrapper " style="padding: 75px 0px 75px 0px;">
                        <div class="gdlr-core-pbf-background-wrap" style="background-color: #ffffff ;"></div>
                        <div class="gdlr-core-pbf-wrapper-content gdlr-core-js " data-gdlr-animation="fadeInUp" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8">
                            <div class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-pbf-wrapper-full-no-space">
                                <div class="gdlr-core-pbf-element">
                                    <div class="gdlr-core-social-network-item gdlr-core-item-pdb  gdlr-core-center-align gdlr-core-item-pdlr" style="padding-bottom: 0px ;"><a href="mailto:#" target="_blank" class="gdlr-core-social-network-icon" title="email" style="font-size: 20px ;color: #232323 ;"><i class="fa fa-envelope" ></i></a><a href="#" target="_blank" class="gdlr-core-social-network-icon" title="facebook" style="font-size: 20px ;color: #232323 ;margin-left: 37px ;"><i class="fa fa-facebook" ></i></a><a href="#" target="_blank" class="gdlr-core-social-network-icon" title="google-plus" style="font-size: 20px ;color: #232323 ;margin-left: 37px ;"><i class="fa fa-google-plus" ></i></a><a href="#" target="_blank" class="gdlr-core-social-network-icon" title="linkedin" style="font-size: 20px ;color: #232323 ;margin-left: 37px ;"><i class="fa fa-linkedin" ></i></a><a href="#" target="_blank" class="gdlr-core-social-network-icon" title="skype" style="font-size: 20px ;color: #232323 ;margin-left: 37px ;"><i class="fa fa-skype" ></i></a><a href="#" target="_blank" class="gdlr-core-social-network-icon" title="twitter" style="font-size: 20px ;color: #232323 ;margin-left: 37px ;"><i class="fa fa-twitter" ></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import SearchMap from "@/components/map/SearchMap.vue";
// import { postPost } from "@/api/board";
const contentStore = "contentStore";
export default {
    name:"MateWrite",
    data(){
        return{
            ...mapState(contentStore, ["content"]),
            // content : {}, // 선택한 여행지
            mate : {
                userId : "", // loginUserId
                // themeId : "",
                stateId : 1,
                cityId : 1,
                title : "", // ok
                boardId : 3,
                content : "", // ok
                contentId : "",
                img1 : "",
                img2 : "",
                personnel : "", // 
                startDate : "", // 
                endDate : "", // 
            }
        }
    },
    components:{
        SearchMap
    },
    // props:{
    //     content : Object; // 시군구 검색을 통해 얻어낸 content 
    // },
    computed: {
        content() {
            console.log("computed"+this.$store.state.content); // 값 변함
        //   this.review.contentId = this.$store.state.content.contentId;
        //   this.reviewContent.title = this.$store.state.content.title;
        //   this.reviewContent.addr = this.$store.state.content.addr;
        
        return this.$store.state.content;
        },
        ...mapGetters(contentStore, ["refreshContent"]),
    },
    methods:{
            ...mapActions(contentStore, ["setContent"]),
        enterStartDate(){
            document.querySelector("#endDate").setAttribute("min",this.startDate);
        },
        checkMateValue(){
            let err = true;
            let msg = "";
            !this.mate.title && ((msg = "제목을 입력해주세요"), (err = false), this.$refs.title.focus());
            err && !this.contentTitle && ((msg = "여행지를 선택해주세요"), (err = false), this.$refs.contentTitle.focus());
            err && !this.mate.content && ((msg = "여행 후기 내용을 입력해주세요"), (err = false), this.$refs.content.focus());

            if (!err) alert(msg);
            else this.registMate();
        },  
        registMate(){
            console.log(this.mate);
            // postPost(this.mate);
        }
    },
    // created(){
    // }
}
</script>

<style>
.background{
    background-image: url(@/assets/upload/section-bg-2.jpg);
}
</style>