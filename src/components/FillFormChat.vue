<template>
    <div class="message">
        <div class="message-list">
            <Question/>
            <Question/>
            <Answer/>
            <Question/>
            <SingleOption/>
            <Question/>
            <Multiple/>
        </div>
    </div>
</template>

<script>
import Question from './Question'
import SingleOption from './SingleOptionQuestion'
import Multiple from './MultipleOptionQuestion'
import Answer from './Answer'

export default {
    name: 'FillFormChat',
    components: {
        Question,
        SingleOption,
        Multiple,
        Answer
    },
    data (){
        return {
            
        }
    }
}
</script>

<style>

</style>
