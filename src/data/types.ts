export type Product = {
  id: string;
  name: string;
  imageUrl: string;
  link: string;
  tier: "S" | "A" | "B" | "restock" | "maker";
  price?: string;
  colors?: number;
  units?: number;
  cost?: string;
  salesRecord?: string;
  fourAxis?: { zozo: string; rakuten: string; trend: string; internal: string };
};

export type WeeklyPlan = {
  week: string;
  timing: string;
  launch: string;
  coordination: string;
};

export type BudgetItem = {
  category: string;
  amount: string;
  share: string;
};

export type RestockItem = {
  id: string;
  name: string;
  sales: string;
  currentStock: string;
  action: string;
  budget: string;
};

export type MarketInsight = {
  source: string;
  insights: string[];
};

export type TrendItem = {
  name: string;
  score: number;
};

export type MonthPlan = {
  month: number;
  theme: string;
  subTheme?: string;
  salesTarget: string;
  salesRatio: string;
  totalBudget?: string;
  seasonBreakdown: { label: string; amount: string; ratio: string }[];
  categories: { name: string; items: string[] }[];
  events: string[];
  products: Product[];
  weeklyPlan?: WeeklyPlan[];
  budget?: BudgetItem[];
  restockItems?: RestockItem[];
  marketInsights?: MarketInsight[];
  trends?: TrendItem[];
  inventory: { target: string; ratio: string };
  successPatterns?: string[];
  failurePatterns?: string[];
  notes: string[];
};
