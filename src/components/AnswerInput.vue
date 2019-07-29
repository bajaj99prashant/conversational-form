<template>
    <div class="input">
        <form>
            <input type="text" class="main-field"><a href="#" :class="{Active: isActive}"><img src="@/assets/send.svg"></a>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AnswerInput',
    data () {
        return {
            isActive: true
        }
    }
}
</script>
