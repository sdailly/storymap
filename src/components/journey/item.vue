<template>
  <div class="JourneyItem">
    <input
      class="JourneyItem-input"
      type="text"
      :value="journey.label"
      placeholder="Placeholder"
    />
    <journey-steps v-if="journey.steps.length" :steps="journey.steps" />
    <button v-else class="JourneySteps-add" @click="addStep(index)">Add step</button>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { JourneyInterface } from "@/types";
import JourneySteps from "@/components/journey/steps.vue";

@Component({
  components: {
    JourneySteps
  }
})
export default class JourneyItem extends Vue {
  @Prop() private journey!: JourneyInterface;

  addStep() {
    this.journey.steps.push({
      label: ""
    });
    // todo focus to input
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
