<template>
    <div class="flex flex-col space-y-2 items-center">
        <div class="w-full text-center text-2xl underline mb-2">Envelope</div>
        <div class="flex flex-row justify-between space-x-2 items-center h-[32px]">
            <div class="w-[8ch] shrink-0">Attack:</div>
            <input v-model="envelope.attack" class="range range-info grow" max="2" min="0" step="0.01" type="range"/>
        </div>
        <div class="flex flex-row justify-between space-x-2 items-center h-[32px]">
            <div class="w-[8ch] shrink-0">Decay:</div>
            <input v-model="envelope.decay" class="range range-info grow" max="2" min="0" step="0.01" type="range"/>
        </div>
        <div class="flex flex-row justify-between space-x-2 items-center h-[32px]">
            <div class="w-[8ch] shrink-0">Sustain:</div>
            <input v-model="envelope.sustain" class="range range-info grow" max="2" min="0" step="0.01" type="range"/>
        </div>
        <div class="flex flex-row justify-between space-x-2 items-center h-[32px]">
            <div class="w-[8ch] shrink-0">Release:</div>
            <input v-model="envelope.release" class="range range-info grow" max="2" min="0" step="0.01" type="range"/>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {useNuxtApp} from '#imports';
import {Envelope} from '~/plugins/synthManager';

const nuxtApp = useNuxtApp();

const envelope = nuxtApp.$envelope as Envelope;
</script>
