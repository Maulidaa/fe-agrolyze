import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "Agrolyze",
  description: "Cerdas Bertani, Panen Berarti",
};

export default function RootLayout({children}) {
  return (
    <div className='bg-agro-green'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
