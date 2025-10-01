import { useLocation } from "react-router-dom";
import "./Breadcrums.css"; // optional, for additional styling

const HeroSection = ({ description, bgImage }) => {
  const location = useLocation();

  // URL se page title automatically nikalna
  const pathParts = location.pathname.split("/").filter(part => part);
  const pageTitle = pathParts.length
    ? pathParts[pathParts.length - 1]
        .replace(/-/g, " ")
        .replace(/\b\w/g, c => c.toUpperCase())
    : "Home";

  return (
    <section
      className="breadcrumb-hero"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <h1>{pageTitle}</h1>
      {description && <p style={{ marginTop: "15px", maxWidth: "800px" }}>{description}</p>}
    </section>
  );
};

export default HeroSection;
