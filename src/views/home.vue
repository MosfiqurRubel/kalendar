<template>
    <div class="site-wrapper">
        <div
            id="undefined-sticky-wrapper"
            class="sticky-wrapper"
            style="height: 77px"
            :class="{ 'is-sticky': screenSize == 320 }"
        >
            <header
                class="header-holder is-sticky"
                style="position: fixed; top: 0;"
            >
                <div class="menu-wrapper center-relative relative">
                    <div class="header-logo">
                        <a href="index.html">
                            <img v-bind:src="logo" alt="Seppo" />
                        </a>
                    </div>
                    <div class="toggle-holder">
                        <div id="toggle">
                            <div class="first-menu-line"></div>
                            <div class="second-menu-line"></div>
                            <div class="third-menu-line"></div>
                        </div>
                    </div>
                    <div class="menu-holder">
                        <nav id="header-main-menu">
                            <ul class="main-menu sm sm-clean btn-bav">
                                <li
                                    v-for="mainNav in mainNavs"
                                    :key="mainNav.id"
                                >
                                    <router-link :to="'#' + mainNav.href">{{
                                        mainNav.name
                                    }}</router-link>

                                    <!-- <a :href="'#' + mainNav.href">{{
                                        mainNav.name
                                    }}</a> -->
                                    <!-- @click="scrollMeTo(mainNav.href)" -->
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
            <!-- Services Section -->
            <div id="services" class="section">
                <div class="section-wrapper block content-1170 center-relative">
                    <div class="content-wrapper">
                        <ul>
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

            <div id="serv" class="section">
                <div class="abt-img">
                    <img src="../assets/images/sers.png" />
                    <h3 class="entry-title">
                        SERVICES
                    </h3>
                    <div class="for">
                        <form action="/action_page.php">
                            <input
                                type="text"
                                id="fname"
                                placeholder="Find a service"
                            />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
            <div class="green">
                <div
                    class="section-wrapper block content-1170 center-relative tops"
                >
                    <div class="col-smm-3">
                        <div class="serv-container">
                            <div class="white-g">
                                <img src="../assets/images/box-bg.jpg" />
                                <div class="ser-desc">
                                    <span>PHYSICAL EDUCATION</span>
                                    <h2>Boxing Classes</h2>
                                    <ul>
                                        <li><span>Feat. </span>Agung</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-smm-3">
                        <div class="serv-container">
                            <div class="white-g">
                                <img src="../assets/images/cok.jpg" />
                                <div class="ser-desc">
                                    <span>CULINARY ARTS</span>
                                    <h2>Cooking Classes</h2>
                                    <ul>
                                        <li><span>Feat.</span>Maya</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-smm-3">
                        <div class="serv-container">
                            <div class="white-g">
                                <img src="../assets/images/robo.jpg" />
                                <div class="ser-desc">
                                    <span>IT</span>
                                    <h2>Robotics</h2>
                                    <ul>
                                        <li>
                                            <span>Feat.</span>Robotics Denpasar
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="clearboth"></div>
                    <div class="col-smm-3">
                        <div class="serv-container">
                            <div class="white-g">
                                <img src="../assets/images/yg.jpg" />
                                <div class="ser-desc">
                                    <span>PHYSICAL EDUCATION</span>
                                    <h2>Yoga Classes</h2>
                                    <ul>
                                        <li><span>Feat.</span>Duyen</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-smm-3">
                        <div class="serv-container">
                            <div class="white-g">
                                <img src="../assets/images/dg.jpg" />
                                <div class="ser-desc">
                                    <span>CREATIVE ARTS</span>
                                    <h2>DJ 101</h2>
                                    <ul>
                                        <li><span>Feat.</span>DJ Vebo</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-smm-3">
                        <div class="serv-container">
                            <div class="white-g">
                                <img src="../assets/images/cont.jpg" />
                                <div class="ser-desc">
                                    <span>CREATIVE ARTS</span>
                                    <h2>Content Creating</h2>
                                    <ul>
                                        <li><span>Feat.</span>Fernie</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clearboth"></div>

                    <div class="col-smm-3">
                        <div class="serv-container">
                            <div class="white-g">
                                <img src="../assets/images/box-bg.jpg" />
                                <div class="ser-desc">
                                    <span>PHYSICAL EDUCATION</span>
                                    <h2>Boxing Classes</h2>
                                    <ul>
                                        <li><span>Feat. </span>Agung</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-smm-3">
                        <div class="serv-container">
                            <div class="white-g">
                                <img src="../assets/images/cok.jpg" />
                                <div class="ser-desc">
                                    <span>CULINARY ARTS</span>
                                    <h2>Cooking Classes</h2>
                                    <ul>
                                        <li><span>Feat.</span>Maya</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-smm-3">
                        <div class="serv-container">
                            <div class="white-g">
                                <img src="../assets/images/robo.jpg" />
                                <div class="ser-desc">
                                    <span>IT</span>
                                    <h2>Robotics</h2>
                                    <ul>
                                        <li>
                                            <span>Feat.</span>Robotics Denpasar
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a class="load" href="javascript:void(0)">Load more </a>
                </div>

                <footer class="footer white-fotL ser-f">
                    <div class="footer-content center-relative">
                        <div class="copyright-holder">© 2021 LearningBALI</div>
                    </div>
                </footer>
            </div>
            <div id="carrer" class="section">
                <div class="abt-img">
                    <img src="../assets/images/car.jpg" />
                    <h3 class="entry-title">
                        CAREERS
                    </h3>
                </div>
                <div
                    class="section-wrapper block content-1170 center-relative white-bg"
                >
                    <div class="for job-form">
                        <form action="/action_page.php">
                            <input
                                type="text"
                                id="fname"
                                placeholder="Please input a job title..."
                            />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
                <div
                    class="section-wrapper block content-1170 center-relative second-row full-foot"
                >
                    <div class="container">
                        <div id="accordion" class="accordion">
                            <div class="card mb-0">
                                <div
                                    class="card-header collapsed"
                                    data-toggle="collapse"
                                    href="#collapseOne"
                                >
                                    <a class="card-title">
                                        <div class="cr-bg">
                                            <span>
                                                <img
                                                    src="../assets/images/one-accrod.jpg"
                                                />
                                            </span>
                                            <div class="pos-set">
                                                <h5>Educator Position</h5>
                                                <p>Available Now</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    id="collapseOne"
                                    class="card-body collapse"
                                    data-parent="#accordion"
                                >
                                    <div class="white-bgg">
                                        <h6>Job Description</h6>
                                        <p>Responsibilities</p>
                                        <ul>
                                            <li>
                                                1. Educating different
                                                experiences in order for the
                                                students to be able to apply
                                                different life skills.
                                            </li>
                                            <li class="bg">
                                                2. Must be able to showcase a
                                                good example to students
                                                Requirements <br />
                                                1. Tech Savvy <br />
                                                2. Proficient in English <br />
                                                3. A Good Grasp of Skill
                                                <br />
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="container upd">
                                        <div class="upload-form">
                                            <h1>
                                                THINK YOU’VE GOT WHAT IT TAKES?
                                            </h1>
                                            <div class="blackstr">
                                                <form>
                                                    <div
                                                        class="con-form last-form"
                                                    >
                                                        <div class="cols-12">
                                                            <div
                                                                class="form-group"
                                                            >
                                                                <div
                                                                    class="input-group"
                                                                >
                                                                    <input
                                                                        class="form-control"
                                                                        id="name"
                                                                        name="name"
                                                                        type="text"
                                                                        placeholder="First Name"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="form-group"
                                                            >
                                                                <div
                                                                    class="input-group"
                                                                >
                                                                    <input
                                                                        class="form-control"
                                                                        id="name"
                                                                        name="name"
                                                                        type="text"
                                                                        placeholder="Last Name"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="form-group ty"
                                                            >
                                                                <div
                                                                    class="input-group"
                                                                >
                                                                    <input
                                                                        class="form-control"
                                                                        id="phone"
                                                                        name="phone"
                                                                        type="text"
                                                                        placeholder="Email address"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="upload-blo"
                                                            >
                                                                <label
                                                                    for="myfile"
                                                                    >Upload Your
                                                                    CV</label
                                                                >
                                                                <input
                                                                    type="file"
                                                                    id="myfile"
                                                                    name="myfile"
                                                                />
                                                                <br />
                                                                <br />
                                                                <label
                                                                    for="myfile"
                                                                    >Upload Your
                                                                    Resume</label
                                                                >
                                                                <input
                                                                    type="file"
                                                                    id="myfile"
                                                                    name="myfile"
                                                                />
                                                                <br />
                                                                <br />
                                                            </div>
                                                        </div>
                                                        <input
                                                            type="submit"
                                                            value="Submit"
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="card-header collapsed"
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#collapseTwo"
                                >
                                    <a class="card-title">
                                        <div class="cr-bg">
                                            <span>
                                                <img
                                                    src="../assets/images/third-accrd-bg.jpg"
                                                />
                                            </span>
                                            <div class="pos-set">
                                                <h5>SMM Position</h5>
                                                <p>Available Now</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    id="collapseTwo"
                                    class="card-body collapse"
                                    data-parent="#accordion"
                                >
                                    <div class="white-bgg">
                                        <h6>Job Description</h6>
                                        <p>Responsibilities</p>
                                        <ul>
                                            <li>
                                                1. Educating different
                                                experiences in order for the
                                                students to be able to apply
                                                different life skills.
                                            </li>
                                            <li class="bg">
                                                2. Must be able to showcase a
                                                good example to students
                                                Requirements <br />
                                                1. Tech Savvy <br />
                                                2. Proficient in English <br />
                                                3. A Good Grasp of Skill
                                                <br />
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="container upd">
                                        <div class="upload-form">
                                            <h1>
                                                THINK YOU’VE GOT WHAT IT TAKES?
                                            </h1>
                                            <div class="blackstr">
                                                <form>
                                                    <div
                                                        class="con-form last-form"
                                                    >
                                                        <div class="cols-12">
                                                            <div
                                                                class="form-group"
                                                            >
                                                                <div
                                                                    class="input-group"
                                                                >
                                                                    <input
                                                                        class="form-control"
                                                                        id="name"
                                                                        name="name"
                                                                        type="text"
                                                                        placeholder="First Name"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="form-group"
                                                            >
                                                                <div
                                                                    class="input-group"
                                                                >
                                                                    <input
                                                                        class="form-control"
                                                                        id="name"
                                                                        name="name"
                                                                        type="text"
                                                                        placeholder="Last Name"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="form-group ty"
                                                            >
                                                                <div
                                                                    class="input-group"
                                                                >
                                                                    <input
                                                                        class="form-control"
                                                                        id="phone"
                                                                        name="phone"
                                                                        type="text"
                                                                        placeholder="Email address"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="upload-blo"
                                                            >
                                                                <label
                                                                    for="myfile"
                                                                    >Upload Your
                                                                    CV</label
                                                                >
                                                                <input
                                                                    type="file"
                                                                    id="myfile"
                                                                    name="myfile"
                                                                />
                                                                <br />
                                                                <br />
                                                                <label
                                                                    for="myfile"
                                                                    >Upload Your
                                                                    Resume</label
                                                                >
                                                                <input
                                                                    type="file"
                                                                    id="myfile"
                                                                    name="myfile"
                                                                />
                                                                <br />
                                                                <br />
                                                            </div>
                                                        </div>
                                                        <input
                                                            type="submit"
                                                            value="Submit"
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="card-header collapsed"
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#collapseThree"
                                >
                                    <a class="card-title">
                                        <div class="cr-bg">
                                            <span>
                                                <img
                                                    src="../assets/images/two-accord.jpg"
                                                />
                                            </span>
                                            <div class="pos-set">
                                                <h5>HR Position</h5>
                                                <p>Available Now</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    id="collapseThree"
                                    class="collapse"
                                    data-parent="#accordion"
                                >
                                    <div class="white-bgg">
                                        <h6>Job Description</h6>
                                        <p>Responsibilities</p>
                                        <ul>
                                            <li>
                                                1. Educating different
                                                experiences in order for the
                                                students to be able to apply
                                                different life skills.
                                            </li>
                                            <li class="bg">
                                                2. Must be able to showcase a
                                                good example to students
                                                Requirements <br />
                                                1. Tech Savvy <br />
                                                2. Proficient in English <br />
                                                3. A Good Grasp of Skill
                                                <br />
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="container upd">
                                        <div class="upload-form">
                                            <h1>
                                                THINK YOU’VE GOT WHAT IT TAKES?
                                            </h1>
                                            <div class="blackstr">
                                                <form>
                                                    <div
                                                        class="con-form last-form"
                                                    >
                                                        <div class="cols-12">
                                                            <div
                                                                class="form-group"
                                                            >
                                                                <div
                                                                    class="input-group"
                                                                >
                                                                    <input
                                                                        class="form-control"
                                                                        id="name"
                                                                        name="name"
                                                                        type="text"
                                                                        placeholder="First Name"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="form-group"
                                                            >
                                                                <div
                                                                    class="input-group"
                                                                >
                                                                    <input
                                                                        class="form-control"
                                                                        id="name"
                                                                        name="name"
                                                                        type="text"
                                                                        placeholder="Last Name"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="form-group ty"
                                                            >
                                                                <div
                                                                    class="input-group"
                                                                >
                                                                    <input
                                                                        class="form-control"
                                                                        id="phone"
                                                                        name="phone"
                                                                        type="text"
                                                                        placeholder="Email address"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="upload-blo"
                                                            >
                                                                <label
                                                                    for="myfile"
                                                                    >Upload Your
                                                                    CV</label
                                                                >
                                                                <input
                                                                    type="file"
                                                                    id="myfile"
                                                                    name="myfile"
                                                                />
                                                                <br />
                                                                <br />
                                                                <label
                                                                    for="myfile"
                                                                    >Upload Your
                                                                    Resume</label
                                                                >
                                                                <input
                                                                    type="file"
                                                                    id="myfile"
                                                                    name="myfile"
                                                                />
                                                                <br />
                                                                <br />
                                                            </div>
                                                        </div>
                                                        <input
                                                            type="submit"
                                                            value="Submit"
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="card-header collapsed"
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#collapsefour"
                                >
                                    <a class="card-title">
                                        <div class="cr-bg">
                                            <span>
                                                <img
                                                    src="../assets/images/for-accrd.jpg"
                                                />
                                            </span>
                                            <div class="pos-set">
                                                <h5>CS Position</h5>
                                                <p>Available Now</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    id="collapsefour"
                                    class="collapse"
                                    data-parent="#accordion"
                                >
                                    <div class="white-bgg">
                                        <h6>Job Description</h6>
                                        <p>Responsibilities</p>
                                        <ul>
                                            <li>
                                                1. Educating different
                                                experiences in order for the
                                                students to be able to apply
                                                different life skills.
                                            </li>
                                            <li class="bg">
                                                2. Must be able to showcase a
                                                good example to students
                                                Requirements <br />
                                                1. Tech Savvy <br />
                                                2. Proficient in English <br />
                                                3. A Good Grasp of Skill
                                                <br />
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="container upd">
                                        <div class="upload-form">
                                            <h1>
                                                THINK YOU’VE GOT WHAT IT TAKES?
                                            </h1>
                                            <div class="blackstr">
                                                <form>
                                                    <div
                                                        class="con-form last-form"
                                                    >
                                                        <div class="cols-12">
                                                            <div
                                                                class="form-group"
                                                            >
                                                                <div
                                                                    class="input-group"
                                                                >
                                                                    <input
                                                                        class="form-control"
                                                                        id="name"
                                                                        name="name"
                                                                        type="text"
                                                                        placeholder="First Name"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="form-group"
                                                            >
                                                                <div
                                                                    class="input-group"
                                                                >
                                                                    <input
                                                                        class="form-control"
                                                                        id="name"
                                                                        name="name"
                                                                        type="text"
                                                                        placeholder="Last Name"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="form-group ty"
                                                            >
                                                                <div
                                                                    class="input-group"
                                                                >
                                                                    <input
                                                                        class="form-control"
                                                                        id="phone"
                                                                        name="phone"
                                                                        type="text"
                                                                        placeholder="Email address"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="upload-blo"
                                                            >
                                                                <label
                                                                    for="myfile"
                                                                    >Upload Your
                                                                    CV</label
                                                                >
                                                                <input
                                                                    type="file"
                                                                    id="myfile"
                                                                    name="myfile"
                                                                />
                                                                <br />
                                                                <br />
                                                                <label
                                                                    for="myfile"
                                                                    >Upload Your
                                                                    Resume</label
                                                                >
                                                                <input
                                                                    type="file"
                                                                    id="myfile"
                                                                    name="myfile"
                                                                />
                                                                <br />
                                                                <br />
                                                            </div>
                                                        </div>
                                                        <input
                                                            type="submit"
                                                            value="Submit"
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer class="footer white-fotL ser-f kl">
                    <div class="footer-content center-relative">
                        <div class="copyright-holder">© 2021 LearningBALI</div>
                    </div>
                </footer>
            </div>
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

                <footer class="footer white-fotL ser-f login-g">
                    <div class="footer-content center-relative">
                        <div class="copyright-holder">© 2021 LearningBALI</div>
                    </div>
                </footer>
            </div>
            <div id="contact" class="section">
                <div class="abt-img">
                    <img src="../assets/images/con-men.jpg" />
                    <h3 class="entry-title">
                        CONTACT
                    </h3>
                    <p>Need an expert? Our support team is here to help!</p>
                </div>
                <div class="section-wrapper block content-1170 center-relative">
                    <form>
                        <div class="con-form last-form">
                            <div class="col-7">
                                <div class="form-group">
                                    <div class="input-group">
                                        <input
                                            class="form-control"
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group">
                                        <input
                                            class="form-control"
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <div class="form-group ty">
                                    <div class="input-group">
                                        <input
                                            class="form-control"
                                            id="email"
                                            name="email"
                                            type="text"
                                            placeholder="Phone Number	"
                                        />
                                    </div>
                                </div>
                                <div class="form-group ty">
                                    <div class="input-group">
                                        <input
                                            class="form-control"
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            placeholder="Email address"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="colthird">
                                <textarea
                                    name="message"
                                    cols="40"
                                    rows="10"
                                    class="wpcf7-form-control wpcf7-textarea"
                                    aria-invalid="false"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <footer class="footer">
            <div class="footer-content center-relative">
                <div class="copyright-holder">© 2021 LearningBALI</div>
            </div>
        </footer>
    </div>
</template>

<script>
// import '../assets/js/jquery.js';
// import '../assets/js/jquery.sticky.js';
// import '../assets/js/tipper.js';
// import '../assets/js/jquery.fitvids.js';
// import '../assets/js/jquery.smartmenus.min.js';
// import '../assets/js/jquery.sticky-kit.min.js';
// import '../assets/js/main.js';

import Welcome from '../components/welcome.vue';
import AboutUs from '../components/about-us.vue';
import Goals from '../components/goals.vue';

export default {
    name: 'Home',
    components: {
        Welcome,
        AboutUs,
        Goals,
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
        };
    },
    mounted: function() {
        window.addEventListener('resize', this.getWindowWidth);
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

        // scrollMeTo(id) {
        //     console.log('scrolMe to ', id);
        //     const el = document.querySelector(id);
        //     el &&
        //         el.scrollIntoView({
        //             behavior: 'smooth',
        //             block: 'nearest',
        //             inline: 'nearest',
        //         });
        // },
    },
};
</script>

<style></style>
