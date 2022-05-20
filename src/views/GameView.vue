<template>
    <ScoreBoard :game-variant-image="config.gameVariantImage"></ScoreBoard>
    <GameContainer :config="config"></GameContainer>
</template>

<script setup lang="ts">
import GameContainer from '../components/GameContainer.vue'
import ScoreBoard from '../components/ScoreBoard.vue'
import { useGameStore } from '@/stores/game'
import type { GameType } from '@/game-types/game-type'
import rockPaperScissors from '@/game-types/rock-paper-scissors'
const gameStore = useGameStore()
const config: GameType = gameStore.config || rockPaperScissors

</script>