import ListItem from "./ListItem";

const Links = [
  {
    name: 'Google',
    url: 'https://google.com'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com'
  },
  {
    name: 'X',
    url: 'https://x.com'
  }
];

function App() {
  return (
    <div>
      <h1 align="center">Links</h1>
      <hr />
      <ul>
        {Links.map((link) => (
          <ListItem key={link.name} link={link} />
        ))}
      </ul>
    </div>
  );
}

export default App;
