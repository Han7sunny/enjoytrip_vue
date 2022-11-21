<template>
  <div>
    <div class="traveltour-body-outer-wrapper">
      <div class="traveltour-body-wrapper clearfix traveltour-with-frame">
        <div class="traveltour-page-wrapper" id="traveltour-page-wrapper">
          <div
            class="tourmaster-page-wrapper tourmaster-tour-style-1 tourmaster-with-sidebar"
            id="tourmaster-page-wrapper"
          >
            <div
              class="tourmaster-single-header"
              :style="{ backgroundImage: 'url(' + theme.img1 + ')' }"
            >
              <div class="tourmaster-single-header-background-overlay"></div>
              <div class="tourmaster-single-header-top-overlay"></div>
              <div class="tourmaster-single-header-overlay"></div>
              <div
                class="tourmaster-single-header-container tourmaster-container"
              >
                <div class="tourmaster-single-header-container-inner">
                  <div
                    class="tourmaster-single-header-title-wrap tourmaster-item-pdlr"
                  >
                    <h1 class="tourmaster-single-header-title">
                      {{ theme.title }}
                    </h1>
                    <div class="tourmaster-tour-rating">
                      <span class="tourmaster-tour-rating-text"
                        >조회수 {{ theme.hits }}</span
                      >
                    </div>
                  </div>
                  <div class="tourmaster-header-price tourmaster-item-mglr">
                    <div class="tourmaster-header-price-ribbon">10% Off</div>
                    <div class="tourmaster-header-price-wrap">
                      <div class="tourmaster-header-price-overlay"></div>
                      <div
                        class="tourmaster-tour-price-wrap tourmaster-discount"
                      >
                        <span class="tourmaster-tour-price"
                          ><span class="tourmaster-head">From</span
                          ><span class="tourmaster-tail">$3,880</span></span
                        ><span class="tourmaster-tour-discount-price"
                          >$3,500</span
                        ><span
                          class="fa fa-info-circle tourmaster-tour-price-info"
                          data-rel="tipsy"
                          title="The initial price based on 1 adult with the lowest price in low season"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tourmaster-template-wrapper">
              <div
                class="tourmaster-tour-booking-bar-container tourmaster-container"
              >
                <div class="tourmaster-tour-booking-bar-container-inner">
                  <div
                    class="tourmaster-tour-booking-bar-anchor tourmaster-item-mglr"
                  ></div>
                  <div
                    class="tourmaster-tour-booking-bar-wrap tourmaster-item-mglr"
                    id="tourmaster-tour-booking-bar-wrap"
                  >
                    <div class="tourmaster-tour-booking-bar-outer">
                      <div class="tourmaster-header-price tourmaster-item-mglr">
                        <div class="tourmaster-header-price-ribbon">
                          10% Off
                        </div>
                        <div class="tourmaster-header-price-wrap">
                          <div class="tourmaster-header-price-overlay"></div>
                          <div
                            class="tourmaster-tour-price-wrap tourmaster-discount"
                          >
                            <span class="tourmaster-tour-price"
                              ><span class="tourmaster-head">From</span
                              ><span class="tourmaster-tail">$3,880</span></span
                            ><span class="tourmaster-tour-discount-price"
                              >$3,500</span
                            ><span
                              class="fa fa-info-circle tourmaster-tour-price-info"
                              data-rel="tipsy"
                              title="The initial price based on 1 adult with the lowest price in low season"
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div class="tourmaster-tour-booking-bar-inner">
                        <div
                          class="tourmaster-booking-tab-title clearfix"
                          id="tourmaster-booking-tab-title"
                        >
                          <div
                            class="tourmaster-booking-tab-title-item tourmaster-active"
                            data-tourmaster-tab="booking"
                          >
                            Booking Form
                          </div>
                          <div
                            class="tourmaster-booking-tab-title-item"
                            data-tourmaster-tab="enquiry"
                          >
                            Enquiry Form
                          </div>
                        </div>
                        <div
                          class="tourmaster-booking-tab-content"
                          data-tourmaster-tab="enquiry"
                        >
                          <div class="tourmaster-tour-booking-enquiry-wrap">
                            <form
                              class="tourmaster-enquiry-form tourmaster-form-field tourmaster-with-border clearfix"
                              id="tourmaster-enquiry-form"
                              data-ajax-url="https://demo.goodlayers.com/traveltour/wp-admin/admin-ajax.php"
                              data-action="tourmaster_send_enquiry_form"
                              data-validate-error="Please fill all required fields."
                            >
                              <div
                                class="tourmaster-enquiry-field tourmaster-enquiry-field-full-name tourmaster-type-text clearfix"
                              >
                                <div class="tourmaster-head">
                                  Full Name<span class="tourmaster-req">*</span>
                                </div>
                                <div class="tourmaster-tail clearfix">
                                  <input
                                    type="text"
                                    name="full-name"
                                    value=""
                                    data-required
                                  />
                                </div>
                              </div>
                              <div
                                class="tourmaster-enquiry-field tourmaster-enquiry-field-email-address tourmaster-type-email clearfix"
                              >
                                <div class="tourmaster-head">
                                  Email Address<span class="tourmaster-req"
                                    >*</span
                                  >
                                </div>
                                <div class="tourmaster-tail clearfix">
                                  <input
                                    type="email"
                                    name="email-address"
                                    value=""
                                    data-required
                                  />
                                </div>
                              </div>
                              <div
                                class="tourmaster-enquiry-field tourmaster-enquiry-field-travel-date tourmaster-type-datepicker clearfix"
                              >
                                <div class="tourmaster-head">
                                  Travel Date<span class="tourmaster-req"
                                    >*</span
                                  >
                                </div>
                                <div class="tourmaster-tail clearfix">
                                  <input
                                    type="text"
                                    class="tourmaster-datepicker"
                                    name="travel-date"
                                    value=""
                                  /><i class="fa fa-calendar"></i>
                                </div>
                              </div>
                              <div
                                class="tourmaster-enquiry-field tourmaster-enquiry-field-person tourmaster-type-combobox clearfix"
                              >
                                <div class="tourmaster-head">
                                  Person<span class="tourmaster-req">*</span>
                                </div>
                                <div class="tourmaster-tail clearfix">
                                  <div class="tourmaster-combobox-wrap">
                                    <select name="person" data-required>
                                      <option value="Person">Person</option>
                                      <option value="1-4">1-4</option>
                                      <option value="5-9">5-9</option>
                                      <option value="10+">10+</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="tourmaster-enquiry-field tourmaster-enquiry-field-your-enquiry tourmaster-type-textarea clearfix"
                              >
                                <div class="tourmaster-head">
                                  Your Enquiry<span class="tourmaster-req"
                                    >*</span
                                  >
                                </div>
                                <div class="tourmaster-tail clearfix">
                                  <textarea
                                    name="your-enquiry"
                                    data-required
                                  ></textarea>
                                </div>
                              </div>
                              <div
                                class="tourmaster-enquiry-form-message"
                              ></div>
                              <input
                                type="hidden"
                                name="tour-id"
                                value="4643"
                              />
                              <input
                                type="submit"
                                class="tourmaster-button"
                                value="Submit Enquiry"
                              />
                            </form>
                          </div>
                        </div>
                        <div
                          class="tourmaster-booking-tab-content tourmaster-active"
                          data-tourmaster-tab="booking"
                        >
                          <form
                            class="tourmaster-single-tour-booking-fields tourmaster-update-header-price tourmaster-form-field tourmaster-with-border"
                            method="post"
                            action="https://demo.goodlayers.com/traveltour/?tourmaster-payment"
                            id="tourmaster-single-tour-booking-fields"
                            data-ajax-url="https://demo.goodlayers.com/traveltour/wp-admin/admin-ajax.php"
                          >
                            <input type="hidden" name="tour-id" value="4643" />
                            <div
                              class="tourmaster-tour-booking-date clearfix"
                              data-step="1"
                            >
                              <i class="fa fa-calendar"></i>
                              <div class="tourmaster-tour-booking-date-input">
                                <div
                                  class="tourmaster-tour-booking-date-display"
                                >
                                  February 5, 2022
                                </div>
                                <input
                                  type="hidden"
                                  name="tour-date"
                                  value="2022-02-05"
                                />
                              </div>
                            </div>
                            <div
                              class="tourmaster-tour-booking-package"
                              data-step="2"
                            >
                              <div class="tourmaster-tour-booking-next-sign">
                                <span></span>
                              </div>
                              <i class="icon_check"></i>
                              <div class="tourmaster-combobox-list-wrap">
                                <div class="tourmaster-combobox-list-display">
                                  <span>Select a package</span>
                                </div>
                                <input type="hidden" name="package" value="" />
                                <ul>
                                  <li data-value="Standard" class="">
                                    <span class="tourmaster-combobox-list-title"
                                      >Standard</span
                                    ><span
                                      class="tourmaster-combobox-list-caption"
                                      >No food, no entry tickets</span
                                    ><span class="tourmaster-combobox-list-time"
                                      >Start Time: 12:00</span
                                    ><span
                                      class="tourmaster-combobox-list-avail"
                                      >Available: -4 seats</span
                                    >
                                  </li>
                                  <li data-value="Special Package" class="">
                                    <span class="tourmaster-combobox-list-title"
                                      >Special Package</span
                                    ><span
                                      class="tourmaster-combobox-list-caption"
                                      >With food & entry tickets</span
                                    ><span class="tourmaster-combobox-list-time"
                                      >Start Time: 12:00</span
                                    ><span
                                      class="tourmaster-combobox-list-avail"
                                      >Available: -4 seats</span
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </form>
                          <div
                            class="tourmaster-lightbox-content-wrap"
                            data-tmlb-id="proceed-without-login"
                          >
                            <div class="tourmaster-lightbox-head">
                              <h3 class="tourmaster-lightbox-title">
                                Proceed Booking
                              </h3>
                              <i
                                class="tourmaster-lightbox-close icon_close"
                              ></i>
                            </div>
                            <div class="tourmaster-lightbox-content">
                              <div class="tourmaster-login-form2-wrap clearfix">
                                <div class="tourmaster-login2-right">
                                  <h3 class="tourmaster-login2-right-title">
                                    Don&#039;t have an account? Create one.
                                  </h3>
                                  <div class="tourmaster-login2-right-content">
                                    <div
                                      class="tourmaster-login2-right-description"
                                    >
                                      When you book with an account, you will be
                                      able to track your payment status, track
                                      the confirmation and you can also rate the
                                      tour after you finished the tour.
                                    </div>
                                    <a
                                      class="tourmaster-button"
                                      href="../../register/indexbd2a.html?redirect=payment"
                                      >Sign Up</a
                                    >
                                  </div>
                                  <h3 class="tourmaster-login2-right-title">
                                    Or Continue As Guest
                                  </h3>
                                  <a
                                    class="tourmaster-button"
                                    href="../../index4bb8.html?tourmaster-payment"
                                    >Continue As Guest</a
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tourmaster-tour-booking-bar-widget traveltour-sidebar-area"
                    >
                      <div
                        id="text-11"
                        class="widget widget_text traveltour-widget"
                      >
                        <div class="textwidget">
                          <span
                            class="gdlr-core-space-shortcode"
                            style="margin-top: -20px"
                          ></span>
                          <div
                            class="gdlr-core-widget-list-shortcode"
                            id="gdlr-core-widget-list-0"
                          >
                            <h3 class="gdlr-core-widget-list-shortcode-title">
                              Why Book With Us?
                            </h3>
                            <ul>
                              <li>
                                <i
                                  class="fa fa-dollar"
                                  style="
                                    font-size: 15px;
                                    color: #ffa127;
                                    margin-right: 13px;
                                  "
                                ></i
                                >No-hassle best price guarantee
                              </li>
                              <li>
                                <i
                                  class="fa fa-headphones"
                                  style="
                                    font-size: 15px;
                                    color: #ffa127;
                                    margin-right: 10px;
                                  "
                                ></i
                                >Customer care available 24/7
                              </li>
                              <li>
                                <i
                                  class="fa fa-star"
                                  style="
                                    font-size: 15px;
                                    color: #ffa127;
                                    margin-right: 10px;
                                  "
                                ></i
                                >Hand-picked Tours & Activities
                              </li>
                              <li>
                                <i
                                  class="fa fa-support"
                                  style="
                                    font-size: 15px;
                                    color: #ffa127;
                                    margin-right: 10px;
                                  "
                                ></i
                                >Free Travel Insureance
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        id="text-12"
                        class="widget widget_text traveltour-widget"
                      >
                        <div class="textwidget">
                          <span
                            class="gdlr-core-space-shortcode"
                            style="margin-top: -10px"
                          ></span>
                          <div
                            class="gdlr-core-widget-box-shortcode"
                            style="
                              color: #c9e2ff;
                              background-image: url(upload/widget-bg.jpg);
                            "
                          >
                            <h3
                              class="gdlr-core-widget-box-shortcode-title"
                              style="color: #ffffff"
                            >
                              Get a Question?
                            </h3>
                            <div class="gdlr-core-widget-box-shortcode-content">
                              <p>
                                Do not hesitage to give us a call. We are an
                                expert team and we are happy to talk to you.
                              </p>
                              <p>
                                <i
                                  class="fa fa-phone"
                                  style="
                                    font-size: 20px;
                                    color: #ffcf2a;
                                    margin-right: 10px;
                                  "
                                ></i>
                                <span
                                  style="
                                    font-size: 20px;
                                    color: #ffcf2a;
                                    font-weight: 600;
                                  "
                                  >1.8445.3356.33</span
                                >
                              </p>
                              <p>
                                <i
                                  class="fa fa-envelope-o"
                                  style="
                                    font-size: 17px;
                                    color: #ffcf2a;
                                    margin-right: 10px;
                                  "
                                ></i>
                                <span
                                  style="
                                    font-size: 14px;
                                    color: #fff;
                                    font-weight: 600;
                                  "
                                  >Help@goodlayers.com</span
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tourmaster-tour-info-outer" style="padding-top: 5%">
                <div
                  class="tourmaster-tour-info-outer-container tourmaster-container"
                >
                  <div class="tourmaster-tour-info-wrap clearfix">
                    <div
                      class="tourmaster-tour-info tourmaster-tour-info-duration-text tourmaster-item-pdlr"
                      v-if="theme.timeRequired"
                    >
                      <i class="icon_clock_alt"></i>코스 소요 시간 :
                      {{ theme.timeRequired }}
                    </div>
                    <!-- <div class="tourmaster-tour-info tourmaster-tour-info-availability tourmaster-item-pdlr"><i class="fa fa-calendar"></i>Availability : Jan 16’ - Dec 16’</div> -->
                    <div
                      class="tourmaster-tour-info tourmaster-tour-info-departure-location tourmaster-item-pdlr"
                      v-if="theme.distance"
                    >
                      <i class="flaticon-takeoff-the-plane"></i>코스 총 이동
                      거리 : {{ theme.distance }}
                    </div>
                    <div
                      class="tourmaster-tour-info tourmaster-tour-info-return-location tourmaster-item-pdlr"
                      v-if="theme.contentCount"
                    >
                      <i class="flaticon-plane-landing"></i>코스 개수 :
                      {{ theme.contentCount }}
                    </div>
                    <!-- <div class="tourmaster-tour-info tourmaster-tour-info-minimum-age tourmaster-item-pdlr"><i class="fa fa-user"></i>Min Age : 11+</div> -->
                    <!-- <div class="tourmaster-tour-info tourmaster-tour-info-maximum-people tourmaster-item-pdlr"><i class="fa fa-users"></i>Max People : 42</div> -->
                  </div>
                </div>
              </div>
              <div class="gdlr-core-page-builder-body">
                <div
                  class="gdlr-core-pbf-wrapper"
                  style="padding: 0px 0px 0px 0px"
                >
                  <div class="gdlr-core-pbf-wrapper-content gdlr-core-js">
                    <div
                      class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-pbf-wrapper-full"
                    >
                      <div class="gdlr-core-pbf-element">
                        <div
                          class="tourmaster-content-navigation-item-wrap clearfix"
                          style="padding-bottom: 0px"
                        >
                          <div
                            class="tourmaster-content-navigation-item-outer"
                            id="tourmaster-content-navigation-item-outer"
                          >
                            <div
                              class="tourmaster-content-navigation-item-container tourmaster-container"
                            >
                              <div
                                class="tourmaster-content-navigation-item tourmaster-item-pdlr"
                              >
                                <a
                                  class="tourmaster-content-navigation-tab tourmaster-active"
                                  href="#detail"
                                  >상세 정보</a
                                ><a
                                  class="tourmaster-content-navigation-tab"
                                  href="#itinerary"
                                  >코스</a
                                ><a
                                  class="tourmaster-content-navigation-tab"
                                  href="#map"
                                  >위치</a
                                ><a
                                  class="tourmaster-content-navigation-tab"
                                  href="#photos"
                                  >사진</a
                                ><a
                                  class="tourmaster-content-navigation-tab"
                                  href="#tourmaster-single-review"
                                  >후기</a
                                >
                                <div
                                  class="tourmaster-content-navigation-slider"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="gdlr-core-pbf-wrapper"
                  style="padding: 70px 0px 30px 0px"
                  data-skin="Blue Icon"
                  id="detail"
                >
                  <div class="gdlr-core-pbf-wrapper-content gdlr-core-js">
                    <div
                      class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container"
                    >
                      <div class="gdlr-core-pbf-element">
                        <div
                          class="gdlr-core-title-item gdlr-core-item-pdb clearfix gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr"
                          style="padding-bottom: 35px"
                        >
                          <div class="gdlr-core-title-item-title-wrap">
                            <h6
                              class="gdlr-core-title-item-title gdlr-core-skin-title"
                              style="
                                font-size: 24px;
                                font-weight: 600;
                                letter-spacing: 0px;
                                text-transform: none;
                              "
                            >
                              <span
                                class="gdlr-core-title-item-left-icon"
                                style="font-size: 18px"
                                ><i class="fa fa-file-text-o"></i></span
                              >상세 정보<span
                                class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"
                              ></span>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div class="gdlr-core-pbf-element">
                        <div
                          class="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"
                        >
                          <div class="gdlr-core-text-box-item-content">
                            <p>{{ theme.overview }}</p>
                          </div>
                        </div>
                      </div>
                      <div class="gdlr-core-pbf-element">
                        <div
                          class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align"
                          style="margin-bottom: 19px"
                        >
                          <div
                            class="gdlr-core-divider-line gdlr-core-skin-divider"
                          ></div>
                        </div>
                      </div>
                      <div
                        class="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first"
                        v-if="theme.timeRequired"
                      >
                        <div
                          class="gdlr-core-pbf-column-content-margin gdlr-core-js"
                        >
                          <div
                            class="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                          >
                            <div class="gdlr-core-pbf-element">
                              <div
                                class="gdlr-core-title-item gdlr-core-item-pdb clearfix gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                style="padding-bottom: 0px"
                              >
                                <div class="gdlr-core-title-item-title-wrap">
                                  <h3
                                    class="gdlr-core-title-item-title gdlr-core-skin-title"
                                    style="
                                      font-size: 15px;
                                      font-weight: 500;
                                      letter-spacing: 0px;
                                      text-transform: none;
                                    "
                                  >
                                    소요 시간<span
                                      class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"
                                    ></span>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="gdlr-core-pbf-column gdlr-core-column-30"
                        v-if="theme.timeRequired"
                      >
                        <div
                          class="gdlr-core-pbf-column-content-margin gdlr-core-js"
                        >
                          <div
                            class="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                          >
                            <div class="gdlr-core-pbf-element">
                              <div
                                class="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"
                                style="padding-bottom: 0px"
                              >
                                <div class="gdlr-core-text-box-item-content">
                                  <p>{{ theme.timeRequired }}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="gdlr-core-pbf-element"
                        v-if="theme.timeRequired"
                      >
                        <div
                          class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align"
                          style="margin-bottom: 19px"
                        >
                          <div
                            class="gdlr-core-divider-line gdlr-core-skin-divider"
                          ></div>
                        </div>
                      </div>
                      <div
                        class="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first"
                        v-if="theme.distance"
                      >
                        <div
                          class="gdlr-core-pbf-column-content-margin gdlr-core-js"
                        >
                          <div
                            class="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                          >
                            <div class="gdlr-core-pbf-element">
                              <div
                                class="gdlr-core-title-item gdlr-core-item-pdb clearfix gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                style="padding-bottom: 0px"
                              >
                                <div class="gdlr-core-title-item-title-wrap">
                                  <h3
                                    class="gdlr-core-title-item-title gdlr-core-skin-title"
                                    style="
                                      font-size: 15px;
                                      font-weight: 500;
                                      letter-spacing: 0px;
                                      text-transform: none;
                                    "
                                  >
                                    총 이동거리<span
                                      class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"
                                    ></span>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="gdlr-core-pbf-column gdlr-core-column-30"
                        v-if="theme.distance"
                      >
                        <div
                          class="gdlr-core-pbf-column-content-margin gdlr-core-js"
                        >
                          <div
                            class="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                          >
                            <div class="gdlr-core-pbf-element">
                              <div
                                class="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"
                                style="padding-bottom: 0px"
                              >
                                <div class="gdlr-core-text-box-item-content">
                                  <p>{{ theme.distance }}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="gdlr-core-pbf-element" v-if="theme.distance">
                        <div
                          class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align"
                          style="margin-bottom: 19px"
                        >
                          <div
                            class="gdlr-core-divider-line gdlr-core-skin-divider"
                          ></div>
                        </div>
                      </div>
                      <div
                        class="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first"
                      >
                        <div
                          class="gdlr-core-pbf-column-content-margin gdlr-core-js"
                        >
                          <div
                            class="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                          >
                            <div class="gdlr-core-pbf-element">
                              <div
                                class="gdlr-core-title-item gdlr-core-item-pdb clearfix gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                                style="padding-bottom: 0px"
                              >
                                <div class="gdlr-core-title-item-title-wrap">
                                  <h3
                                    class="gdlr-core-title-item-title gdlr-core-skin-title"
                                    style="
                                      font-size: 15px;
                                      font-weight: 500;
                                      letter-spacing: 0px;
                                      text-transform: none;
                                    "
                                  >
                                    코스 구성<span
                                      class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"
                                    ></span>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="gdlr-core-pbf-column gdlr-core-column-30">
                        <div
                          class="gdlr-core-pbf-column-content-margin gdlr-core-js"
                        >
                          <div
                            class="gdlr-core-pbf-column-content clearfix gdlr-core-js"
                          >
                            <div class="gdlr-core-pbf-element">
                              <div
                                class="gdlr-core-icon-list-item gdlr-core-item-pdlr gdlr-core-item-pdb clearfix"
                                style="padding-bottom: 10px"
                              >
                                <ul>
                                  <li
                                    class="gdlr-core-skin-divider"
                                    v-for="content in theme.contents"
                                    :key="content.contentId"
                                  >
                                    <span class="gdlr-core-icon-list-icon-wrap"
                                      ><i
                                        class="gdlr-core-icon-list-icon fa fa-check"
                                        style="color: #4692e7"
                                      ></i
                                    ></span>
                                    <div
                                      class="gdlr-core-icon-list-content-wrap"
                                    >
                                      <span
                                        class="gdlr-core-icon-list-content"
                                        >{{ content.title }}</span
                                      >
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="gdlr-core-pbf-element">
                        <div
                          class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align"
                          style="margin-bottom: 19px"
                        >
                          <div
                            class="gdlr-core-divider-line gdlr-core-skin-divider"
                          ></div>
                        </div>
                      </div>
                      <!-- <div class="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first">
                                            <div class="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div class="gdlr-core-pbf-element">
                                                        <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style="padding-bottom: 0px ;">
                                                            <div class="gdlr-core-title-item-title-wrap">
                                                                <h3 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 15px ;font-weight: 500 ;letter-spacing: 0px ;text-transform: none ;">Price Excludes<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-column gdlr-core-column-30">
                                            <div class="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div class="gdlr-core-pbf-element">
                                                        <div class="gdlr-core-icon-list-item gdlr-core-item-pdlr gdlr-core-item-pdb clearfix " style="padding-bottom: 10px ;">
                                                            <ul>
                                                                <li class=" gdlr-core-skin-divider"><span class="gdlr-core-icon-list-icon-wrap"><i class="gdlr-core-icon-list-icon fa fa-close" style="color: #7f7f7f ;" ></i></span>
                                                                    <div class="gdlr-core-icon-list-content-wrap"><span class="gdlr-core-icon-list-content">Guide Service Fee</span></div>
                                                                </li>
                                                                <li class=" gdlr-core-skin-divider"><span class="gdlr-core-icon-list-icon-wrap"><i class="gdlr-core-icon-list-icon fa fa-close" style="color: #7f7f7f ;" ></i></span>
                                                                    <div class="gdlr-core-icon-list-content-wrap"><span class="gdlr-core-icon-list-content">Driver Service Fee</span></div>
                                                                </li>
                                                                <li class=" gdlr-core-skin-divider"><span class="gdlr-core-icon-list-icon-wrap"><i class="gdlr-core-icon-list-icon fa fa-close" style="color: #7f7f7f ;" ></i></span>
                                                                    <div class="gdlr-core-icon-list-content-wrap"><span class="gdlr-core-icon-list-content">Any Private Expenses</span></div>
                                                                </li>
                                                                <li class=" gdlr-core-skin-divider"><span class="gdlr-core-icon-list-icon-wrap"><i class="gdlr-core-icon-list-icon fa fa-close" style="color: #7f7f7f ;" ></i></span>
                                                                    <div class="gdlr-core-icon-list-content-wrap"><span class="gdlr-core-icon-list-content">Room Service Fees</span></div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align" style="margin-bottom: 19px ;">
                                                <div class="gdlr-core-divider-line gdlr-core-skin-divider"></div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first">
                                            <div class="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div class="gdlr-core-pbf-element">
                                                        <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style="padding-bottom: 0px ;">
                                                            <div class="gdlr-core-title-item-title-wrap">
                                                                <h3 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 15px ;font-weight: 500 ;letter-spacing: 0px ;text-transform: none ;">Complementaries<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-column gdlr-core-column-30">
                                            <div class="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div class="gdlr-core-pbf-element">
                                                        <div class="gdlr-core-icon-list-item gdlr-core-item-pdlr gdlr-core-item-pdb clearfix " style="padding-bottom: 10px ;">
                                                            <ul>
                                                                <li class=" gdlr-core-skin-divider"><span class="gdlr-core-icon-list-icon-wrap"><i class="gdlr-core-icon-list-icon fa fa-check" style="color: #4692e7 ;" ></i></span>
                                                                    <div class="gdlr-core-icon-list-content-wrap"><span class="gdlr-core-icon-list-content">Umbrella</span></div>
                                                                </li>
                                                                <li class=" gdlr-core-skin-divider"><span class="gdlr-core-icon-list-icon-wrap"><i class="gdlr-core-icon-list-icon fa fa-check" style="color: #4692e7 ;" ></i></span>
                                                                    <div class="gdlr-core-icon-list-content-wrap"><span class="gdlr-core-icon-list-content">Sunscreen</span></div>
                                                                </li>
                                                                <li class=" gdlr-core-skin-divider"><span class="gdlr-core-icon-list-icon-wrap"><i class="gdlr-core-icon-list-icon fa fa-check" style="color: #4692e7 ;" ></i></span>
                                                                    <div class="gdlr-core-icon-list-content-wrap"><span class="gdlr-core-icon-list-content">T-Shirt</span></div>
                                                                </li>
                                                                <li class=" gdlr-core-skin-divider"><span class="gdlr-core-icon-list-icon-wrap"><i class="gdlr-core-icon-list-icon fa fa-check" style="color: #4692e7 ;" ></i></span>
                                                                    <div class="gdlr-core-icon-list-content-wrap"><span class="gdlr-core-icon-list-content">Entrance Fees</span></div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align" style="margin-bottom: 45px ;">
                                                <div class="gdlr-core-divider-line gdlr-core-skin-divider"></div>
                                            </div>
                                        </div> -->
                      <!-- <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr">
                                                <div class="gdlr-core-title-item-title-wrap">
                                                    <h6 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 16px ;font-weight: 600 ;letter-spacing: 0px ;text-transform: none ;">What to Expect<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h6></div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" style="padding-bottom: 10px ;">
                                                <div class="gdlr-core-text-box-item-content">
                                                    <p>Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-icon-list-item gdlr-core-item-pdlr gdlr-core-item-pdb clearfix ">
                                                <ul>
                                                    <li class=" gdlr-core-skin-divider"><span class="gdlr-core-icon-list-icon-wrap"><i class="gdlr-core-icon-list-icon fa fa-dot-circle-o" style="color: #4692e7 ;" ></i></span>
                                                        <div class="gdlr-core-icon-list-content-wrap"><span class="gdlr-core-icon-list-content">Ipsum Amet Mattis Pellentesque</span></div>
                                                    </li>
                                                    <li class=" gdlr-core-skin-divider"><span class="gdlr-core-icon-list-icon-wrap"><i class="gdlr-core-icon-list-icon fa fa-dot-circle-o" style="color: #4692e7 ;" ></i></span>
                                                        <div class="gdlr-core-icon-list-content-wrap"><span class="gdlr-core-icon-list-content">Ultricies Vehicula Mollis Vestibulum Fringilla</span></div>
                                                    </li>
                                                    <li class=" gdlr-core-skin-divider"><span class="gdlr-core-icon-list-icon-wrap"><i class="gdlr-core-icon-list-icon fa fa-dot-circle-o" style="color: #4692e7 ;" ></i></span>
                                                        <div class="gdlr-core-icon-list-content-wrap"><span class="gdlr-core-icon-list-content">Condimentum Sollicitudin Fusce Vestibulum Ultricies</span></div>
                                                    </li>
                                                    <li class=" gdlr-core-skin-divider"><span class="gdlr-core-icon-list-icon-wrap"><i class="gdlr-core-icon-list-icon fa fa-dot-circle-o" style="color: #4692e7 ;" ></i></span>
                                                        <div class="gdlr-core-icon-list-content-wrap"><span class="gdlr-core-icon-list-content">Sollicitudin Consectetur Quam Ligula Vehicula</span></div>
                                                    </li>
                                                    <li class=" gdlr-core-skin-divider"><span class="gdlr-core-icon-list-icon-wrap"><i class="gdlr-core-icon-list-icon fa fa-dot-circle-o" style="color: #4692e7 ;" ></i></span>
                                                        <div class="gdlr-core-icon-list-content-wrap"><span class="gdlr-core-icon-list-content">Cursus Pharetra Purus Porta Parturient</span></div>
                                                    </li>
                                                    <li class=" gdlr-core-skin-divider"><span class="gdlr-core-icon-list-icon-wrap"><i class="gdlr-core-icon-list-icon fa fa-dot-circle-o" style="color: #4692e7 ;" ></i></span>
                                                        <div class="gdlr-core-icon-list-content-wrap"><span class="gdlr-core-icon-list-content">Risus Malesuada Tellus Porta Commodo</span></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align" style="margin-bottom: 15px ;">
                                                <div class="gdlr-core-divider-line gdlr-core-skin-divider"></div>
                                            </div>
                                        </div> -->
                    </div>
                  </div>
                </div>
                <div
                  class="gdlr-core-pbf-wrapper"
                  style="padding: 20px 0px 30px 0px"
                  data-skin="Blue Icon"
                  id="itinerary"
                >
                  <div class="gdlr-core-pbf-wrapper-content gdlr-core-js">
                    <div
                      class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container"
                    >
                      <div class="gdlr-core-pbf-element">
                        <div
                          class="gdlr-core-title-item gdlr-core-item-pdb clearfix gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr"
                          style="padding-bottom: 35px"
                        >
                          <div class="gdlr-core-title-item-title-wrap">
                            <h6
                              class="gdlr-core-title-item-title gdlr-core-skin-title"
                              style="
                                font-size: 24px;
                                font-weight: 600;
                                letter-spacing: 0px;
                                text-transform: none;
                              "
                            >
                              <span
                                class="gdlr-core-title-item-left-icon"
                                style="font-size: 18px"
                                ><i class="fa fa-bus"></i></span
                              >코스<span
                                class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"
                              ></span>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div class="gdlr-core-pbf-element">
                        <div
                          class="gdlr-core-toggle-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-toggle-box-style-background-title gdlr-core-left-align"
                          style="padding-bottom: 25px"
                        >
                          <div
                            class="gdlr-core-toggle-box-item-tab clearfix gdlr-core-active"
                            v-for="(content, course) in theme.contents"
                            :key="content.contentId"
                          >
                            <div
                              class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon"
                            ></div>
                            <div
                              class="gdlr-core-toggle-box-item-content-wrapper"
                            >
                              <h4
                                class="gdlr-core-toggle-box-item-title gdlr-core-js gdlr-core-skin-e-background gdlr-core-skin-e-content"
                              >
                                <span class="gdlr-core-head"
                                  >코스 {{ course + 1 }}</span
                                >
                                {{ content.title }}
                              </h4>
                              <div class="gdlr-core-toggle-box-item-content">
                                <p>{{ content.overview }}</p>
                              </div>
                            </div>
                          </div>
                          <!-- <div class="gdlr-core-toggle-box-item-tab clearfix  gdlr-core-active">
                                                    <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                    <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                        <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content"><span class="gdlr-core-head" >Day 2</span>Zürich–Biel/Bienne–Neuchâtel–Geneva</h4>
                                                        <div class="gdlr-core-toggle-box-item-content">
                                                            <p>Enjoy an orientation walk of Zurich’s OLD TOWN, Switzerland’s center of banking and commerce. Then, leave Zurich and start your Swiss adventure. You’ll quickly discover that Switzerland isn’t just home to the Alps, but also to some of the most beautiful lakes. First, stop at the foot of the Jura Mountains in the picturesque town of Biel, known as Bienne by French-speaking Swiss, famous for watch-making, and explore the historical center. Next, enjoy a scenic drive to lakeside Neuchâtel, dominated by the medieval cathedral and castle. Time to stroll along the lake promenade before continuing to stunning Geneva, the second-largest city in Switzerland, with its fantastic lakeside location and breathtaking panoramas of the Alps.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="gdlr-core-toggle-box-item-tab clearfix  gdlr-core-active">
                                                    <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                    <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                        <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content"><span class="gdlr-core-head" >Day 3</span>Enchanting Engelberg</h4>
                                                        <div class="gdlr-core-toggle-box-item-content">
                                                            <p>Our morning drive takes us from Swiss lakes to Swiss Army. At the once-secret Swiss army bunker at Fortress Fürigen, we&#8217;ll see part of the massive defense system designed to keep Switzerland strong and neutral. Afterward, a short drive into the countryside brings us to the charming Alpine village of Engelberg, our picturesque home for the next two days. We&#8217;ll settle into our lodge then head out for an orientation walk. Our stroll through the village will end at the Engelberg Abbey, a Benedictine monastery with its own cheese-making operation. You&#8217;ll have free time to wander back before dinner together. Sleep in Engelberg (2 nights). Bus: 1 hr. Walking: light.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="gdlr-core-toggle-box-item-tab clearfix  gdlr-core-active">
                                                    <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                    <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                        <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content"><span class="gdlr-core-head" >Day 4</span>Interlaken Area. Excursion to The Jungfrau Massif</h4>
                                                        <div class="gdlr-core-toggle-box-item-content">
                                                            <p>An unforgettable trip to the high Alpine wonderland of ice and snow is the true highlight of a visit to Switzerland. Globus Local Favorite At an amazing 11,332 feet, the JUNGFRAUJOCH is Europe’s highest railway station. Jungfrau’s 13,642-foot summit was first ascended in 1811 and in 1912 the rack railway was opened. There are lots of things to do here: enjoy the ALPINE SENSATION, THE PANORAMA 360° EXPERIENCE, and the ICE PALACE. Also receive your JUNGFRAU PASSPORT as a souvenir to take home with you. The round trip to the “Top of Europe” by MOUNTAIN TRAIN will take most of the day.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="gdlr-core-toggle-box-item-tab clearfix  gdlr-core-active">
                                                    <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                    <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                        <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content"><span class="gdlr-core-head" >Day 5</span>Lake Geneva and Château de Chillon</h4>
                                                        <div class="gdlr-core-toggle-box-item-content">
                                                            <p>It&#8217;s market day in Lausanne! Enjoy browsing and packing a picnic lunch for our 11 a.m. boat cruise on Lake Geneva. A few miles down-shore we&#8217;ll dock at Château de Chillon, where we&#8217;ll have a guided tour of this delightfully medieval castle on the water. On our way back we&#8217;ll take time to peek into the vineyards surrounding Lutry before returning to Lausanne. Boat: 2 hrs. Bus: 1 hr. Walking: moderate.</p>
                                                        </div>
                                                    </div>
                                                </div> -->
                        </div>
                      </div>
                      <div class="gdlr-core-pbf-element">
                        <div
                          class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align"
                          style="margin-bottom: 25px"
                        >
                          <div
                            class="gdlr-core-divider-line gdlr-core-skin-divider"
                            style="border-bottom-width: 2px"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="gdlr-core-pbf-wrapper"
                  style="padding: 0px 0px 30px 0px"
                  data-skin="Blue Icon"
                  id="map"
                >
                  <div class="gdlr-core-pbf-wrapper-content gdlr-core-js">
                    <div
                      class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container"
                    >
                      <div class="gdlr-core-pbf-element">
                        <div
                          class="gdlr-core-title-item gdlr-core-item-pdb clearfix gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr"
                          style="padding-bottom: 35px"
                        >
                          <div class="gdlr-core-title-item-title-wrap">
                            <h6
                              class="gdlr-core-title-item-title gdlr-core-skin-title"
                              style="
                                font-size: 24px;
                                font-weight: 600;
                                letter-spacing: 0px;
                                text-transform: none;
                              "
                            >
                              <span
                                class="gdlr-core-title-item-left-icon"
                                style="font-size: 18px"
                                ><i class="fa fa-map-o"></i></span
                              >위치<span
                                class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"
                              ></span>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <!-- <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" style="padding-bottom: 55px ;">
                                                <div class="gdlr-core-text-box-item-content">
                                                    <div class="">
                                                        <iframe src="https://www.google.com/maps/d/embed?mid=1mGgtylMQHGAKR6HR8r8YLe5W4LU" width="100%" height="480"></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> -->
                      <the-map :location="location"></the-map>
                      <div class="gdlr-core-pbf-element">
                        <div
                          class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-mgb gdlr-core-divider-item-normal gdlr-core-center-align"
                          style="margin-bottom: 25px"
                        >
                          <div
                            class="gdlr-core-divider-line gdlr-core-skin-divider"
                            style="border-bottom-width: 2px"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="gdlr-core-pbf-wrapper"
                  style="padding: 0px 0px 30px 0px"
                  data-skin="Blue Icon"
                  id="photos"
                >
                  <div class="gdlr-core-pbf-wrapper-content gdlr-core-js">
                    <div
                      class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container"
                    >
                      <div class="gdlr-core-pbf-element">
                        <div
                          class="gdlr-core-title-item gdlr-core-item-pdb clearfix gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr"
                          style="padding-bottom: 35px"
                        >
                          <div class="gdlr-core-title-item-title-wrap">
                            <h6
                              class="gdlr-core-title-item-title gdlr-core-skin-title"
                              style="
                                font-size: 24px;
                                font-weight: 600;
                                letter-spacing: 0px;
                                text-transform: none;
                              "
                            >
                              <span
                                class="gdlr-core-title-item-left-icon"
                                style="font-size: 18px"
                                ><i class="icon_images"></i></span
                              >사진<span
                                class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"
                              ></span>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div class="gdlr-core-pbf-element">
                        <div
                          class="gdlr-core-gallery-item gdlr-core-item-pdb clearfix gdlr-core-gallery-item-style-slider gdlr-core-item-pdlr"
                        >
                          <div
                            class="gdlr-core-flexslider flexslider gdlr-core-js-2"
                            data-type="slider"
                            data-effect="default"
                            data-nav="bullet"
                          >
                            <ul class="slides">
                              <li>
                                <div
                                  class="gdlr-core-gallery-list gdlr-core-media-image"
                                >
                                  <a
                                    class="gdlr-core-ilightbox gdlr-core-js"
                                    data-ilightbox-group="gdlr-core-img-group-1"
                                    ><img
                                      :src="theme.img1"
                                      alt=""
                                      width="1500"
                                      height="1000" /><span
                                      class="gdlr-core-image-overlay"
                                      ><i
                                        class="gdlr-core-image-overlay-icon gdlr-core-size-22 fa fa-search"
                                      ></i></span
                                  ></a>
                                </div>
                              </li>
                              <!-- <li>
                                                            <div class="gdlr-core-gallery-list gdlr-core-media-image">
                                                                <a class="gdlr-core-ilightbox gdlr-core-js " href="upload/photo-1451337516015-6b6e9a44a8a3.jpg" data-ilightbox-group="gdlr-core-img-group-1"><img src="upload/photo-1451337516015-6b6e9a44a8a3-1500x1000.jpg" alt="" width="1500" height="1000" /><span class="gdlr-core-image-overlay "><i class="gdlr-core-image-overlay-icon gdlr-core-size-22 fa fa-search"  ></i></span></a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="gdlr-core-gallery-list gdlr-core-media-image">
                                                                <a class="gdlr-core-ilightbox gdlr-core-js " href="upload/italian-landscape-mountains-nature.jpg" data-ilightbox-group="gdlr-core-img-group-1"><img src="upload/italian-landscape-mountains-nature-1500x1000.jpg" alt="" width="1500" height="1000" /><span class="gdlr-core-image-overlay "><i class="gdlr-core-image-overlay-icon gdlr-core-size-22 fa fa-search"  ></i></span></a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="gdlr-core-gallery-list gdlr-core-media-image">
                                                                <a class="gdlr-core-ilightbox gdlr-core-js " href="upload/shutterstock_195507533.jpg" data-caption="Map" data-ilightbox-group="gdlr-core-img-group-1"><img src="upload/shutterstock_195507533-1500x1000.jpg" alt="" width="1500" height="1000" /><span class="gdlr-core-image-overlay "><i class="gdlr-core-image-overlay-icon gdlr-core-size-22 fa fa-search"  ></i></span></a>
                                                            </div>
                                                        </li> -->
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="tourmaster-single-related-tour tourmaster-tour-item tourmaster-style-grid">
                            <div class="tourmaster-single-related-tour-container tourmaster-container">
                                <h3 class="tourmaster-single-related-tour-title tourmaster-item-pdlr">Related Tours</h3>
                                <div class="tourmaster-tour-item-holder clearfix ">
                                    <div class="gdlr-core-item-list  tourmaster-column-30 tourmaster-item-pdlr tourmaster-column-first">
                                        <div class="tourmaster-tour-grid  tourmaster-price-right-title">
                                            <div class="tourmaster-tour-thumbnail tourmaster-media-image">
                                                <a href="../switzerland-7-days-in-zurich-zermatt/index.html"><img src="upload/shutterstock_178807262-1024x683.jpg" alt="" width="1024" height="683" /></a>
                                                <div class="tourmaster-thumbnail-ribbon gdlr-core-outer-frame-element" style="color: #ffffff;background-color: #e85e34;">
                                                    <div class="tourmaster-thumbnail-ribbon-cornor" style="border-right-color: rgba(232, 94, 52, 0.5);"></div>20% Off</div>
                                            </div>
                                            <div class="tourmaster-tour-content-wrap gdlr-core-skin-e-background">
                                                <h3 class="tourmaster-tour-title gdlr-core-skin-title"><a href="../switzerland-7-days-in-zurich-zermatt/index.html" >Switzerland &#8211; 7 Days in Zurich, Zermatt</a></h3>
                                                <div class="tourmaster-tour-price-wrap tourmaster-discount"><span class="tourmaster-tour-price"><span class="tourmaster-head">From</span><span class="tourmaster-tail">$4,300</span></span><span class="tourmaster-tour-discount-price">$3,500</span></div>
                                                <div class="tourmaster-tour-rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><span class="tourmaster-tour-rating-text">(2 Reviews)</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gdlr-core-item-list  tourmaster-column-30 tourmaster-item-pdlr">
                                        <div class="tourmaster-tour-grid  tourmaster-price-right-title">
                                            <div class="tourmaster-tour-thumbnail tourmaster-media-image">
                                                <a href="../italy-6-days-in-rome-venice-milan/index.html"><img src="upload/shutterstock_245507692-1024x683.jpg" alt="" width="1024" height="683" /></a>
                                                <div class="tourmaster-thumbnail-ribbon gdlr-core-outer-frame-element" style="color: #ffffff;background-color: #e85e34;">
                                                    <div class="tourmaster-thumbnail-ribbon-cornor" style="border-right-color: rgba(232, 94, 52, 0.5);"></div>25% Off</div>
                                            </div>
                                            <div class="tourmaster-tour-content-wrap gdlr-core-skin-e-background">
                                                <h3 class="tourmaster-tour-title gdlr-core-skin-title"><a href="../italy-6-days-in-rome-venice-milan/index.html" >Enquiry Form Only &#8211; Italy &#8211; 6 Days</a></h3>
                                                <div class="tourmaster-tour-price-wrap tourmaster-discount"><span class="tourmaster-tour-price"><span class="tourmaster-head">From</span><span class="tourmaster-tail">$3,700</span></span><span class="tourmaster-tour-discount-price">$2,000</span></div>
                                                <div class="tourmaster-tour-rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><span class="tourmaster-tour-rating-text">(1 Review)</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
              <div
                class="tourmaster-single-review-container tourmaster-container"
              >
                <div class="tourmaster-single-review-item tourmaster-item-pdlr">
                  <div
                    class="tourmaster-single-review"
                    id="tourmaster-single-review"
                  >
                    <div class="tourmaster-single-review-head clearfix">
                      <div class="tourmaster-single-review-head-info clearfix">
                        <div class="tourmaster-tour-rating">
                          <span class="tourmaster-tour-rating-text"
                            >1 Review</span
                          ><i class="fa fa-star"></i><i class="fa fa-star"></i
                          ><i class="fa fa-star"></i><i class="fa fa-star"></i
                          ><i class="fa fa-star-o"></i>
                        </div>
                        <div
                          class="tourmaster-single-review-filter"
                          id="tourmaster-single-review-filter"
                        >
                          <div class="tourmaster-single-review-sort-by">
                            <span class="tourmaster-head">Sort By:</span
                            ><span
                              class="tourmaster-sort-by-field"
                              data-sort-by="rating"
                              >Rating</span
                            ><span
                              class="tourmaster-sort-by-field tourmaster-active"
                              data-sort-by="date"
                              >Date</span
                            >
                          </div>
                          <div
                            class="tourmaster-single-review-filter-by tourmaster-form-field tourmaster-with-border"
                          >
                            <div class="tourmaster-combobox-wrap">
                              <select id="tourmaster-filter-by">
                                <option value="">Filter By</option>
                                <option value="solo">Solo</option>
                                <option value="couple">Couple</option>
                                <option value="family">Family</option>
                                <option value="group">Group</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tourmaster-single-review-content"
                      id="tourmaster-single-review-content"
                      data-tour-id="4643"
                      data-ajax-url="../../wp-admin/admin-ajax.html"
                    >
                      <div
                        class="tourmaster-single-review-content-item clearfix"
                      >
                        <div class="tourmaster-single-review-user clearfix">
                          <div
                            class="tourmaster-single-review-avatar tourmaster-media-image"
                          >
                            <img
                              alt=""
                              src="https://secure.gravatar.com/avatar/3fd67cef7cae9956b8831c16a70dba11?s=85&amp;d=mm&amp;r=g"
                              srcset="
                                https://secure.gravatar.com/avatar/3fd67cef7cae9956b8831c16a70dba11?s=170&#038;d=mm&#038;r=g 2x
                              "
                              class="avatar avatar-85 photo"
                              height="85"
                              width="85"
                            />
                          </div>
                          <h4 class="tourmaster-single-review-user-name">
                            Jenifer Janeth
                          </h4>
                          <div class="tourmaster-single-review-user-type">
                            Couple Traveller
                          </div>
                        </div>
                        <div class="tourmaster-single-review-detail">
                          <div
                            class="tourmaster-single-review-detail-description"
                          >
                            <p>
                              Vivamus sagittis lacus vel augue laoreet rutrum
                              faucibus dolor auctor. Maecenas faucibus mollis
                              interdum.
                            </p>
                          </div>
                          <div class="tourmaster-single-review-detail-rating">
                            <i class="fa fa-star"></i><i class="fa fa-star"></i
                            ><i class="fa fa-star"></i><i class="fa fa-star"></i
                            ><i class="fa fa-star-o"></i>
                          </div>
                          <div class="tourmaster-single-review-detail-date">
                            January 24, 2017
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tourmaster-urgency-message"
            id="tourmaster-urgency-message"
            data-expire="86400"
          >
            <i class="tourmaster-urgency-message-icon fa fa-users"></i>
            <div class="tourmaster-urgency-message-text">
              5 travellers are considering this tour right now!
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
    </div>
    <a
      href="#traveltour-top-anchor"
      class="traveltour-footer-back-to-top-button"
      id="traveltour-footer-back-to-top-button"
      ><i class="fa fa-angle-up"></i
    ></a>
  </div>
</template>

<script>
import { getTheme } from "@/api/theme";
import TheMap from "@/components/map/TheMap";
export default {
  name: "ThemeDetail",
  data() {
    return {
      theme: {},
      location: {},
      photos: [],
    };
  },
  components: {
    TheMap,
  },
  async created() {
    const { data: theme } = await getTheme(this.$route.params.themeId);
    this.theme = theme;
    this.location = { lat: this.theme.lat, lng: this.theme.lng };
    this.photos = [];
    this.theme.contents.forEach((content) => {
      this.photos.push(content.img1, content.img2); // null, 빈값 제거
    });
    console.log("themeDetail");
    console.log(this.location);
  },

  //   created() {
  //     getTheme(
  //       this.$route.params.themeId,
  //       ({ data }) => {
  //         this.theme = data;
  //         // this.location.lat = data.lat;
  //         // this.location.lng = data.lng;console.log(this.location);
  //         this.location = { lat: data.lat, lng: data.lng };
  //         this.photos = [data.img1, data.img2];
  //         this.theme.contents.forEach((content) => {
  //           this.photos.push(content.img1, content.img2); // null, 빈값 제거
  //         });
  //       },
  //       (error) => {
  //         console.log(error); // errorpage
  //       }
  //     );
  //   },
};
</script>

<style></style>
