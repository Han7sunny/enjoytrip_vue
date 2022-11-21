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
        <!--검색 결과 목록 들어가는 부분-->
        <div id="pagination"></div>
      </div>
    </div>
    <div
      class="container alert alert-warning text-center"
      role="alert"
      id="null-alert"
    >
      죄송합니다. 아직 준비되지 않은 여행 정보입니다.
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
          this.initMap(); // 카카오 지도 실행
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
      // let markers = []; // 마커를 담을 배열

      let mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(37.5012428, 127.0395859), // 지도 중심 좌표
          level: 4, // 지도의 확대 레벨
        };

      //  this.kakaoMap = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
      this.map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

      // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
      this.infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
      // 검색 목록과 마커를 표출합니다
      console.log("this.infowindow");
      console.log(this.infowindow); // ok
      // 공공데이터에서 불러올 data가 없으면 알림창을 띄웁니다
      if (this.contentList == undefined || this.contentList.length == 0) {
        this.nullAlarm();
      } else this.displayPlaces(this.contentList);

      // // 마커가 표시될 위치입니다
      // console.log("after marker place " + this.location)
      // let markerPosition = new kakao.maps.LatLng(
      //   this.location.lat, //
      //   this.location.lng
      // );

      // // 마커를 생성합니다
      // let marker = new kakao.maps.Marker({
      //   position: markerPosition,
      // });

      // // 마커가 지도 위에 표시되도록 설정합니다
      // marker.setMap(this.map);
    },
    // 검색 결과 목록과 마커를 표출하는 함수입니다
    displayPlaces(places) {
      // data
      // console.log("displayPlaces function call");
      // console.log(places); // ok
      var // listEl = document.getElementById("placesList"),
        menuEl = document.getElementById("menu_wrap"),
        // fragment = document.createDocumentFragment(),
        bounds = new kakao.maps.LatLngBounds();

      // 검색 결과 목록에 추가된 항목들을 제거합니다
      // removeAllChildNods(listEl);

      // 검색결과 목록의 자식 Element를 제거하는 함수입니다
      //    removeAllChildNods(el) {

      // while (listEl.hasChildNodes()) {
      //   listEl.removeChild(listEl.lastChild);
      // }
      //   }

      // 지도에 표시되고 있는 마커를 제거합니다
      this.removeMarker();

      // 공공데이터에서 불러올 data가 없으면 알림창을 띄웁니다
      if (places == undefined || places.length == 0) {
        this.nullAlarm();
      } else {
        for (var i = 0; i < places.length; i++) {
          // 마커를 생성하고 지도에 표시합니다
          var placePosition = new kakao.maps.LatLng(
            places[i].mapY,
            places[i].mapX
          );
          // marker = this.addMarker(placePosition, places[i].contentTypeId),
          // itemEl = this.getListItem(places[i]); // 검색 결과 항목 Element를 생성합니다
          // --> 이부분을 component로 빼서 ... 일단 주석처리하고 set-map-item 생성

          // console.log("before if " + places[i].title); // ok
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          if (placePosition.La == 0 && placePosition.Ma == 0) continue;
          bounds.extend(placePosition);
          // 마커와 검색결과 항목에 mouseover 했을때
          // 해당 장소에 인포윈도우에 장소명을 표시합니다
          // mouseout 했을 때는 인포윈도우를 닫습니다
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

        // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
        // listEl.appendChild(fragment);
        menuEl.scrollTop = 0;

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        // map.setBounds(bounds);
        // this.kakaoMap.setBounds(bounds);
        this.map.setBounds(bounds);
      }
    },
    // 검색결과 항목을 Element로 반환하는 함수입니다
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

    // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
    addMarker(position, contentTypeId) {
      // https://www.flaticon.com/kr/authors/flat_circular/flat
      // var imageSrc =
      //   "http://localhost:8080/assets/images/marker_" + contentTypeId + ".png";
      let imageSrc = require("@/assets/images/marker_" +
        contentTypeId +
        ".png");

      var marker = new kakao.maps.Marker({
        position: position, // 마커의 위치
        image: new kakao.maps.MarkerImage(
          imageSrc,
          new kakao.maps.Size(24, 24)
        ),
      });

      // marker.setMap(this.kakaoMap); // 지도 위에 마커를 표출합니다
      marker.setMap(this.map); // 지도 위에 마커를 표출합니다
      this.markers.push(marker); // 배열에 생성된 마커를 추가합니다

      return marker;
    },
    // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    removeMarker() {
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null);
      }
      this.markers = [];
    },
    // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
    // 인포윈도우에 장소명을 표시합니다
    // displayInfowindow(marker, title) {
    //   console.log("enter displyInfowindow");
    //   // 작성하기
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
          this.initMap(); // 카카오 지도 실행
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
  font-family: "Malgun Gothic", "맑은 고딕", sans-serif;
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

/* 목록 지도 */
.map_wrap,
.map_wrap * {
  margin: 0;
  padding: 0;
  font-family: "Malgun Gothic", dotum, "돋움", sans-serif;
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
