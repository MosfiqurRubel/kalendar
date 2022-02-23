<template>
    <div id="about" class="section">
        <div class="abt-img">
            <img :src="aboutUsPhoto" />
            <h3 class="entry-title">
                {{ entryTitle.toUpperCase() }}
            </h3>
        </div>
        <div class="section-wrapper block content-1170 center-relative">
            <p v-html="introText"></p>
        </div>

        <footer class="footer white-fotL">
            <div class="footer-content center-relative">
                <div class="copyright-holder">{{ copyrightHolder }}</div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            aboutUsPhoto: require('../assets/images/abtbg.png'),
            entryTitle: 'About us',
            introText: `'LearningBALI was founded on the principles of providing relevant
                <br />
                experiences, connecting the best educators to various students,
                and <br />
                providing an innovative way of learning, inspired by the
                importance of <br />
                applicable educational knowledge.'`,

            copyrightHolder: '© 2021 LearningBALI',
        };
    },
};
</script>

<style></style>
