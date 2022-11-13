import Header from './components/header';
import SectionPreview from './components/sectionPreview';
import SectionAbout from './components/sectionAbout';
import SectionSkills from './components/sectionSkils';
import SectionProjects from './components/sectionProjects';
import Footer from './components/footer';

import './App.css'

function App() {
  return (
    <div>
      <Header/>
      <SectionPreview />
      <SectionAbout />
      <SectionSkills />
      <SectionProjects />
      <Footer />
    </div>
  );
}

export default App;
