import './index.scss';
import AvatarUploader from '@/components/AvatarUploader';
import { getState, setState } from '@/store';
import { Button } from '@nutui/nutui-react-taro';
import { View, Text, Input } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import { useState } from 'react';

export default function Index() {
  const [avatarPath, setAvatarPath] = useState('');
  const [nickname, setNickname] = useState('微信用户');
  const [chatMessage, setChatMessage] = useState('你好，这是一条消息～');

  useDidShow(() => {
    const state = getState();
    if (state.avatarPath) setAvatarPath(state.avatarPath);
    if (state.nickname) setNickname(state.nickname);
    if (state.chatMessage) setChatMessage(state.chatMessage);
  });

  const handlePreview = () => {
    if (!avatarPath) {
      Taro.showToast({ title: '请先上传头像', icon: 'none' });
      return;
    }
    setState({ avatarPath, nickname, chatMessage });
    Taro.navigateTo({ url: '/pages/preview/index' });
  };

  return (
    <View className='min-h-screen bg-gray-50 px-[48rpx] py-[60rpx]'>
      {/* 标题区域 */}
      <View className='mb-[60rpx] flex flex-col items-center gap-[16rpx]'>
        <Text className='text-[40rpx] font-bold text-gray-800'>头像预览</Text>
        <Text className='text-[26rpx] text-gray-400'>
          上传头像，预览在微信中的真实效果
        </Text>
      </View>

      {/* 上传区域 */}
      <View className='mb-[60rpx] flex justify-center'>
        <AvatarUploader avatarPath={avatarPath} onAvatarChange={setAvatarPath} />
      </View>

      {/* 信息表单 */}
      <View className='mb-[80rpx] flex flex-col gap-[32rpx]'>
        <View className='flex flex-col gap-[12rpx]'>
          <Text className='text-[28rpx] text-gray-600'>昵称</Text>
          <Input
            className='h-[88rpx] rounded-[16rpx] bg-white px-[28rpx] text-[30rpx]'
            value={nickname}
            onInput={e => setNickname(e.detail.value)}
            placeholder='输入昵称'
            maxlength={20}
          />
        </View>
        <View className='flex flex-col gap-[12rpx]'>
          <Text className='text-[28rpx] text-gray-600'>聊天消息（选填）</Text>
          <Input
            className='h-[88rpx] rounded-[16rpx] bg-white px-[28rpx] text-[30rpx]'
            value={chatMessage}
            onInput={e => setChatMessage(e.detail.value)}
            placeholder='输入消息内容'
            maxlength={100}
          />
        </View>
      </View>
      <Button type='primary'>Primary</Button>

      {/* 进入预览按钮 */}
      <View
        className='flex h-[96rpx] items-center justify-center rounded-[16rpx] bg-[#07C160]'
        onClick={handlePreview}
      >
        <Text className='text-[32rpx] font-medium text-white'>进入预览</Text>
      </View>
    </View>
  );
}
