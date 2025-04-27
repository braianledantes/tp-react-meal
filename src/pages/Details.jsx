import { useParams } from 'react-router-dom'

export default function Details() {
    const { id } = useParams()

    console.log(id)

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Detalles de la receta</h1>
            <p className="text-lg">Aquí van los detalles de la receta seleccionada.</p>
        </div>
    )
}