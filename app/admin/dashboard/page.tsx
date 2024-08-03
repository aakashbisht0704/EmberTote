import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard(){
    return(
        <div className="flex min-h-screen">
            <div className="flex-1 bg-gray-100 dark-bg-gray-950">
                <div className="p-6 grid gap-6">
                    <div className="grid md.grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Total Revenue
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}