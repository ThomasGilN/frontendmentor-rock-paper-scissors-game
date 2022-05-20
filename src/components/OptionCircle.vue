<template>
    <div class="option" :class="{'winner-highlight': activateHighlight}" :style="optionStyle">
        <img class="option-image" :src="option.icon" :alt="option.name">
    </div>
</template>

<script setup lang="ts">
import type { Option } from '@/models/option-model'
import { toRefs } from 'vue'
import { OptionTypes } from "@/models/option-types"
import { computed } from "@vue/reactivity"

const props = defineProps<{
    option: Option,
    activateHighlight?: boolean
}>()

const borderStyleMapping = {
    [OptionTypes.ROCK]: 'hsl(349, 70%, 56%)',
    [OptionTypes.PAPER]: 'hsl(230, 89%, 65%)',
    [OptionTypes.SCISSORS]: 'hsl(40, 84%, 53%)',
    [OptionTypes.LIZARD]: 'hsl(261, 72%, 63%)',
    [OptionTypes.SPOCK]: 'hsl(189, 58%, 57%)'
}

const shadowStyleMapping = {
    [OptionTypes.ROCK]: 'hsl(349, 71%, 42%)',
    [OptionTypes.PAPER]: 'hsl(230, 89%, 52%)',
    [OptionTypes.SCISSORS]: 'hsl(39, 89%, 39%)',
    [OptionTypes.LIZARD]: 'hsl(261, 73%, 50%)',
    [OptionTypes.SPOCK]: 'hsl(189, 59%, 43%)',
}

const addHighlightStyle = (): string => {
    return props.activateHighlight
        ? ', 0 0 0 2rem rgb(255 255 255 / 8%), 0 0 0 4rem rgb(255 255 255 / 5%), 0 0 0 6rem rgb(255 255 255 / 2%)'
        : ''
}

const optionStyle = computed(()=> ({
    borderColor: borderStyleMapping[props.option.type],
    boxShadow: shadowStyleMapping[props.option.type] + '0 .3rem, inset #ccc 0 .3rem' + addHighlightStyle()
}))

const { option } = toRefs(props)
</script>