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
  ['/base/:skin', 'Toolbar basic', BasicInit],
  ['/multiline/:skin', 'Multiline', MultiLine],
  ['/collapsed/:skin', 'Collapsed sections', CollapsedGroups],
  ['/ribbon/:skin', 'Ribbon', Ribbon],
  ['/buttons/:skin', 'Button types', Buttons],
  ['/values/:skin', 'Binding values', Values],
  ['/menu/:skin', 'Overflow menu', OverflowMenu],
  ['/wrap/:skin', 'Overflow wrap', OverflowWrap],
  ['/menu-groups]/:skin', 'Overflow menu groups', OverflowMenuGroups],
  ['/sections/:skin', 'Overflow collapse', OverflowCollapsed],
  ['/header/:skin', 'Header menu', HeaderMenu],
];
