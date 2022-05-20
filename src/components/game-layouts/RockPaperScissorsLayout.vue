<template>
    <div class="rps-container">
        <div class="rps-top-row">
            <OptionCircle class="rps-top-left-option" :option="rock" @click="$emit('option-selected', rock)"></OptionCircle>
            <OptionCircle class="rps-top-right-option " :option="paper" @click="$emit('option-selected', paper)"></OptionCircle>
        </div>
        <div>
            <OptionCircle class="rps-bottom-option" :option="scissors" @click="$emit('option-selected', scissors)"></OptionCircle>
        </div>
    </div>

</template>

<script setup lang="ts">
import type { Option } from '@/models/option-model'
import { OptionTypes } from '@/models/option-types'
import { getOptionByType } from '@/utils/utils'
import { ref } from 'vue'
import OptionCircle from '../OptionCircle.vue'

const props = defineProps<{
    options: Option[]
}>()

const emits = defineEmits(['option-selected'])

const rock = ref(getOptionByType(props.options, OptionTypes.ROCK))
const paper = ref(getOptionByType(props.options, OptionTypes.PAPER))
const scissors = ref(getOptionByType(props.options, OptionTypes.SCISSORS))

</script>

<style src="./RockPaperScissorsStyle.css"></style>