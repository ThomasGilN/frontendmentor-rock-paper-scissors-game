<template>
    <div class="rpsls-container">
        <div class="rpsls-top-row">
            <OptionCircle :option="scissors" @click="$emit('option-selected', scissors)"/>
        </div>
        <div class="rpsls-mid-row">
            <OptionCircle class="rpsls-mid-left-option" :option="spock" @click="$emit('option-selected', spock)"/>
            <OptionCircle class="rpsls-mid-right-option" :option="paper" @click="$emit('option-selected', paper)"/>
        </div>
        <div class="rpsls-bottom-row">
            <OptionCircle class="rpsls-bottom-left-option" :option="lizard" @click="$emit('option-selected', lizard)"/>
            <OptionCircle class="rpsls-bottom-right-option" :option="rock" @click="$emit('option-selected', rock)"/>
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
const lizard = ref(getOptionByType(props.options, OptionTypes.LIZARD))
const spock = ref(getOptionByType(props.options, OptionTypes.SPOCK))
</script>

<style src="./RockPaperScissorsLizardSpockStyle.css"></style>