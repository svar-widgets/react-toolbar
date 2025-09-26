import BasicInit from './cases/BasicInit.jsx';
import OverflowMenu from './cases/OverflowMenu.jsx';
import OverflowMenuGroups from './cases/OverflowMenuGroups.jsx';
import OverflowCollapsed from './cases/OverflowCollapsed.jsx';
import MultiLine from './cases/MultiLine.jsx';
import OverflowWrap from './cases/OverflowWrap.jsx';
import CollapsedGroups from './cases/CollapsedGroups.jsx';
import Buttons from './cases/Buttons.jsx';
import Values from './cases/Values.jsx';
import Ribbon from './cases/Ribbon.jsx';
import HeaderMenu from './cases/HeaderMenu.jsx';

export const links = [
  ['/base/:skin', 'Toolbar basic', BasicInit, 'BasicInit'],
  ['/multiline/:skin', 'Multiline', MultiLine, 'MultiLine'],
  [
    '/collapsed/:skin',
    'Collapsed sections',
    CollapsedGroups,
    'CollapsedGroups',
  ],
  ['/ribbon/:skin', 'Ribbon', Ribbon, 'Ribbon'],
  ['/buttons/:skin', 'Button types', Buttons, 'Buttons'],
  ['/values/:skin', 'Binding values', Values, 'Values'],
  ['/menu/:skin', 'Overflow menu', OverflowMenu, 'OverflowMenu'],
  ['/wrap/:skin', 'Overflow wrap', OverflowWrap, 'OverflowWrap'],
  [
    '/menu-groups/:skin',
    'Overflow menu groups',
    OverflowMenuGroups,
    'OverflowMenuGroups',
  ],
  [
    '/sections/:skin',
    'Overflow collapse',
    OverflowCollapsed,
    'OverflowCollapsed',
  ],
  ['/header/:skin', 'Header menu', HeaderMenu, 'HeaderMenu'],
];
