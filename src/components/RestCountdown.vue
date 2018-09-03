<template>
    <div>
        <countdown v-if="startedCounter" class="countdown" :time="time" tag="p">
            <template slot-scope="props">
                <div @click="invertCounterStatus" class="d-flex justify-content-center align-items-center flex-wrap h-100">
                    <h5 class="w-100">Descanso</h5>
                    <h3 class="w-100">{{ props.seconds }}</h3>
                    <p class="w-100">segundos</p>
                </div>
            </template>
        </countdown>
        <div v-else @click="invertCounterStatus" class="countdown d-flex justify-content-center">
            <div class="align-self-center">
                <i class="fas fa-play mb-2"></i>
                <h5>Iniciar Descanso</h5>
            </div>
        </div>
    </div>
</template>

<script>
    import Countdown from '@xkeshi/vue-countdown';

    export default {
        name: 'RestCountdown',
        props: {
            restTime: {
                required: true,
                type: Number
            }
        },
        data() {
            return {
                startedCounter: false,
                counting: false,
                time: null,
            };
        },
        components: {
            Countdown
        },
        methods: {
            invertCounterStatus() {
                this.startedCounter = !this.startedCounter;

                if (this.startedCounter) {
                    this.startCounter();                    
                }
            },
            startCounter() {
                let endDate = new Date();
                endDate.setSeconds(endDate.getSeconds() + this.restTime);
                
                this.time = endDate - new Date();
            },
            countdown() {
                this.counting = true;
            },
            countdownend() {
                this.counting = false;
            },
        },
    }
</script>

<style lang="scss" scoped>

    @import "../../public/scss/variables";

    .countdown {
        border-radius: 130px;
        height: 200px;
        width: 200px;
        margin: auto;
        background-color: #42b983;
    }

    i {
        font-size: 40px;
    }
</style>
