import { TimelineProps } from "../type/tweetType";
import { Tweet } from "./Tweet";

// export interface TimelineProps {
//   tweets: Array<{
//     id: number;
//     icon: string;
//     displayName: string;
//     accountName: string;
//     content: string;
//   }>;
//   deleteTweet: (id: number) => void;
// }

export const Timeline = ({ tweets, deleteTweet }: TimelineProps) => {
  const tweetList = tweets.map((tw) => (
    <Tweet
      key={tw.id}
      id={tw.id}
      icon={tw.icon}
      displayName={tw.displayName}
      accountName={tw.accountName}
      content={tw.content}
      deleteTweet={deleteTweet}
    />
  ));
  return <div className="timeline">{tweetList}</div>;
};
