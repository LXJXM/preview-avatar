export interface AppState {
  avatarPath: string;
  nickname: string;
  chatMessage: string;
  momentsContent: string;
  signature: string;
}

const DEFAULT_STATE: AppState = {
  avatarPath: '',
  nickname: '微信用户',
  chatMessage: '你好，这是一条消息～',
  momentsContent: '分享一张美好的照片 🌟',
  signature: '这个人很神秘'
};

let state: AppState = { ...DEFAULT_STATE };

export function getState(): AppState {
  return state;
}

export function setState(partial: Partial<AppState>) {
  state = { ...state, ...partial };
}

export function resetState() {
  state = { ...DEFAULT_STATE };
}
