import { Decimal } from '@prisma/client/runtime/library';

export class CreateProjectDto {
  id: number;
  name: string;
  description: string;
  category: string;
  total: Decimal;
  goal: Decimal;
  deadline: number;
  amount_donated?: number;
  image: string[];
  userId: number;
}
