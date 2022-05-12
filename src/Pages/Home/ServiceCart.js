import React from 'react';

const ServiceCart = ({ services }) => {
    return (
        <div>
            <div className="card lg:mx:w-lg bg-base-100 shadow-xl">
                <figure>
                    <img src={services.img} alt="Album" />
                </figure>
                <div className="card-body text-center">
                    <h2>{services.name}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;