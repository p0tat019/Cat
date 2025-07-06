
export enum GameState {
  Intro,
  Quiz,
  Analyzing,
  Result,
}

export interface PersonalityScores {
  courage: number; // Bold(+) vs Cautious(-)
  wisdom: number; // Logic(+) vs Intuition(-)
  relationship: number; // Extrovert(+) vs Introvert(-)
}

export interface Choice {
  text: string;
  scores: PersonalityScores;
}

export interface Question {
  id: number;
  scenario: string;
  illustration: React.ReactNode;
  choices: Choice[];
}

export interface PersonalityResultType {
  courage: '대담한' | '신중한';
  wisdom: '논리적인' | '직관적인';
  relationship: '외향적인' | '내향적인';
}
