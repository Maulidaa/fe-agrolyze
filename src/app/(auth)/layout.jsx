import NavbarAdmin from "@/components/atoms/flowbite/NavbarAdmin";
import SidebarAdmin from "@/components/atoms/flowbite/SidebarAdmin";
import "../(public)/globals.css";

export const metadata = {
  title: "Agrolyze",
  description: "Cerdas Bertani, Panen Berarti",
};

export default function RootLayout({children}) {
  return (
    <div>{children}</div>
  );
}
