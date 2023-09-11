<template>
    <div class="flex flex-col space-y-2 items-center">
        <div class="w-full text-center text-2xl underline mb-2">Filter</div>
        <div class="flex flex-row space-x-2 w-full h-[32px] items-center">
            <div class="w-[8ch]">Type:</div>
            <div class="dropdown dropdown-hover dropdown-right">
                <label tabindex="0">{{ capitalize(currentFilterType) }}</label>
                <ul class="dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52" tabindex="0">
                    <li v-for="ft of filterTypes"><a @click="setFilterType(ft)">{{ capitalize(ft) }}</a></li>
                </ul>
            </div>
        </div>
        <div class="flex flex-row justify-between space-x-2 items-center w-full h-[32px]">
            <div class="w-[8ch] shrink-0">Freq:</div>
            <input
                v-model="filter.frequency.value"
                class="range range-info grow"
                max="20000"
                min="0"
                step="1"
                type="range"
            />
        </div>
        <div class="flex flex-row justify-between space-x-2 items-center w-full h-[32px]">
            <div class="w-[8ch] shrink-0">Q:</div>
            <input v-model="filter.Q.value" class="range range-info grow" max="1" min="0" step="0.01" type="range"/>
        </div>
        <div class="flex flex-row justify-between space-x-2 items-center w-full h-[32px]">
            <div class="w-[8ch] shrink-0">Detune:</div>
            <input
                v-model="filter.detune.value"
                class="range range-info grow"
                max="1"
                min="0"
                step="0.01"
                type="range"
            />
        </div>
    </div>
</template>
<script lang="ts" setup>
import {useNuxtApp} from '#imports';
import {IAudioContext, IBiquadFilterNode} from 'standardized-audio-context';

const filterTypes = [
    'allpass',
    'bandpass',
    'highpass',
    'highshelf',
    'lowpass',
    'lowshelf',
    'notch',
    'peaking',
] as BiquadFilterType[];

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const setFilterType = (ft: BiquadFilterType) => {
    filter.type = ft;
    currentFilterType.value = ft;
};

const nuxtApp = useNuxtApp();
const filter = nuxtApp.$filter as IBiquadFilterNode<IAudioContext>;
const currentFilterType = ref(filter.type);
</script>