
export type ReplyData = {
  id: number;
  article?: {
    id: number;
    title: string;
  };
  user?: {
    id: number | string;
    name: string;
    imageurl: string;
  };
  comment: string;//内容
  moment: string;//时间
  complaint?: number;//举报数
}