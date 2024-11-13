const KAKAO_REST_API_KEY = '075b6928faa6722248e3f23e52e3c65e';
const REDIRECT_URI = 'http://localhost:4200/kakao/oauth';

export const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
