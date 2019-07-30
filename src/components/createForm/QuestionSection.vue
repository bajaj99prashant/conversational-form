<template>
    <div class="questionSection">
        <h3>Questions</h3>
        <div class="question-welcome">
            <label for="welcome">Welcome Message</label>
            <textarea name="welcome" cols="30" rows="3"></textarea>
        </div>
        <TextQuestion />
        <MultipleChoice />
    </div>
</template>

<script>
import TextQuestion from './TextQuestion'
import MultipleChoice from './MultipleChoice'

export default {
    name: 'QuestionSection',
    components: {
        TextQuestion,
        MultipleChoice
    },
    data () {
        return {

        }
    }
}
</script>

<style>

</style>
