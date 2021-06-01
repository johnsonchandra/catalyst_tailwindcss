import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../helpers/classNames';

export default function BlogList3Column(props) {
  const { docs } = props;
  return (
    <div className="bg-white px-4 sm:px-6">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {docs.map((doc) => (
            <div key={doc._id}>
              <div>
                <a href={doc.category.href} className="inline-block">
                  <span
                    className={classNames(
                      doc.category.color,
                      'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium',
                    )}
                  >
                    {doc.category.name}
                  </span>
                </a>
              </div>
              <a href={doc.href} className="block mt-4">
                <p className="text-xl font-semibold text-gray-900">{doc.title}</p>
                <p className="mt-3 text-base text-gray-500">{doc.description}</p>
              </a>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href={doc.author.href}>
                    <span className="sr-only">{doc.author.name}</span>
                    <img className="h-10 w-10 rounded-full" src={doc.author.imageUrl} alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href={doc.author.href}>{doc.author.name}</a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={doc.datetime}>{doc.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{doc.readingTime} read</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

BlogList3Column.propTypes = {
  docs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
