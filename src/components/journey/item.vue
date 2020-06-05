<template>
  <div class="JourneyItem">
    <input
      class="JourneyItem-input"
      type="text"
      :value="journey.label"
      placeholder="Placeholder"
    />
    <journey-steps :steps="journey.steps" />
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
}
</script>

<style scoped lang="scss">
.JourneyItem {
  display: flex;
  flex-direction: column;

  &-input {
    border: 0;
    border-left: 2px solid blue;
    padding-left: .5rem;
    margin-bottom: 1rem;
    outline: none;
  }
}
</style>
