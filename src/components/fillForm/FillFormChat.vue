<template>
    <div class="message">
        <div class="message-list">
            <Question querydata="HI, I am NCS conversational AI and you can talk to me normally."/>
            <Answer/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Question from './Question'
import Answer from './Answer'

export default {
    name: 'FillFormChat',
    components: {
        Question,
        Answer
    },
    data (){
        return {
            
        }
    },
    mounted() {

    }
}
</script>

<style>

</style>
