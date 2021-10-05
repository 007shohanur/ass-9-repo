import React from 'react';
import useServices from '../../Custom-Hook/useServices';
const Services = () => {
    const [services, setServices] = useServices([]);
    return (
        <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4 mb-3 mt-3">
        {
            services.map(service=> 
                <div className="col">
                <div className="card h-100 bg-info bg-opacity-10">
                  <img  src={service.img} className=" p-4 card-img-top w-50 mx-auto" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title"> {service.name}</h5>
                    <p className="card-text"> Details:{service.detail}</p>
                  </div>
                  <div className="card-footer">
                    <p>Price: {service.price}</p>
                  </div>
                </div>
              </div>)
        }

    </div>
    );
};

export default Services;