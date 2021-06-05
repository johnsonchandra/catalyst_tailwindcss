import React from 'react';
import { Link } from 'react-router-dom';

export default function doc3ColumnWithImage(props) {
  const { caption, description, docs } = props;

  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {caption}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">{description}</p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {docs.map((doc) => (
            <div key={doc._id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <Link to={doc.linkUrl}>
                  <img className="h-48 w-full object-cover" src={doc.imgUrl} alt="" />
                </Link>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <Link to={doc.category.linkUrl} className="hover:underline">
                      {doc.category.name}
                    </Link>
                  </p>
                  <Link to={doc.linkUrl} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{doc.title}</p>
                    <p className="mt-3 text-base text-gray-500">{doc.description}</p>
                  </Link>
                </div>
                {/* <div className="mt-6 flex items-center"> */}
                {/*  <div className="flex-shrink-0"> */}
                {/*    <Link to={doc.author.linkUrl}> */}
                {/*      <span className="sr-only">{doc.author.name}</span> */}
                {/*      <img className="h-10 w-10 rounded-full" src={doc.author.imgUrl} alt="" /> */}
                {/*    </Link> */}
                {/*  </div> */}
                {/*  <div className="ml-3"> */}
                {/*    <p className="text-sm font-medium text-gray-900"> */}
                {/*      <Link to={doc.author.linkUrl} className="hover:underline"> */}
                {/*        {doc.author.name} */}
                {/*      </Link> */}
                {/*    </p> */}
                {/*    <div className="flex space-x-1 text-sm text-gray-500"> */}
                {/*      <time dateTime={doc.datetime}>{doc.date}</time> */}
                {/*      <span aria-hidden="true">&middot;</span> */}
                {/*      <span>{doc.readingTime} read</span> */}
                {/*    </div> */}
                {/*  </div> */}
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
