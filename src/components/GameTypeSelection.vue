<template>
    <div>
        <p>Chose your preferred game type</p>
        <div class="game-type" v-for="(config, i) in state.configs" :key="i" @click="selectGameType(config)">
            <img :src="config.gameVariantImage" :alt="config.name">
        </div>
    </div>
</template>

<script setup>
import rockPaperScissors from '../game-types/rock-paper-scissors'
import rockPaperScissorsLizardSpock from '@/game-types/rock-paper-scissors-lizard-spock'
import { useGameStore } from '@/stores/game'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { routesPaths } from '@/router/paths'

const gameStore = useGameStore()
const router = useRouter()
const state = reactive({
    configs: [rockPaperScissors, rockPaperScissorsLizardSpock]
})
const selectGameType = (gameConfig) => {
    gameStore.setGameConfig(gameConfig)
    router.push(routesPaths.GAME)
}
</script>