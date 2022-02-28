<template>
    <div class="full d-flex flex-wrap">
        <div class="colm-3" v-for="service in serviceList" :key="service.id">
            <div class="sta">
                <img :src="service.img" />
                <h2>{{ service.name }}</h2>
            </div>
        </div>
        <div class="full-ser full-width">
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

<style lang="scss">
.full-width {
    width: 100%;
}
.full {
    .colm-3 {
        width: 33.33%;
        float: none !important;
    }
    .sta {
        img {
            display: block;
            margin: auto;
        }

        h2 {
            transform: translate(0%, -55%);
        }
        @media (min-width: 1200px) and (max-width: 1365px) {
            height: 235px;
        }

        @media (min-width: 992px) and (max-width: 1199px) {
            height: 221px;
        }
        @media (max-width: 823px) {
            height: 170px;
        }
        @media (max-width: 767px) {
            height: 100% !important;
        }
    }
    @media (max-width: 640px) {
        flex-direction: column;
        .colm-3 {
            width: 100%;
        }
    }
}
</style>
