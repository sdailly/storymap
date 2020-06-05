<template>
  <div class="JourneyItem">
    <input
      class="JourneyItem-input"
      type="text"
      :value="item.label"
      placeholder="Placeholder"
    />
    <journey-steps v-if="item.steps.length" :steps="item.steps" />
    <button v-else class="JourneySteps-add" @click="addStep(index)">
      Add step
    </button>
  </div>
</template>

<script lang="ts">
import { JourneyInterface } from "@/types";
import JourneySteps from "@/components/journey/steps.vue";
import {PropType, reactive} from 'vue';

export default {
  components: {
    JourneySteps,
  },
  props: {
    journey: Object as PropType<JourneyInterface>
  },

  setup(props: { journey: JourneyInterface}) {
    const item = reactive(props.journey);
    const addStep = () => {
      item.steps.push({
        label: ""
      });
      // todo focus to input
    };

    return {
      addStep,
      item
    }
  }
}
</script>

<style scoped lang="scss">
.JourneyItem {
  display: flex;
  flex-direction: column;

  &-input {
    border: 0;
    border-left: 2px solid blue;
    padding-left: 0.5rem;
    margin-bottom: 1rem;
    outline: none;
  }

  &-add {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    background: #fff;
    border-radius: 100%;
    border: 0;
    cursor: pointer;
    outline: none;
  }
}
</style>
