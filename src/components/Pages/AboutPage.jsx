import Card from "../shared/Card";
import { Link } from "react-router-dom";

function AboutPage()
{
    return (<Card>
<div className="about">
    <h1>About this project</h1>
  
    <p>This is react app to leave feedback for a product or service.</p>
    <p>version:1.0.0</p>

    <p> 
        <Link to="/">back to home</Link>
    </p>
</div>

    </Card>);
}

export default AboutPage;