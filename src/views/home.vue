<template>
    <div class="site-wrapper">
        <div
            id="undefined-sticky-wrapper"
            class="sticky-wrapper"
            :class="{ 'is-sticky': screenSize == 320 }"
        >
            <header class="header-holder">
                <div class="menu-wrapper center-relative relative">
                    <div class="header-logo">
                        <router-link :to="'#home'">
                            <img :src="logo" alt="Seppo" />
                        </router-link>
                        <!-- <a href="index.html">
                            <img v-bind:src="logo" alt="Seppo" />
                        </a> -->
                    </div>
                    <div
                        class="toggle-holder"
                        @click="showToggleMenu"
                        :class="{ on: isOn }"
                    >
                        <div id="toggle">
                            <div class="first-menu-line"></div>
                            <div class="second-menu-line"></div>
                            <div class="third-menu-line"></div>
                        </div>
                    </div>
                    <div class="menu-holder" :class="{ show: isOn }">
                        <nav id="header-main-menu">
                            <ul class="main-menu sm sm-clean btn-bav">
                                <li
                                    v-for="mainNav in mainNavs"
                                    :key="mainNav.id"
                                    @click="hideToggleMenu"
                                >
                                    <!-- <router-link
                                        :to="
                                            mainNav.href.replace(
                                                '#' + mainNav.href,
                                                ''
                                            )
                                        "
                                        >{{ mainNav.name }}</router-link
                                    > -->
                                    <router-link :to="'#' + mainNav.href">{{
                                        mainNav.name
                                    }}</router-link>

                                    <!-- <a :href="'#' + mainNav.href">{{
                                        mainNav.name
                                    }}</a> -->
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="clear"></div>
                </div>
            </header>
        </div>
        <div id="content" class="site-content center-relative">
            <!-- Home Section -->
            <div id="home" class="section no-page-title">
                <div class="section-wrapper block content-1170 center-relative">
                    <!-- <img src="../assets/images/hero_image_01.jpg">-->
                    <div class="content-wrapper vv">
                        <h1 class="big-text">
                            welcome to
                        </h1>
                        <span>
                            <img src="../assets/images/banner-logo.png"
                        /></span>
                    </div>
                </div>
            </div>

            <div id="services" class="section">
                <div class="section-wrapper block content-1170 center-relative">
                    <div class="content-wrapper">
                        <ul class="welcome-to">
                            <li class="big-text">welcome to</li>
                            <li class="rigt-logo">
                                <span>
                                    <img src="../assets/images/LearningBALI.png"
                                /></span>
                            </li>
                        </ul>

                        <hr />
                        <div class="new-skill">
                            <h3 class="entry-title">
                                LIFE SKILLS ARE CLICKS AWAY
                            </h3>

                            <div class="apple-bg">
                                <span>
                                    <img src="../assets/images/apple.png" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <Welcome></Welcome>

                <footer class="footer green-fotL">
                    <div class="footer-content center-relative">
                        <div class="copyright-holder">© 2021 LearningBALI</div>
                    </div>
                </footer>
            </div>

            <!-- About Section -->
            <AboutUs></AboutUs>
            <Goals></Goals>

            <Services></Services>

            <ServicesList></ServicesList>

            <Carrer></Carrer>

            <Login></Login>

            <Contact></Contact>
        </div>
        <!-- Footer -->
        <Copyright></Copyright>
        <!-- <footer class="footer">
            <div class="footer-content center-relative">
                <div class="copyright-holder">© 2021 LearningBALI</div>
            </div>
        </footer> -->
    </div>
</template>

<script>
import Welcome from '../components/welcome.vue';
import AboutUs from '../components/about-us.vue';
import Goals from '../components/goals.vue';
import Services from '../components/services.vue';
import ServicesList from '../components/services-list.vue';
import Carrer from '../components/carrer.vue';
import Login from '../components/login.vue';
import Contact from '../components/contact.vue';
import Copyright from '../components/copyright.vue';

export default {
    name: 'Home',
    components: {
        Welcome,
        AboutUs,
        Goals,
        Services,
        ServicesList,
        Carrer,
        Login,
        Contact,
        Copyright,
    },
    data: function() {
        return {
            mainNavs: [
                { id: 1, href: 'about', name: 'About us' },
                { id: 2, href: 'goal', name: 'Goals' },
                { id: 3, href: 'serv', name: 'Services' },
                { id: 4, href: 'carrer', name: 'careers' },
                { id: 5, href: 'login', name: 'Login' },
                { id: 6, href: 'contact', name: 'Contact' },
            ],
            logo: require('../assets/images/LearningBALI.png'),
            screenSize: 0,
            copyrightHolder: '© 2021 LearningBALI',

            isOn: false,
        };
    },
    mounted: function() {
        window.addEventListener('resize', this.getWindowWidth);

        window.addEventListener('scroll', function() {
            let header = document.querySelector('.header-holder');
            header.classList.toggle('is-sticky', window.scrollY > 0);
        });

        // const el = document.querySelector(this.$route.hash);
        // el && el.scrollIntoView();
        // console.log('el ', el);
    },
    computed: {
        iconUrl() {
            return require('../assets/images/bf.jpg');
            // The path could be '../assets/img.png', etc., which depends on where your vue file is
        },
    },
    methods: {
        getWindowWidth() {
            this.screenSize = window.innerWidth;
        },

        showToggleMenu: function() {
            // console.log('Toggle menu ');
            this.isOn = !this.isOn;
        },

        hideToggleMenu: function() {
            // console.log('hideToggleMenu');
            this.isOn = false;
        },
    },
};
</script>

<style lang="scss">
body {
    font-family: 'Roboto', sans-serif;
}
.is-sticky {
    position: fixed;
    top: 0;
}
.router-link-active {
    color: #409176 !important;
}
.site-wrapper {
    // img {
    //     display: block;
    //     margin: auto;
    // }
    .abt-img {
        img {
            display: block;
        }
    }

    .welcome-to {
        @media (min-width: 1280px) {
            display: flex !important;
            justify-content: center;
            img {
                display: block;
            }
        }
    }

    .new-skill {
        @media (min-width: 1280px) {
            display: flex !important;
            justify-content: center;
            img {
                display: block;
            }
        }
    }

    #about h3.entry-title,
    #goal h3.entry-title,
    #serv h3.entry-title,
    #carrer h3.entry-title {
        transform: translate(0%, -55%);
    }
}
</style>
