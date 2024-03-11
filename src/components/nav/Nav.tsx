import NavIcon from "../../assets/bar.svg";
import Exit from "../../assets/exit.svg";
import "./nav.scss";
import { useRef } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const navOverlay = useRef<HTMLDialogElement>(null);
  const openNav = () => {
    navOverlay.current?.showModal();
  };
  return (
    <>
      <picture onClick={() => openNav()} className="nav-img-wrapper">
        <img src={`${NavIcon}`} alt="navicon" />
      </picture>
      <dialog className="nav-overlay" ref={navOverlay}>
        <article className="nav-wrapper">
          <div onClick={() => navOverlay.current?.close()} className="exit">
            <img src={`${Exit}`} alt="" />
          </div>
          <Link onClick={() => navOverlay.current?.close()} to="/menu">
            <h2>Meny</h2>
            <p>_____</p>
          </Link>
          <Link onClick={() => navOverlay.current?.close()} to="/about">
            <h2>Vårt kaffe</h2>
            <p>_____</p>
          </Link>
          <Link onClick={() => navOverlay.current?.close()} to="/profile">
            <h2>Min Profil</h2>
            <p>_____</p>
          </Link>
          <Link onClick={() => navOverlay.current?.close()} to="/status">
            <h2>Orderstatus</h2>
          </Link>
        </article>
      </dialog>
    </>
  );
};

export default Nav;
