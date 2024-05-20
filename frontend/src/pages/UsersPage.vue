<template>
    <div>
        <buttonc class="createUserBtn" @click="showDialog">Create a new user</buttonc>
    </div>
    <user-dialog v-model:show="dialogVisible">
        <user-form :createUserErr="createUserErr" @create="createUser" ref="userForm"></user-form>
    </user-dialog>
    <div>
        <buttonc class="fetchUsersBtn" @click="fetchUsers">Click here to get users</buttonc>
    </div>
    <div class="userSearch"
    v-if="users.length > 0">
        <inputc class="userSearchField"
        :placeholder="placeholderValue"
        v-model.trim="userSearchQuery" />
    </div>
    <user-list
    :users="userSearchQuery ? searchedUsers: users"
    v-if="users && users.length > 0" />
    <h4 v-else-if="pageNotFoundErr" style="color: red;">{{ pageNotFoundErr }}</h4>
    <h4 v-else style="color: red;">Users list is empty</h4>
    <div class="pageWrapper"
    v-if="(users && users.length > 0) || pageNotFoundErr">
        <div class="prevPage"
        @click="prevPage"
        ><span>&lt;</span></div>
        <div class="page"
        :class="{'currentPage': page}"
        :key="page">{{ page }}</div>
        <div class="nextPage"
        @click="nextPage"
        ><span>&gt;</span></div>
    </div>
</template>

<script>
import UserList from "@/components/UserList.vue";
import UserForm from "@/components/UserForm.vue";

export default {
    components: {UserList, UserForm},
    data() {
        return {
            users: [],
            page: 1,
            count: 6,
            offset: 0,
            totalPages: 0,
            placeholderValue: "Jot user email down",
            pageNotFoundErr: "",
            createUserErr: "",
            userSearchQuery: "",
            dialogVisible: false
        }
    },
    methods: {
        prevPage() {
            if (this.page > 1) {
                this.page--;
                this.fetchUsers();
            }
        },
        nextPage() {
            if (this.page <= this.totalPages) {
                this.page++;
                this.fetchUsers();
            }
        },
        async createUser(user) {
            try {
                const tokenRes = await fetch("http://localhost:4000/api/v1/token");
                const {token} = await tokenRes.json();

                const formData = new FormData();
                formData.append("name", user.name);
                formData.append("email", user.email);
                formData.append("phone", user.phone);
                formData.append("position_id", user.position);
                formData.append("profilePic", user.file);

                const res = await fetch("http://localhost:4000/api/v1/users", {
                    method: "POST",
                    headers: {
                        Token: token,
                    },
                    body: formData
                });
                const data = await res.json();
                if (data.success) {
                    this.dialogVisible = false;
                } else {
                    this.$refs.userForm.clearFileInput();
                    if (data.fails) {
                        this.createUserErr = Object.values(data.fails)[0][0];
                    } else {
                        this.createUserErr = data.message;
                    }
                }
            } catch (err) {
                console.error(err);
            }
        },
        async fetchUsers() {
            try {
                const query = new URLSearchParams({page: this.page, count: this.count}).toString();
                const url = `http://localhost:4000/api/v1/users?${query}`;
                const res = await fetch(url, {
                    method: "GET", mode: "cors"
                });
                const data = await res.json();
                if (data.success) {
                    this.users = data.users;
                    this.totalPages = data["total_pages"];
                } else {
                    this.users = [];
                    this.pageNotFoundErr = data.message;
                }
            } catch (err) {
                console.error(err);
            }
        },
        searchUsers(event) {
            this.userSearchQuery = event.target.value;
        },
        showDialog() {
            this.dialogVisible = true;
        }
    },
    computed: {
        searchedUsers() {
            return [...this.users.filter(user => user.email.toLowerCase().includes(this.userSearchQuery.toLowerCase()))];
        }
    }
}
</script>

<style scoped>
.fetchUsersBtn, .createUserBtn {
    margin-top: 10px;
    padding: 10px 14px;
    background: none;
    color: rgb(93, 93, 227);
    border: 1px solid black;
    font-weight: bold;
    width: 200px;
    font-size: 14px;
}

.fetchUsersBtn:hover,
.createUserBtn:hover {
    cursor: pointer;
    color: rgb(4, 4, 207);
}

.pageWrapper {
    display: flex;
    margin-top: 14px;
}

.page, .prevPage, .nextPage {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    padding: 8px 12px;
    margin: 0 5px;
    cursor: pointer;
    border: 1px solid #000;
}

.currentPage {
    padding: 8px 14px;
    border: 1px solid #000;
    margin: 0 4px;
    font-weight: bold;
}
</style>
