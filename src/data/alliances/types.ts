export interface Alliance {
  id: string;
  name: string;
  color: string;
  members: Array<{
    code: string;
    joinYear: number;
  }>;
}