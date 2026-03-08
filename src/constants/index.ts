export interface MockMessage {
  id: string;
  type: 'sent' | 'received';
  content: string;
  isEmoji?: boolean;
  timestamp?: string;
}

export const MOCK_MESSAGES: MockMessage[] = [
  {
    id: '1',
    type: 'received',
    content: '我通过了你的好友验证请求，现在我们可以开始聊天了'
  },
  { id: '2', type: 'received', content: '衣服都不改一下' },
  { id: '3', type: 'sent', content: '哈哈哈哈哈' },
  { id: '4', type: 'sent', content: '到时候撞衫了' },
  { id: '5', type: 'received', content: '🤣', isEmoji: true },
  { id: '6', type: 'sent', content: '还挺多的' },
  {
    id: '7',
    type: 'received',
    content: '哈哈哈哈哈',
    timestamp: '周五 20:41'
  }
];

export const CHAT_CONTACT_NAME = '匿名的好友';

export const DEFAULT_AVATAR =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2NjYyIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMzYiIHI9IjE4IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTIwIDg1YTMwIDMwIDAgMDE2MCAwIiBmaWxsPSIjZmZmIi8+PC9zdmc+';
