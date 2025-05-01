import { Link } from "react-router-dom";

export default function Error() {
    console.log("404 - Página no encontrada");
    return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-500">404 - Página no encontrada</h1>
      <p className="text-gray-500 mt-4">La página que estás buscando no existe.</p>
      <Link to="/" className="mt-6 text-blue-500 underline">
        Volver al inicio
      </Link>
    </section>
  );
}