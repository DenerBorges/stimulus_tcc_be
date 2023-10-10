export class CreateCommentDto {
  id: number;
  comment: string;
  createAt: Date;
  userId: number;
  projectId: number;
}
