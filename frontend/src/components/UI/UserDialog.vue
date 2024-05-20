<template>
    <div class="dialog"
    v-if="show" @click.stop="hideDialog">
        <div @click.stop class="dialogContent">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "user-dialog",
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideDialog() {
            this.$emit("update:show", false);
        }
    }
}
</script>

<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}

.dialogContent {
    margin: auto;
    background: white;
    border-radius: 14px;
    min-height: 100px;
    min-width: 600px;
    padding: 24px;
}
</style>