<template>
  <ul class="JourneyList">
    <draggable
      class="JourneyList-container"
      v-model="journeyList"
      group="journey"
      ghost-class="ghost"
      @start="drag = true"
      @end="drag = false"
    >
      <li
        class="JourneyList-item"
        :key="index"
        v-for="(journey, index) in journeyList"
      >
        <journey-item :journey="journey" />
        <button class="JourneyList-add" @click="addJourney(index)">+</button>
        <button
          v-if="!journey.steps.length"
          class="JourneyList-addStep"
          @click="addStep(index)"
        >
          Add step
        </button>
      </li>
    </draggable>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import JourneyItem from '@/components/journey/item.vue';
import { JourneyInterface } from '@/types';
import Draggable from 'vuedraggable';
import { journeyMockList } from '@/__mocks__/journey';

@Component({
  components: {
    JourneyItem,
    Draggable,
  },
})
export default class JourneyList extends Vue {
  journeyList = journeyMockList || ([] as Array<JourneyInterface>);

  addJourney = (index = 0) => {
    this.journeyList
      .splice(index + 1, 0, {
        label: '',
        steps: [],
      })
      .join();
  };

  addStep = (index = 0) => {
    this.journeyList[index].steps.push({ label: '' });
  };
}
</script>

<style scoped lang="scss">
.ghost {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}

.JourneyList {
  box-shadow: 0 0 2px rgba(#000, 0.5);
  padding: 0;
  margin: 0;
  &-container {
    display: flex;
  }

  &-item {
    padding: 2rem 0 2rem 2rem;
    list-style: none;
    margin: 0;
    position: relative;
    transition: width 1s ease;

    &:nth-child(even) {
      background: darken(#fff, 3);
    }

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
