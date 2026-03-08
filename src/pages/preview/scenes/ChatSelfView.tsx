import ChatMessage from '@/components/ChatMessage';
import ChatNavBar from '@/components/ChatNavBar';
import ChatToolbar from '@/components/ChatToolbar';
import { MOCK_MESSAGES, CHAT_CONTACT_NAME, DEFAULT_AVATAR } from '@/constants';
import { View, Text, ScrollView } from '@tarojs/components';

interface ChatSelfViewProps {
  avatarPath: string;
  nickname: string;
  chatMessage: string;
}

export default function ChatSelfView({
  avatarPath,
  nickname,
  chatMessage
}: ChatSelfViewProps) {
  // 替换 mock 数据中的发送消息为用户自定义消息
  const messages = MOCK_MESSAGES.map((msg, index) => {
    if (msg.type === 'sent' && index === 2) {
      return { ...msg, content: chatMessage || msg.content };
    }
    return msg;
  });

  return (
    <View className='flex h-full flex-col bg-[#EDEDED]'>
      <ChatNavBar title={CHAT_CONTACT_NAME} />
      <ScrollView className='flex-1' scrollY enhanced showScrollbar={false}>
        <View className='flex flex-col gap-[40rpx] px-[32rpx] py-[32rpx]'>
          {messages.map(msg => (
            <View key={msg.id}>
              {msg.timestamp && (
                <View className='mb-[40rpx] flex justify-center'>
                  <Text className='text-[24rpx] text-gray-400'>{msg.timestamp}</Text>
                </View>
              )}
              <ChatMessage
                type={msg.type}
                content={msg.content}
                avatarUrl={msg.type === 'sent' ? avatarPath : DEFAULT_AVATAR}
                isEmoji={msg.isEmoji}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <ChatToolbar />
    </View>
  );
}
