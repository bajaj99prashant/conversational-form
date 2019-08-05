<template>
    <div class="left">
            <img src="@/assets/robot.png" class="chat-icon left-icon">
            <div class="msg">
              {{ querydata }}
            </div>
          </div>
</template>

<script>
export default {
    name: 'Question',
    props: ['querydata'],
    data () {
        return {

        }
    }
}
</script>

<style>

</style>
