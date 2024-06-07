import { useCallback, useRef, useState } from "react";

export const TweetInput = (props: any) => {
  const [inputValue, setInputValue] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const sendTweet = useCallback(() => {
    if (textareaRef.current) {
      props.addTweet({
        id: new Date().getTime(),
        // icon: "△",
        displayName: "テスト名",
        accountName: "testName",
        content: textareaRef.current.value,
      });
      setInputValue("");
    }
  }, [inputValue, props.addTweet]);

  return (
    <div>
      <div>
        <textarea
          className="tweet-textarea"
          ref={textareaRef}
          value={inputValue}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <button onClick={sendTweet} className="send-tweet">
          Tweet
        </button>
      </div>
    </div>
  );
};
