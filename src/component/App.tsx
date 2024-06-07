import { useCallback, useState } from "react";
import "../css/App.css";
import { Timeline } from "./Timeline";
import { TweetInput } from "./TweetInput";

function App() {
  const [tweets, setTweets] = useState([
    {
      id: 0,
      icon: "○",
      displayName: "テスト名",
      accountName: "test",
      content: "test now",
    },
    {
      id: 1,
      icon: "×",
      displayName: "テスト名2",
      accountName: "test test",
      content: "test now now",
    },
  ]);

  const addTweet = useCallback(
    (tweet: any) => setTweets((prev: any) => [tweet, ...prev]),
    [setTweets]
  );

  return (
    <>
      <TweetInput addTweet={addTweet} />
      <Timeline tweets={tweets} />
    </>
  );
}

export default App;
