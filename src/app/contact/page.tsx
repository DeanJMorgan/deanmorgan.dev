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
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
    alert("Inquiry sent successfully. Dean will be in touch soon.");
    form.reset();
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
                            placeholder="Dean Morgan"
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
                            placeholder="hello@deanmorgan.dev"
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
                            className="rounded-none border-t-0 border-x-0 border-b-2 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full rounded-none h-14 text-lg font-bold"
                  >
                    Send Inquiry
                  </Button>
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
