"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useActionState, useEffect, useTransition } from "react";
import { submitContactForm } from "./actions";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  botcheck: z.string().optional(),
});

export default function ContactPage() {
  const [state, formAction, pending] = useActionState(submitContactForm, null);
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      botcheck: "",
    },
  });

  // Handle success reset
  useEffect(() => {
    if (state?.success) {
      form.reset();
    }
  }, [state, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value !== undefined) formData.append(key, value);
    });
    
    startTransition(() => {
      formAction(formData);
    });
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <Container>
            <div className="max-w-xl mx-auto space-y-12">
              <div className="space-y-4 text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-mono">
                  Project <span className="text-primary italic">Inquiries</span>{" "}
                  &{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    Consultation
                  </span>{" "}
                  Bookings
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Discuss a performance audit, enterprise eCommerce build, or AI
                  strategy implementation.
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8 border p-8 bg-muted/20"
                >
                  {/* Honeypot field */}
                  <FormField
                    control={form.control}
                    name="botcheck"
                    render={({ field }) => (
                      <FormItem className="hidden">
                        <FormControl>
                          <Input tabIndex={-1} autoComplete="off" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase tracking-widest">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your full name"
                            className="rounded-none border-t-0 border-x-0 border-b-2 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase tracking-widest">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your.email@example.com"
                            className="rounded-none border-t-0 border-x-0 border-b-2 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase tracking-widest">
                          Project Details
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your requirements..."
                            className="rounded-none border-t-0 border-x-0 border-b-2 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary min-h-30"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={pending || isPending}
                    className="w-full rounded-none h-14 text-lg font-bold"
                  >
                    {pending || isPending ? "Sending..." : "Send Inquiry"}
                  </Button>

                  {state?.success && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 text-sm">
                      <p className="font-semibold">{state.message}</p>
                      <p>
                        Thank you for reaching out. I&apos;ll get back to you
                        soon.
                      </p>
                    </div>
                  )}
                  {state?.success === false && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 text-sm">
                      <p className="font-semibold">{state.message}</p>
                      <p>
                        Please try again or contact me directly via LinkedIn.
                      </p>
                    </div>
                  )}
                </form>
              </Form>

              <div className="pt-8 border-t flex flex-col items-center space-y-4 text-center">
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                  Or connect via
                </p>
                <div className="flex gap-8 text-sm font-medium">
                  <a
                    href="https://www.linkedin.com/in/dean-morgan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary underline underline-offset-4"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/deanjmorgan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary underline underline-offset-4"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
