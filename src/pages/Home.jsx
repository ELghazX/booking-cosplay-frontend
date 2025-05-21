import Navbar from "../Components/Navbar";
import ButtonLink from "../Components/ButtonLink";
import foto from "../assets/Group 8.png";
import bentuk from "../assets/Vector 1.png";

export default function Home() {
  return (
    <>
      <Navbar/>
      <img src={bentuk} className="bentuk" />
      <div className="section1">
        <div>
          <h1>Jadilah Apa Yang </h1>
          <h1>Kamu Inginkan!!!</h1>
          <ButtonLink/>
        </div>
        <img src={foto} alt="" />
      </div>
    </>
  );
}
