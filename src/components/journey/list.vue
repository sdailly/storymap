<template>
  <ul class="JourneyList">
      <li
        class="JourneyList-item"
        :key="journey.label"
        v-for="(journey, index) in journeyList"
      >
        <journey-item :journey="journey" />
        <button class="JourneyList-add" @click="addJourney(index)">+</button>
      </li>
  </ul>
</template>

<script lang="ts">
import JourneyItem from "@/components/journey/item.vue";
import { JourneyInterface } from "@/types";
import {reactive} from 'vue';

export default {
  components: {
    JourneyItem,
  },
  setup() {
    const journeyList = reactive([
      {
        label: "test",
        steps: [
          {
            label: "mon label"
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
    ]) as Array<JourneyInterface>;

    const addJourney = (index = 0) => {
      journeyList
              .splice(index + 1, 0, {
                label: "",
                steps: []
              })
              .join();
    };

    return {
      addJourney,
      journeyList
    }
  },



}
</script>

<style scoped lang="scss">
.JourneyList {
  display: flex;
  &-item {
    flex: none;
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
