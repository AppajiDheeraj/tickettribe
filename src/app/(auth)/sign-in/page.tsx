import { SignInView } from "@/modules/auth/ui/views/sign-in-view";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
    return <SignInView />
}

export default Page;