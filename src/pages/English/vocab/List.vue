<template>
  <div class="vocab-container">
    <h1>English Vocabulary</h1>
    <!-- <ul class="vocab-list">
      <li v-for="(word, index) in vocabs" :key="index" class="vocab-item">
        {{ word }}
      </li>
    </ul> -->
    <div class="toolbar">
      <CheckBox v-model="showWhenHover" class="checkbox" />
      <span class="toggle-text">Show English When Hover</span>
      <CheckBox v-model="showChineseWhenHover" class="checkbox" />
      <span class="toggle-text">Show Chinese When Hover</span>
    </div>
    <div class="vocabs">
      <div
        v-for="(item, index) in vocabs_combined"
        :key="index"
        class="vocab-item"
        :class="{
          'show-when-hover': showWhenHover,
          'show-chinese-when-hover': showChineseWhenHover,
        }"
      >
        <span
          class="word"
          @click="show = index + 'en'"
          :class="{
            show: show === index + 'en',
          }"
          >{{ item.word }}</span
        >
        <span
          class="word_cn"
          @click="show = index + 'cn'"
          :class="{
            show: show === index + 'cn',
          }"
          >{{ item.word_cn }}</span
        >
      </div>
    </div>

    <div class="navigation">
      <RouterLink to="/english/vocab/test-word">Go to Word Test ></RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckBox from "@/components/CheckBox.vue";
import { ref } from "vue";

const showWhenHover = ref(false);
const showChineseWhenHover = ref(false);
const show = ref("0");

const vocabs = [
  "amateur",
  "athlete",
  "authentic",
  "binge-watch",
  "bustling",
  "comedy",
  "comfort zone",
  "cosy ",
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
  "with flying colours",
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
// change to [{ word: "amateur", word_cn: "業餘" }, ...]
const vocabs_combined = vocabs.map((word, index) => ({
  word: word,
  word_cn: vocabs_cn[index] || "",
}));
</script>

<style scoped lang="scss">
.vocab-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 6px;
  flex-wrap: wrap;

  .checkbox:not(:first-child) {
    margin-left: 10px;
  }
}

.vocabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // gap: 20px;
  max-width: 600px;

  .vocab-item {
    width: 300px;
    display: flex;
    // justify-content: center;
    gap: 10px;
    margin-top: 4px;

    span {
      font-size: 18px;
      transition: filter 0.3s ease;
      cursor: pointer;
    }

    .word {
      flex: 1;
      // border-bottom: 1px solid #ccc;
    }

    .word_cn {
      flex: 0.6;
      // border-bottom: 1px solid #ffffff;
    }

    &.show-when-hover .word {
      filter: blur(5px);

      &:hover,
      &.show {
        filter: blur(0);
      }
    }

    &.show-chinese-when-hover .word_cn {
      filter: blur(5px);

      &:hover,
      &.show {
        filter: blur(0);
      }
    }
  }
}

.navigation {
  margin-top: 20px;
  text-align: center;

  a {
    color: #7553ff;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s ease;

    &:hover {
      color: #5227ff;
    }
  }
}
</style>
