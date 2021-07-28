import { FeedPostProps } from '../FeedPost/FeedPost';

export const postFilter = (follows: string[], posts: FeedPostProps[]): FeedPostProps[] =>
  posts.filter(post => follows.includes(post.ownerUid));
