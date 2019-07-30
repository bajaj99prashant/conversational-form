<template>
    <div class="main-container">
        <aside>
            <div class="aside-content">
                <h1 class="aside-heading">Chatbot - Form Builder</h1>
                <p class="aside-paragraph" v-if='para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci ipsum explicabo, tenetur voluptates voluptate distinctio quasi reprehenderit consequatur repudiandae corrupti accusamus aliquid natus incidunt aliquam id porro, sit neque itaque?</p>
            </div>
            <h5>Made by Nibble Computer Society</h5>
        </aside>
        <main>
            <CreateFormChat />
            <QuestionInput />
        </main>
    </div>
</template>

<script>
import CreateFormChat from '../components/createForm/CreateFormChat'
import QuestionInput from '../components/createForm/QuestionInput'

export default {
    name: 'CreateForm',
    components: {
        CreateFormChat,
        QuestionInput
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

