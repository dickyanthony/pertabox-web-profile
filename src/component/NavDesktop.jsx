import "../style/animateSocialMedia.css";

export default function NavDesktop(props) {
  const { item } = props;
  return (
    <ul className="hidden containerSocialMedia lg:flex lg:items-center gap-16 text-base">
      {item.map((x) => {
        const { Icon, onClick, title } = x;
        return (
          <li className="item hover:cursor-pointer">
            <a
              href={onClick}
              className="flex items-center gap-1 text-slate-100"
            >
              {/* <Icon /> */}
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
