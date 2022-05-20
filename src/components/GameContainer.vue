<template>
    <div class="options-container">
        <Component v-if="state.isPlaying" :is="layout" :options="options" @option-selected="onOptionSelected($event)"/>
        <GameResult 
            v-else
            :machine-option="state.machineOption" 
            :player-option="state.playerOption" 
            :result="state.result"
            @play-again="onPlayAgain"
        /> 
    </div>

    <RulesModal v-if="state.showRules" @close="closeRulesModal" :rules-image="rulesImage"></RulesModal>
    <div class="container-bottom-buttons">
        <button class="action-button" style="margin-right: 1rem" @click="restartAndGoHome">HOME</button>
        <button class="action-button" style="margin-left: 1rem" @click="openRulesModal">RULES</button>
    </div>
</template>

<script setup lang="ts">
import type { Option } from '@/models/option-model'
import type { GameType } from '@/game-types/game-type'
import { usePointsCounterStore } from '@/stores/counter'
import { reactive, toRefs } from 'vue'
import RulesModal from './RulesModal.vue'
import GameResult from './game-section/GameResult.vue'
import { resultTypes } from '@/utils/constants'
import { useRouter } from 'vue-router'
import { routesPaths } from '@/router/paths'

const pointsCounter = usePointsCounterStore()
const router = useRouter()

const props = defineProps<{
    config: GameType
}>()

const state = reactive<{
    showRules: boolean,
    playerOption?: Option,
    machineOption?: Option,
    result?: string,
    isPlaying: boolean
}>({
    showRules: false,
    playerOption: undefined,
    machineOption: undefined,
    result: undefined,
    isPlaying: true
})

const openRulesModal = () => {
    state.showRules = true
}

const closeRulesModal = () => {
    state.showRules = false
}

const onOptionSelected = (playerOption: Option) => {
    const machineOptionIndex = Math.floor(Math.random() * props.config.options.length )
    const machineOption = props.config.options[machineOptionIndex]

    state.playerOption = playerOption
    state.machineOption = machineOption

    if (playerOption.winsOver(machineOption)) {
        pointsCounter.increment()
        state.result = resultTypes.PLAYER_WINS
    } else if(machineOption.winsOver(playerOption)){
        pointsCounter.decrease()
        state.result = resultTypes.HOUSE_WINS
    } else {
        state.result = resultTypes.TIE
    }

    state.isPlaying = false
}

const onPlayAgain = () => {
    state.machineOption = undefined
    state.playerOption = undefined
    state.isPlaying = true
}

const restartAndGoHome = () => {
    pointsCounter.restart()
    router.push(routesPaths.HOME)
}

const { options, rulesImage, layout } = toRefs(props.config)
</script>