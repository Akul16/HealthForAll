import './App.css';
import HowItWorksSection from './components/HowItWorksSection/HowItWorksSection';
import LatestNewsSection from './components/LatestNewsSection/LatestNewsSection';
import MainSection from './components/MainSection/MainSection';
import TestimonialsSection from './components/TestimonialSection/TestimonialSection';
import MakeADifferenceSection from './components/MakeADifferenceSection/MakeADifferenceSection';
import Navbar from './components/navbar/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <MainSection />
            <HowItWorksSection />
            <MakeADifferenceSection />
            <TestimonialsSection />
            <LatestNewsSection />

        </div>
    );
}

export default App;
