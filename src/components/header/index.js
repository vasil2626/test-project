import "./style.scss"
import { NavLink } from "react-router-dom";

const Header = () =>{
    return (
        <nav className="nav">
            <div className="nav_wrapper">
               <div className="nav_logo" >
                LOGO
               </div>
               <ul className="nav_links">
                <li className="nav_link_list"> <NavLink to="/" className={ (isActive) =>
"list_link" + (!isActive ? " unselected" : "")
                 } >products</NavLink> </li>
                <li className="nav_link_list"> <NavLink className={"list_link"}> about us</NavLink></li>
                <li className="nav_link_list"> <NavLink className={"list_link"}> conacts</NavLink> </li>
               </ul>
               <div className="nav_end_wrapper">
                <div className="nav_lang_wrapper">
                    <ul className="nav_lang">
                        <li className="lang">en</li>
                        <li className="lang">ru</li>
                    </ul>
                </div>
                <div className="nav_go_project">
                    <span className="go_to_text"> <NavLink className={"list_link"}> go project</NavLink> </span>
                </div>
               </div>
            </div>
        </nav>
    );
}

export default Header