import { useCallback, useRef } from "react";

export const TweetInput = (props: any) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const sendTweet = useCallback(() => {
    if (textareaRef.current) {
      props.addTweet({
        id: new Date().getTime(),
        icon: "△",
        displayName: "test3",
        accountName: "test test test",
        content: textareaRef.current.value,
      });
    }
  }, [props.addTweet]);

  return (
    <div>
      <div>
        <textarea className="tweet-textarea" ref={textareaRef}></textarea>
      </div>
      <div>
        <button onClick={sendTweet} className="send-Tweet">
          Tweet
        </button>
      </div>
    </div>
  );
};
