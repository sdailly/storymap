<template>
    <div class="StoryList">
        <div class="StoryList-item" v-for="story in stories" :key="story">
            <input class="StoryList-input" type="text" v-model="story.label" />
            <ul class="StoryList-list">
                <li v-for="item in story.list" :key="item">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import {reactive} from 'vue';

    interface StoryInterface {
        label: string,
        list: string[]
    }

    export default {
        setup() {
            const stories = reactive([{
                label: 'Must Have',
                list: [
                    'userStory1'
                ]
            }] as StoryInterface[]);
            return {
                stories
            }
        }

    }
</script>
