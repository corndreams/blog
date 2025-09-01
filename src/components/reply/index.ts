import Comment from "./comment.vue";
import Infor from "./information.vue";
import Reply from "./reply.vue";
import type { ReplyData } from "@/utils/type.ts";

export { Comment, Infor, Reply }

export type CommentProps = {
  pageSize: number;
  height?: string;
}

export type ReplyProps = {
  content: ReplyData;
  isComment: boolean;
}