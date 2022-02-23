<template>
    <div class="full">
        <div class="colm-3" v-for="service in serviceList" :key="service.id">
            <div class="sta">
                <img :src="service.img" />
                <h2>{{ service.name }}</h2>
            </div>
        </div>
        <div class="full-ser">
            <h2>
                <a href="javascript:void(0)">Expand for More Services </a>
            </h2>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            serviceList: [
                {
                    id: 1,
                    name: 'Boxing Classes',
                    img: require('../assets/images/bf.jpg'),
                },
                {
                    id: 2,
                    name: 'Cooking Classes',
                    img: require('../assets/images/new-cok.jpg'),
                },
                {
                    id: 3,
                    name: 'Robotics Classes',
                    img: require('../assets/images/rob.jpg'),
                },
                {
                    id: 4,
                    name: 'Yoga Classes',
                    img: require('../assets/images/yog.jpg'),
                },
                {
                    id: 5,
                    name: 'DJ Classes',
                    img: require('../assets/images/djj.jpg'),
                },
                {
                    id: 6,
                    name: 'Content Creating Classes',
                    img: require('../assets/images/traning.jpg'),
                },
            ],
        };
    },
    computed: {
        iconUrl() {
            return require('../assets/images/bf.jpg');
        },
    },
};
</script>

<style></style>
