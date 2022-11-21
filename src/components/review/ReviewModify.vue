<template>
  <div class="traveltour-page-wrapper" id="traveltour-page-wrapper">
    <div class="gdlr-core-page-builder-body">
      <div
        class="traveltour-page-title-wrap traveltour-style-custom traveltour-left-align"
      >
        <div class="traveltour-header-transparent-substitute"></div>
        <div class="traveltour-page-title-overlay"></div>
        <div class="traveltour-page-title-container traveltour-container">
          <div class="traveltour-page-title-content traveltour-item-pdlr">
            <h1 class="traveltour-page-title">여행 후기 수정</h1>
          </div>
        </div>
      </div>
      <div class="gdlr-core-pbf-wrapper" style="padding: 60px 0px 100px 0px">
        <div
          class="gdlr-core-pbf-background-wrap"
          style="background-color: #f5f5f5"
        ></div>
        <div class="gdlr-core-pbf-wrapper-content gdlr-core-js">
          <div
            class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container"
          >
            <div
              class="gdlr-core-pbf-column gdlr-core-column-40 gdlr-core-column-first"
            >
              <div
                class="gdlr-core-pbf-column-content-margin gdlr-core-js"
                style="padding: 50px 20px 0px 20px"
              >
                <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js">
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-title-item gdlr-core-item-pdb clearfix gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr"
                      style="padding-bottom: 15px"
                    >
                      <div class="gdlr-core-title-item-title-wrap">
                        <h3
                          class="gdlr-core-title-item-title gdlr-core-skin-title"
                          style="
                            font-size: 25px;
                            letter-spacing: 0px;
                            text-transform: none;
                          "
                        >
                          여행 후기<span
                            class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"
                          ></span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-left-align"
                    >
                      <div
                        class="gdlr-core-divider-container"
                        style="max-width: 40px"
                      >
                        <div
                          class="gdlr-core-divider-line gdlr-core-skin-divider"
                          style="
                            border-color: #3a3a3a;
                            border-bottom-width: 2px;
                          "
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"
                      style="padding-bottom: 25px"
                    >
                      <div
                        class="gdlr-core-text-box-item-content"
                        style="font-size: 16px"
                      >
                        <p>여행은 어떠셨나요?</p>
                        <p>SNC와 함께한 여행 후기를 남겨주세요.</p>
                      </div>
                    </div>
                  </div>
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-contact-form-7-item gdlr-core-item-pdlr gdlr-core-item-pdb"
                    >
                      <div
                        role="form"
                        class="wpcf7"
                        id="wpcf7-f1979-p1977-o1"
                        lang="en-US"
                        dir="ltr"
                      >
                        <div class="screen-reader-response"></div>
                        <form
                          class="quform tourmaster-form-field tourmaster-with-border"
                          enctype="multipart/form-data"
                        >
                          <div class="quform-elements">
                            <div class="quform-element">
                              <p>
                                <br />
                                <span class="wpcf7-form-control-wrap your-name">
                                  <input
                                    id="title"
                                    type="text"
                                    v-model="review.title"
                                    ref="title"
                                    size="40"
                                    class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                    aria-required="true"
                                    aria-invalid="false"
                                  />
                                </span>
                              </p>
                            </div>
                            
                            <div class="gdlr-core-pbf-wrapper " style="padding: 0px 0px 30px 0px;" data-skin="Blue Icon" id="map">
                                <div class="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                                    <div class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr" style="padding-bottom: 35px ;">
                                                <div class="gdlr-core-title-item-title-wrap">
                                                    <h6 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 24px ;font-weight: 600 ;letter-spacing: 0px ;text-transform: none ;"><span class="gdlr-core-title-item-left-icon" style="font-size: 18px ;"  ><i class="fa fa-map-o"  ></i></span>위치<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h6></div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" style="padding-bottom: 55px ;">
                                                <div class="gdlr-core-text-box-item-content">
                                                    <!-- <div class="">
                                                        <iframe src="https://www.google.com/maps/d/embed?mid=1mGgtylMQHGAKR6HR8r8YLe5W4LU" width="100%" height="480"></iframe>
                                                    </div> -->
                                                    <!--  style="width:500px;height:400px;" -->
                                                    <!-- <div id="map" class="ms-3 mt-4 mb-5"></div>  -->
                                                </div>
                                            </div>
                                        </div>
                                        <!-- 위치 위에 덮어버림 -->
                                                        <the-map :location="location"></the-map>
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align" style="margin-bottom: 25px ;">
                                                <div class="gdlr-core-divider-line gdlr-core-skin-divider" style="border-bottom-width: 2px ;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                    :value = "review.title"
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
                                    :value = "review.addr"
                                    readonly  
                                  />
                                </span>
                              </p>
                            </div>
                            <div class="quform-element">
                              <label>별점 후기</label>
                              <p>
                                <select
                                  class="tourmaster-tour-rating rateSelect form-control form-select border-0 py-3"
                                  v-model="review.score"
                                >
                                  <!-- <option class="star text-center">별점</option> -->
                                  <option
                                    class="text-warning"
                                    value="1"
                                  >
                                    <i class="fa fa-star"></i>
                                  </option>
                                  <!--&#xf005-->
                                  <option
                                    class="text-warning"
                                    value="2"
                                  >
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                  </option>
                                  <option
                                    class=" text-warning"
                                    value="3"
                                  >
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                  </option>
                                  <option
                                    class=" text-warning"
                                    value="4"
                                  >
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i> 
                                  </option>
                                  <option
                                    class=" text-warning"
                                    value="5"
                                    selected
                                  >
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                  </option>
                                  <!-- <option class="recruit text-center">모집</option> -->
                                </select>
                              </p>
                            </div>
                            <div class="quform-element">
                              <p>
                                <br />
                                <span class="wpcf7-form-control-wrap your-name">
                                  <input
                                    id="userId"
                                    type="text"
                                    size="40"
                                    class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                    aria-invalid="false"
                                    readonly
                                    value="LoginUserId"
                                  />
                                </span>
                              </p>
                            </div>
                            <div class="quform-element">
                              <p>
                                <br />
                                <span
                                  class="wpcf7-form-control-wrap your-email"
                                >
                                  <input
                                    id="email"
                                    type="text"
                                    size="40"
                                    class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                    aria-invalid="false"
                                    readonly
                                    value="LoginUserEmail"
                                  />
                                </span>
                              </p>
                            </div>
                            <div class="quform-element">
                              <p>
                                <br />
                                <span
                                  class="wpcf7-form-control-wrap your-message"
                                >
                                  <textarea
                                    id="content"
                                    v-model="review.content"
                                    ref="content"
                                    cols="40"
                                    rows="10"
                                    class="wpcf7-form-control wpcf7-textarea"
                                    aria-invalid="false"
                                  ></textarea>
                                </span>
                              </p>
                            </div>
                            <div class="quform-element">
                              <p>
                                <br />
                                <span
                                  class="wpcf7-form-control-wrap your-message"
                                >
                                  <input
                                    id="img"
                                    type="file"
                                    name="img"
                                    cols="40"
                                    rows="10"
                                    class="wpcf7-form-control wpcf7-textarea"
                                    aria-invalid="false"
                                  />
                                </span>
                              </p>
                            </div>
                            <!-- <p> -->
                            <div class="quform-submit">
                              <div class="quform-submit-inner">
                                <button
                                  type="button"
                                  class="submit-button"
                                  @click="checkReviewValue"
                                >
                                  <span>등록</span>
                                </button>
                              </div>
                              <div class="quform-loading-wrap">
                                <span class="quform-loading"></span>
                              </div>
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
              <div
                class="gdlr-core-pbf-column-content-margin gdlr-core-js"
                style="padding: 50px 20px 0px 20px"
              >
                <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js">
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-title-item gdlr-core-item-pdb clearfix gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr"
                      style="padding-bottom: 15px"
                    >
                      <div class="gdlr-core-title-item-title-wrap">
                        <h3
                          class="gdlr-core-title-item-title gdlr-core-skin-title"
                          style="
                            font-size: 25px;
                            letter-spacing: 0px;
                            text-transform: none;
                          "
                        >
                          Contact<span
                            class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"
                          ></span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-left-align"
                    >
                      <div
                        class="gdlr-core-divider-container"
                        style="max-width: 40px"
                      >
                        <div
                          class="gdlr-core-divider-line gdlr-core-skin-divider"
                          style="
                            border-color: #3a3a3a;
                            border-bottom-width: 2px;
                          "
                        ></div>
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
                    <div
                      class="gdlr-core-icon-list-item gdlr-core-item-pdlr gdlr-core-item-pdb clearfix"
                    >
                      <ul>
                        <li class="gdlr-core-skin-divider gdlr-core-with-hover">
                          <span class="gdlr-core-icon-list-icon-wrap"
                            ><i
                              class="gdlr-core-icon-list-icon-hover fa fa-envelope-o"
                              style="font-size: 16px"
                            ></i
                            ><i
                              class="gdlr-core-icon-list-icon fa fa-envelope-o"
                              style="font-size: 16px; width: 16px"
                            ></i
                          ></span>
                          <div class="gdlr-core-icon-list-content-wrap">
                            <span
                              class="gdlr-core-icon-list-content"
                              style="font-size: 16px"
                              >loginUserEmail</span
                            >
                          </div>
                        </li>
                        <!-- <li class=" gdlr-core-skin-divider gdlr-core-with-hover"><span class="gdlr-core-icon-list-icon-wrap"><i class="gdlr-core-icon-list-icon-hover fa fa-phone" style="font-size: 16px ;"  ></i><i class="gdlr-core-icon-list-icon fa fa-phone" style="font-size: 16px ;width: 16px ;" ></i></span>
                                                            <div class="gdlr-core-icon-list-content-wrap"><span class="gdlr-core-icon-list-content" style="font-size: 16px ;">+1-3524-3356</span></div>
                                                        </li> -->
                      </ul>
                    </div>
                  </div>
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-title-item gdlr-core-item-pdb clearfix gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr"
                      style="padding-bottom: 15px"
                    >
                      <div class="gdlr-core-title-item-title-wrap">
                        <h3
                          class="gdlr-core-title-item-title gdlr-core-skin-title"
                          style="
                            font-size: 25px;
                            letter-spacing: 0px;
                            text-transform: none;
                          "
                        >
                          Map<span
                            class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"
                          ></span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-left-align"
                    >
                      <div
                        class="gdlr-core-divider-container"
                        style="max-width: 40px"
                      >
                        <div
                          class="gdlr-core-divider-line gdlr-core-skin-divider"
                          style="
                            border-color: #3a3a3a;
                            border-bottom-width: 2px;
                          "
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-wp-google-map-plugin-item gdlr-core-item-pdlr gdlr-core-item-pdb"
                      style="padding-bottom: 0px"
                    >
                      <div class="wpgmp_map_container wpgmp-map-2" rel="map2">
                        <div
                          class="wpgmp_map"
                          style="width: 100%; height: 250px"
                          id="map2"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gdlr-core-pbf-wrapper" style="padding: 75px 0px 75px 0px">
        <div
          class="gdlr-core-pbf-background-wrap"
          style="background-color: #ffffff"
        ></div>
        <div
          class="gdlr-core-pbf-wrapper-content gdlr-core-js"
          data-gdlr-animation="fadeInUp"
          data-gdlr-animation-duration="600ms"
          data-gdlr-animation-offset="0.8"
        >
          <div
            class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-pbf-wrapper-full-no-space"
          >
            <div class="gdlr-core-pbf-element">
              <div
                class="gdlr-core-social-network-item gdlr-core-item-pdb gdlr-core-center-align gdlr-core-item-pdlr"
                style="padding-bottom: 0px"
              >
                <a
                  href="mailto:#"
                  target="_blank"
                  class="gdlr-core-social-network-icon"
                  title="email"
                  style="font-size: 20px; color: #232323"
                  ><i class="fa fa-envelope"></i></a
                ><a
                  href="#"
                  target="_blank"
                  class="gdlr-core-social-network-icon"
                  title="facebook"
                  style="font-size: 20px; color: #232323; margin-left: 37px"
                  ><i class="fa fa-facebook"></i></a
                ><a
                  href="#"
                  target="_blank"
                  class="gdlr-core-social-network-icon"
                  title="google-plus"
                  style="font-size: 20px; color: #232323; margin-left: 37px"
                  ><i class="fa fa-google-plus"></i></a
                ><a
                  href="#"
                  target="_blank"
                  class="gdlr-core-social-network-icon"
                  title="linkedin"
                  style="font-size: 20px; color: #232323; margin-left: 37px"
                  ><i class="fa fa-linkedin"></i></a
                ><a
                  href="#"
                  target="_blank"
                  class="gdlr-core-social-network-icon"
                  title="skype"
                  style="font-size: 20px; color: #232323; margin-left: 37px"
                  ><i class="fa fa-skype"></i></a
                ><a
                  href="#"
                  target="_blank"
                  class="gdlr-core-social-network-icon"
                  title="twitter"
                  style="font-size: 20px; color: #232323; margin-left: 37px"
                  ><i class="fa fa-twitter"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheMap from "@/components/map/TheMap";

// import {getPost} from "@/api/board";
export default {
    name : "ReviewModify",
    data(){
        return{
        // location : {}, // props이면 필요 없음
        review: {
        userId: "", // loginUserId
        contentId : "",
        stateId: 1,
        cityId: 1,
        title: "",
        boardId: 3,
        content: "",
        img1: "",
        img2: "",
        score: "",
      }
        }
    },
    // props:{
    //     location : Object,
    //     review : Object
    // },
    components:{
        TheMap
    },
    created(){
        // console.log(this.$route.params.location);
        // this.location = this.$route.params.location;

        // this.review = this.$route.params.review; // for modify

        // getPost(3, this.$route.params.postId,
        //     ({data}) => {
        //         this.review = data;
        //     },(error) => {
        //         console.log(error); // errorpage
        // });
        // contentId로 content 조회 필요함 -> 지도에 출력하기 위한 lat,lng
        // 아니야 그냥 수정할 때 해당 content랑 location 둘 다 보내주면 되는거잖아
        // console.log(this.review);
        // location = {lat : this.review.lat, lng : this.review.lng}
    }
}
</script>

<style>

</style>