import { twClsx } from '@/utils/tw';
import { View, Image, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';

interface AvatarUploaderProps {
  avatarPath: string;
  onAvatarChange: (path: string) => void;
}

export default function AvatarUploader({
  avatarPath,
  onAvatarChange
}: AvatarUploaderProps) {
  const [loading, setLoading] = useState(false);

  const handleChoose = async () => {
    if (loading) return;
    try {
      const res = await Taro.chooseMedia({
        count: 1,
        mediaType: ['image'],
        sourceType: ['album'],
        sizeType: ['compressed']
      });
      const tempFilePath = res.tempFiles[0].tempFilePath;
      setLoading(true);

      if (process.env.TARO_ENV === 'weapp') {
        const cropRes = await Taro.cropImage({
          src: tempFilePath,
          cropScale: '1:1'
        });
        onAvatarChange(cropRes.tempFilePath);
      } else {
        onAvatarChange(tempFilePath);
      }
    } catch {
      // 用户取消选择
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className='flex flex-col items-center gap-[24rpx]' onClick={handleChoose}>
      <View
        className={twClsx(
          'flex items-center justify-center overflow-hidden rounded-full',
          'h-[200rpx] w-[200rpx]',
          !avatarPath && 'border-2 border-dashed border-gray-300 bg-gray-50'
        )}
      >
        {avatarPath ? (
          <Image className='h-full w-full' src={avatarPath} mode='aspectFill' />
        ) : (
          <View className='flex flex-col items-center gap-[8rpx]'>
            <Text className='text-[48rpx] text-gray-400'>+</Text>
            <Text className='text-[24rpx] text-gray-400'>上传头像</Text>
          </View>
        )}
      </View>
      {avatarPath && <Text className='text-[24rpx] text-gray-400'>点击重新上传</Text>}
    </View>
  );
}
