import { Link } from "react-router-dom";
import "./style.scss";

function NotFound() {
  return (
    <>
      <div className="container">
        <div className="error">
          <p className="error__code">404</p>
          <p className="error__code-desc">Page not found - 404</p>
          <p className="error__desc">
            This page not found (deleted or never exists).Try a phrase in search
            box or back to home and start again.
          </p>
          <Link className="link ">TAKE ME HOME!</Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
