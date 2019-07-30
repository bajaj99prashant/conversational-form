<template>
    <div class="questionSection">
        <h3>Event Details</h3>
        <div class="title-description">
            <div class="event-title layout">
                <label for="title">Title</label>
                <input type="text" name="text">
            </div>
            <div class="event-color-theme layout">
                <label for="color">Color code (eg.#12D48E)</label>
                <input type="text" name="color">
            </div>
        </div>
        <div class="question-welcome">
            <label for="description">Description</label>
            <textarea name="description" cols="30" rows="3"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EventDetails'
}
</script>

<style>

</style>
