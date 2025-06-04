<template>
  <div class="word-test">
    <div class="header">
      <h1>Word Test</h1>
      <div class="toolbar">
        <div class="toggle">
          <CheckBox v-model="dontStop" />
          <span class="toggle-text">Don't stop after one round</span>
        </div>
        <div class="toggle">
          <CheckBox v-model="oneMoreAttempt" />
          <span class="toggle-text">One more attempt for each word</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div v-if="questionQueue.length > 0" class="question">
        <span>{{ vocabs_cn[questionQueue[0]] }}</span>
        <input
          type="text"
          v-model="answer"
          @keyup.enter="submittedAnwser ? nextQuestion() : checkAnswer()"
          placeholder="Enter the English word"
          class="input-answer"
          :class="{
            correct: answerCorrect === true,
            incorrect: answerCorrect === false,
          }"
        />
        <span
          class="attempt-message"
          v-if="attempt"
          style="color: #f44336; font-size: 14px"
        >
          Please try again!
        </span>
        <span
          class="correct-answer"
          v-if="submittedAnwser && answerCorrect === false"
          style="color: #f44336; font-size: 14px"
        >
          Correct answer: {{ vocabs[questionQueue[0]] }}
        </span>
        <span
          class="correct-answer"
          v-if="submittedAnwser && answerCorrect === true"
          style="color: #4caf50; font-size: 14px"
        >
          Correct!
        </span>
        <span>
          {{ qNums.length - questionQueue.length }}/{{ qNums.length }} answered
        </span>
      </div>
      <div v-else class="word-test__end">
        <p>Test completed!</p>
        <p>Your score of this round: {{ score }}/{{ qNums.length }}</p>
        <button @click="setupNewRound">Start Over</button>
      </div>
    </div>
    <div class="operation">
      <button @click="checkAnswer" v-if="!submittedAnwser">Check Answer</button>
      <button @click="nextQuestion" v-if="submittedAnwser">
        Next Question
      </button>
      <button @click="setupNewRound">Reset Quiz</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckBox from "@/components/CheckBox.vue";
import { reactive, ref } from "vue";

const qNums = setupQNums(20);
const questionQueue = reactive([] as number[]);
const score = ref(0);
const totalScore = ref(0);
const totalAnswered = ref(0);
const submittedAnwser = ref(false);
const answerCorrect = ref(null as boolean | null); // Use null to indicate no answer checked yet
const attempt = ref(false);

const dontStop = ref(false); // Checkbox to control whether to stop after one round
const oneMoreAttempt = ref(false); // Checkbox for one more attempt for each word

const answer = ref("");

setupNewRound();

function setupQNums(num: number) {
  return Array.from({ length: num }, (_, i) => i);
}
function setupNewRound() {
  score.value = 0;
  questionQueue.length = 0; // Clear the previous queue
  questionQueue.push(...qNums.sort(() => Math.random() - 0.5));
  answer.value = ""; // Reset the answer input
  submittedAnwser.value = false;
}

function checkAnswer() {
  if (questionQueue.length === 0) return;

  const currentIndex = questionQueue[0];
  answerCorrect.value = false; // Reset the answer correctness state
  // if (answer.value.trim().toLowerCase() === vocabs[currentIndex]) {
  //   score.value++;
  //   totalScore.value++;
  //   answerCorrect.value = true;
  // }
  if (
    Array.isArray(vocabs[currentIndex])
      ? vocabs[currentIndex].includes(answer.value.trim().toLowerCase())
      : vocabs[currentIndex] === answer.value.trim().toLowerCase()
  ) {
    score.value++;
    totalScore.value++;
    answerCorrect.value = true;
  } else {
    if (oneMoreAttempt.value && !attempt.value) {
      attempt.value = true;
      return;
    }
    answerCorrect.value = false;
  }
  attempt.value = false; // Reset the attempt state after a correct answer
  totalAnswered.value++;

  submittedAnwser.value = true;
}

function nextQuestion() {
  if (questionQueue.length > 0) {
    questionQueue.shift(); // Remove the answered question
    answer.value = ""; // Clear the input
    submittedAnwser.value = false;
    answerCorrect.value = null; // Reset the answer correctness state
  } else {
    // If no more questions, check if we should stop or reset
    if (dontStop.value) {
      setupNewRound(); // Reset for a new round
    } else {
      // Optionally, you can handle the case where no more questions are left
      console.log("No more questions left.");
    }
  }
}

const vocabs = [
  "amateur",
  "athlete",
  "authentic",
  "binge-watch",
  "bustling",
  "comedy",
  "comfort zone",
  ["cosy", "cozy"],
  "determination",
  "excel",
  "food poisoning",
  "life-changing",
  "relieve",
  "science fiction",
  "self-esteem",
  "silver screen",
  "theme",
  "untouched",
  "welcoming",
  ["with flying colours", "with flying colors"],
];
const vocabs_cn = [
  "业余",
  "运动员",
  "真实的",
  "狂看",
  "热闹、繁华",
  "喜劇",
  "舒适圈",
  "舒适",
  "決心",
  "擅长",
  "食物中毒",
  "改变人生的",
  "缓解",
  "科幻小说",
  "自尊心",
  "银幕",
  "主题",
  "未触及的",
  "欢迎的",
  "旗开得胜",
];
// show chi, enter english word(answer)
</script>

<style scoped lang="scss">
.word-test {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 12px;
  flex-wrap: wrap;

  .toggle {
    display: flex;
    align-items: center;
    gap: 6px;
  }
}

.question {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
}

.input-answer {
  width: 300px;
  padding: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-bottom: 2px solid white;
  text-align: center;
  font-size: 18px;
  transition: border-color 0.3s ease;

  &.correct {
    border-color: #4caf50; /* Green for correct answer */
  }
  &.incorrect {
    border-color: #f44336; /* Red for incorrect answer */
  }
}

.operation {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 60px;
}
</style>
