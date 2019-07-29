<template>
    <div class="right">
            <ul class="branch-list">
              <li v-for="(option, index) in options" :key="index"><router-link to="#">{{ option }}</router-link></li>
            </ul>
          </div>
</template>

<script>
export default {
    name: 'SingleOptionQuestion',
    prop: {
        option: Array
    },
    data () {
        return {
            
        }
    }
}
</script>

<style>

</style>
