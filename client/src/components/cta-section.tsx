import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertWaitlistSchema, type InsertWaitlistEntry } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Apple } from "lucide-react";

export function CTASection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);

  const form = useForm<InsertWaitlistEntry>({
    resolver: zodResolver(insertWaitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      userType: ""
    }
  });

  const waitlistMutation = useMutation({
    mutationFn: async (data: InsertWaitlistEntry) => {
      const response = await apiRequest("POST", "/api/waitlist", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll notify you when UniHealth is available."
      });
      form.reset();
      setShowWaitlistForm(false);
      queryClient.invalidateQueries({ queryKey: ["/api/waitlist"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to join waitlist. Please try again.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: InsertWaitlistEntry) => {
    waitlistMutation.mutate(data);
  };

  return (
    <section className="bg-background medical-section-padding" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Take Control of Your Health with UniHealth</h2>
            <p className="text-xl text-muted-foreground">Join thousands of patients and doctors using UniHealth for better healthcare</p>
          </div>

          {!showWaitlistForm ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                data-testid="button-download-app-cta"
              >
                <Apple className="w-5 h-5" />
                <span>Download App</span>
              </Button>
              <Button 
                variant="outline"
                className="px-8 py-4 rounded-xl font-semibold text-lg"
                onClick={() => setShowWaitlistForm(true)}
                data-testid="button-join-waitlist-cta"
              >
                Join Waitlist
              </Button>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Join Our Waitlist</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Full Name</Label>
                    <Input
                      id="name"
                      {...form.register("name")}
                      placeholder="Enter your full name"
                      className="w-full"
                      data-testid="input-name"
                    />
                    {form.formState.errors.name && (
                      <p className="text-destructive text-sm">{form.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      placeholder="Enter your email address"
                      className="w-full"
                      data-testid="input-email"
                    />
                    {form.formState.errors.email && (
                      <p className="text-destructive text-sm">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="userType" className="text-foreground">I am a</Label>
                    <Select
                      value={form.watch("userType")}
                      onValueChange={(value) => form.setValue("userType", value)}
                    >
                      <SelectTrigger data-testid="select-user-type">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="patient">Patient</SelectItem>
                        <SelectItem value="doctor">Healthcare Provider</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.userType && (
                      <p className="text-destructive text-sm">{form.formState.errors.userType.message}</p>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      type="submit"
                      disabled={waitlistMutation.isPending}
                      className="flex-1 bg-primary text-primary-foreground"
                      data-testid="button-submit-waitlist"
                    >
                      {waitlistMutation.isPending ? "Joining..." : "Join Waitlist"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowWaitlistForm(false)}
                      data-testid="button-cancel-waitlist"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
