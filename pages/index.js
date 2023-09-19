import {useState} from 'react';

function Header({title, test}) {
    return (
        <div>
        <h1>{title}</h1>   
        </div>
    )
}

export default function HomePage() {
    const names = ['Ada LoveLace', 'Grace Hopper', 'Margeret Hamilton']
    console.log(names);

    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div>
          {/* Nesting the Header component */}
          <Header title="React 💙" test="here's a test"  />
          <ul>
          {names.map((name) => {
            return(
                <li>{name}</li>
            )
          })}
          </ul>
          <button onClick={handleClick}>Like</button>
          <p>{ `Current Likes: ${likes} `}</p>
        </div>
      );
    }
    