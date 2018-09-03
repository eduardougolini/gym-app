<template>
    <div>
        <gym-menu />
        <rest-countdown :rest-time="40"/>
    </div>
</template>

<script>
    import GymMenu from '../components/GymMenu';
    import RestCountdown from '../components/RestCountdown';

    export default {
        name: 'ExerciseManager',
        data() {
            return {}
        },
        components: {
            RestCountdown,
            GymMenu
        }
    }
</script>
