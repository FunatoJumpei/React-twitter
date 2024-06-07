import { useCallback, useState } from "react";
import "../css/App.css";
import { Timeline } from "./Timeline";
import { TweetInput } from "./TweetInput";

function App() {
  const [tweets, setTweets] = useState<any>([]);

  const addTweet = useCallback(
    (tweet: any) => setTweets((prev: any) => [tweet, ...prev]),
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
