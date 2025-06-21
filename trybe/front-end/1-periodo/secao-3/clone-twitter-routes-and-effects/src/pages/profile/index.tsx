import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tweet from "../../components/tweet";
import { fetchTweets, fetchUsers } from "../../utils/fetch";
import { TweetType, User } from "../../utils/types";
import "./profile.css";

function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [tweets, setTweets] = useState<TweetType[]>([]);
  const [loading, setLoading] = useState(true);

  const { username } = useParams();

  useEffect(() => {
    const fecthData = async () => {
      const response = await fetchUsers();
      const findUser = response.find(
        (user: User) => user.username === username
      );

      if (findUser) {
        const tweets = await fetchTweets();
        const tweetsId = findUser.tweetsId;

        let newTweets: TweetType[] = [];

        tweetsId.forEach((id: number) => {
          const find = tweets.find((tweet: TweetType) => tweet.id === id);

          newTweets = [...newTweets, find];
        });

        setTweets(newTweets);
        setUser(findUser);
      }

      setLoading(false);
    };

    fecthData();
  }, []);

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Adicionar aqui as imagens de plano de fundo e perfil */}
        <img
          src={user?.backgroundPicture}
          alt={`${user?.username} background`}
        />
        <img
          src={user?.profilePicture}
          alt={`${user?.username} foto de perfil`}
        />
        <div className="bio-container">
          {/* Adicionar aqui o nome, username e bio */}
          <h2>{user?.name}</h2>
          <h3>{user?.username}</h3>
          <p>{user?.bio}</p>
        </div>
      </div>
      <div className="tweet-list">
        {/* Renderizar a lista de tweets aqui */}
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
    </div>
  );
}

export default Profile;
