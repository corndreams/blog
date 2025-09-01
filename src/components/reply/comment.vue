<template>
  <div class="card comment">
    <div class="card-title">
      <span class="card-title-name">评论 123</span>
    </div>
    <yk-scrollbar ref="scrollbar" :height="height" style="padding:0 28px;">
      <yk-space dir="vertical" size="s">
        <Reply v-for="item in comments" :key="item.id" :content="item" :is-comment="false" @delete="deleteComment" />
      </yk-space>
    </yk-scrollbar>
    <yk-space class="comment-pagination">
      <yk-pagination fix-width :total="count" pager-count="6" size="m" @change="changePage" />
    </yk-space>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, h } from "vue";
import { Reply } from "./index.ts";
import { comment } from "@/mock/data.ts";
import type { CommentProps } from "./index.ts";

const props = withDefaults(defineProps<CommentProps>(), {
  pageSize: 10,
  height: '650px',
})

const proxy: any = getCurrentInstance()?.proxy

const count = ref<number>(123)
const comments = ref()

type Request = {
  token?: string;
  pageSize: number;
  nowPage: number;
  count?: boolean
}

const request: Request = {
  pageSize: props.pageSize,
  nowPage: 1,
  count: false,
}

const getCommentData = () => {
  console.log(comment.data);

  let data = comment.data
  comments.value = data.list.slice(
    (request.nowPage - 1) * request.pageSize,
    request.nowPage * request.pageSize
  )
  console.log(comments.value);
}

const changePage = (e: number) => {
  request.nowPage = e
  getCommentData()
}

const deleteComment = (e: number) => {
  console.log(e);
  console.log(comment.data);
  comments.value = comments.value.filter((obj: any) => {
    return obj.id !== e
  })
  console.log(comment.data);
  proxy.$message({
    type: 'success',
    message: h('span', { style: 'color:green;' }, '删除成功'),
  })
  // getCommentData()
}

getCommentData()
</script>

<style lang="less" scoped>
.comment {
  position: relative;
  padding: @space-xl 0 64px;

  .card-title-name {
    padding: 0 @space-xl;
  }

  .comment-pagination {
    padding: @space-l @space-xl;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid @line-color-s;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
}
</style>