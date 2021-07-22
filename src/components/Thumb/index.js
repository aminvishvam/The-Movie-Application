import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image } from './Thumb.styles'

const Thumb = ({ image, movieId, clickAble }) => {
    return (
        <div>
            {clickAble ? (
                <Link to={`/${movieId}`}>
                    <Image src={image} alt="movie-thumbnail" />
                </Link>
            ) : (
                <Image src={image} alt="movie-thumbnail" />
            )}
        </div>
    )
}

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickAble: PropTypes.bool
}

export default Thumb;