<template>
    <input
    type="text"
    :placeholder="placeholderValue"
    :value="modelValue"
    @input="updateInput">
</template>

<script>
export default {
    name: "inputc",
    props: {
        modelValue: {
            type: String
        },
        placeholderValue: {
            type: String
        }
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value);
        }
    }
}
</script>

<style>
input {
    background: none;
    outline: none;
    border: 1px solid black;
    padding: 4px 4px;
    font-size: 18px;
    width: 200px;
}
</style>