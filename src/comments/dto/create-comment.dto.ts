export class CreateCommentDto {
  id: number;
  comment: string;
  user: string;
  createdAt: Date;
  userId: number;
  projectId: number;
}
