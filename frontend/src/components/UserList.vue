<template>
    <div>
        <h4>Users</h4>
        <transition-group name="users-list">
            <user-item
            v-for="user in users"
            :user="user"
            :key="user.id"/>
        </transition-group>
    </div>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
    components: {UserItem},
    props: {
        users: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
.users-list-item {
  display: inline-block;
  margin-right: 10px;
}

.users-list-enter-active,
.users-list-leave-active {
  transition: all 0.2s ease;
}

.users-list-enter-from,
.users-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.flip-users-list-move {
  transition: transform 0.4s ease;
}

h4 {
    margin-top: 14px;
}
</style>