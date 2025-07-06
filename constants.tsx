
import React from 'react';
import { Question } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    scenario: "이름도, 과거도 기억나지 않습니다. 눈을 뜨니 낯선 방 안, 당신은 작은 고양이입니다. 한쪽엔 따스한 햇살이 드는 창가, 다른 쪽엔 미지의 물건들로 가득한 어두운 구석이 보입니다. 어디로 먼저 향할까요?",
    illustration: <i className="fas fa-cat text-6xl text-orange-300"></i>,
    choices: [
      { text: "안전하고 따뜻해 보이는 창가로 간다.", scores: { courage: -1, wisdom: 0, relationship: -1 } },
      { text: "호기심을 자극하는 어두운 구석을 탐색한다.", scores: { courage: +1, wisdom: 0, relationship: +1 } },
    ],
  },
  {
    id: 2,
    scenario: "방을 나서자 작은 새 한 마리가 둥지에서 떨어져 울고 있습니다. 어미 새로 보이는 새가 멀리서 안절부절못하고 있습니다. 당신은 어떻게 할 건가요?",
    illustration: <i className="fas fa-feather-alt text-6xl text-sky-300"></i>,
    choices: [
      { text: "위험할 수 있으니, 조용히 내 갈 길을 간다.", scores: { courage: 0, wisdom: 0, relationship: -2 } },
      { text: "작은 새를 도와주기 위해 가까이 다가간다.", scores: { courage: 0, wisdom: 0, relationship: +2 } },
    ],
  },
  {
    id: 3,
    scenario: "길을 가다 높은 담벼락을 만났습니다. 조금 멀리 돌아가면 튼튼한 덩굴이 있지만, 바로 앞에는 낡은 상자들이 아슬아슬하게 쌓여있습니다. 어떻게 넘어갈까요?",
    illustration: <i className="fas fa-cubes-stacked text-6xl text-yellow-800"></i>,
    choices: [
      { text: "시간이 걸리더라도 안전한 덩굴을 이용한다.", scores: { courage: -2, wisdom: +1, relationship: 0 } },
      { text: "빠르게 가기 위해 낡은 상자를 밟고 뛰어넘는다.", scores: { courage: +1, wisdom: -1, relationship: 0 } },
    ],
  },
  {
    id: 4,
    scenario: "신비롭게 빛나는 연못이 당신의 모습을 비춥니다. 연못에 발을 담그자, 두 개의 기억 조각이 떠오릅니다. 하나는 다른 고양이들과 어울려 노는 활기찬 기억, 다른 하나는 조용히 책 더미 위에서 잠든 평화로운 기억입니다. 어느 기억에 더 끌리나요?",
    illustration: <i className="fas fa-water text-6xl text-purple-300"></i>,
    choices: [
      { text: "다른 고양이들과 함께했던 활기찬 기억.", scores: { courage: 0, wisdom: -1, relationship: +2 } },
      { text: "나만의 공간에서 평화를 누리던 기억.", scores: { courage: 0, wisdom: +1, relationship: -2 } },
    ],
  },
  {
    id: 5,
    scenario: "여정의 끝, 지혜로운 부엉이가 나타나 두 가지를 제안합니다. 하나는 이 꿈의 숲에서 안락한 보금자리를 얻는 것, 다른 하나는 꿈 너머의 세상을 향한 새로운 여정을 떠나는 것입니다.",
    illustration: <i className="fas fa-map-location-dot text-6xl text-green-300"></i>,
    choices: [
      { text: "이곳에 남아 평화로운 삶을 선택한다.", scores: { courage: -1, wisdom: 0, relationship: -1 } },
      { text: "미지의 세계를 향한 새로운 모험을 떠난다.", scores: { courage: +2, wisdom: 0, relationship: +1 } },
    ],
  },
];