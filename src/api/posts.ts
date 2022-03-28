import { Post } from '../react-app-env';
import { request } from './api';

export const getUserPosts = (userId = 0): Promise<Post[]> => {
  if (userId === 0) {
    return request('/posts');
  }

  return request('/posts?userId=', userId);
};

export const getPostDetails = (postId: number) => {
  return request('/posts/', postId);
};