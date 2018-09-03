<template>
    <div>
        <gym-menu />
        <swipe-list
            :items="mockSwipeList" 
            transition-key="id" 
            @swipeout:contentclick="contentClick"
        >
            <template slot-scope="{ item, index, revealLeft, revealRight, close }">
                <!-- item is the corresponding object from the array -->
                <!-- index is clearly the index -->
                <!-- revealLeft is method which toggles the left side -->
                <!-- revealRight is method which toggles the right side -->
                <!-- close is method which closes an opened side -->
                <div class="card text-left">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">{{ item.info }}</p>
                        <a href="#" class="btn btn-primary">Treinar</a>
                    </div>
                </div>
            </template>
            <template slot="left" slot-scope="{ item }">
                <div class="swipeout-action action-panel-left">
                    <div>
                        <i class="fa fa-file"></i>
                    </div>
                </div>
            </template>
            <template slot="right" slot-scope="{ item }">
                <div class="swipeout-action action-panel-right">
                <div>
                    <i class="fas fa-check"></i>
                </div>
                </div>
            </template>
            <div slot="empty">
                <p>Sem treinos disponíveis</p>
            </div>
        </swipe-list>
    </div>
</template>

<script>

    import { SwipeList, SwipeOut } from 'vue-swipe-actions';

    import GymMenu from '../components/GymMenu.vue';
    
    export default {
        name: 'GymTrainings',
        data() {
            return {
                mockSwipeList: [
                {
                    id: 0,
                    title: 'Rosca Scott',
                    info: 'Breve descrição sobre o exercício, demonstrando quais musculos são trabalhados etc'
                },
                {
                    id: 1,
                    title: 'Rosca Alternada',
                    info: 'Breve descrição sobre o exercício, demonstrando quais musculos são trabalhados etc'
                },
                {
                    id: 2,
                    title: 'Rosca Direta',
                    info: 'Breve descrição sobre o exercício, demonstrando quais musculos são trabalhados etc'
                },
                ],
            };
        },
        components: {
            SwipeOut,
            SwipeList,
            GymMenu
        },
        methods: {
            contentClick(e) {
                console.log(e, 'content click');
            }
        },
    }
</script>

<style lang="scss" scoped>
    .swipeout-action {
        display: flex;
        > div {
            display: flex;
            align-items: center;
            padding: 0 3rem;
            cursor: pointer;
        }
        &.action-panel-right {
            > div {
                background-color: rgb(40, 201, 0);
                color: white;
                &:hover {
                    background-color: darken(rgb(40, 201, 0), 5%);
                }
            }
        }
        &.action-panel-left {
            > div:nth-of-type(odd) {
                background-color: darkorchid;
                color: white;
                &:hover {
                    background-color: darken(darkorchid, 5%);
                }
            }
        }
    }
</style>
