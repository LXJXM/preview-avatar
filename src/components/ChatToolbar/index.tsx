import { View, Input } from '@tarojs/components';

export default function ChatToolbar() {
  return (
    <View className='pb-safe flex items-center gap-[20rpx] border-t border-gray-300/50 bg-[#F7F7F7] px-[24rpx] py-[16rpx]'>
      {/* 语音按钮 */}
      <View className='flex h-[56rpx] w-[56rpx] items-center justify-center'>
        <View className='h-[40rpx] w-[28rpx] rounded-full border-2 border-black/60' />
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
        <View className='h-[44rpx] w-[44rpx] rounded-full border-2 border-black/60' />
      </View>
      {/* 加号按钮 */}
      <View className='flex h-[56rpx] w-[56rpx] items-center justify-center'>
        <View className='h-[44rpx] w-[44rpx] rounded-full border-2 border-black/60 text-center text-[28rpx] font-bold leading-[40rpx]'>
          +
        </View>
      </View>
    </View>
  );
}
