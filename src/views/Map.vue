<template>
  <div class="Map">
    <journey-list class="Map-list" />
    <story-list />
  </div>
</template>

<script>
  import JourneyList from "@/components/journey/list.vue";
  import StoryList from "@/components/story/list.vue";

export default {
  components: {
    JourneyList,
    StoryList
  }

}
</script>
