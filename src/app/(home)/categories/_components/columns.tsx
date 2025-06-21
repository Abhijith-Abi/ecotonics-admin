"use client";
/* eslint-disable */

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

import { MoreHorizontal } from "lucide-react";

import EditUser from "./EditUser";
// import { Badge } from "@/components/ui/badge";

export const columns = [
    {
        id: "select",
        header: ({ table }: any) => (
            <Checkbox
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                checked={
                    table.getIsAllRowsSelected() ||
                    (table.getIsSomeRowsSelected() && "indeterminate")
                }
            />
        ),
        cell: ({ row }: any) => (
            <Checkbox
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                checked={row.getIsSelected()}
            />
        ),
    },
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }: any) => {
            const name = row.getValue("name");
            const image =
                row.original.image ||
                "https://randomuser.me/api/portraits/lego/1.jpg";

            return (
                <div className="flex items-center space-x-3 font-medium text-gray-900 dark:text-gray-100">
                    <Avatar>
                        <AvatarImage src={image} alt={name} />
                        <AvatarFallback>{name?.[0]}</AvatarFallback>
                    </Avatar>
                    <span>{name}</span>
                </div>
            );
        },
    },
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }: any) => {
            const status = row.getValue("status");
            return (
                <div
                    className={cn(`p-1 rounded-md w-max text-xs capitalize `, {
                        " bg-green-600": status === "active",
                        " bg-yellow-600": status === "pending",
                        " bg-red-600": status === "inactive",
                    })}
                >
                    {status as string}
                </div>
                // <Badge variant="destructive">{status as string}</Badge>
            );
        },
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }: any) => {
            const amount = parseFloat(row.getValue("amount"));
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
            }).format(amount);

            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
    {
        id: "actions",
        cell: ({ row }: any) => {
            const payment = row.original;
            const [isOpen, setIsOpen] = useState(false);

            return (
                <div className="text-right">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() =>
                                    navigator.clipboard.writeText(payment.id)
                                }
                            >
                                Copy payment ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => setIsOpen(true)}>
                                Edit
                            </DropdownMenuItem>

                            <DropdownMenuItem variant="destructive">
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <EditUser data={row?.original} />
                    </Sheet>
                </div>
            );
        },
    },
];
