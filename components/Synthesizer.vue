<template>
    <div class="flex flex-col w-full items-center justify-center space-y-2 p-4 z-10 bg-neutral rounded-xl">
        <div class="flex flex-row justify-between w-full mb-4">
            <Oscillator/>
            <Envelope/>
            <Filter/>
        </div>
        <PianoKeyboard class="min-h-[20%]" :octave="4"/>
    </div>
</template>