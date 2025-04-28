import { Heart } from "lucide-react";

export default function FavButton({ isFav, onClick }) {
    return (
        <button onClick={onClick} className={`${isFav ? 'text-red-500' : 'text-gray-500'} hover:cursor-pointer`}>
            <Heart />
        </button>
    )
}