import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import NProgress from "nprogress";
import nProgress from "nprogress";
import classNames from "classnames";

const Layout = ({ children, title, footer = true }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    router.events.on("routeChangeError", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <main className="container py-4">
        {/* Title */}
        {title && (
          <h1 className={classNames("text-center")}>
            {title}
          </h1>
        )}

        {/* Content */}
        {children}
      </main>

      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Catalina Quidenao</h1>
            <p>2023 - {new Date().getFullYear()}</p>
            <p>Todos Los Derechos Reservados.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

Layout.proptypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  footer: PropTypes.bool,
};

export default Layout;
