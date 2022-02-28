<template>
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
                <div class="con-form last-form d-flex flex-wrap">
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
</template>

<script>
export default {};
</script>

<style lang="scss">
.con-form {
    // &.last-form {
    //     display: flex;
    //     flex-wrap: wrap;
    // }
    .col-7 {
        padding-right: 15px;
        padding-left: 15px;
    }
    .form-group {
        margin-bottom: 1rem;
        .input-group {
            .form-control {
                margin-bottom: 0;
            }
        }
    }
    input[type='submit'] {
        margin-top: 0 !important;
    }
}
</style>
