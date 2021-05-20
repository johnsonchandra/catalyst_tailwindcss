import React from 'react';

import NavbarWithImageBackground from '../../../../common/ui/components/NavbarWithImageBackground';

import navigations from './navigations';

export default function HomePublic() {
  window.scrollTo({ top: 0 });

  return (
    <NavbarWithImageBackground
      navigations={navigations}
      caption="Example Application"
      description="This is Example Application to show multi tenancy of Catalyst Engine"
    >
      <p>welcome to example</p>
    </NavbarWithImageBackground>
  );
}
