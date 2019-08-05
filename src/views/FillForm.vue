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
            <div class="message">
                <div class="message-list" ref="container">
                    <Question querydata="HI, I am NCS conversational AI and you can talk to me normally."/>
                </div>
            </div>
            <div class="input">
                <form>
                    <input type="text" class="main-field" v-model="ans"><a href="#" :class="{Active: isActive}" @click='send'><img src="@/assets/send.svg"></a>
                </form>
            </div>
        </main>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Question from '../components/fillForm/Question'
import Answer from '../components/fillForm/Answer'

export default {
    name: 'FillForm',
    components: {
        Question,
        Answer
    },
    data() {
        return{
            para: false,
            isActive: true,
            ans: null
        }
    },
    methods: {
        send(){
            axios.post('http://localhost:8000/bot/',{
                'query': `${this.ans}`
            }).then((response)=> {
                var ComponentClass = Vue.extend(Answer)
                var instance = new ComponentClass({
                    propsData: { Answer: this.ans }
                })
                instance.$mount()   
                this.$refs.container.appendChild(instance.$el)
                this.ans=null
                var Component2 = Vue.extend(Question)
                var ins = new Component2({
                    propsData: { querydata: response.data.response}
                })
                ins.$mount()
                this.$refs.container.appendChild(ins.$el)
            }).catch(err => {
                console.log(err)
            })
            
            
        }
    }
}
</script>

<style>

</style>

