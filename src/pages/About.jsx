const teamMembers = [
  {
    name: "Zhorif Fahdiat",
    nim: "2309106012",
    image: "/img1.png",
  },
  {
    name: "Muh Agill Firmansyah",
    nim: "2309106018",
    image: "/img2.png",
  },
  {
    name: "Muhammad Ghazali",
    nim: "2309106041",
    image: "/img3.png",
  },
  {
    name: "Muhammad Guntur",
    nim: "23091060",
    image: "/img4.png",
  },
];

function About() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h4 className="text-sm font-medium uppercase tracking-widest text-gray-600 mb-2">About Us</h4>
      <h2 className="text-3xl font-bold mb-4">ChocoMintsCos</h2>
      <p className="max-w-2xl mx-auto text-gray-700 mb-12">
        Gacor kang.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-pink-200 to-orange-200 rounded-xl p-4 flex flex-col items-center"
          >
            <img
              src={member.image}
              className="rounded-xl object-cover w-full h-64 mb-4"
            />
            <p className="text-lg font-semibold text-gray-800">{member.name}</p>
            <p className="text-sm text-gray-600">{member.nim}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
