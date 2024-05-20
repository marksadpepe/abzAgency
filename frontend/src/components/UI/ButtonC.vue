<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "buttonc"
}
</script>

<style scoped>
button {
    margin: 10px 0;
    padding: 10px 14px;
    background: none;
    border: 1px solid black;
    font-weight: bold;
    width: 110px;
}

button:hover {
    cursor: pointer;
}
</style>