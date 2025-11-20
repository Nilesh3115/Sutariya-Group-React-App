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
      className="w-full h-[70vh] bg-cover bg-center flex flex-col justify-center items-start text-white px-20 shadow-[inset_0_150px_50px_-20px_rgba(0,0,0,0.8)]"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <h1 className="font-outfit 3xl:text-3xlh1 3xl:leading-3xlh1 2xl:text-2xlh1 2xl:leading-2xlh1 xl:text-xlh1 xl:leading-xlh1 lg:text-lgh1 lg:leading-lgh1 md:text-mdh1 md:leading-mdh1 sm:text-smh1 sm:leading-smh1">{pageTitle}</h1>
      {description && <p className="font-outfit 3xl:text-3xlp 3xl:leading-3xlp 2xl:text-2xlp 2xl:leading-2xlp xl:text-xlp xl:leading-xlp lg:text-lgp lg:leading-lgp md:text-mdp md:leading-mdp sm:text-smp sm:leading-smp" style={{ marginTop: "15px", maxWidth: "800px" }}>{description}</p>}
    </section>
  );
};

export default HeroSection;
