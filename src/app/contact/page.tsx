import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import PageNavigation from "@/components/layout/PageNavigation";
import ContactCTA from "@/components/sections/ContactCTA";

export default function ContactPage() {
  return (<><Navbar /><main className="min-h-screen bg-[#050505]"><ContactCTA /><Container><PageNavigation current="/contact" /></Container></main><Footer /></>);
}