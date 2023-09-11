<template>
    <div class="flex flex-col space-y-2">
        <div class="w-full text-center text-2xl underline mb-2">Oscillators</div>
        <div v-for="osc in oscillators" class="flex flex-row justify-between space-x-4 items-center h-[32px]">
            <Icon :name="`ph:wave-${osc.waveType}`" class="shrink-0" size="32"/>
            <input v-model="osc.volume" class="range range-info grow" max="1" min="0" step="0.01" type="range"/>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {useNuxtApp} from '#imports';
import {Oscillator} from '~/plugins/synthManager';

const nuxtApp = useNuxtApp();
const oscillators = nuxtApp.$oscillators as Oscillator[];
</script>