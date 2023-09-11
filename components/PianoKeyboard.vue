<template>
    <div class="flex flex-col w-full h-full relative rounded-xl">
        <div class="flex flex-row w-full h-[60%] items-center justify-between z-10">
            <div class="w-[8.33%] h-full shrink-0 invisible"></div>
            <div
                ref="cSharp"
                class="w-[8.33%] h-full shrink-0 bg-black"
                @pointerdown="playNote('C#')"
            />
            <div class="w-[8.33%] h-full shrink-0 invisible"/>
            <div
                ref="dSharp"
                class="w-[8.33%] h-full shrink-0 bg-black"
                @pointerdown="playNote('D#')"
            />
            <div class="w-[8.33%] h-full shrink-0 invisible"/>
            <div class="w-[8.33%] h-full shrink-0 invisible"/>
            <div
                ref="fSharp"
                class="w-[8.33%] h-full shrink-0 bg-black"
                @pointerdown="playNote('F#')"
            />
            <div class="w-[8.33%] h-full shrink-0 invisible"/>
            <div
                ref="gSharp"
                class="w-[8.33%] h-full shrink-0 bg-black"
                @pointerdown="playNote('G#')"
            />
            <div class="w-[8.33%] h-full shrink-0 invisible"/>
            <div
                ref="aSharp"
                class="w-[8.33%] h-full shrink-0 bg-black"
                @pointerdown="playNote('A#')"
            />
            <div class="w-[8.33%] h-full shrink-0 invisible"/>
        </div>
        <div class="absolute flex flex-row w-full h-full items-center justify-between rounded-xl">
            <div
                ref="c"
                class="w-[14.285%] h-full border bg-base-content border-black hover:bg-base-content/80"
                @pointerdown="playNote('C')"
            />
            <div
                ref="d"
                class="w-[14.285%] h-full border bg-base-content border-black hover:bg-base-content/80"
                @pointerdown="playNote('D')"
            />
            <div
                ref="e"
                class="w-[14.285%] h-full border bg-base-content border-black hover:bg-base-content/80"
                @pointerdown="playNote('E')"
            />
            <div
                ref="f"
                class="w-[14.285%] h-full border bg-base-content border-black hover:bg-base-content/80"
                @pointerdown="playNote('F')"
            />
            <div
                ref="g"
                class="w-[14.285%] h-full border bg-base-content border-black hover:bg-base-content/80"
                @pointerdown="playNote('G')"
            />
            <div
                ref="a"
                class="w-[14.285%] h-full border bg-base-content border-black hover:bg-base-content/80"
                @pointerdown="playNote('A')"
            />
            <div
                ref="b"
                class="w-[14.285%] h-full border bg-base-content border-black hover:bg-base-content/80"
                @pointerdown="playNote('B')"
            />
        </div>
    </div>
</template>
<script lang="ts" setup>
import {useNuxtApp} from '#imports';

const props = defineProps({
    octave: {
        type: Number,
        default: 4,
    },
});

const nuxtApp = useNuxtApp();

const _playPianoNote = nuxtApp.$playPianoNote as (note: string, octave: number) => void;

const playNote = (note: string) => {
    _playPianoNote(note, props.octave);
};

</script>