import { ArrowLeft, More } from '@nutui/icons-react-taro';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';

interface ChatNavBarProps {
  title: string;
}

export default function ChatNavBar({ title }: ChatNavBarProps) {
  const systemInfo = Taro.getSystemInfoSync();
  const statusBarHeight = systemInfo.statusBarHeight || 20;

  return (
    <View className='bg-[#EDEDED]'>
      {/* 状态栏占位 */}
      <View style={{ height: `${statusBarHeight}px` }} />
      {/* 导航栏内容 */}
      <View className='relative flex h-[44px] items-center justify-center px-[32rpx]'>
        {/* 返回按钮 */}
        <View
          className='absolute left-[32rpx] flex items-center'
          onClick={() => Taro.navigateBack()}
        >
          <ArrowLeft size='20' color='#000' />
        </View>
        {/* 标题 */}
        <Text className='text-[34rpx] font-bold'>{title}</Text>
        {/* 右侧菜单 */}
        <View className='absolute right-[32rpx]'>
          <More size='20' color='#000' />
        </View>
      </View>
    </View>
  );
}
