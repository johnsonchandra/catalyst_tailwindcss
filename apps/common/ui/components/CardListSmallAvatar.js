import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CardListSmallAvatar(props) {
  const { docs, caption, description } = props;
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{caption}</h2>
            <p className="text-xl text-gray-500">{description}</p>
          </div>
          <ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
            {docs.map((doc) => (
              <Link key={doc._id} to={doc.linkUrl}>
                <li>
                  <div className="space-y-4">
                    <img
                      className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                      src={doc.imgUrl}
                      alt={doc.name}
                    />
                    <div className="space-y-2">
                      <div className="text-xs font-medium lg:text-sm">
                        <h3>{doc.name}</h3>
                        <p className="text-indigo-600">{doc.role}</p>
                      </div>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

CardListSmallAvatar.defaultProps = {
  caption: '',
  description: '',
};

CardListSmallAvatar.propTypes = {
  docs: PropTypes.arrayOf(PropTypes.object).isRequired,
  caption: PropTypes.string,
  description: PropTypes.string,
};
