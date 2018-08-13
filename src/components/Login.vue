<template>
    <div class="mt-5">
        <img class="mb-5 mt-5" src="../assets/generic-logo.svg" width="250px" alt="">
        <div class="social-networks-buttons mt-5">
            <button class="facebook-button p-2 mb-3">Login com Facebook</button>
            <button class="google-button p-2">Login com Google</button>
        </div>
        <div class="division mt-4 mb-4">
            <hr class="w-25"> ou <hr class="w-25">
        </div>
        <form class="mb-3">
            <input type="text" class="username-input mb-3 p-1" placeholder="Usuário">
            <input type="password" class="password-input mb-3 p-1" placeholder="Senha">
            <button type="submit" class="p-2">LOGIN</button>
        </form>
        <div class="links">
            <a>Criar nova conta</a>
            <a>Esqueci minha senha</a>
        </div>
    </div>    
</template>

<script>

export default {
    name: 'login'
}
</script>

<style lang="scss" scoped>
.social-networks-buttons {
    .facebook-button {
        width: 80%;
        background-color: #4a67a1
    }
    .google-button {
        width: 80%;
        background-color: #df4e3b
    }
}

.division {
    display: flex;
    color: #9a9a9a;
}

form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

input {
    &:focus {
        border-bottom: 3px #42b983 solid;
    }

    outline: none;
    width: 80%;
    height: 2em;
    border: 0;
    border-bottom: 1px black solid;
}

button {
    width: 80%;
    color: white;
    background-color: #42b983;
    border: 0;
    border-radius: 25px;
}

.links {
    color: #42b983;
    display: flex;
    justify-content: space-around;
}
</style>
