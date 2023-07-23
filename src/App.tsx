import './App.css';
// Import Components
import Header from './components/header';
import Users from './components/users';

const App: React.FC = () => {
  return (
    <>
      <div
        className="font-sans antialiased leading-normal tracking-wider bg-cover min-h-screen bg-gradient-to-b from-slate-900 to-blue-800 text-gray-900"
      >
        <Header />
        <Users />
      </div>
    </>
  );
}

export default App;