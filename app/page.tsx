import CoverParticles from "./componets/cover-particles";


export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen bg-no-repeat bg-gradient-to-r from-blue-500 to-green-500">
        <CoverParticles />
        <h1 className="text-6xl text-white font-bold">Hola, mi nombre es Skye</h1>
        <p className="text-xl text-white">Soy un diseñador web y un estudiante de ingeniería</p>
      </div>
    </main>
  );
}
