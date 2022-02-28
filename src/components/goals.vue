<template>
    <div id="goal" class="section">
        <div class="abt-img">
            <img :src="goalsPhoto" />
            <h3 class="entry-title">
                {{ entryTitle.toUpperCase() }}
            </h3>
        </div>
        <div class="section-wrapper block content-1170 center-relative">
            <i class="fa fa-angle-double-down" aria-hidden="true"></i>
            <p v-html="introText"></p>
            <i class="fa fa-angle-double-up" aria-hidden="true"></i>
        </div>

        <Copyright :class="['white-fotL', 'goal-f']"></Copyright>

        <!-- <footer class="footer white-fotL goal-f">
            <div class="footer-content center-relative">
                <div class="copyright-holder">{{ copyrightHolder }}</div>
            </div>
        </footer> -->
    </div>
</template>

<script>
import Copyright from '../components/copyright.vue';

export default {
    components: {
        Copyright,
    },
    data: function() {
        return {
            goalsPhoto: require('../assets/images/g.jpg'),
            entryTitle: 'Goals',
            introText: `'Fully committed to connecting passionate and top educators on
                the <br />
                island with a diverse range of learners in the hopes of
                fostering useful<br />
                and beneficial experiences.'`,
            copyrightHolder: '© 2021 LearningBALI',
        };
    },
};
</script>

<style></style>
