<template>
    <div class="right">
        <ul class="multiple-choice">
            <li v-for="(option, index) in multipleOPtions" :key="index">{{ option }}<label><input type="checkbox"><span class="custom-checkbox"></span></label></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MultipleOptionQuestion',
    prop: {
        multipleOPtions: Array
    },
    data () {
        return {
            
        }
    }
}
</script>

<style>

</style>
