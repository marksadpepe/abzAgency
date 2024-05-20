<template>
    <form @submit.prevent>
        <h2>Create user form</h2>
        <inputc class="userNameField" type="text" placeholder="Name"
        v-model="user.name"></inputc>
        <inputc class="userEmailField" type="email" placeholder="Email"
        v-model="user.email"></inputc>
        <inputc class="userPhoneField" type="text" placeholder="Phone number"
        v-model="user.phone"></inputc>
        <inputc class="userPositionField" type="text" placeholder="Position name"
        v-model="user.position"></inputc>
        <buttonc class="userCreateBtn" @click="createUser">Submit</buttonc>
    </form>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: "",
                email: "",
                phone: "",
                position: ""
            }
        }
    },
    methods: {
        createUser() {
            this.$emit("create", this.user);
            this.user = {name: "", email: "", phone: "", position: ""};
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2 {
    font-size: 28px;
}

.userNameField,
.userEmailField,
.userPhoneField,
.userPositionField {
    margin-top: 14px;
    padding: 6px 8px;
    border-radius: 10px;
    font-size: 18px;
    width: 400px;

}

.userNameField {
    margin-top: 20px;
}

.userCreateBtn {
    margin-top: 24px;
    color: rgb(96, 105, 186);
    border-radius: 10px;
    font-size: 16px;
    height: 44px;
    transition: width 0.4s ease;
    transition: font-size 0.1s ease;
}

.userCreateBtn:hover {
    color: blue;
    width: 120px;
    font-size: 18px;
    height: 44px;
}
</style>