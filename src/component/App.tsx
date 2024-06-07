import { useCallback, useState } from "react";
import "../css/App.css";
import { Timeline } from "./Timeline";
import { TweetInput } from "./TweetInput";
import { Tweet } from "../type/tweetType";

function App() {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  const addTweet = useCallback(
    (tweet: Tweet) => setTweets((prev) => [tweet, ...prev]),
    [setTweets]
  );

  const deleteTweet = (id: number) => {
    setTweets((prevTweets: any) =>
      prevTweets.filter((tweets: any) => tweets.id !== id)
    );
  };

  return (
    <>
      <TweetInput addTweet={addTweet} />
      <Timeline tweets={tweets} deleteTweet={deleteTweet} />
    </>
  );
}

export default App;
