const ListItem = ({ name, url }) => (
    <li>
        <a href={url}>{name}</a>
    </li>
);

export default ListItem;
