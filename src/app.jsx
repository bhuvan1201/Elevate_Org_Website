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
        <Route path="/learn" element={<Learn />} />

      </Routes>
    </>
  );
}
