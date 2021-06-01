import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function FAQListWithOffset(props) {
  const { docs } = props;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Frequently asked questions</h2>
            {/* <p className="mt-4 text-lg text-gray-500"> */}
            {/*  Can’t find the answer you’re looking for? Reach out to our{' '} */}
            {/*  <Link to={linkUrl} className="font-medium text-indigo-600 hover:text-indigo-500"> */}
            {/*    customer support */}
            {/*  </Link>{' '} */}
            {/*  team. */}
            {/* </p> */}
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {docs.map((doc) => (
                <div key={doc._id}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">{doc.question}</dt>
                  <dd className="mt-2 text-base text-gray-500">{doc.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

FAQListWithOffset.propTypes = {
  docs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
