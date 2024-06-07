export type Tweet = {
  id: number;
  icon?: string;
  displayName: string;
  accountName: string;
  content: string;
};

export interface TimelineProps {
  tweets: Tweet[];
  deleteTweet: (id: number) => void;
}

export interface TweetInputProps {
  addTweet: (tweet: Tweet) => void;
}
