<template>
    <div id="serv" class="section">
        <div class="abt-img">
            <img :src="servPhoto" />
            <h3 class="entry-title">
                {{ entryTitle.toUpperCase() }}
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
</template>

<script>
export default {
    data: function() {
        return {
            servPhoto: require('../assets/images/sers.png'),
            entryTitle: 'services',
        };
    },
};
</script>

<style></style>
