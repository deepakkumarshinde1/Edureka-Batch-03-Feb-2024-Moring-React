import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <section className="page-not-found">
        <p>Page Not Found :/</p>
        <Link to="/">Go To Home</Link>
      </section>
    </>
  );
};

export default PageNotFound;
