<template>
    <div>
        <gym-menu />
        <reps-manager :reps="6" />
        <rest-countdown :rest-time="40"/>
    </div>
</template>

<script>
    import GymMenu from '../components/GymMenu';
    import RestCountdown from '../components/RestCountdown';
    import RepsManager from '../components/RepsManager';

    export default {
        name: 'ExerciseManager',
        data() {
            return {}
        },
        components: {
            RestCountdown,
            GymMenu,
            RepsManager
        }
    }
</script>
