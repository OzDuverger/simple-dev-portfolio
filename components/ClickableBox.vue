<template>
    <a :href="link" target="_blank" class="clickable-box">
        {{ title }}
    </a>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    }
})
</script>

<style lang="scss" scoped>
@import "../assets/variables";

.clickable-box {
    border: 2px solid $white;
    margin: 1rem auto;
    border-radius: 3rem;
    font-weight: 600;
    overflow: hidden;
    padding: 1rem 2rem;
    position: relative;
    transition: .2s transform ease-in-out;
    z-index: 0;

    &::after {
        background-color: $white;
        opacity: 0;
        border-radius: 3rem;
        content: '';
        display: block;
        height: 0%;
        width: 0%;
        position: absolute;
        left: 0;
        bottom: 0;
        transition: .2s width ease-out, .2s height ease-out, .1s opacity ease-out;
        z-index: -1;
    }

    &:hover::after {
        opacity: 1;
        height: 100%;
        width: 100%;
        transition: .2s width ease-out, .2s height ease-out, .1s opacity ease-out;
    }

    &:hover {
        border: 2px solid transparent;
        color: $orange;
    }
}
</style>