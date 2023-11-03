import {Link,HashRouter,Routes,Route} from "react-router-dom";
import "./findJobDash.css"
import "./FeaturedJobs"
import logoImage from "../LOGO/LOGO_transparent.png";
function Nav()
{
    const imageStyles = {
        width: "200px",      // Set the width
        height: "auto",      // Maintain aspect ratio
        borderRadius: "30px", // Create a circular image
        // border: "2px solid ", // Add a border
      };
    return(
        // <nav class="navbar bg-light">
        <nav class="navbar bg-dark" style={{width:'100%'}} >
          <Link to ="/" class="navbar-brand mx-3">
          <img  src={logoImage} alt="Logo"  style={imageStyles} />
          </Link>
          <div class="nav">
             <Link to="/find-work" class="nav-link text-light">Find Work</Link>
             <Link to="/applications" class="nav-link text-light">Applications</Link>  
             <Link to="/skill" class="nav-link text-light">Skills</Link>  
             <center>
                <button id="findJobButton">Login</button>
            </center>
          </div>        
        </nav>
    );
}
export default Nav;

