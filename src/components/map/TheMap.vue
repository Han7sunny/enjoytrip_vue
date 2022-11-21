<template>
  <div>
    <div id="map" class="ms-3 mt-4 mb-5"></div>
  </div>
</template>

<script>
export default {
  name: "TheMap",
  props: {
    location: Object,
  },
  methods: {
    initMap() {
      let mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(this.location.lat, this.location.lng),
          level: 4, // 지도의 확대 레벨
        };

      let kakaoMap = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

      // 마커가 표시될 위치입니다
      let markerPosition = new kakao.maps.LatLng(
        this.location.lat,
        this.location.lng
      );

      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(kakaoMap);
    },
  },
  mounted() {
    if (!window.kakao || !window.kakao.maps) {
      let script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAO_MAP_KEY}`;
      /* global kakao */
      script.addEventListener("load", () => {
        kakao.maps.load(this.initMap);
      });
      document.head.appendChild(script);
    }
  },
  watch: {
    location: function (newLocation, oldLocation) {
      console.log(oldLocation, newLocation);
      this.initMap();
    },
  },
};
</script>

<style>
/* #map {
  width: 400px;
  height: 300px;
} */
</style>
