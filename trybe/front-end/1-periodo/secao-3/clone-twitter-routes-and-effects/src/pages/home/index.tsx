import { useEffect, useState } from "react";
import Tweet from "../../components/tweet";
import { fetchTweets } from "../../utils/fetch";
import { TweetType } from "../../utils/types";
import "./home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [tweets, setTweets] = useState<TweetType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTweets();

      setTweets(data);
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="home-page">
      {/* renderize a lista de tweets aqui */}
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          image={tweet.owner.profilePicture}
          username={tweet.owner.username}
          name={tweet.owner.name}
          tweet={tweet.tweet}
          comments={tweet.commentsCount}
          likes={tweet.likesCount}
          retweets={tweet.retweetsCount}
        />
      ))}
    </div>
  );
}

export default Home;
