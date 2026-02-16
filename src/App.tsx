
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
/*import Faculty from "./pages/Faculty";*/
import Team from "./pages/Team";
import Alumni from "./pages/Alumni";
import Collaborations from "./pages/Collaborations";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Facilities from "./pages/Facilities";
import News from "./pages/News";
/*import Blog from "./pages/Blog";
import BlogPost from "./pages/Blog-Post";   // ✅ ADD THIS*/
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* People */}
          <Route path="/team" element={<Team />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/collaborations" element={<Collaborations />} />
          {/* Work */}
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/facilities" element={<Facilities />} />
          {/* Media */}
          <Route path="/news" element={<News />} />

          

          <Route path="/gallery" element={<Gallery />} />
           {/* Contact */}
          <Route path="/contact" element={<Contact />} />
           {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
