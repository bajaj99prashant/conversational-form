<template>
    <div class="left">
            <img src="@/assets/robot.png" class="chat-icon left-icon">
            <div class="msg">
              {{ Question.title }}<br>{{ Question.description }}
            </div>
          </div>
</template>

<script>
export default {
    name: 'Question',
    prop : {
        Question: String
    },
    data () {
        return {

        }
    }
}
</script>

<style>

</style>
