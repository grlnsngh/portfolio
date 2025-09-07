"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageSquare,
  Clock,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "grlnsngh@gmail.com",
    href: "mailto:grlnsngh@gmail.com",
    description: "Send me an email anytime",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote / Worldwide",
    href: "#",
    description: "Available for remote work",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: "#",
    description: "Quick response guaranteed",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/grlnsngh",
    color: "hover:text-gray-900",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/grlnsngh/",
    color: "hover:text-blue-600",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:grlnsngh@gmail.com",
    color: "hover:text-red-500",
  },
];

export function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("New contact form submission:", values);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent! 🎉",
      description:
        "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    form.reset();
  }

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-12 pb-4 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl relative z-10 px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4 md:mb-4">
            <Sparkles className="w-4 h-4" />
            Let's Connect
          </div>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-3">
            Ready to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Work Together?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-base max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
            I'm always excited to discuss new opportunities, collaborate on
            projects, or just have a friendly chat about technology and
            innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-4 md:space-y-4">
            <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4 px-4 md:px-6">
                <CardTitle className="flex items-center gap-2 text-lg md:text-lg">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Contact Info
                </CardTitle>
                <CardDescription>Multiple ways to reach out</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 px-4 md:px-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-3 p-3 md:p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 animate-in fade-in slide-in-from-left min-h-[60px] md:min-h-0"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-2 md:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <info.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-sm md:text-sm text-foreground">
                        {info.label}
                      </h4>
                      <p className="text-sm md:text-sm text-muted-foreground mb-1">
                        {info.description}
                      </p>
                      {info.href !== "#" ? (
                        <Link
                          href={info.href}
                          className="text-sm md:text-sm text-primary hover:underline font-medium"
                        >
                          {info.value}
                        </Link>
                      ) : (
                        <span className="text-sm md:text-sm text-foreground font-medium">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4 px-4 md:px-6">
                <CardTitle className="text-lg">Follow Me</CardTitle>
                <CardDescription>Connect on social platforms</CardDescription>
              </CardHeader>
              <CardContent className="px-4 md:px-6">
                <div className="flex gap-3 md:gap-3 justify-center lg:justify-start">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 md:p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200 ${social.color} animate-in fade-in slide-in-from-bottom min-w-[48px] md:min-w-0 h-12 md:h-auto flex items-center justify-center`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Status Badge */}
            <div className="flex justify-center pt-2">
              <Badge
                variant="secondary"
                className="px-3 py-1 md:px-4 md:py-2 bg-green-100 text-green-800 border-green-200 text-xs md:text-sm min-h-[36px] md:min-h-0 flex items-center"
              >
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                Available for new projects
              </Badge>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-6 px-4 md:px-6">
                <CardTitle className="text-2xl md:text-2xl font-bold">
                  Send a Message
                </CardTitle>
                <CardDescription className="text-base md:text-base">
                  Fill out the form below and I'll get back to you as soon as
                  possible
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 md:px-6 pb-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5 md:space-y-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm md:text-sm font-medium">
                              Full Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your full name"
                                {...field}
                                className="h-12 md:h-11 text-base md:text-sm focus:ring-2 focus:ring-primary/20"
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
                            <FormLabel className="text-sm md:text-sm font-medium">
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="your.email@example.com"
                                {...field}
                                className="h-12 md:h-11 text-base md:text-sm focus:ring-2 focus:ring-primary/20"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm md:text-sm font-medium">
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project, ideas, or just say hello..."
                              {...field}
                              rows={5}
                              className="text-base md:text-sm resize-none focus:ring-2 focus:ring-primary/20 min-h-[120px] md:min-h-0"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full h-12 md:h-11 text-base md:text-sm font-medium group"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-6 md:mt-8 px-4 md:px-0">
          <p className="text-muted-foreground text-sm md:text-sm leading-relaxed">
            I typically respond within 24 hours. Looking forward to hearing from
            you! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
