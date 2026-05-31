<template>
  <div class="vocab-container">
    <h1>English Vocabulary</h1>
    <!-- <ul class="vocab-list">
      <li v-for="(word, index) in vocabs" :key="index" class="vocab-item">
        {{ word }}
      </li>
    </ul> -->
    <div class="toolbar">
      <div class="toggle">
        <CheckBox v-model="showWhenHover" class="checkbox" />
        <span class="toggle-text">Show English When Hover</span>
      </div>
      <div class="toggle">
        <CheckBox v-model="showChineseWhenHover" class="checkbox" />
        <span class="toggle-text">Show Chinese When Hover</span>
      </div>
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
          @click="show = show === index + 'en' ? '' : index + 'en'"
          :class="{
            show: show === index + 'en',
          }"
          >{{ item.word }}</span
        >
        <span
          class="word_cn"
          @click="show = show === index + 'cn' ? '' : index + 'cn'"
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
  "legislation",
  "drawback",
  "poverty",
  "vulnerable",
  "implement",
  "living standard",
  "come into effect",
  "cancel out",
  "subsidies",
  "criticize",
  "pilot scheme",
  "on a day-to-day basis",
  "aspirations",
  "specialized",
  "sponsored",
  "collaborate",
  "live up to",
  "an edge over",
  "recruit",
  "social responsibility",
];
const vocabs_cn = [
  "立法",
  "缺点",
  "贫困",
  "脆弱的/漏洞",
  "实施",
  "生活水平",
  "生效",
  "抵消",
  "补贴",
  "批评",
  "试点计划",
  "日常生活中",
  "抱负",
  "专业的",
  "赞助的",
  "合作",
  "符合",
  "优势",
  "招募",
  "社会责任",
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
  gap: 12px;
  flex-wrap: wrap;

  .toggle {
    display: flex;
    align-items: center;
    gap: 6px;
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
