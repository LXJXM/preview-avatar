import './index.scss';
import ChatSelfView from './scenes/ChatSelfView';
import { DEFAULT_AVATAR } from '@/constants';
import { getState } from '@/store';
import { useDidShow } from '@tarojs/taro';
import { useState } from 'react';

export default function Preview() {
  const [avatarPath, setAvatarPath] = useState('');
  const [nickname, setNickname] = useState('微信用户');
  const [chatMessage, setChatMessage] = useState('');

  useDidShow(() => {
    const state = getState();
    setAvatarPath(state.avatarPath);
    setNickname(state.nickname);
    setChatMessage(state.chatMessage);
  });

  return (
    <ChatSelfView
      avatarPath={avatarPath || DEFAULT_AVATAR}
      nickname={nickname}
      chatMessage={chatMessage}
    />
  );
}
