import PropTypes from "prop-types";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
