import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import navigationsFooter from '../pages/Home/navigationsFooter';

export default function Footer(props) {
  const { logoUrl, motto, copyright } = props;

  return (
    <footer className="bg-white" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-md mx-auto py-12 px-4 sm:max-w-3xl sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-12 border-t border-warm-gray-200 pt-8">
          <p className="text-base text-warm-gray-400 xl:text-center">&nbsp;</p>
        </div>
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img className="h-10" src={logoUrl} alt="Logo" />
            <p className="text-warm-gray-500 text-base">{motto}</p>
            <div className="flex space-x-6">
              {navigationsFooter.social.map((item) => (
                <Link
                  key={item._id}
                  to={item.linkUrl}
                  className="text-warm-gray-400 hover:text-warm-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-warm-gray-700 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigationsFooter.solutions.map((item) => (
                    <li key={item._id}>
                      <Link
                        to={item.linkUrl}
                        className="text-base text-warm-gray-500 hover:text-warm-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-warm-gray-700 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigationsFooter.support.map((item) => (
                    <li key={item._id}>
                      <Link
                        to={item.linkUrl}
                        className="text-base text-warm-gray-500 hover:text-warm-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-warm-gray-700 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigationsFooter.company.map((item) => (
                    <li key={item._id}>
                      <Link
                        to={item.linkUrl}
                        className="text-base text-warm-gray-500 hover:text-warm-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-warm-gray-700 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigationsFooter.legal.map((item) => (
                    <li key={item._id}>
                      <Link
                        to={item.linkUrl}
                        className="text-base text-warm-gray-500 hover:text-warm-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-warm-gray-200 pt-8">
          <p className="text-base text-warm-gray-400 xl:text-center">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  logoUrl: '/mkcb_logo_with_name.png',
  motto: 'Catalyst your Development',
  copyright: 'PT Maya Katalis Cipta Buana',
};

Footer.propTypes = {
  logoUrl: PropTypes.string,
  motto: PropTypes.string,
  copyright: PropTypes.string,
};
