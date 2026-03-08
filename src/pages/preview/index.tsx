import './index.scss';
import ChatOtherView from './scenes/ChatOtherView';
import ChatSelfView from './scenes/ChatSelfView';
import MomentsView from './scenes/MomentsView';
import ProfileView from './scenes/ProfileView';
import { getState } from '@/store';
import { twClsx } from '@/utils/tw';
import { View, Text, Swiper, SwiperItem } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro';
import { useState } from 'react';

const TABS = ['聊天(自己)', '聊天(对方)', '朋友圈', '个人主页'];

export default function Preview() {
  const [activeTab, setActiveTab] = useState(0);
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
    <View className='flex h-screen flex-col bg-[#EDEDED]'>
      {/* 场景 Tab */}
      <View className='flex bg-white'>
        {TABS.map((tab, index) => (
          <View
            key={tab}
            className={twClsx(
              'flex flex-1 items-center justify-center py-[20rpx]',
              activeTab === index && 'border-b-2 border-[#07C160]'
            )}
            onClick={() => setActiveTab(index)}
          >
            <Text
              className={twClsx(
                'text-[26rpx]',
                activeTab === index ? 'font-medium text-[#07C160]' : 'text-gray-500'
              )}
            >
              {tab}
            </Text>
          </View>
        ))}
      </View>

      {/* 场景内容 */}
      <Swiper
        className='flex-1'
        current={activeTab}
        onChange={e => setActiveTab(e.detail.current)}
      >
        <SwiperItem>
          <ChatSelfView
            avatarPath={avatarPath}
            nickname={nickname}
            chatMessage={chatMessage}
          />
        </SwiperItem>
        <SwiperItem>
          <ChatOtherView />
        </SwiperItem>
        <SwiperItem>
          <MomentsView />
        </SwiperItem>
        <SwiperItem>
          <ProfileView />
        </SwiperItem>
      </Swiper>
    </View>
  );
}
