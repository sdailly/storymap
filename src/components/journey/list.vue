<template>
  <ul class="JourneyList">
    <draggable
      class="JourneyList-container"
      v-model="journeyList"
      group="journey"
      @start="drag = true"
      @end="drag = false"
    >
      <li
        class="JourneyList-item"
        :key="journey.label"
        v-for="journey in journeyList"
      >
        <journey-item :journey="journey" />
      </li>
    </draggable>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import JourneyItem from "@/components/journey/item.vue";
import { JourneyInterface } from "@/types";
import Draggable from "vuedraggable";

@Component({
  components: {
    JourneyItem,
    Draggable
  }
})
export default class JourneyList extends Vue {
  journeyList = [
    {
      label: "test",
      steps: [
        {
          label: "mon label"
        },
        {
          label: "test2 label"
        },
        {
          label: "mon label"
        },
        {
          label: "test2 label"
        }
      ]
    },
    {
      label: "tesssssst",
      steps: [
        {
          label: "hello"
        },
        {
          label: "to"
        },
        {
          label: "you"
        }
      ]
    }
  ] as Array<JourneyInterface>;
}
</script>

<style scoped lang="scss">
.JourneyList {
  &-container {
    display: flex;
  }
  &-item {
    padding: 0.5rem;
    list-style: none;
    margin: 0;
  }
}
</style>
