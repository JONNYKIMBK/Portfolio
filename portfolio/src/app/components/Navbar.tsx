import Link from "next/link";
import styles from "./Navbar.module.css";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Proyectos",
    route: "/proyects",
  },
  {
    label: "Contacto",
    route: "/contact",
  },
];

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.list}>
        <ul className={styles.ul}>
          {links.map(({ label, route }) => (
            <li className={styles.li} key={route}>
              <Link href={route}>
                <div className={styles.link}>{label}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <img
        className={styles.img}
        src="https://media.licdn.com/dms/image/C4E03AQFkrhTACqM0qg/profile-displayphoto-shrink_800_800/0/1655984250480?e=1685577600&v=beta&t=usXAAKA5n8E0sGG3KhCH_0XIzZxkhPifJQmo5HeYRYM"
        alt=""
      />
    </div>
  );
}
