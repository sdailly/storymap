<template>
  <div>
    <ul class="JourneySteps">
      <draggable
        class="JourneySteps-container"
        v-model="steps"
        group="steps"
        @start="drag = true"
        @end="drag = false"
      >
        <li
          class="JourneySteps-item"
          v-for="(step, index) in steps"
          :key="index"
        >
          <textarea
            class="JourneySteps-input"
            v-model="step.label"
            placeholder="Ma step"
          ></textarea>
          <button @click="addStep(index)" class="JourneySteps-add">+</button>
          <base-actions
            @click.native="deleteStep"
            class="JourneySteps-actions"
          />
        </li>
      </draggable>
    </ul>
    <button v-if="!steps.length" @click="addStep(index)">Add tep</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { JourneyStepsInterface } from '@/types';
import draggable from 'vuedraggable';
import BaseActions from '@/components/base/actions.vue';

@Component({
  components: {
    draggable,
    BaseActions,
  },
})
export default class JourneySteps extends Vue {
  @Prop() private steps!: JourneyStepsInterface[];

  addStep(index: number) {
    this.steps.splice(index + 1, 0, {
      label: '',
    });
    // todo focus to input
  }

  deleteStep(index: number) {
    this.steps.splice(index, 1);
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

  &-input {
    box-shadow: 0 0 3px rgba(#000, 0.3);
    border-radius: 3px;
    border: 0;
    border-top: 2px solid blue;
    outline: none;
    padding: 0.5rem 1rem;
    min-height: 4rem;
    resize: none;
    font-family: Arial, serif;
  }

  &-item {
    display: inline-table;
    position: relative;
    padding-right: 2rem;

    & + & {
      padding-left: 0.6rem;
    }

    &:hover {
      .JourneySteps-add {
        display: inline-block;
      }
      .JourneySteps-actions {
        display: inline-block;
      }
    }
  }

  &-add {
    display: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    right: 0;
    cursor: pointer;
  }

  &-actions {
    display: none;
    position: absolute;
    right: 1.2rem;
    top: -1rem;
  }
}
</style>
