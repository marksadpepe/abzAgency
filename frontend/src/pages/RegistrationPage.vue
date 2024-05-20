<template>
    <div class="container">
        <div class="header">Abz Agency</div>
        <div class="formContainer">
            <h2>Registration</h2>
            <form>
                <div class="formGroup">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" required>
                </div>
                <div class="formGroup">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" required>
                </div>
                <div class="formGroup">
                    <label for="phone">Phone</label>
                    <input type="tel" name="phone" id="phone" required>
                </div>
                <div class="formGroup">
                    <label for="position">Position</label>
                    <input type="text" name="position" id="position" required>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    //
}
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f5f8fa;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.header {
    font-size: 44px;
    font-weight: bold;
    color: #1da1f2;
    margin-bottom: 30px;
}

.formContainer {
    border: 1px solid black;
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 30px;
    max-width: 400px;
    width: 100%;
}

h2 {
    text-align: center;
    color: #1da1f2;
}

.formGroup {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="tel"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button[type="submit"] {
    background-color: #1da1f2;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
}

button[type="submit"]:hover {
    background-color: #0c85d0;
}
</style>