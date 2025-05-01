import { Heart } from "lucide-react";

export default function FavButton({ isFav, onClick }) {
    return (
        <button onClick={onClick} className="hover:cursor-pointer">
            <Heart 
                className={`${isFav ? 'text-red-500' : 'text-white'}`} 
                fill={isFav ? 'red' : 'none'} 
            />
        </button>
    )
}