import { Tweet } from "./Tweet";

export const Timeline = (props: any) => {
  const tweetList = props.tweets.map((tw: any) => (
    <Tweet
      key={tw.id}
      icon={tw.icon}
      displayName={tw.displayName}
      accountName={tw.accountName}
      content={tw.content}
    />
  ));
  return <div className="timeline">{tweetList}</div>;
};
