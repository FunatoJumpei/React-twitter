import { Tweet } from "./Tweet";

export interface TimelineProps {
  tweets: Array<{
    id: number;
    icon: string;
    displayName: string;
    accountName: string;
    content: string;
  }>;
  deleteTweet: (id: number) => void;
}

export const Timeline = (props: TimelineProps) => {
  const tweetList = props.tweets.map((tw: any) => (
    <Tweet
      key={tw.id}
      id={tw.id}
      icon={tw.icon}
      displayName={tw.displayName}
      accountName={tw.accountName}
      content={tw.content}
      deleteTweet={props.deleteTweet}
    />
  ));
  return <div className="timeline">{tweetList}</div>;
};
