<template>
    <div>
        <nav v-if="expanded">
            <div v-on:click="expandOrHideMenu()">
                <close-icon w="50" h="50"></close-icon>
            </div>
            <slot></slot>
        </nav>
        <header v-else>
            <div v-on:click="expandOrHideMenu()">
                <menu-icon w="32" h="32"></menu-icon>
            </div>
        </header>
    </div>
</template>

<script>
import MenuIcon from 'vue-ionicons/dist/ios-menu';
import CloseIcon from 'vue-ionicons/dist/ios-close';

export default {
    name: 'gym-menu',
    components: {
        MenuIcon,
        CloseIcon
    },
    data () {
        return {
            expanded: false
        }
    },
    methods: {
        expandOrHideMenu () {
            this.expanded = ! this.expanded;
        }
    }
}
</script>

<style lang="scss" scoped>
    header {
        text-align: left;
        margin: 10px 0 0 10px;
    }

    nav {
        div {
            text-align: right;
        }

        width: 70%;
        height: 100%;
        position: absolute;
        top: 0;
        background-color: white;
        box-shadow: -4px 0px 29px;
    }
    
    button {
        width: 100%;
    }
</style>