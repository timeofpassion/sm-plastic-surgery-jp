import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic()

export async function POST(req: Request) {
  const { reference, topic, lang } = await req.json()

  if (!reference?.trim() && !topic?.trim()) {
    return NextResponse.json({ error: '참고 원고 또는 주제를 입력하세요' }, { status: 400 })
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'ANTHROPIC_API_KEY가 설정되지 않았습니다' }, { status: 500 })
  }

  const outputLang = lang === 'ko' ? '한국어' : '일본어'

  const systemPrompt = `당신은 에스엠성형외과(SM美容外科, 서울 강남역 소재)의 전문 콘텐츠 라이터입니다.
일본인 환자를 위한 의료·미용성형 블로그 포스트를 작성합니다.

# 병원 핵심 정보
- 원장: 이무영 (서울대 의대, 서울아산병원 전문의 출신)
- 개원: 2013년 6월, 강남역 같은 자리에서 12년째 운영
- 강점: 가슴성형 (하이브리드·확대·재수술), 눈성형, 안전마취센터
- 일본 대응: LINE @sm-plasticsurgery-jp, 일본어 담당 직원 상주

# 작성 원칙
- 새로운 원고를 창작한다. 참고 원고의 내용을 그대로 옮기지 않는다
- 병원 신뢰도를 자연스럽게 담는다 (원장 이력, 연속성, 안전 시스템)
- 의학적 사실에 충실하되 과장하지 않는다
- 일본인 환자의 실제 궁금증 (방한 일수, 언어 지원, 비용, 회복기간)을 해소한다
- 마케팅 과장형 형용사 ("최고", "완벽", "혁신") 금지
- 출력 언어: ${outputLang}

# 출력 형식 (JSON, 다른 텍스트 포함 금지)
{
  "title": "SEO 최적화 제목 (60자 이내, ${outputLang})",
  "description": "메타 설명문 (120자 이내, 검색결과 표시용, ${outputLang})",
  "content": "HTML 본문 (h2·h3·p·ul·li·strong 태그 사용, ${outputLang})"
}`

  const userPrompt = reference?.trim()
    ? `다음 참고 원고를 바탕으로 에스엠성형외과 블로그 포스트를 새롭게 작성하세요.
참고 원고는 아이디어와 주제 방향만 참고하고, 문장은 완전히 새로 씁니다.

[참고 원고]
${reference}

JSON만 출력하세요.`
    : `다음 주제로 에스엠성형외과 블로그 포스트를 작성하세요.

주제: ${topic}

JSON만 출력하세요.`

  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
    })

    const raw = message.content[0].type === 'text' ? message.content[0].text : ''
    const jsonMatch = raw.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      return NextResponse.json({ error: 'AI 응답을 파싱할 수 없습니다' }, { status: 500 })
    }

    const result = JSON.parse(jsonMatch[0])
    if (!result.title || !result.content) {
      return NextResponse.json({ error: 'AI 응답이 불완전합니다' }, { status: 500 })
    }

    return NextResponse.json(result)
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
