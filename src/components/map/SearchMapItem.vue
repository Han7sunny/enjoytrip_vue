<template>
  <li class="item createdByComponents" @click.stop="setContent(content)">
    <span class="markerbg">
      <img :src="imgSrc" style="width: 40px; height: 40px" />
    </span>
    <div class="info">
      <h5>{{ content.title }}</h5>
      <span>{{ content.addr }}</span>
      <span class="tel" v-if="content.tel">
        {{ content.tel }}
      </span>
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";
const contentStore = "contentStore";

export default {
  name: "SearchMapItem",
  data() {
    return {
      imgSrc: "",
    };
  },
  props: {
    content: Object,
  },
  created() {
    this.imgSrc = require("@/assets/images/marker_" +
      this.content.contentTypeId +
      ".png");
  },
  methods: {
    ...mapActions(contentStore, ["setContent"]),
  },
};
</script>

<style></style>
