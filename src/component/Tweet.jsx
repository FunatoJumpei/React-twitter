import { useCallback, useState } from "react";

export const Tweet = (props) => {
  const [liked, setLike] = useState(false);
  const toggleLike = useCallback(() => setLike((prev) => !prev), [setLike]);

  return (
    <div className="tweet">
      {/* <div className="icon-container">{props.icon}</div> */}
      <div className="body-container">
        <div className="status-display">
          <span className="display-name">{props.displayName}</span>
          <span className="account-name">@{props.accountName}</span>
        </div>
        <div className="content">{props.content}</div>
        <div className="status-icon">
          <span onClick={toggleLike}>{liked ? "●" : "○"}</span>
        </div>
      </div>
    </div>
  );
};
