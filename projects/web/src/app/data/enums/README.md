# Enums Dir

타입스크립트에서 가독성을 높이기 위한 일환으로 서로 ``연관``된 상수들을 하나의 namespace에 묶어 관리할 때 사용.

```typescript
export enum LangCode {
  korean = 'ko',
  english = 'en',
  japanese = 'ja',
  chinese = 'zh',
  spanish = 'es',
}


const langCode: LangCode = LangCode.korean;
```