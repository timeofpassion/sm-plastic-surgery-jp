export const SUPPORTED_LANGS = ['ja'] as const
export type Lang = typeof SUPPORTED_LANGS[number]
export const DEFAULT_LANG: Lang = 'ja'
