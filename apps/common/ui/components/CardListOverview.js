import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardListOverview = (props) => {
  const { docs, title } = props;
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-lg leading-6 font-medium text-gray-900">{title}</h2>
      <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* doc */}
        {docs.map((doc) => (
          <div key={doc._id} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <doc.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{doc.name}</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{doc.amount}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <Link to={doc.linkUrl} className="font-medium text-cyan-700 hover:text-cyan-900">
                  View all
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

CardListOverview.defaultProps = {
  title: '',
};

CardListOverview.propTypes = {
  docs: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};

export default CardListOverview;
