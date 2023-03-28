export interface Task {
  id: number;
  text: string;
  isGlobal: boolean;
  isLeader: boolean;
  creator: string;
  isCompleted: boolean;
  start: Date | string;
  end: Date | string;
}
