<template>
    <div class="rules-modal-background">
        <div class="rules-modal">
            <span class="rules-text">Rules</span>
            <img class="rules-close-button" @click="$emit('close')" :src="CloseButtonImage" alt="close">
            <img class="rules-image" :src="props.rulesImage" alt="rules">
        </div>
    </div>
</template>

<script setup lang="ts">
import CloseButtonImage from '@/assets/images/icon-close.svg'
const props = defineProps<{
    rulesImage: string
}>()
</script>

<style scoped>

</style>

