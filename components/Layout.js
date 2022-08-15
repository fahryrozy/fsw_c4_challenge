import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-brown">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
