<template>
    <div class="input">
        <form>
            <input type="text" class="main-field" v-model="ans"><a href="#" :class="{Active: isActive}" @click='sendRequest'><img src="@/assets/send.svg"></a>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AnswerInput',
    data () {
        return {
            isActive: true,
            ans: null
        }
    },
    methods: {
        sendRequest () {
            
        }
    }
}
</script>
