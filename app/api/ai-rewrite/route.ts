import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic()

export async function POST(req: Request) {
  const { content, title } = await req.json()

  if (!content?.trim()) {
    return NextResponse.json({ error: '本文を入力してください' }, { status: 400 })
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'ANTHROPIC_API_KEY が設定されていません' }, { status: 500 })
  }

  const systemPrompt = `あなたはSM美容外科（韓国江南の美容整形クリニック）のコンテンツライターです。
日本人患者向けに医療・美容整形の記事を書いています。

# タスク
アメブロで公開した記事を、ホームページ用に完全にリライトしてください。

# 重複コンテンツ回避ルール（必須）
- 文章構成（段落の順番・数・見出し構成）を原文と大幅に変更する
- 単語・表現の70%以上を同義語や別表現に置き換える
- 原文にない新しい視点・具体例・補足情報を20〜30%追加する
- 結論や主張は同じでも、アプローチと語り口を根本から変える
- H2・H3の見出しテキストは原文とは全て異なるものにする

# SEO要件
- 一次キーワード（豊胸、韓国整形、SM美容外科など）を自然な頻度で使用する
- H2・H3の見出し構造を適切に使い、ページ構造を明確にする
- 読者が求める情報（手術方法、費用感、回復期間、日本語対応など）を具体的に記載する
- 文章は日本語として自然で、医療情報として正確に書く

# 出力形式（JSON）
必ず以下のJSON形式で返答してください。他のテキストは一切含めないでください。
{
  "title": "新しいSEO最適化タイトル（60文字以内）",
  "description": "メタ説明文（120文字以内、検索結果に表示される要約）",
  "content": "Markdown形式の本文（H2・H3見出し、段落、強調、箇条書きを適切に使用）"
}`

  const userPrompt = `以下のアメブロ記事をリライトしてください。

元のタイトル: ${title || '（タイトルなし）'}

元の本文:
${content}

出力はJSON形式のみで返してください。`

  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
    })

    const raw = message.content[0].type === 'text' ? message.content[0].text : ''

    // JSONブロックから抽出
    const jsonMatch = raw.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      return NextResponse.json({ error: 'AIからの応答を解析できませんでした' }, { status: 500 })
    }

    const result = JSON.parse(jsonMatch[0])

    if (!result.title || !result.content) {
      return NextResponse.json({ error: 'AIからの応答が不完全です' }, { status: 500 })
    }

    return NextResponse.json(result)
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
