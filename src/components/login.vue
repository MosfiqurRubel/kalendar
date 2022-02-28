<template>
    <div id="login" class="section">
        <div class="section-wrapper block content-1170 center-relative">
            <span class="hor"> green </span>
            <div class="login-ti">
                <h2>LOGIN WITH</h2>
                <div class="form-start">
                    <ul>
                        <li>
                            <img src="../assets/images/facebook.png" />
                        </li>
                        <li>
                            <img src="../assets/images/google.png" />
                        </li>
                    </ul>
                    <form>
                        <div class="con-form">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i
                                            class="fa fa-user-circle-o"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                    <input
                                        class="form-control"
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div class="form-group ty">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i
                                            class="fa fa-envelope"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                    <input
                                        class="form-control"
                                        id="email"
                                        name="email"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div class="form-group ty">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i
                                            class="fa fa-search"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                    <input
                                        class="form-control"
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <input type="submit" value="sign up" />
                        </div>
                    </form>
                </div>
            </div>
            <span class="ver"> greens</span>
        </div>

        <!-- <footer class="footer white-fotL ser-f login-g">
            <div class="footer-content center-relative">
                <div class="copyright-holder">© 2021 LearningBALI</div>
            </div>
        </footer> -->
        <Copyright :class="['white-fotL', 'ser-f', 'login-g']"></Copyright>
    </div>
</template>

<script>
import Copyright from '../components/copyright.vue';

export default {
    components: {
        Copyright,
    },
};
</script>

<style></style>
