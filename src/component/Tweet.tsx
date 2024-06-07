import { useCallback, useState } from "react";

export interface TweetProps {
  id: number;
  icon?: string;
  displayName: string;
  accountName: string;
  content: string;
  deleteTweet: (id: number) => void;
}

export const Tweet = ({
  id,
  displayName,
  accountName,
  content,
  deleteTweet,
}: TweetProps) => {
  const [liked, setLike] = useState(false);
  const toggleLike = useCallback(() => setLike((prev) => !prev), [setLike]);

  return (
    <div className="tweet">
      <div className="body-container">
        <div className="status-display">
          <span className="display-name">{displayName}</span>
          <span className="account-name">@{accountName}</span>
        </div>
        <div className="content">{content}</div>
        <div className="status-icon">
          <span onClick={toggleLike}>{liked ? "👍" : "▢"}</span>
        </div>
        <button onClick={() => deleteTweet(id)}>削除</button>
      </div>
    </div>
  );
};
