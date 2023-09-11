<template>
    <div class="flex flex-col w-full bg-base-100 h-screen items-center justify-center space-y-4">
        <div class="text-4xl">
            Simple Synth
        </div>
        <Synthesizer class="max-w-4xl h-full md:h-[80%]"/>
        <NuxtLink
            class="absolute bottom-0 right-0"
            external="external"
            to="https://github.com/blackburn32/simple-synth"
        >
            <Icon class="hover:scale-125 mr-4 mb-4" color="black" name="uil:github" size="32"/>
        </NuxtLink>
    </div>
</template>