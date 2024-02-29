// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <DndProvider backend={HTML5Backend}>
  <ThemeCustomization>
    <ScrollTop>
      <Routes />
    </ScrollTop>
  </ThemeCustomization>
  </DndProvider>
);

export default App;
