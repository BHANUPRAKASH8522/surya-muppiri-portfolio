import { Home, User, Code, Youtube, Phone } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Home", url: "#", icon: Home },
  { title: "About", url: "#about", icon: User },
  { title: "Skills", url: "#skills", icon: Code },
  { title: "Projects", url: "#projects", icon: Code },
  { title: "Youtube", url: "#youtube", icon: Youtube },
  { title: "Contact", url: "#contact", icon: Phone },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId.substring(1));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-background/95 backdrop-blur-sm">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => scrollToSection(item.url)}
                    className="w-full justify-start hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <item.icon className="h-4 w-4" />
                    {!isCollapsed && <span className="ml-2">{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}