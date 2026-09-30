import createCache from "@emotion/cache";

export const emotionCacheKey = "bytespace";

export function createEmotionCache() {
  return createCache({ key: emotionCacheKey, prepend: true });
}
