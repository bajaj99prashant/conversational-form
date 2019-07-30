<template>
    <div class="main-container">
        <aside>
            <div class="aside-content">
                <h1 class="aside-heading">NCS Chatbot</h1>
                <p class="aside-paragraph" v-if='para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci ipsum explicabo, tenetur voluptates voluptate distinctio quasi reprehenderit consequatur repudiandae corrupti accusamus aliquid natus incidunt aliquam id porro, sit neque itaque?</p>
            </div>
            <h5>Made by Nibble Computer Society</h5>
        </aside>
        <main>
            <FillFormChat />
            <AnswerInput />
        </main>
    </div>
</template>

<script>
import FillFormChat from '../components/fillForm/FillFormChat'
import AnswerInput from '../components/fillForm/AnswerInput'

export default {
    name: 'FillForm',
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

