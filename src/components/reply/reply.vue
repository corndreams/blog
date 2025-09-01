<template>
  <yk-space size="m" class="reply">
    <yk-avatar img-url="https://www.huohuo90.com:3003/user/6353b034dd4b583975e77fbe.png" v-show="isComment"></yk-avatar>
    <yk-space dir="vertical" size="s" class="reply-main">
      <div class="reply-title">
        <div class="reply-name">
          <yk-text strong>{{ content.user?.name }}</yk-text>
          <yk-text type="third" style="font-size: 12px;"> {{ content.moment }}</yk-text>
        </div>
        <IconDeleteOutline class="reply-main-tag-delete" @click.stop="deleteReply(content.id)" v-show="!isComment" />
      </div>
      <yk-text type="secondary">{{ content.comment }}</yk-text>
      <yk-space size="s" align="center" class="reply-main-tag" justify="space-between" v-show="isComment">
        <yk-space size="s" align="center">
          <yk-tag type="primary">
            {{ content.article?.title }}
          </yk-tag>
          <yk-text type="danger" v-show="content.complaint">举报 {{ content.complaint }}</yk-text>
        </yk-space>
        <IconDeleteOutline class="reply-main-tag-delete" @click="deleteReply(content.id)" />
      </yk-space>
    </yk-space>
  </yk-space>
</template>

<script setup lang="ts">
import type { ReplyProps } from "./index.ts";
const props = withDefaults(defineProps<ReplyProps>(), {
  // content: () => ({}),
  isComment: true,
});
//defineEmits()声明事件
const emits = defineEmits(["delete"])

const deleteReply = (e: number) => {
  emits("delete", e)
}
</script>

<style lang="less" scoped>
.reply {
  width: 100%;

  &-main {
    border-bottom: 1px solid @line-color-s;
    width: 100%;
    padding-bottom: @space-l;
    flex: 1;

    &-tag {
      width: 100%;
      display: flex;
      justify-content: space-between;

      &-delete {
        cursor: pointer;
        width: 16px;
        height: 16px;
        color: @font-color-s;
        display: none;
      }
    }

  }

  &-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &-name {
    display: flex;
    flex-direction: column;
  }

  &:hover {
    .reply-main-tag-delete {
      display: block;
    }
  }
}
</style>