import Toolbar from './components/Toolbar.jsx';
import { registerToolbarItem } from './helpers.js';

import Separator from './buttons/Separator.jsx';
import Spacer from './buttons/Spacer.jsx';
import Button from './buttons/Button.jsx';
import Label from './buttons/Label.jsx';
import Icon from './buttons/Icon.jsx';
import Item from './buttons/Item.jsx';

registerToolbarItem('button', Button);
registerToolbarItem('separator', Separator);
registerToolbarItem('spacer', Spacer);
registerToolbarItem('label', Label);
registerToolbarItem('item', Item);
registerToolbarItem('icon', Icon);

export { Toolbar, registerToolbarItem };
