<template>
  <ul class="JourneySteps">
      <li class="JourneySteps-item" v-for="(step, index) in stepsValue" :key="index">
        <input
          class="JourneySteps-input"
          type="text"
          v-model="step.label"
          placeholder="Ma step"
        />
        <button class="JourneySteps-add" @click="addStep(index)">+</button>
      </li>
  </ul>
</template>

<script lang="ts">
import { JourneyStepsInterface } from "@/types";
import {PropType, reactive} from 'vue';

export default {
  props: {
    steps: Array as PropType<JourneyStepsInterface[]>
  },
  setup(props: { steps: JourneyStepsInterface[]; }) {
    const stepsValue = reactive(props.steps);

    const addStep = (index = 0) => {
      stepsValue.splice(index + 1, 0, {
        label: ""
      });
      // todo focus to input
    };

    return {
      stepsValue,
      addStep
    }
  }


}
</script>

<style scoped lang="scss">
.JourneySteps {
  padding: 0;
  display: inline-flex;
  justify-content: flex-start;

  &-item {
    display: inline-table;
    position: relative;
    padding: 0.5rem 2rem 0.5rem 1rem;
    border: 1px solid #979797;
    border-top: 1px solid blue;

    & + &-item {
      margin-left: 0.5rem;
    }

    &:hover {
      .JourneySteps-add {
        display: inline-block;
      }
    }
  }

  &-input {
    display: block;
    width: 100%;
    border: 0;
    outline: none;
  }

  &-add {
    display: none;
    position: absolute;
    right: -0.8rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    cursor: pointer;
  }
}
</style>
