<template>
  <yk-drawer placement="right" :show="active" @close="active">
    <template #header>
      <h2>
        <IconBulbOutline />
        私信 {{ count }}
      </h2>
    </template>
    <yk-space dir="vertical" size="s">
      <Reply v-for="item in comments" :key="item.id" :content="item" :is-comment="false"
        @delete="deleteComment" />
    </yk-space>
    <template #footer>
      <yk-pagination :total="count" simple @change="changePage" />
    </template>
  </yk-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { informationProps } from "./index";

import { getCurrentInstance, h } from "vue";
import { comment } from "@/mock/data.ts";

const proxy: any = getCurrentInstance()?.proxy
const props = withDefaults(defineProps<informationProps>(), {
  active: false,
  pageSize: 8
})

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
  // count: false,
}

const getCommentData = () => {
  let data = comment.data
  console.log(data);
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

<style lang="less" scoped></style>