import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ButtonText from "../Components/Button";
export default function Layout({ children }) {
  return (
    <div className="layout">
      {/* Header */}
      <Header />
      {/* Main */}
      <main>{children}</main>
      {/* footer */}
      <Footer />
    </div>
  );
}
