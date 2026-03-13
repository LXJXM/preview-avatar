import { ArrowLeft } from '@nutui/icons-react-taro';
import { View } from '@tarojs/components';
import {
  navigateBack,
  getWindowInfo,
  getMenuButtonBoundingClientRect
} from '@tarojs/taro';

interface ChatNavBarProps {
  title: string;
}

export default function ChatNavBar({ title }: ChatNavBarProps) {
  // 获取状态栏高度/屏幕宽度
  const { statusBarHeight = 0, screenWidth = 0 } = getWindowInfo();

  // 获取胶囊信息
  const { height, top, left, right } = getMenuButtonBoundingClientRect();

  // 状态栏与胶囊按钮的间距
  const statusBarGap = top - statusBarHeight;
  // 标题栏高度 = 胶囊高度 + 上下间距
  const titleBarHeight = height + statusBarGap * 2;
  // 导航栏总高度（额外加一个 statusBarGap 作为底部偏移）
  const appHeaderHeight = statusBarHeight + titleBarHeight + statusBarGap;
  // 胶囊宽度 + 胶囊到屏幕右边的距离，作为标题两侧的对称间距
  const titleSidePadding = screenWidth - left;
  // 返回按钮左侧间距（与胶囊右边距对称）
  const leftPadding = screenWidth - right;
  // 顶部内容定位
  const topPadding = statusBarHeight + statusBarGap;

  return (
    <View
      className='relative bg-[#EDEDED]'
      style={{
        height: `${appHeaderHeight}px`,
        paddingTop: `${topPadding}px`
      }}
    >
      {/* 返回按钮 */}
      <View
        className='absolute flex items-center justify-center'
        style={{
          top: `${topPadding}px`,
          left: `${leftPadding}px`,
          height: `${height}px`,
          width: `${height}px`
        }}
        onClick={() => navigateBack()}
      >
        <ArrowLeft size='20' color='#000' />
      </View>

      {/* 标题 */}
      <View
        className='text-center text-[34rpx] font-bold'
        style={{
          height: `${height}px`,
          lineHeight: `${height}px`,
          paddingLeft: `${titleSidePadding}px`,
          paddingRight: `${titleSidePadding}px`
        }}
      >
        {title}
      </View>
    </View>
  );
}
