
export type Category = 'CIVILIAN' | 'MILITARY' | 'INSTRUCTOR';
export type Difficulty = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';

export interface Drill {
  drillName: string; // e.g., "Kote Gaeshi 压力下的动态折腕"
  setup: string; // e.g., "配对练习，佩戴护齿，防暴手靶 x1"
  phase1_technical: string; // Detailed biomechanics breakdown
  phase2_stress: string; // Stress inoculation drill
  critical_checkpoints: string; // Instructor's eye
}

export interface Technique {
  name: string;
  details: string; // e.g., "Muay Thai Clinch + Knee"
  drill: Drill; // Pre-loaded Expert Drill Content
}

export interface Scenario {
  danger: string; // e.g., "Grab from behind"
  response: string; // e.g., "Release base, elbow strike"
}

export interface Theme {
  id: string;
  category: Category;
  difficulty: Difficulty;
  title: string;
  hooks: string[]; // Catchy alternative titles
  description: string;
  principles: string[]; // Tactical awareness
  scenarios: Scenario[]; // 5-8 scenarios
  techniques: Technique[]; // 12+ techniques
  tags: string[]; // e.g., "Ground", "Weapon", "Anti-Abduction"
}
