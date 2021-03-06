import { Counts } from 'meteor/ros:publish-counts';

import getQueryAndProjection from './getQueryAndProjection';

const pubProcessor = (Entity, publishName, getJSONdefs, props, parent, additionalCounts) => {
  const { query, projection } = getQueryAndProjection(publishName, getJSONdefs, props, parent);

  Counts.publish(parent, `${publishName}Count`, Entity.find(query), { fastCount: true });

  if (additionalCounts)
    additionalCounts.forEach((additionalCount) => {
      const queryAdditional = {
        ...query,
        ...additionalCount.query,
      };
      Counts.publish(
        parent,
        `${publishName}_${additionalCount.name}_Count`,
        Entity.find(queryAdditional),
        { fastCount: true },
      );
    });
  return Entity.find(query, projection);
};

export default pubProcessor;
