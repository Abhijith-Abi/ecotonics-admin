import { Card, CardContent } from "@/components/ui/card";
import { Biohazard, CheckCheck, EqualNot } from "lucide-react";
import React from "react";

function page() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-4">
            <Card>
                <CardContent>
                    <div className="flex items-center gap-4">
                        <span className="bg-blue-400 w-14 h-14 flex items-center justify-center rounded-full">
                            <Biohazard size={32} strokeWidth={3} />
                        </span>
                        <div>
                            <h4 className="text-xl ">Total Categories</h4>
                            <p className="text-3xl font-bold">6</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <div className="flex items-center gap-4">
                        <span className="bg-blue-400 w-14 h-14 flex items-center justify-center rounded-full">
                            <CheckCheck size={32} strokeWidth={3} />
                        </span>
                        <div>
                            <h4 className="text-xl ">Active Categories</h4>
                            <p className="text-3xl font-bold">120</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <div className="flex items-center gap-4">
                        <span className="bg-blue-400 w-14 h-14 flex items-center justify-center rounded-full">
                            <EqualNot size={32} strokeWidth={3} />
                        </span>
                        <div>
                            <h4 className="text-xl ">Inactive Categories</h4>
                            <p className="text-3xl font-bold">4</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default page;
