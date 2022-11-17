<template>
  <div
    class="gdlr-core-pbf-wrapper"
    style="padding: 165px 0px 165px 0px"
    data-skin="orange"
  >
    <div class="gdlr-core-pbf-background-wrap">
      <div
        class="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js"
        style="
          background-image: url(upload/bgtravel.jpg);
          background-size: cover;
          background-position: top center;
        "
        data-parallax-speed="0.2"
      ></div>
    </div>
    <div class="gdlr-core-pbf-wrapper-content gdlr-core-js">
      <div class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
        <div class="gdlr-core-pbf-element">
          <div
            class="gdlr-core-title-item gdlr-core-item-pdb clearfix gdlr-core-center-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr"
            style="padding-bottom: 50px"
          >
            <div class="gdlr-core-title-item-title-wrap">
              <h3
                class="gdlr-core-title-item-title gdlr-core-skin-title"
                style="font-size: 52px; text-transform: none; color: #ffffff"
              >
                Find Next Place To Visit<span
                  class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"
                ></span>
              </h3>
            </div>
            <span
              class="gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption"
              style="
                font-size: 21px;
                font-style: normal;
                color: #ffffff;
                margin-top: 5px;
              "
              >Discover amzaing places at exclusive deals</span
            >
          </div>
        </div>
        <div
          class="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"
        >
          <div class="gdlr-core-pbf-column-content-margin gdlr-core-js">
            <div
              class="gdlr-core-pbf-column-content clearfix gdlr-core-js"
              style="max-width: 900px"
            >
              <div class="gdlr-core-pbf-element">
                <div
                  class="tourmaster-tour-search-item clearfix tourmaster-style-column tourmaster-column-count-4 tourmaster-item-pdlr tourmaster-input-style-no-border"
                  style="padding-bottom: 0px"
                >
                  <div class="tourmaster-tour-search-wrap">
                    <form
                      class="tourmaster-form-field tourmaster-medium"
                      action="#"
                      method="GET"
                    >
                      <div
                        class="tourmaster-tour-search-field tourmaster-tour-search-field-keywords"
                        style="padding-right: 2px; margin-bottom: 2px"
                      >
                        <div class="tourmaster-tour-search-field-inner">
                          <input
                            name="tour-search"
                            type="text"
                            placeholder="Keywords"
                            value=""
                          />
                        </div>
                      </div>
                      <div
                        class="tourmaster-tour-search-field tourmaster-tour-search-field-tax"
                        style="padding-right: 2px; margin-bottom: 2px"
                      >
                        <div class="tourmaster-combobox-wrap">
                          <select name="tax-tour-destination">
                            <option value="">Destination</option>
                            <option value="africa-adventure">
                              Africa Adventure
                            </option>
                            <option value="africa-wild">Africa Wild</option>
                            <option value="america">America</option>
                            <option value="asia">Asia</option>
                            <option value="scandinavia">Scandinavia</option>
                            <option value="western-europe">
                              Western Europe
                            </option>
                          </select>
                        </div>
                      </div>
                      <div
                        class="tourmaster-tour-search-field tourmaster-tour-search-field-duration"
                        style="padding-right: 2px; margin-bottom: 2px"
                      >
                        <div class="tourmaster-combobox-wrap">
                          <select name="duration">
                            <option value="">Duration</option>
                            <option value="1">1 Day Tour</option>
                            <option value="2">2-4 Days Tour</option>
                            <option value="5">5-7 Days Tour</option>
                            <option value="7">7+ Days Tour</option>
                          </select>
                        </div>
                      </div>
                      <input
                        class="tourmaster-tour-search-submit"
                        type="submit"
                        value="Search"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSearch",
};
</script>

<style></style>
