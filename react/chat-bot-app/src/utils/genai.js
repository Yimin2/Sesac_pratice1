import {GoogleGenAI} from "@google/genai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY})


const chat = ai.chats.create({
    model: "gemini-2.5-flash"
})

/*const config = {
    temperature: 0,
    maxOutputTokens: 65536,
    stopSequences: "\\n\\n",
    systemInstruction: [
        "🧠 역할\n" + "당신은 사용자와 끝말잇기를 즐기는 AI입니다.\n" + "목표는 정확한 단어 연결과 재미있는 대화 유지입니다.\n" + "📜 기본 규칙\n" + "사용자가 제시한 단어의 마지막 글자로 시작하는 새로운 단어를 제시합니다.\n" + "모든 단어는 실존하는 한국어 명사여야 합니다. (고유명사, 비속어, 외래어 제외)\n" + "이미 사용된 단어는 다시 사용할 수 없습니다.\n" + "“다음 글자가 없는 단어”로 끝나면, 패배를 인정하고 종료합니다.\n" + "AI는 게임 중 설명이나 사족 없이 단어만 말합니다.\n" + "예:\n" + "사용자: 사과\n" + "AI: 과자\n" + "단어가 연결되지 않거나 규칙에 어긋날 경우, AI는 정중히 알려줍니다.\n" + "예: “해당 단어는 끝말잇기 규칙에 맞지 않습니다. ‘○’로 시작하는 다른 단어를 제시해주세요.”\n" + "💬 대화 형식\n" + "게임 시작 시:\n" + "“끝말잇기를 시작합니다! 제가 먼저 할까요, 아니면 먼저 하시겠어요?”\n" + "게임 중에는 오직 단어만 말합니다.\n" + "종료 시에는:\n" + "“즐거운 끝말잇기였습니다! 다시 하시겠어요?”\n" + "⚠️ 금지 규칙\n" + "영어 단어, 신조어, 인명, 지명, 브랜드명 사용 금지\n" + "“ㅋㅋ”, “ㅎㅎ”, “!” 등 감탄사 금지\n" + "사용자의 요청이 게임과 무관할 경우,\n" + "“끝말잇기 중에는 다른 대화는 잠시 멈출게요.”라고 응답합니다.\n" + "🌟 추가 옵션 (선택사항)\n" + "난이도 조절:\n" + "쉬움 → 흔한 단어 위주\n" + "어려움 → 생소하지만 사전에 등재된 단어 위주\n" + "테마 모드:\n" + "음식, 동물, 장소 등 특정 주제어만 사용"
    ],
}*/



const responseSchema = {
    type: "object",
    properties: {
        isMemo: {
            type: "boolean",
            description: "할 일, 메모, 업무, 계획 등 관련 여부",
        },
        content: {
            type: "string",
            description: "할 일 내용(본문)"
        },
        dueData: {
            type : "string",
            description : "할 일 마감 기한(YYYY-MM-DD)"
        }
    },
    required: ["isMemo","content","dueData"], // 응답 필수 속성
    additionalProperties: false, // 응답 추가 속성 여부(true/false)
}
const systemInstruction = [
    `오늘 날짜: ${new Date().toISOString().split("T")[0]}`,
    "당신은 할 일 관리 AI입니다. 오직 할 일이나 업무 관련 내용만 처리합니다.",
    "JSON 형식으로 응답합니다.",
    "할 일이 아닌 일반적인 대화, 인사, 질문은 무시하고, isMemo를 false로 설정합니다.",
    "사용자의 질문을 이해할 수 없는 경우에는 isMemo를 false로 설정합니다.",
    "응답할 때는 할 일 내용, 마감 날짜, 우선 순위, 할 일 종류를 포함한 객체를 생성합니다.",
];

const config = {
    responseMimeType: "application/json",
    responseJsonSchema: responseSchema,
    systemInstruction: systemInstruction
}
export {ai, chat, config}
