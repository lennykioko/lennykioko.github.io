"use client";

import { useState } from "react";
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
import { ExternalLink, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResourceActionProps {
  title: string;
  link: string;
  isPaid: boolean;
  requiresContact: boolean;
}

export default function ResourceAction({
  title,
  link,
  isPaid,
  requiresContact,
}: ResourceActionProps) {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): string => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) return "Email address is required.";
    if (trimmedEmail.length < 5) return "Email address is too short.";
    if (trimmedEmail.length > 254) return "Email address is too long.";
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(trimmedEmail))
      return "Please enter a valid email address.";
    const domainPart = trimmedEmail.split("@")[1];
    if (domainPart && !domainPart.includes("."))
      return "Please enter a valid email domain.";
    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError("");
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
      const downloadData = {
        email: email.trim(),
        resource: title,
        downloadUrl: link,
        timestamp: new Date().toISOString(),
        secret: "chyh8j89q3g4u1met4nvukpi",
      };

      await fetch("https://lennykioko-backend.vercel.app/api/save-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(downloadData),
      });

      setOpen(false);
      window.open(link, "_blank", "noopener,noreferrer");
      setEmail("");
      setEmailError("");
    } catch (error) {
      console.error("Error processing request:", error);
      setEmailError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!requiresContact && !isPaid) {
    return (
      <Button
        className="bg-amber-500 hover:bg-amber-600 text-white font-bold"
        asChild
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          Get Resource
        </a>
      </Button>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-amber-500 hover:bg-amber-600 text-white font-bold">
          Get Resource
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>
            {isPaid ? "Begin Purchase" : "Download Resource"}
          </DialogTitle>
          <DialogDescription>
            {isPaid
              ? "This is a premium resource. Please enter your email to begin the purchase process. We'll get back to you soonest."
              : "Please enter your email address to access this resource."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-3">
            <label
              htmlFor="email-action"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <Input
              id="email-action"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleEmailChange}
              disabled={isSubmitting}
              className={cn(
                "h-11 border-gray-300 focus:border-amber-400 focus:ring-amber-400/20",
                emailError
                  ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                  : "",
              )}
              required
            />
            {emailError && (
              <p className="text-sm text-red-600 mt-2 font-medium">
                {emailError}
              </p>
            )}
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-11 bg-amber-500 hover:bg-amber-600 text-white font-bold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <ExternalLink className="mr-2 h-4 w-4" />
                {isPaid ? "Continue" : "View Download"}
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
