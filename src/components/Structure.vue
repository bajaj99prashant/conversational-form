<template>
    <div class="main-content">
        <aside>
            <div class="aside-content">
                <h1 class="aside-heading">{{ details.title }}</h1>
                <p class="aside-paragraph" v-if='para'>{{ details.description }}</p>
            </div>
        </aside>
        <main>
      
        </main>
    </div>
</template>

<script>
export default {
    name: 'Aside',
    props: {
        details: Object
    },
    data() {
        return{
            para: false
        }
    }
}
</script>

<style>

</style>
