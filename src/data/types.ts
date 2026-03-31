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
  fourAxisDetail?: { zozo: string; rakuten: string; trend: string; internal: string };
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
  priority?: "最優先" | "高" | "中" | "低";
  stockMonths?: string;
};

export type MarketInsight = {
  source: string;
  insights: string[];
};

export type TrendItem = {
  name: string;
  score: number;
};

export type CrossAnalysis = {
  title: string;
  axes: string;
  description: string;
};

export type ClearanceItem = {
  id: string;
  stock: string;
  sales: string;
  stockMonths: string;
  plan: string;
};

export type MarketReport = {
  title: string;
  body: string;
  noahlInsight?: string;
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
  marketReports?: MarketReport[];
  trends?: TrendItem[];
  inventory: { target: string; ratio: string };
  crossAnalysis?: CrossAnalysis[];
  clearanceCandidates?: ClearanceItem[];
  successPatterns?: string[];
  failurePatterns?: string[];
  notes: string[];
};
