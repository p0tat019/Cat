
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PersonalityResultType } from '../types';

if (!process.env.API_KEY) {
  // This is a placeholder check. In a real environment, the key should be set.
  // For this example, we will proceed, but API calls will fail without a key.
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const getPersonalityAnalysis = async (
  resultType: PersonalityResultType
): Promise<string> => {
  const { courage, wisdom, relationship } = resultType;
  const personalityString = `${courage} ${wisdom} ${relationship} 고양이`;

  const prompt = `
    당신은 기억을 잃은 고양이의 여정을 분석하는 꿈 해몽가이자 이야기꾼입니다.
    주어진 성향 키워드를 바탕으로, 이 고양이가 어떤 성향을 되찾았는지 감성적이고 아름다운 이야기 형식으로 분석해주세요.

    성향 키워드: ${personalityString}

    결과는 다음 형식에 맞춰 한국어로 작성해주세요. 각 항목의 내용은 창의적이고 시적으로 표현해주세요.
    1.  **너의 이름은**: 성향을 상징하는 시적인 이름 (예: "별을 쫓는 방랑자", "난롯가의 작은 철학자")
    2.  **핵심 기억**: 성향의 핵심을 나타내는, 감성을 자극하는 한 문장의 기억
    3.  **너의 모습**: 성향의 특징, 강점, 그리고 고양이의 행동에 빗댄 비유를 포함한 상세한 설명 (3-4문장)
    4.  **다음에 꿀 꿈**: 이 성향의 고양이가 다음에 꾸게 될 꿈, 혹은 추천하는 모험 스타일

    결과는 마크다운을 사용하지 말고, 각 섹션을 명확하게 구분하여 텍스트로만 제공해주세요.
    예시:
    너의 이름은: 예시 이름
    핵심 기억: 예시 기억
    너의 모습: 예시 모습
    다음에 꿀 꿈: 예시 꿈
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash-preview-04-17',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API 호출 중 오류 발생:", error);
    return `**${personalityString}**\n\n결과를 생성하는 중 오류가 발생했습니다. API 키가 올바르게 설정되었는지 확인해주세요. 이 고양이는 대담함과 신중함, 논리와 직관, 외향성과 내향성의 조화를 통해 자신만의 길을 찾아가는 특별한 영혼을 지녔습니다.`;
  }
};
