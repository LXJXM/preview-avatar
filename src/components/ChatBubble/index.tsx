import { twClsx } from '@/utils/tw';
import { View, Text } from '@tarojs/components';
import { tv } from 'tailwind-variants';

const bubble = tv({
  base: 'max-w-[75%] break-all rounded-[12rpx] text-[32rpx] leading-[1.5] text-black',
  variants: {
    type: {
      sent: 'bg-[#95EC69]',
      received: 'bg-white'
    },
    isEmoji: {
      true: 'bg-transparent text-[56rpx] px-[8rpx] py-[4rpx]',
      false: 'px-[24rpx] py-[16rpx]'
    }
  },
  defaultVariants: {
    type: 'received',
    isEmoji: false
  }
});

interface ChatBubbleProps {
  type: 'sent' | 'received';
  children: React.ReactNode;
  isEmoji?: boolean;
  className?: string;
}

export default function ChatBubble({
  type,
  children,
  isEmoji = false,
  className
}: ChatBubbleProps) {
  return (
    <View className={twClsx(bubble({ type, isEmoji }), className)}>
      <Text>{children}</Text>
    </View>
  );
}
