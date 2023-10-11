export class CreateCommentDto {
  id: number;
  comment: string;
  user: string;
  createAt: Date;
  userId: number;
  projectId: number;
}
