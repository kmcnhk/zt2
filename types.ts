export type Category = 'CIVILIAN' | 'MILITARY' | 'INSTRUCTOR';
export type Difficulty = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';

export interface Technique {
  name: string;
  details: string; // e.g., "Muay Thai Clinch + Knee"
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