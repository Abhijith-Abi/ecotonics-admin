"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Header() {
    const router = useRouter();
    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold ">Service Categories</h2>
                <Button
                    onClick={() => {
                        router.push("/categories/create");
                    }}
                >
                    Add New Category
                </Button>
            </div>
        </>
    );
}

export default Header;
