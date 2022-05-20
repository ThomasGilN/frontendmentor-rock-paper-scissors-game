<template>
    <div class="score-board">
        <div class="score-option-container">
            <img :src="props.gameVariantImage" alt="gameVariant">
        </div>
        <div class="score-points-container">
            <p class="score-points-label">Score</p>
            <p class="score-points-data">{{points}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePointsCounterStore } from '@/stores/counter'
import { computed } from '@vue/reactivity'

const props = defineProps<{
    gameVariantImage: string
}>()

const pointsCounter = usePointsCounterStore()
const points = computed(() => pointsCounter.$state.points)
</script>