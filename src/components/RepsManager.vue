<template>
    <div class="d-flex justify-content-center ">
        <swipe-list
            :items="[0]" 
            transition-key="id"
            style="width: 18rem;"
        >
            <template slot-scope="{ item, index, revealLeft, revealRight, close }">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Repetições</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ reps }}</h6>
                        <a href="#" class="card-link">Concluído</a>
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
        </swipe-list>
    </div>    
</template>

<script>
    import { SwipeList, SwipeOut } from 'vue-swipe-actions';

    export default {
        name: 'RepsManager',
        props: {
            reps: {
                required: true,
                type: Number
            }
        },
        components: {
            SwipeList
        }
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