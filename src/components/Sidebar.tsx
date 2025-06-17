import React from "react";
import {
    Calendar,
    ChevronUp,
    Home,
    Inbox,
    LogOut,
    Settings,
    User,
    Users,
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarSeparator,
} from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import logo from "../../public/assets/images/logo.svg";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "./ui/collapsible";

function AppSidebar() {
    const items = [
        {
            title: "Dashboard",
            url: "#",
            icon: Home,
        },
        {
            title: "Services",
            url: "#",
            icon: Inbox,
            children: [
                {
                    title: "Service 1",
                    url: "#service1",
                    icon: Inbox,
                },
                {
                    title: "Service 2",
                    url: "#service2",
                    icon: Inbox,
                },
            ],
        },
        {
            title: "Workforce",
            url: "#",
            icon: Calendar,
            badge: "14",
        },
        {
            title: "Customers",
            url: "#",
            icon: Users,
            badge: "200",
        },
        {
            title: "Masters",
            url: "#",
            icon: Settings,
        },
    ];

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="py-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/">
                                <Image
                                    src={logo}
                                    alt="logo"
                                    width={20}
                                    height={20}
                                />
                                <span>Ecotonics</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarSeparator />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menus</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) =>
                                item.children ? (
                                    <Collapsible
                                        key={item.title}
                                        className="group/collapsible"
                                    >
                                        <SidebarMenuItem>
                                            <CollapsibleTrigger asChild>
                                                <SidebarMenuButton>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                    <ChevronUp className="ml-auto transition-transform group-data-[state=closed]/collapsible:rotate-180" />
                                                </SidebarMenuButton>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <SidebarMenuSub>
                                                    {item.children.map(
                                                        (child) => (
                                                            <SidebarMenuItem
                                                                key={
                                                                    child.title
                                                                }
                                                            >
                                                                <SidebarMenuButton
                                                                    asChild
                                                                >
                                                                    <a
                                                                        href={
                                                                            child.url
                                                                        }
                                                                    >
                                                                        <child.icon />
                                                                        <span>
                                                                            {
                                                                                child.title
                                                                            }
                                                                        </span>
                                                                    </a>
                                                                </SidebarMenuButton>
                                                            </SidebarMenuItem>
                                                        )
                                                    )}
                                                </SidebarMenuSub>
                                            </CollapsibleContent>
                                        </SidebarMenuItem>
                                    </Collapsible>
                                ) : (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                        {item.badge && (
                                            <SidebarMenuBadge>
                                                {item.badge}
                                            </SidebarMenuBadge>
                                        )}
                                    </SidebarMenuItem>
                                )
                            )}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User /> Abi Admin
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    <User /> Account
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings /> Settings
                                </DropdownMenuItem>
                                <DropdownMenuItem variant="destructive">
                                    <LogOut /> Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}

export default AppSidebar;
