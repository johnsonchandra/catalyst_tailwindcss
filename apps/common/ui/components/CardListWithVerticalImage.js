import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CardListWithVerticalImage(props) {
  const { docs, caption, description } = props;
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{caption}</h2>
            <p className="text-xl text-gray-500">{description}</p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
              {docs.map((doc) => (
                <li key={doc._id}>
                  <Link to={doc.linkUrl}>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2">
                        <img
                          className="object-cover shadow-lg rounded-lg"
                          src={doc.imgUrl}
                          alt=""
                        />
                      </div>
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{doc.name}</h3>
                        <p className="text-indigo-600">{doc.role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{doc.description}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

CardListWithVerticalImage.defaultProps = {
  caption: '',
  description: '',
};

CardListWithVerticalImage.propTypes = {
  docs: PropTypes.arrayOf(PropTypes.object).isRequired,
  caption: PropTypes.string,
  description: PropTypes.string,
};
