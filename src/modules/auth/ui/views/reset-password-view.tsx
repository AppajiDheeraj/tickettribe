"use client"

import { Card, CardContent } from "@/components/ui/card"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { OctagonAlertIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { toast } from "sonner"

const formSchema = z.object({
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, { 
            message: "Password must contain uppercase, lowercase, and a number" 
        }),
    confirmPassword: z.string().min(1, { message: "Confirm Password is required" })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

export const ResetPasswordView = () => {
    const [error, setError] = useState<string | null>(null)
    const [pending, setPending] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        setError(null)
        setPending(true)

        setTimeout(() => {
            console.log("New Password:", data.password)
            toast.success("Password updated (frontend only)")
            setPending(false)
        }, 1000)
    }

    return (
        <div className="flex flex-col gap-6 max-w-md mx-auto mt-8">
            <Card className="overflow-hidden p-0">
                <CardContent className="p-6 md:p-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-6">

                                {/* Title */}
                                <div className="flex flex-col items-center text-center">
                                    <h1 className="text-2xl font-bold">Set Password</h1>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Choose a strong password for your account.
                                    </p>
                                </div>

                                {/* Inputs */}
                                <div className="grid gap-3">
                                    <div>
                                        <FormLabel>Email</FormLabel>
                                        <Input
                                            value={"user@example.com"}
                                            disabled
                                            readOnly
                                            className="bg-muted"
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>New Password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="password"
                                                        placeholder="Enter your new password"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="confirmPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Confirm Password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="password"
                                                        placeholder="Confirm your new password"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* Error Alert */}
                                {!!error && (
                                    <Alert className="bg-destructive/10 border-destructive/20">
                                        <OctagonAlertIcon className="h-4 w-4 !text-destructive" />
                                        <AlertTitle className="text-destructive">
                                            {error}
                                        </AlertTitle>
                                    </Alert>
                                )}

                                {/* Buttons */}
                                <div className="flex gap-2">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="flex-1"
                                    >
                                        Cancel
                                    </Button>

                                    <Button
                                        disabled={pending}
                                        type="submit"
                                        className="flex-1"
                                    >
                                        {pending ? "Setting..." : "Set Password"}
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            {/* Footer */}
            <div className="text-muted-foreground text-center text-sm text-balance">
                <p>
                    By continuing, you agree to our{" "}
                    <a href="/terms" className="underline underline-offset-4 hover:text-primary">
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="underline underline-offset-4 hover:text-primary">
                        Privacy Policy
                    </a>.
                </p>
            </div>
        </div>
    )
}
