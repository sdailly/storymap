<template>
  <div class="Map">
    <journey-list class="Map-list" />
  </div>
</template>

<script>
import JourneyList from "@/components/journey/list.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {
    JourneyList
  }
})
export default class Map extends Vue {}
</script>
