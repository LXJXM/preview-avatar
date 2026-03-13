import { twClsx } from '@/utils/tw';
import { View, Text } from '@tarojs/components';
import { tv } from 'tailwind-variants';

const bubble = tv({
  base: 'relative max-w-[75%] p-[20px] break-all rounded-[12px] text-[32px] leading-[1.5] text-black',
  variants: {
    type: {
      sent: 'bg-[#95EC69]',
      received: 'bg-white'
    }
  },
  defaultVariants: {
    type: 'received'
  }
});

interface ChatBubbleProps {
  type: 'sent' | 'received';
  children: React.ReactNode;
  className?: string;
}

export default function ChatBubble({ type, children, className }: ChatBubbleProps) {
  return (
    <View className={twClsx(bubble({ type }), className)}>
      {/* 三角箭头 */}

      <View
        className={twClsx(
          'absolute top-[24px] h-0 w-0',
          'border-t-[8px] border-t-transparent',
          'border-b-[8px] border-b-transparent',
          type === 'sent'
            ? 'right-[-10px] border-l-[12px] border-l-[#95EC69]'
            : 'left-[-10px] border-r-[12px] border-r-white'
        )}
      />
      <Text>{children}</Text>
    </View>
  );
}
