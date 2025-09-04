import LearnUi from "@/app/ui/learn/learnUi";
import ProtectedRoute from '@/components/protectedRoutes/protectedRoutes';
export default function Page(){
    return(
        <>
         <ProtectedRoute>
            <LearnUi/>
          </ProtectedRoute>
        </>
    )
}