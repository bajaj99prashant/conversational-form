<template>
    <div class="main-container">
        <aside>
            <div class="aside-content">
                <h1 class="aside-heading">NCS Chatbot</h1>
                <p class="aside-paragraph" v-if='para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci ipsum explicabo, tenetur voluptates voluptate distinctio quasi reprehenderit consequatur repudiandae corrupti accusamus aliquid natus incidunt aliquam id porro, sit neque itaque?</p>
            </div>
        </aside>
        <main>
            <FillFormChat />
            <AnswerInput />
        </main>
    </div>
</template>

<script>
import FillFormChat from './FillFormChat'
import AnswerInput from './AnswerInput'

export default {
    name: 'Structure',
    components: {
        FillFormChat,
        AnswerInput
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
