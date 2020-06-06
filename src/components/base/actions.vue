<template>
  <button class="ItemActions-icon">x</button>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ItemActions extends Vue {}
</script>

<style lang="scss">
.ItemActions {
  &-icon {
    background: #fff;
    border: 0;
    box-shadow: 0 1px 2px rgba(#000, 0.4);
    border-radius: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: #5e5e5e;
    $size: 1.6rem;
    width: $size;
    height: $size;
    cursor: pointer;
    transition: all 0.5s ease;
    outline: none;

    &:hover {
      box-shadow: 0 0 2px rgba(#000, 0.7);
    }
  }
}
</style>
