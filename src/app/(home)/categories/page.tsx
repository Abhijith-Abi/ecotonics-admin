import { Settings2 } from "lucide-react";
import React from "react";

function page() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2 flex items-center gap-4">
                <div className="bg-blue-500 w-[50px] h-[50px] rounded-full flex items-center justify-center">
                    <Settings2 />
                </div>
                <div>
                    <h4 className="text-lg">Total Categories</h4>
                    <h6 className="font-bold text-2xl">8</h6>
                </div>
            </div>
            <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2 flex items-center gap-4">
                <div className="bg-blue-500 w-[50px] h-[50px] rounded-full flex items-center justify-center">
                    <Settings2 />
                </div>
                <div>
                    <h4 className="text-lg">Active Categories</h4>
                    <h6 className="font-bold text-2xl">6</h6>
                </div>
            </div>
            <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2 flex items-center gap-4">
                <div className="bg-blue-500 w-[50px] h-[50px] rounded-full flex items-center justify-center">
                    <Settings2 />
                </div>
                <div>
                    <h4 className="text-lg">Inactive Categories</h4>
                    <h6 className="font-bold text-2xl">100</h6>
                </div>
            </div>
        </div>
    );
}

export default page;
