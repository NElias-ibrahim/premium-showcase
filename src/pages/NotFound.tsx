import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-background">
      <div className="container-narrow text-center">
        <p className="eyebrow">404</p>
        <h1 className="headline-lg mt-3">Page not found.</h1>
        <p className="mt-4 text-muted-foreground">Sorry, we couldn't find the page you're looking for.</p>
        <Link to="/" className="mt-8 pill-btn-primary inline-flex">
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
