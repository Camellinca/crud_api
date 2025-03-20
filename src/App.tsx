import './App.css';
import { MainWindow } from './Pages/MainWindow/ui/MainWindow';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from 'react-router';
import { Pryaniki } from './features/Pryaniky.com/ui/Pryaniki/Pryaniki';

function App() {
    return (
        <BrowserRouter>
            <ReduxProvider store={store}>
                <MainWindow>
                    <Pryaniki />
                </MainWindow>
            </ReduxProvider>
        </BrowserRouter>
    );
}

export default App;
