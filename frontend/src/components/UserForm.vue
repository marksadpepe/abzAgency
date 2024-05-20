<template>
    <form @submit.prevent method="POST" enctype="multipart/form-data">
        <h2>Create user form</h2>
        <inputc class="userNameField" type="text" placeholder="Name"
        v-model="user.name"></inputc>
        <inputc class="userEmailField" type="email" placeholder="Email"
        v-model="user.email"></inputc>
        <inputc class="userPhoneField" type="text" placeholder="Phone number"
        v-model="user.phone"></inputc>
        <inputc class="userPositionField" type="text" placeholder="Position ID"
        v-model="user.position"></inputc>
        <input type="file" name="profilePic" id="file" v-on:change="onFileChange" ref="fileInput">
        <h4 v-if="createUserErr" style="color: red;">{{ createUserErr }}</h4>
        <buttonc class="userCreateBtn" @click="createUser">Submit</buttonc>
    </form>
</template>

<script>
export default {
    props: {
        createUserErr: {
            type: String, required: false
        }
    },
    data() {
        return {
            user: {
                name: "",
                email: "",
                phone: "",
                position: "",
                file: null
            }
        }
    },
    methods: {
        onFileChange(event) {
            this.user.file = event.target.files[0];
        },
        createUser() {
            this.$emit("create", this.user);
            this.user = {name: "", email: "", phone: "", position: "", file: null};
        },
        clearFileInput() {
            this.$refs.fileInput.value = "";
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

#file {
    background: none;
    outline: none;
    border: 1px solid black;
    padding: 4px 4px;
    font-size: 18px;
    width: 200px;
    cursor: pointer;
    margin-top: 14px;
    padding: 6px 8px;
    border-radius: 10px;
    font-size: 18px;
    width: 400px;
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