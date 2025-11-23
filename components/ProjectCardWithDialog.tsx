"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectCardWithDialogProps {
  image: string;
  title: string;
  website: string;
  idx: number;
}

export default function ProjectCardWithDialog({
  image,
  title,
  website,
  idx,
}: ProjectCardWithDialogProps) {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): string => {
    // Remove whitespace
    const trimmedEmail = email.trim();

    // Check if email is empty
    if (!trimmedEmail) {
      return "Email address is required.";
    }

    // Check minimum length
    if (trimmedEmail.length < 5) {
      return "Email address is too short.";
    }

    // Check maximum length
    if (trimmedEmail.length > 254) {
      return "Email address is too long.";
    }

    // Enhanced regex for email validation
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(trimmedEmail)) {
      return "Please enter a valid email address.";
    }

    // Check for common invalid patterns
    if (trimmedEmail.startsWith(".") || trimmedEmail.endsWith(".")) {
      return "Email address cannot start or end with a period.";
    }

    if (trimmedEmail.includes("..")) {
      return "Email address cannot contain consecutive periods.";
    }

    // Check domain part
    const domainPart = trimmedEmail.split("@")[1];
    if (domainPart && !domainPart.includes(".")) {
      return "Please enter a valid email domain.";
    }

    return ""; // No errors
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Clear error when user starts typing
    if (emailError) {
      setEmailError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationError = validateEmail(email);
    if (validationError) {
      setEmailError(validationError);
      setIsSubmitting(false);
      return;
    }

    try {
      // Log the email (you can send this to your backend)
      console.log("Download request:", {
        email: email.trim(),
        resource: title,
        downloadUrl: website,
        timestamp: new Date().toISOString(),
      });

      // Close dialog and open download link
      setOpen(false);
      window.open(website, "_blank", "noopener,noreferrer");
      setEmail(""); // Reset form
      setEmailError(""); // Clear any errors
    } catch (error) {
      console.error("Error processing download:", error);
      setEmailError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto border-amber-400 hover:shadow-lg transition-shadow py-0">
      <div className="relative">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <div className="cursor-pointer">
              <Image
                src={image}
                alt={title}
                width={600}
                height={450}
                className="w-full h-64 object-contain rounded-t-lg"
                priority={idx < 3}
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[450px]">
            <DialogHeader>
              <DialogTitle>Download {title}</DialogTitle>
              <DialogDescription>
                Please enter your email address to access this resource.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-3">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleEmailChange}
                  disabled={isSubmitting}
                  className={cn(
                    "h-11 border-gray-300 focus:border-amber-400 focus:ring-amber-400/20",
                    emailError ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""
                  )}
                  required
                />
                {emailError && (
                  <p className="text-sm text-red-600 mt-2 font-medium">{emailError}</p>
                )}
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full h-11 bg-amber-500 hover:bg-amber-600 text-white font-medium">
                {isSubmitting ? (
                  "Processing..."
                ) : (
                  <>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Download
                  </>
                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>

        <div className="space-y-3">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <ExternalLink className="h-4 w-4 mr-2" />
                <span>View Download</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[450px]">
              <DialogHeader>
                <DialogTitle>Download {title}</DialogTitle>
                <DialogDescription>
                  Please enter your email address to access this resource.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-3">
                  <label htmlFor="email-btn" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    id="email-btn"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={handleEmailChange}
                    disabled={isSubmitting}
                    className={cn(
                      "h-11 border-gray-300 focus:border-amber-400 focus:ring-amber-400/20",
                      emailError ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""
                    )}
                    required
                  />
                  {emailError && (
                    <p className="text-sm text-red-600 mt-2 font-medium">{emailError}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 bg-amber-500 hover:bg-amber-600 text-white font-medium"
                >
                  {isSubmitting ? (
                    "Processing..."
                  ) : (
                    <>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Download
                    </>
                  )}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
