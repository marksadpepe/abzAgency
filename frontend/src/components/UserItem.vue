<template>
    <div class="user">
        <div>
            <div><strong>ID</strong>: {{ user.id }}</div>
            <div><strong>Name</strong>: {{ user.name }}</div>
            <div><strong>Email</strong>: {{ user.email }}</div>
            <div><strong>Phone</strong>: {{user.phone }}</div>
        </div>
        <div class="userBtns">
            <div><buttonc @click="$router.push(`/users/${user.id}`)" id="showUserPageBtn">Show Page</buttonc></div>
            <div><buttonc @click="showDialog" id="showUserDialogBtn">Show Dialog</buttonc></div>
            <div><buttonc id="deleteUserBtn">Delete</buttonc></div>
        </div>
        <user-dialog v-model:show="dialogVisible">
            <h2>User Information</h2>
            <div id="userIdInfo" class="userInfo"><strong>ID</strong>: {{ user.id }}</div>
            <div class="userInfo"><strong>Name</strong>: {{ user.name }}</div>
            <div class="userInfo"><strong>Email</strong>: {{ user.email }}</div>
            <div class="userInfo"><strong>Phone</strong>: {{user.phone }}</div>
            <div class="userInfo"><strong>Position ID</strong>: {{user.positionId }}</div>
        </user-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false
        }
    },
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    methods: {
        showDialog() {
            this.dialogVisible = true;
        }
    }
}
</script>

<style scoped>
h2 {
    font-size: 24px;
}

#userIdInfo {
    margin-top: 14px;
}

.userInfo{
    margin-top: 4px;
    font-size: 18px;
}

.user {
    padding: 14px;
    border: 4px solid aquamarine;
    margin-top: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#showUserPageBtn, #showUserDialogBtn {
    color: rgb(83, 174, 98);
}

#showUserPageBtn:hover, #showUserDialogBtn:hover {
    color: rgb(0, 117, 10);
}

#deleteUserBtn {
    color: rgb(243, 93, 93);
}

#deleteUserBtn:hover {
    color: rgb(255, 0, 0);
}
</style>