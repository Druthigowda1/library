import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Homepage/Home';
import Loginpage1 from './Login/Loginpage1';
import FloatingReviewBox from './Homepage/FloatingReviewBox';
import Schools from './components/Schools/Schools';
import Neet from './components/Neet/Neet';
import Allauthors from './components/Authors/Allauthors'

import Class1State from './components/Schools/State/Class1';
import Class2State from './components/Schools/State/Class2';
import Class3State from './components/Schools/State/Class3';
import Class4State from './components/Schools/State/Class4';
import Class5State from './components/Schools/State/Class5';
import Class6State from './components/Schools/State/Class6';
import Class7State from './components/Schools/State/Class7';
import Class8State from './components/Schools/State/Class8';
import Class9State from './components/Schools/State/Class9';
import Class10State from './components/Schools/State/Class10';
import Class1Cbse from './components/Schools/CBSE/Class1';
import Class2Cbse from './components/Schools/CBSE/Class2';
import Class3Cbse from './components/Schools/CBSE/Class3';
import Class4Cbse from './components/Schools/CBSE/Class4';
import Class5Cbse from './components/Schools/CBSE/Class5';
import Class6Cbse from './components/Schools/CBSE/Class6';
import Class7Cbse from './components/Schools/CBSE/Class7';
import Class8Cbse from './components/Schools/CBSE/Class8';
import Class9Cbse from './components/Schools/CBSE/Class9';
import Class10Cbse from './components/Schools/CBSE/Class10';

import Class1Icse from './components/Schools/CBSE/Class1';
import Class2Icse from './components/Schools/ICSE/Class2';
import Class3Icse from './components/Schools/ICSE/Class3';
import Class4Icse from './components/Schools/ICSE/Class4';
import Class5Icse from './components/Schools/ICSE/Class5';
import Class6Icse from './components/Schools/ICSE/Class6';
import Class7Icse from './components/Schools/ICSE/Class7';
import Class8Icse from './components/Schools/ICSE/Class8';
import Class9Icse from './components/Schools/ICSE/Class9';
import Class10Icse from './components/Schools/ICSE/Class10';

// engineering

import Cse from './components/BE/Cse'

// Reserach
import Journal from './components/Reserach/Journals';
import Research from './components/Reserach/Research';

// puc 
import PuScience from './components/PUC/PuScience';
import Commerce from './components/PUC/Commerce';
import Arts from './components/PUC/Arts';

// Degree
import Bca from './components/Degree/Bca';
import Bba from './components/Degree/Bba';
import Bcom from './components/Degree/Bcom';
import Bsc from './components/Degree/Bsc';
import Ba from './components/Degree/Ba';

// Masters
import Mcom from './components/Masters/Mcom';
import Msc from './components/Masters/Msc';
import Mba from './components/Masters/Mba';
import Mca from './components/Masters/Mca';
import Ma from './components/Masters/Ma';

import Blog from './Blog/Blog';
import Home1 from './components/Newarrivals/Home';
import Dashboard from './Pages/Dashboard/Dashboard';

// campus books
import Quant from './components/campus/Quant'
import Di from './components/campus/Di'
import Reasoning from './components/campus/Reasoning'
import English from './components/campus/English'
import Softskills from './components/campus/Softskills'

// BAnking Books

import Ibps from './components/Banking/Ibps'
import Sbi from './components/Banking/Sbi'
import Bankingheader from './components/Banking/Bankinghedaer'

// Import Employee Context Provider
import { EmployeeProvider } from "./Pages/context/EmployeeContext";
import { ItemsProvider } from "./Pages/context/ItemsContext";
import Signup from './Login/Signup';



function App() {
  return (
    <EmployeeProvider>

      <Router>
        <FloatingReviewBox />
   

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Loginpage1 />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/school-books" element={<Schools />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/new-arrival" element={<Home1 />} />
          <Route path='/authors' element={<Allauthors />} />
          <Route path="/neet-books" element={<Neet />} />

          {/* Reserach Paper */}
          <Route path="/journal/paper" element={<Journal />} />
          <Route path="/reserach/paper" element={<Research />} />

          {/* PUC */}
          <Route path='/puc/science' element={<PuScience />} />
          <Route path='/puc/commerce' element={<Commerce />} />
          <Route path='/puc/arts' element={<Arts />} />

          {/* Degree */}
          <Route path='/degree/bba' element={<Bba />} />
          <Route path='/degree/bca' element={<Bca />} />
          <Route path='/degree/bcom' element={<Bcom />} />
          <Route path='/degree/bsc' element={<Bsc />} />
          <Route path='/degree/ba' element={<Ba />} />

          {/* Masters */}
          <Route path='/masters/mcom' element={<Mcom />} />
          <Route path='/masters/mba' element={<Mba />} />
          <Route path='/masters/mca' element={<Mca />} />
          <Route path='/masters/msc' element={<Msc />} />
          <Route path='/masters/ma' element={<Ma />} />

          {/* Engineering */}
          <Route path='/be/cse' element={<Cse />} />

          {/* Campus */}
          <Route path="/quantitative-books" element={<Quant />} />
          <Route path="/datainterpretation-books" element={<Di />} />
          <Route path="/logical-reasoning-book" element={<Reasoning />} />
          <Route path="/verbal-ability-english" element={<English />} />
          <Route path="/soft-skills-books" element={<Softskills />} />

          {/* Banking */}
          <Route path="/bank-books" element={<Bankingheader />} />
          <Route path="/ibps-books" element={<Ibps />} />
          <Route path="/sbi-books" element={<Sbi />} />

          <Route path="/dashboard" element={
            <ItemsProvider>
              <Dashboard />
            </ItemsProvider>} />

          {/* STATE BOARD */}
          <Route path="/state/class-1" element={<Class1State />} />
          <Route path="/state/class-2" element={<Class2State />} />
          <Route path="/state/class-3" element={<Class3State />} />
          <Route path="/state/class-4" element={<Class4State />} />
          <Route path="/state/class-5" element={<Class5State />} />
          <Route path="/state/class-6" element={<Class6State />} />
          <Route path="/state/class-7" element={<Class7State />} />
          <Route path="/state/class-8" element={<Class8State />} />
          <Route path="/state/class-9" element={<Class9State />} />
          <Route path="/state/class-10" element={<Class10State />} />

          {/* CBSE */}
          <Route path="/cbse/class-1" element={<Class1Cbse />} />
          <Route path="/cbse/class-2" element={<Class2Cbse />} />
          <Route path="/cbse/class-3" element={<Class3Cbse />} />
          <Route path="/cbse/class-4" element={<Class4Cbse />} />
          <Route path="/cbse/class-5" element={<Class5Cbse />} />
          <Route path="/cbse/class-6" element={<Class6Cbse />} />
          <Route path="/cbse/class-7" element={<Class7Cbse />} />
          <Route path="/cbse/class-8" element={<Class8Cbse />} />
          <Route path="/cbse/class-9" element={<Class9Cbse />} />
          <Route path="/cbse/class-10" element={<Class10Cbse />} />

          {/* ICSE */}
          <Route path="/icse/class-1" element={<Class1Icse />} />
          <Route path="/icse/class-2" element={<Class2Icse />} />
          <Route path="/icse/class-3" element={<Class3Icse />} />
          <Route path="/icse/class-4" element={<Class4Icse />} />
          <Route path="/icse/class-5" element={<Class5Icse />} />
          <Route path="/icse/class-6" element={<Class6Icse />} />
          <Route path="/icse/class-7" element={<Class7Icse />} />
          <Route path="/icse/class-8" element={<Class8Icse />} />
          <Route path="/icse/class-9" element={<Class9Icse />} />
          <Route path="/icse/class-10" element={<Class10Icse />} />



        </Routes>
      </Router>
    </EmployeeProvider>
  );
}

export default App;

