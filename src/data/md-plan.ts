export type { MonthPlan, Product, WeeklyPlan, BudgetItem, RestockItem, MarketInsight, TrendItem } from "./types";

import { january } from "./months/january";
import { february } from "./months/february";
import { march } from "./months/march";
import { april } from "./months/april";
import { may } from "./months/may";
import { june } from "./months/june";
import { july } from "./months/july";
import { august } from "./months/august";
import { september } from "./months/september";
import { october } from "./months/october";
import { november } from "./months/november";
import { december } from "./months/december";

export const mdPlan = [
  january, february, march, april, may, june,
  july, august, september, october, november, december,
];
