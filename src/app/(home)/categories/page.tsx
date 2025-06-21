/* eslint-disable */

import React from "react";
import { Biohazard, CheckCheck, EqualNot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { DataTable } from "@/components/DataTable";
import { columns } from "./_components/columns";
import Header from "./_components/Header";

async function page() {
    async function getData(): Promise<any[]> {
        return [
            {
                id: "a1",
                amount: 100,
                status: "pending",
                email: "alice@example.com",
                name: "Alice Johnson",
                image: "https://randomuser.me/api/portraits/women/1.jpg",
                link: "https://example.com/user/a1",
            },
            {
                id: "a2",
                amount: 150,
                status: "active",
                email: "bob@example.com",
                name: "Bob Brown",
                image: "https://randomuser.me/api/portraits/men/2.jpg",
                link: "https://example.com/user/a2",
            },
            {
                id: "a3",
                amount: 200,
                status: "inactive",
                email: "charlie@example.com",
                name: "Charlie Davis",
                image: "https://randomuser.me/api/portraits/men/3.jpg",
                link: "https://example.com/user/a3",
            },
            {
                id: "a4",
                amount: 250,
                status: "active",
                email: "diana@example.com",
                name: "Diana Smith",
                image: "https://randomuser.me/api/portraits/women/4.jpg",
                link: "https://example.com/user/a4",
            },
            {
                id: "a5",
                amount: 300,
                status: "pending",
                email: "ed@example.com",
                name: "Edward Clark",
                image: "https://randomuser.me/api/portraits/men/5.jpg",
                link: "https://example.com/user/a5",
            },
            {
                id: "a6",
                amount: 350,
                status: "active",
                email: "frank@example.com",
                name: "Frank Wright",
                image: "https://randomuser.me/api/portraits/men/6.jpg",
                link: "https://example.com/user/a6",
            },
            {
                id: "a7",
                amount: 400,
                status: "inactive",
                email: "grace@example.com",
                name: "Grace Lee",
                image: "https://randomuser.me/api/portraits/women/7.jpg",
                link: "https://example.com/user/a7",
            },
            {
                id: "a8",
                amount: 450,
                status: "pending",
                email: "henry@example.com",
                name: "Henry Walker",
                image: "https://randomuser.me/api/portraits/men/8.jpg",
                link: "https://example.com/user/a8",
            },
            {
                id: "a9",
                amount: 500,
                status: "active",
                email: "irene@example.com",
                name: "Irene Young",
                image: "https://randomuser.me/api/portraits/women/9.jpg",
                link: "https://example.com/user/a9",
            },
            {
                id: "a10",
                amount: 550,
                status: "inactive",
                email: "jack@example.com",
                name: "Jack Hill",
                image: "https://randomuser.me/api/portraits/men/10.jpg",
                link: "https://example.com/user/a10",
            },
            {
                id: "a11",
                amount: 600,
                status: "active",
                email: "karen@example.com",
                name: "Karen Scott",
                image: "https://randomuser.me/api/portraits/women/11.jpg",
                link: "https://example.com/user/a11",
            },
            {
                id: "a12",
                amount: 650,
                status: "pending",
                email: "leo@example.com",
                name: "Leo Adams",
                image: "https://randomuser.me/api/portraits/men/12.jpg",
                link: "https://example.com/user/a12",
            },
            {
                id: "a13",
                amount: 700,
                status: "inactive",
                email: "mia@example.com",
                name: "Mia Torres",
                image: "https://randomuser.me/api/portraits/women/13.jpg",
                link: "https://example.com/user/a13",
            },
            {
                id: "a14",
                amount: 750,
                status: "active",
                email: "nate@example.com",
                name: "Nathan Brooks",
                image: "https://randomuser.me/api/portraits/men/14.jpg",
                link: "https://example.com/user/a14",
            },
            {
                id: "a15",
                amount: 800,
                status: "pending",
                email: "olivia@example.com",
                name: "Olivia Rivera",
                image: "https://randomuser.me/api/portraits/women/15.jpg",
                link: "https://example.com/user/a15",
            },
            {
                id: "a16",
                amount: 850,
                status: "inactive",
                email: "paul@example.com",
                name: "Paul Cox",
                image: "https://randomuser.me/api/portraits/men/16.jpg",
                link: "https://example.com/user/a16",
            },
            {
                id: "a17",
                amount: 900,
                status: "active",
                email: "quinn@example.com",
                name: "Quinn Reed",
                image: "https://randomuser.me/api/portraits/women/17.jpg",
                link: "https://example.com/user/a17",
            },
            {
                id: "a18",
                amount: 950,
                status: "pending",
                email: "rachel@example.com",
                name: "Rachel Kelly",
                image: "https://randomuser.me/api/portraits/women/18.jpg",
                link: "https://example.com/user/a18",
            },
            {
                id: "a19",
                amount: 1000,
                status: "active",
                email: "sam@example.com",
                name: "Sam Price",
                image: "https://randomuser.me/api/portraits/men/19.jpg",
                link: "https://example.com/user/a19",
            },
            {
                id: "a20",
                amount: 1050,
                status: "inactive",
                email: "tina@example.com",
                name: "Tina Ward",
                image: "https://randomuser.me/api/portraits/women/20.jpg",
                link: "https://example.com/user/a20",
            },
            {
                id: "a21",
                amount: 1100,
                status: "active",
                email: "ursula@example.com",
                name: "Ursula Bell",
                image: "https://randomuser.me/api/portraits/women/21.jpg",
                link: "https://example.com/user/a21",
            },
            {
                id: "a22",
                amount: 1150,
                status: "pending",
                email: "victor@example.com",
                name: "Victor James",
                image: "https://randomuser.me/api/portraits/men/22.jpg",
                link: "https://example.com/user/a22",
            },
            {
                id: "a23",
                amount: 1200,
                status: "inactive",
                email: "wendy@example.com",
                name: "Wendy Howard",
                image: "https://randomuser.me/api/portraits/women/23.jpg",
                link: "https://example.com/user/a23",
            },
            {
                id: "a24",
                amount: 1250,
                status: "active",
                email: "xavier@example.com",
                name: "Xavier Bennett",
                image: "https://randomuser.me/api/portraits/men/24.jpg",
                link: "https://example.com/user/a24",
            },
            {
                id: "a25",
                amount: 1300,
                status: "pending",
                email: "yvonne@example.com",
                name: "Yvonne Green",
                image: "https://randomuser.me/api/portraits/women/25.jpg",
                link: "https://example.com/user/a25",
            },
            {
                id: "a26",
                amount: 1350,
                status: "inactive",
                email: "zach@example.com",
                name: "Zachary Cooper",
                image: "https://randomuser.me/api/portraits/men/26.jpg",
                link: "https://example.com/user/a26",
            },
            {
                id: "a27",
                amount: 1400,
                status: "active",
                email: "amy@example.com",
                name: "Amy Stewart",
                image: "https://randomuser.me/api/portraits/women/27.jpg",
                link: "https://example.com/user/a27",
            },
            {
                id: "a28",
                amount: 1450,
                status: "pending",
                email: "brian@example.com",
                name: "Brian Morris",
                image: "https://randomuser.me/api/portraits/men/28.jpg",
                link: "https://example.com/user/a28",
            },
        ];
    }

    const data = await getData();

    return (
        <>
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
                                <h4 className="text-xl ">
                                    Inactive Categories
                                </h4>
                                <p className="text-3xl font-bold">4</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="py-10">
                <Header />
                <DataTable columns={columns} data={data} />
            </div>
        </>
    );
}

export default page;
