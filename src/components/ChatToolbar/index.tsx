import { Voice, Pin, Hi } from '@nutui/icons-react-taro';
import { View, Input } from '@tarojs/components';

export default function ChatToolbar() {
  return (
    <View className='flex items-center gap-[20rpx] border-t border-gray-300/50 bg-[#F7F7F7] px-[24rpx] py-[16rpx] pb-safe'>
      {/* 语音按钮 */}
      <View className='flex h-[56rpx] w-[56rpx] items-center justify-center'>
        <Voice size='24' color='rgba(0,0,0,0.7)' />
      </View>
      {/* 输入框 */}
      <View className='flex-1'>
        <Input
          className='h-[72rpx] rounded-[8rpx] bg-white px-[20rpx] text-[32rpx]'
          disabled
        />
      </View>
      {/* 表情按钮 */}
      <View className='flex h-[56rpx] w-[56rpx] items-center justify-center'>
        {/* <FaceSmile size='24' color='rgba(0,0,0,0.7)' /> */}
        <Hi size='24' color='rgba(0,0,0,0.7)' />
      </View>
      {/* 加号按钮 */}
      <View className='flex h-[56rpx] w-[56rpx] items-center justify-center'>
        <Pin size='24' color='rgba(0,0,0,0.7)' />
      </View>
    </View>
  );
}
