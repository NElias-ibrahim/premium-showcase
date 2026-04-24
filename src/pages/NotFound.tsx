import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="container-narrow text-center">
        <p className="eyebrow">404</p>
        <h1 className="display-serif text-6xl md:text-8xl mt-6 leading-[1]">
          Égarés <span className="italic">avec grâce.</span>
        </h1>
        <p className="mt-6 text-muted-foreground">Cette page n'existe pas — ou n'existe plus.</p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm text-primary-foreground hover:scale-[1.03] transition-transform duration-500"
        >
          Retour à l'accueil
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
