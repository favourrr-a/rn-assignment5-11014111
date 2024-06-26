import { NavigationContainer } from '@react-navigation/native';
import { AppContextProvider } from './store/context';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <NavigationContainer>
      <AppContextProvider>
        <NavBar />
      </AppContextProvider>
    </NavigationContainer>    
  );
}