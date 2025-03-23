
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PracticeAreas from "./pages/PracticeAreas";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Attorneys from "./pages/Attorneys";
import StickyContact from "./components/ui/StickyContact";

// Create a path for the legal case studies page
const CaseStudies = () => <div>Case Studies Page</div>;

// Create a path for the appointments page
const AppointmentPage = () => <div>Appointment Page</div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route path="/attorneys" element={<Attorneys />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <StickyContact />
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
