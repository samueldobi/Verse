import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar/app-sidebar";

export default function dashboardLayout({children} : {children: React.ReactNode}){
    return(
        <>
            <SidebarProvider>
                
            <AppSidebar />
                <main>
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarProvider>
        </>
    )
}