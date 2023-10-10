import { Decimal } from '@prisma/client/runtime/library';

export class ProjectData {
  id: number;
  name: string;
  description: string;
  category: string;
  total: Decimal;
  goal: Decimal;
  deadline: number;
  image: string[];
}
