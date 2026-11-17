import LeftAside from "../../Components/LeftAside/LeftAside";
import MainContent from "../../Components/MainContent/MainContent";
import RightAside from "../../Components/RightAside/RightAside";

function Home() {
  return (
    <div className="container">
      <LeftAside />
      <MainContent />
      <RightAside />
    </div>
  );
}

export default Home;