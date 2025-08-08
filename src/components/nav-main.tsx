"use client";
import { IconUsers } from "@tabler/icons-react";
import { LayoutDashboard, ListTodo, Settings2, Users2 } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "@tanstack/react-router";
import { useSidebar } from "@/hooks/use-sidebar";
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Customers",
      url: "/customers",
      icon: IconUsers,
    },
    {
      title: "Leads",
      url: "/leads",
      icon: Users2,
    },
    {
      title: "Task",
      url: "/task",
      icon: ListTodo,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
  ],
};

export function NavMain() {
  const location = useLocation();
  const { state } = useSidebar();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Short Links</SidebarGroupLabel>
      <SidebarMenu>
        {data.navMain.map((item) => {
          return (
            <SidebarMenuButton
              key={item.title}
              className="text-base px-2"
              size={state === "expanded" ? "lg" : "default"}
              asChild
            >
              <Link
                to={item.url}
                className={`${location.pathname === item.url ? "bg-primary!" : ""}`}
              >
                {item.icon && <item.icon />}
                {state === "expanded" && <span>{item.title}</span>}
              </Link>
            </SidebarMenuButton>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
