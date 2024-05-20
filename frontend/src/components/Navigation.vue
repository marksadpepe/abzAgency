<template>
    <div class="navigation">
        <div @click="$router.push('/')" class="homeNavBtn">AbzAgency</div>
        <div class="navBtns">
            <buttonc class="usersRouteBtn" @click="$router.push('/users')">Users</buttonc>
            <buttonc class="positionsRouteBtn">Positions</buttonc>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.homeNavBtn {
    cursor: pointer;
    font-size: 18px;
}

.navigation {
    height: 54px;
    background: rgb(233, 215, 215);
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 14px;
}

.usersRouteBtn, .positionsRouteBtn {
    border: none;
    font-weight: normal;
    font-size: 18px;
}

.navBtns {
    margin-left: auto;
}
</style>