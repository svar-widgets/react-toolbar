import BasicInit from './cases/BasicInit.jsx';
import OverflowMenu from './cases/OverflowMenu.jsx';
import OverflowMenuPinned from './cases/OverflowMenuPinned.jsx';
import OverflowMenuGroups from './cases/OverflowMenuGroups.jsx';
import OverflowCollapsed from './cases/OverflowCollapsed.jsx';
import MultiLine from './cases/MultiLine.jsx';
import OverflowWrap from './cases/OverflowWrap.jsx';
import CollapsedGroups from './cases/CollapsedGroups.jsx';
import Buttons from './cases/Buttons.jsx';
import Values from './cases/Values.jsx';
import Ribbon from './cases/Ribbon.jsx';
import HeaderMenu from './cases/HeaderMenu.jsx';
import Tooltips from './cases/Tooltips.jsx';
import VerticalBar from './cases/VerticalBar.jsx';

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
  ['/tooltip/:skin', 'Button tooltips', Tooltips, 'Tooltips'],
  ['/values/:skin', 'Binding values', Values, 'Values'],
  ['/menu/:skin', 'Overflow menu', OverflowMenu, 'OverflowMenu'],
  [
    '/menu-pinned/:skin',
    'Overflow menu pinned',
    OverflowMenuPinned,
    'OverflowMenuPinned',
  ],
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
  ['/vertical/:skin', 'Vertical toolbar', VerticalBar, 'VerticalBar'],
];
