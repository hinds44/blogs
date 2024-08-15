function MyNaviLink(props) {
    return (
        <li class="nav-item">
            <a class="nav-link" href={props.goto}>{props.text}</a>
        </li>
    )
};

export default MyNaviLink