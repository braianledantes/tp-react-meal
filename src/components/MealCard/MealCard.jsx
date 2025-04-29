import { Heart } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import FavButton from '../FavButton/FavButton';
import PATHS from '../../routes/paths';

const MealCard = ({ id, image, title, isFav, onClickFavorites }) => {
    const handleClick = (e) => {
        e.preventDefault();
        onClickFavorites(id);
    };

    return (
        <Link to={PATHS.getDetailsUrl(id)} className="shadow-md rounded-lg relative hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img src={image} alt={title} className="w-full object-cover rounded-lg aspect-square inline-block" />
            <div className='flex justify-between items-end gap-2 p-4 absolute bottom-0 left-0 right-0 rounded-b-lg backdrop-blur-sm'>
                <h2 className="text-xl font-bold text-amber-50 text-shadow-sm">{title}</h2>
                <FavButton isFav={isFav} onClick={handleClick} />
            </div>
        </Link>
    );
};

export default MealCard;