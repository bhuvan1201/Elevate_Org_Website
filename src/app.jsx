import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import MeetTheTeam from "./pages/MeetTheTeam";
import Contact from "./pages/Contact";
import Learn from "./pages/Learn";
import TeenVapingAwareness from "./pages/TeenVapingAwareness";
import AdolescentObesity from "./pages/AdolescentObesity";
import GenesisFoundation from "./pages/GenesisFoundation";
import BuildingBlocksFoundation from "./pages/BuildingBlocksFoundation";
import TutoringEducation from "./pages/TutoringEducation";
import Fitness from "./pages/Fitness";
import TennisForGood from "./pages/TennisForGood";
import GetInvolved from "./pages/GetInvolved";
import Donate from "./pages/Donate";
import GlobalTutoring from "./pages/GlobalTutoring";
import EducationalVideoLibrary from "./pages/EducationalVideoLibrary";
import SportsStrengthTraining from "./pages/SportsStrengthTraining";
import BecomePartner from "./pages/BecomePartner";
import HealthAwareness from "./pages/HealthAwareness";
import YouthLeadership from "./pages/YouthLeadership";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/story" element={<OurStory />} />
        <Route path="/about/team" element={<MeetTheTeam />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/projects/teen-vaping-awareness" element={<TeenVapingAwareness />} />
        <Route path="/projects/adolescent-obesity" element={<AdolescentObesity />} />
        <Route path="/partners/genesis-foundation" element={<GenesisFoundation />} />
        <Route path="/partners/building-blocks-foundation" element={<BuildingBlocksFoundation />} />
        <Route path="/learn/tutoring-education" element={<TutoringEducation />} />
        <Route path="/learn/fitness" element={<Fitness />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/projects/tennis-for-good" element={<TennisForGood />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/projects/global-tutoring" element={<GlobalTutoring />} />
        <Route path="/projects/educational-video-library" element={<EducationalVideoLibrary />} />
        <Route path="/projects/sports-strength-training" element={<SportsStrengthTraining />} />
        <Route path="/partners/become-a-partner" element={<BecomePartner />} />
        <Route path="/learn/health-awareness" element={<HealthAwareness />} />
        <Route path="/learn/youth-leadership" element={<YouthLeadership />} />


      </Routes>
    </>
  );
}
