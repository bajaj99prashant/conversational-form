<template>
    <div class="text-compo">
        <div class="text-question layout">
            <label for="text-answer">Question-1 - Text Answer</label>
            <input type="text" name="text-answer">
        </div>
        <router-link to="#"><img src="@/assets/bin.svg" alt="delete-icon" class="delete-icon"></router-link>
    </div>
</template>

<script>
export default {
    name: 'TextQuestion'
}
</script>

<style>

</style>
