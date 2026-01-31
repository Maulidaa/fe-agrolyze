import NavbarAdmin from "@/components/atoms/flowbite/NavbarAdmin";
import SidebarAdmin from "@/components/atoms/flowbite/SidebarAdmin";
import "../(public)/globals.css";

export const metadata = {
  title: "Agrolyze",
  description: "Cerdas Bertani, Panen Berarti",
};

export default function RootLayout({children}) {
  return (
    <div className='dark:bg-gray-900 min-h-screen'>
      <NavbarAdmin />
      <div className='flex gap-2'>
        <SidebarAdmin />
        {children}
      </div>
    </div>
  );
}
