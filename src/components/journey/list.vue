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
        v-for="(journey, index) in journeyList"
      >
        <journey-item :journey="journey" />
        <button class="JourneyList-add" @click="addJourney(index)">+</button>
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

  addJourney = (index = 0) => {
    this.journeyList
      .splice(index + 1, 0, {
        label: "",
        steps: []
      })
      .join();
  };
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
    position: relative;

    &:hover {
      .JourneyList-add {
        display: inline-flex;
      }
    }
  }
  &-add {
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    background: #fff;
    border-radius: 100%;
    border: 0;
    cursor: pointer;
    outline: none;
  }
}
</style>
