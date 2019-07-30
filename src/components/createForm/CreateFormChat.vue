<template>
    <div class="message">
        <div class="message-list">
            <EventDetails />
            <QuestionSection />
        </div>
    </div>
</template>

<script>
import EventDetails from './EventDetails'
import QuestionSection from './QuestionSection'

export default {
    name: 'CreateFormChat',
    components: {
        EventDetails,
        QuestionSection
    }
}
</script>

<style>

</style>
