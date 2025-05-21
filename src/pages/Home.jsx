import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 text-white">
        <a href='https://www.youtube.com/watch?v=xvFZjo5PgG0&pp=ygUIcmlja3JvbGzSBwkJjQkBhyohjO8%3D' className="text-4xl font-bold">Selamat datang di Booking Kostum Cosplay!</a>
      </div>
    </>
  );
}
