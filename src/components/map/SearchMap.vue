<template>
  <!-- <div style="height: 100px" id="map-div"></div> -->
  <div class="gdlr-core-pbf-element">
    <div
      class="tourmaster-tour-search-item clearfix tourmaster-style-column tourmaster-column-count-6 tourmaster-item-pdlr"
    >
      <div class="tourmaster-tour-search-wrap">
        <form class="tourmaster-form-field tourmaster-with-border">
          <!-- <div class="tourmaster-tour-search-field tourmaster-tour-search-field-keywords">
                                                    <label>Keyword</label>
                                                    <div class="tourmaster-tour-search-field-inner">
                                                        <input v-model="keyword" type="text" value="" />
                                                    </div>
                                                </div> -->
          <div
            class="tourmaster-tour-search-field tourmaster-tour-search-field-tax"
          >
            <label>State</label>
            <div class="tourmaster-combobox-wrap">
              <select name="state" @change="selectState" v-model="state">
                <option
                  :value="state.stateId"
                  :key="state.stateId"
                  v-for="state in stateList"
                >
                  {{ state.stateName }}
                </option>
              </select>
            </div>
          </div>
          <div
            class="tourmaster-tour-search-field tourmaster-tour-search-field-tax"
          >
            <label>City</label>
            <div class="tourmaster-combobox-wrap">
              <select name="city" v-model="city">
                <option
                  :value="city.cityId"
                  :key="city.cityId"
                  v-for="city in cityList"
                >
                  {{ city.cityName }}
                </option>
              </select>
            </div>
          </div>
          <div
            class="tourmaster-tour-search-field tourmaster-tour-search-field-tax"
          >
            <label>ContentType</label>
            <div class="tourmaster-combobox-wrap">
              <select name="city" v-model="contentType">
                <option
                  :value="contentType.contentTypeId"
                  :key="contentType.contentTypeId"
                  v-for="contentType in contentTypeList"
                >
                  {{ contentType.contentTypeName }}
                </option>
              </select>
            </div>
          </div>
          <input
            class="tourmaster-tour-search-submit"
            type="button"
            value="Search"
            @click="search"
          />
        </form>
      </div>
    </div>
    <!-- </div> -->
    <!-- <div class="container"> -->
    <div class="map_wrap">
      <div
        id="map"
        style="width: 100%; height: 100%; position: relative; overflow: hidden"
      ></div>
      <div id="menu_wrap" class="bg_white">
        <!-- <hr /> -->
        <ul id="placesList">
          <!---->
          <search-map-item
            v-for="content in contentList"
            :key="content.contentId"
            :content="content"
          ></search-map-item>
        </ul>
        <!--?????? ?????? ?????? ???????????? ??????-->
        <div id="pagination"></div>
      </div>
    </div>
    <div
      class="container alert alert-warning text-center"
      role="alert"
      id="null-alert"
    >
      ???????????????. ?????? ???????????? ?????? ?????? ???????????????.
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { mapState, mapActions } from "vuex";
import { getStateList, getCityList } from "@/api/state";
import { getContentTypeList, getContentListByCriteria } from "@/api/content";
import SearchMapItem from "@/components/map/SearchMapItem.vue";
const contentStore = "contentStore";

export default {
  components: { SearchMapItem },
  name: "SearchMap",
  data() {
    return {
      ...mapState(contentStore, ["content"]),
      state: 1,
      city: 1,
      contentType: 12,
      stateList: [],
      cityList: [],
      contentTypeList: [],
      contentSearchCriteria: {},
      contentList: [],
      map: null,

      // kakaoMap : null,
      infowindow: {},
      markers: [],
    };
  },
  methods: {
    ...mapActions(contentStore, ["setContent"]),
    selectState() {
      getCityList(
        this.state,
        ({ data }) => {
          this.cityList = data;
        },
        (error) => {
          console.log(error); // errorpage
        }
      );
    },
    search() {
      this.contentSearchCriteria = {
        stateId: this.state,
        cityId: this.city,
        contentTypeId: this.contentType,
      };
    //   console.log(this.contentSearchCriteria);
      getContentListByCriteria(
        this.contentSearchCriteria,
        // { stateId: this.state, cityId: this.city, contentTypeId: this.contentType },
        ({ data }) => {
          this.contentList = data;
        //   console.log(this.contentList); // ok
          this.initMap(); // ????????? ?????? ??????
        },
        (error) => {
          console.log(error); // errorpage
        }
      );
    },
    nullAlarm() {
      let nullAlert = document.getElementById("null-alert");
      let sleep = (delay) =>
        new Promise((resolve) => setTimeout(resolve, delay));
      nullAlert.style.display = "block";
      sleep(3000).then(() => (nullAlert.style.display = "none"));
    },

    initMap() {
      // let markers = []; // ????????? ?????? ??????

      let mapContainer = document.getElementById("map"), // ????????? ????????? div
        mapOption = {
          center: new kakao.maps.LatLng(37.5012428, 127.0395859), // ?????? ?????? ??????
          level: 4, // ????????? ?????? ??????
        };

      //  this.kakaoMap = new kakao.maps.Map(mapContainer, mapOption); // ????????? ???????????????
      this.map = new kakao.maps.Map(mapContainer, mapOption); // ????????? ???????????????

      // ?????? ?????? ???????????? ????????? ???????????? ??? ???????????? ????????? ?????????????????? ???????????????
      this.infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
      // ?????? ????????? ????????? ???????????????
      console.log("this.infowindow");
      console.log(this.infowindow); // ok
      // ????????????????????? ????????? data??? ????????? ???????????? ????????????
      if (this.contentList == undefined || this.contentList.length == 0) {
        this.nullAlarm();
      } else this.displayPlaces(this.contentList);

      // // ????????? ????????? ???????????????
      // console.log("after marker place " + this.location)
      // let markerPosition = new kakao.maps.LatLng(
      //   this.location.lat, //
      //   this.location.lng
      // );

      // // ????????? ???????????????
      // let marker = new kakao.maps.Marker({
      //   position: markerPosition,
      // });

      // // ????????? ?????? ?????? ??????????????? ???????????????
      // marker.setMap(this.map);
    },
    // ?????? ?????? ????????? ????????? ???????????? ???????????????
    displayPlaces(places) {
      // data
      // console.log("displayPlaces function call");
      // console.log(places); // ok
      var // listEl = document.getElementById("placesList"),
        menuEl = document.getElementById("menu_wrap"),
        // fragment = document.createDocumentFragment(),
        bounds = new kakao.maps.LatLngBounds();

      // ?????? ?????? ????????? ????????? ???????????? ???????????????
      // removeAllChildNods(listEl);

      // ???????????? ????????? ?????? Element??? ???????????? ???????????????
      //    removeAllChildNods(el) {

      // while (listEl.hasChildNodes()) {
      //   listEl.removeChild(listEl.lastChild);
      // }
      //   }

      // ????????? ???????????? ?????? ????????? ???????????????
      this.removeMarker();

      // ????????????????????? ????????? data??? ????????? ???????????? ????????????
      if (places == undefined || places.length == 0) {
        this.nullAlarm();
      } else {
        for (var i = 0; i < places.length; i++) {
          // ????????? ???????????? ????????? ???????????????
          var placePosition = new kakao.maps.LatLng(
            places[i].mapY,
            places[i].mapX
          );
          // marker = this.addMarker(placePosition, places[i].contentTypeId),
          // itemEl = this.getListItem(places[i]); // ?????? ?????? ?????? Element??? ???????????????
          // --> ???????????? component??? ?????? ... ?????? ?????????????????? set-map-item ??????

          // console.log("before if " + places[i].title); // ok
          // ????????? ?????? ????????? ???????????? ?????? ????????? ?????????????????????
          // LatLngBounds ????????? ????????? ???????????????
          if (placePosition.La == 0 && placePosition.Ma == 0) continue;
          bounds.extend(placePosition);
          // ????????? ???????????? ????????? mouseover ?????????
          // ?????? ????????? ?????????????????? ???????????? ???????????????
          // mouseout ?????? ?????? ?????????????????? ????????????
          // (function (marker, title) {
          //   // error

          //   // console.log("after if" + places[i].title); // ok

          //   kakao.maps.event.addListener(marker, "mouseover", function () {
          //     console.log("kakao map event mouseover");
          //     console.log(title); // ok
          //     console.log("TTTTTTTTTTTTTTTTTTTTTTTTHIS");
          //     console.log(this);
          //     this.infowindow = new kakao.maps.InfoWindow({ zIndex: 1 }); // add
          //     this.infowindow.open(this.map, marker);
          //     // this.displayInfowindow(marker, title); // err
          //   });
          //   // kakao.maps.event.addListener(marker, "mouseover", function () {
          //   //   console.log("kakao map event mouseover");
          //   //   console.log(title); // ok
          //   //   this.displayInfowindow(marker, title); // err
          //   // });

          //   // kakao.maps.event.addListener(marker, "mouseout", function () {
          //   //   console.log("kakao map event mouseout");
          //   //   console.log(this.infowindow); // undefined
          //   //   this.infowindow.close(); // err
          //   // });
          //   kakao.maps.event.addListener(marker, "mouseout", () => {
          //     console.log("kakao map event mouseout");
          //     console.log(this.infowindow); // undefined
          //     this.infowindow.close(this.map, marker); // err
          //   });

          //   itemEl.onmouseover = function () {
          //     this.displayInfowindow(marker, title); //err
          //   };

          //   itemEl.onmouseout = function () {
          //     this.infowindow.close(); // err
          //   };
          // })(marker, places[i].title);

          // fragment.appendChild(itemEl);
        }

        // ???????????? ???????????? ???????????? ?????? Element??? ???????????????
        // listEl.appendChild(fragment);
        menuEl.scrollTop = 0;

        // ????????? ?????? ????????? ???????????? ?????? ????????? ??????????????????
        // map.setBounds(bounds);
        // this.kakaoMap.setBounds(bounds);
        this.map.setBounds(bounds);
      }
    },
    // ???????????? ????????? Element??? ???????????? ???????????????
    getListItem(places) {
      var el = document.createElement("li");

      let markerSrc = require("@/assets/images/marker_" +
        places.contentTypeId +
        ".png");
      // let markerImg = `marker_${places.contentTypeId}.png`;
      // let markerSize = new kakao.maps.Size(24, 24);
      // let markerImg = new kakako.maps.MarkerImage(markerSrc, markerSize);

      var itemStr =
        `<span class="markerbg" onclick="console.log('click content list item _ onclick')"><img src="` +
        markerSrc +
        `" style="width:40px;height:40px"></img></span><div class="info"><h5>${places.title}</h5><span>
        ${places.addr}</span>`;
      if (places.tel) {
        itemStr += '  <span class="tel">' + places.tel + `</span></div>`;
      }
      // el.setAttribute("onclick", "console.log('click setATtribtute')");
      // el.setAttribute("onclick", "clickContentItem()");
      // el.setAttribute("id", "contentListItem");

      el.innerHTML = itemStr;
      el.className = "item";

      return el;
    },

    // ????????? ???????????? ?????? ?????? ????????? ???????????? ???????????????
    addMarker(position, contentTypeId) {
      // https://www.flaticon.com/kr/authors/flat_circular/flat
      // var imageSrc =
      //   "http://localhost:8080/assets/images/marker_" + contentTypeId + ".png";
      let imageSrc = require("@/assets/images/marker_" +
        contentTypeId +
        ".png");

      var marker = new kakao.maps.Marker({
        position: position, // ????????? ??????
        image: new kakao.maps.MarkerImage(
          imageSrc,
          new kakao.maps.Size(24, 24)
        ),
      });

      // marker.setMap(this.kakaoMap); // ?????? ?????? ????????? ???????????????
      marker.setMap(this.map); // ?????? ?????? ????????? ???????????????
      this.markers.push(marker); // ????????? ????????? ????????? ???????????????

      return marker;
    },
    // ?????? ?????? ???????????? ?????? ????????? ?????? ???????????????
    removeMarker() {
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null);
      }
      this.markers = [];
    },
    // ???????????? ?????? ?????? ????????? ???????????? ??? ???????????? ???????????????
    // ?????????????????? ???????????? ???????????????
    // displayInfowindow(marker, title) {
    //   console.log("enter displyInfowindow");
    //   // ????????????
    //   var content =
    //     '<div style="width: fit-content;padding:5px;">' + title + "</div>"; //z-index:1;
    //   this.infowindow.setContent(content);
    //   // this.infowindow.open(this.kakaoMap, marker);
    //   this.infowindow.open(this.map, marker);
    // },
  },
  mounted() {
    if (!window.kakao || !window.kakao.maps) {
      let script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAO_MAP_KEY}&libraries=services`;
      /* global kakao */
      script.addEventListener("load", () => {
        kakao.maps.load(this.initMap);
      });
      document.head.appendChild(script);
    } else {
      this.initMap();
    }
  },
  created() {
    this.setContent(this.content); // ? 
    getStateList(
      ({ data }) => {
        this.stateList = data;
      },
      (error) => {
        console.log(error); // errorpage
      }
    ),
      getCityList(
        1, // seoul
        ({ data }) => {
          this.cityList = data;
        },
        (error) => {
          console.log(error); // errorpage
        }
      ),
      getContentTypeList(
        ({ data }) => {
          this.contentTypeList = data;
        },
        (error) => {
          console.log(error); // errorpage
        }
      ),
      getContentListByCriteria(
        // this.contentSearchCriteria,
        { stateId: this.state, cityId: this.city, contentTypeId: 12 },
        ({ data }) => {
          this.contentList = data;
          console.log(this.contentList); // ok
          this.initMap(); // ????????? ?????? ??????
        },
        (error) => {
          console.log(error); // errorpage
        }
      );
  },
};
</script>

<style>
.map_wrap {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 350px;
}

.radius_border {
  border: 1px solid #919191;
  border-radius: 5px;
}

.custom_typecontrol {
  position: absolute;
  top: 10px;
  right: 10px;
  overflow: hidden;
  width: 130px;
  height: 30px;
  margin: 0;
  padding: 0;
  z-index: 1;
  font-size: 12px;
  font-family: "Malgun Gothic", "?????? ??????", sans-serif;
}

.custom_typecontrol span {
  display: block;
  width: 65px;
  height: 30px;
  float: left;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}

.custom_typecontrol .btn {
  background: #fff;
  background: linear-gradient(#fff, #e6e6e6);
}

.custom_typecontrol .btn:hover {
  background: #f5f5f5;
  background: linear-gradient(#f5f5f5, #e3e3e3);
}

.custom_typecontrol .btn:active {
  background: #e6e6e6;
  background: linear-gradient(#e6e6e6, #fff);
}

.custom_typecontrol .selected_btn {
  color: #fff;
  background: #425470;
  background: linear-gradient(#425470, #5b6d8a);
}

.custom_typecontrol .selected_btn:hover {
  color: #fff;
}

.custom_zoomcontrol {
  position: absolute;
  top: 50px;
  right: 10px;
  width: 36px;
  height: 80px;
  overflow: hidden;
  z-index: 1;
  background-color: #f5f5f5;
}

.custom_zoomcontrol span {
  display: block;
  width: 36px;
  height: 40px;
  text-align: center;
  cursor: pointer;
}

.custom_zoomcontrol span img {
  width: 15px;
  height: 15px;
  padding: 12px 0;
  border: none;
}

.custom_zoomcontrol span:first-child {
  border-bottom: 1px solid #bfbfbf;
}

/* ?????? ?????? */
.map_wrap,
.map_wrap * {
  margin: 0;
  padding: 0;
  font-family: "Malgun Gothic", dotum, "??????", sans-serif;
  font-size: 12px;
}

.map_wrap a,
.map_wrap a:hover,
.map_wrap a:active {
  color: #000;
  text-decoration: none;
}

.map_wrap {
  position: relative;
  width: 100%;
  height: 500px;
}

#menu_wrap {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  margin: 10px 0 30px 10px;
  padding: 5px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
  font-size: 12px;
  border-radius: 10px;
}

.bg_white {
  background: #fff;
}

#menu_wrap hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 2px solid #5f5f5f;
  margin: 3px 0;
}

#menu_wrap .option {
  text-align: center;
}

#menu_wrap .option p {
  margin: 10px 0;
}

#menu_wrap .option button {
  margin-left: 5px;
}

#placesList li {
  list-style: none;
}

#placesList .item {
  position: relative;
  border-bottom: 1px solid #888;
  overflow: hidden;
  cursor: pointer;
  min-height: 65px;
}

#placesList .item span {
  display: block;
  margin-top: 4px;
}

#placesList .item h5,
#placesList .item .info {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

#placesList .item .info {
  padding: 10px 0 10px 55px;
}

#placesList .info .gray {
  color: #8a8a8a;
}

#placesList .info .jibun {
  padding-left: 26px;
  background: url(https://t1.daumcdn.net/localimg/local/${root}/assets/images/07/mapapidoc/places_jibun.png)
    no-repeat;
}

#placesList .info .tel {
  color: #009900;
}

#placesList .item .markerbg {
  float: left;
  position: absolute;
  width: 36px;
  height: 37px;
  margin: 10px 0 0 10px;
  /* margin: 10px 10px 10px 10px; */
}

#pagination {
  margin: 10px auto;
  text-align: center;
}

#pagination a {
  display: inline-block;
  margin-right: 10px;
}

#pagination .on {
  font-weight: bold;
  cursor: default;
  color: #777;
}
</style>
