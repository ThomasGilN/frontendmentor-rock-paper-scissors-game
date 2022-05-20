<template>
    <div class="game-result-container">
        <div>
            <p>You picked</p>
            <OptionCircle :activate-highlight="playerWon" :option="playerOption"></OptionCircle>
        </div>
        <div class="game-result-middle-container">
            <p class="result-text">{{resultText}}</p>
            <button class="game-result-button" @click="$emit('play-again')">Play Again</button>
        </div>
        <div>
            <p>the house picked</p>
            <OptionCircle :activate-highlight="houseWon" :option="machineOption"></OptionCircle>
        </div>
    </div>
</template>

<script setup lang="ts">
import OptionCircle from '../OptionCircle.vue'
import type { Option } from '@/models/option-model'
import { toRefs } from 'vue'
import { resultTypes } from '@/utils/constants'
import { computed } from '@vue/reactivity'

const props = defineProps<{
    playerOption: Option,
    machineOption: Option,
    result: string
}>()

const resultTexts = {
    [resultTypes.HOUSE_WINS]: 'You lose',
    [resultTypes.PLAYER_WINS]: 'You win',
    [resultTypes.TIE]: 'Tie'
}

const resultText = computed(() => resultTexts[props.result])
const playerWon = computed(() => props.result === resultTypes.PLAYER_WINS)
const houseWon = computed(() => props.result === resultTypes.HOUSE_WINS)

const emits = defineEmits(['play-again'])

const { playerOption, machineOption, result } = toRefs(props)
</script>

<style scoped src="./GameResultStyle.css"></style>