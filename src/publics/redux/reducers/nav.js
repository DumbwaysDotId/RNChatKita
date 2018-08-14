import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigators from '../../../../RootNavigators';

const nav = createNavigationReducer(RootNavigators);

export default nav;