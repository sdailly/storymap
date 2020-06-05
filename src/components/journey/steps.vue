<template>
  <ul class="JourneySteps">
    <draggable
      class="JourneySteps-container"
      v-model="steps"
      group="steps"
      @start="drag = true"
      @end="drag = false"
    >
      <li class="JourneySteps-item" v-for="(step, index) in steps" :key="index">
        <input class="JourneySteps-input" type="text" v-model="step.label" placeholder="Ma step" />
        <button class="JourneySteps-add" @click="addStep(index)">+</button>
      </li>
    </draggable>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { JourneyStepsInterface } from "@/types";
import draggable from "vuedraggable";

@Component({
  components: {
    draggable
  }
})
export default class JourneySteps extends Vue {
  @Prop() private steps!: Array<JourneyStepsInterface>;

  addStep(index = 0) {
    this.steps.splice(index + 1, 0 , {
      label: ""
    });
    // todo focus to input
  }
}
</script>

<style scoped lang="scss">
.JourneySteps {
  padding: 0;

  &-container {
    display: inline-flex;
    justify-content: flex-start;
  }

  &-item {
    display: inline-table;
    position: relative;
    padding: 0.5rem 2rem .5rem 1rem;
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
    right: -.8rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    cursor: pointer;
  }
}
</style>
