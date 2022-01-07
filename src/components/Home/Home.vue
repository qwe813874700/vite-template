<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
import { ref } from 'vue'
const chagneLanguage = (type: string) => {
  locale.value = type
}
</script>

<template>
  <div class="test">
    <div class="test-item"></div>
  </div>
  {{ $t('common.home') }}
  <el-button type="primary" @click="chagneLanguage('en')">{{ $t('common.english') }}</el-button>
  <el-button type="primary"  @click="chagneLanguage('zh')">{{ $t('common.chinese') }}</el-button>
</template>

<style lang="scss">
.test {
  .test-item {
    width: 100px;
    height: 100px;
    background: red;
  }
}
</style>