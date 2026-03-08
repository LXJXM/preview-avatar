import ChatBubble from '@/components/ChatBubble';
import { twClsx } from '@/utils/tw';
import { View, Image } from '@tarojs/components';

interface ChatMessageProps {
  type: 'sent' | 'received';
  content: string;
  avatarUrl: string;
  isEmoji?: boolean;
}

export default function ChatMessage({
  type,
  content,
  avatarUrl,
  isEmoji = false
}: ChatMessageProps) {
  const avatar = (
    <Image
      className='h-[80rpx] w-[80rpx] flex-shrink-0 rounded-[8rpx]'
      src={avatarUrl}
      mode='aspectFill'
    />
  );

  return (
    <View
      className={twClsx(
        'flex items-start gap-[20rpx]',
        type === 'sent' && 'flex-row-reverse'
      )}
    >
      {avatar}
      <ChatBubble type={type} isEmoji={isEmoji}>
        {content}
      </ChatBubble>
    </View>
  );
}
