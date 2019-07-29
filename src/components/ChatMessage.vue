<template>
  <div class="main-container">
    <aside>
      <div class="aside-content">
        <h1 class="aside-heading">NCS Chatbot</h1>
        <p class="aside-paragraph" v-show="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi veritatis blanditiis corrupti ipsam consectetur, labore cupiditate suscipit provident, aspernatur atque laboriosam, et mollitia. Atque odio unde non voluptates exercitationem libero.</p>
      </div>
    </aside>
    <main>
      <div class="message">
        <div class="message-list">
          <div class="left">
            <img src="@/assets/robot.png" class="chat-icon left-icon">
            <div class="msg">
              Hey There!
              <br />I'am Chatbot. I'll Help you Through Your registration. Just follow my lead.
            </div>
          </div>
          <div class="left">
            <img src="@/assets/robot.png" class="chat-icon left-icon">
            <div class="msg">First, let me know your name.</div>
          </div>
          <div class="right">
            <div class="msg">Dhruv Srivastava</div>
            <img src="@/assets/boy.png" class="chat-icon right-icon">
          </div>
          <div class="left">
            <img src="@/assets/robot.png" class="chat-icon left-icon">
            <div class="msg">What is your Branch?</div>
          </div>
          <div class="right">
            <ul class="branch-list">
              <li>CSE</li>
              <li>IT</li>
              <li>EC</li>
              <li>IC</li>
              <li>ME</li>
              <li>EE</li>
              <li>CE</li>
              <li>EEE</li>
            </ul>
          </div>
          <div class="left">
            <img src="@/assets/robot.png" class="chat-icon left-icon">
            <div class="msg">Choose one of the options?</div>
          </div>
          <div class="right">
            <ul class="multiple-choice">
              <li>CSE<label><input type="checkbox"><span class="custom-checkbox"></span></label></li>
              <li>IT<label><input type="checkbox"><span class="custom-checkbox"></span></label></li>
              <li>EC<label><input type="checkbox"><span class="custom-checkbox"></span></label></li>
              <li>IC<label><input type="checkbox"><span class="custom-checkbox"></span></label></li>
            </ul>
          </div>
        </div>
      </div>
      <AnswerInput />
    </main>
  </div>
</template>

<script>
import AnswerInput from './AnswerInput'
export default {
  name: "ChatMessage",
  components: {
    AnswerInput
  },
  data() {
    return {
      para: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
