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
    padding: 0.5rem 1rem;
    border: 1px solid #979797;
    border-top: 1px solid blue;

    & + &-item {
      margin-left: 0.5rem;
    }
  }
}
</style>
