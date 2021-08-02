import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({title, url, id}) => {
    return (
        <div className="card animate__animated animate__tada">
            <img
                src={url} 
                alt={title}
            />
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number
}
GifGridItem.defaultProps = {
    url : "https://",
    title : "Default Title",
    id : 1
}