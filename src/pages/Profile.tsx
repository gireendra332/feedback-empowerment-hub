
import React from "react";
import { FadeTransition } from "@/components/ui/FadeTransition";
import { BlurContainer } from "@/components/ui/BlurContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const Profile = () => {
  // Dummy user data
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    joined: "August 2023",
    points: 2500,
    redeemable: "$25.00",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  };

  // Dummy feedback history
  const feedbackHistory = [
    {
      id: 1,
      product: "Smartphone X",
      type: "Text",
      date: "2023-08-15",
      points: 500,
      status: "Approved",
    },
    {
      id: 2,
      product: "Smartphone Y",
      type: "Video",
      date: "2023-07-22",
      points: 500,
      status: "Approved",
    },
    {
      id: 3,
      product: "Smartphone Z",
      type: "Text",
      date: "2023-06-10",
      points: 500,
      status: "Approved",
    },
    {
      id: 4,
      product: "Smartphone X",
      type: "Text",
      date: "2023-05-27",
      points: 500,
      status: "Approved",
    },
    {
      id: 5,
      product: "Smartphone Y",
      type: "Text",
      date: "2023-04-15",
      points: 500,
      status: "Approved",
    },
  ];

  // Dummy rewards history
  const rewardsHistory = [
    {
      id: 1,
      type: "PayPal Transfer",
      amount: "$10.00",
      date: "2023-07-01",
      points: 1000,
      status: "Completed",
    },
    {
      id: 2,
      type: "Amazon Gift Card",
      amount: "$15.00",
      date: "2023-05-15",
      points: 1500,
      status: "Completed",
    },
  ];

  const handleRedeemPoints = () => {
    toast.success("Redemption request submitted", {
      description: "You will receive your reward within 3-5 business days.",
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeTransition>
          <div className="flex flex-col md:flex-row gap-8 mb-10">
            <div className="md:w-1/3">
              <BlurContainer className="p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={user.profileImage}
                    alt={user.name}
                    className="w-full h-full object-cover rounded-full ring-2 ring-primary/20"
                  />
                  <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <h2 className="text-xl font-medium mb-1">{user.name}</h2>
                <p className="text-sm text-muted-foreground mb-4">{user.email}</p>
                <p className="text-xs text-muted-foreground">Member since {user.joined}</p>
                <div className="mt-6 pt-6 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm">Current Points</span>
                    <span className="text-xl font-medium text-primary">{user.points}</span>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm">Redeemable Value</span>
                    <span className="text-lg font-medium">{user.redeemable}</span>
                  </div>
                  <Button onClick={handleRedeemPoints} className="w-full">
                    Redeem Points
                  </Button>
                </div>
              </BlurContainer>
            </div>

            <div className="md:w-2/3">
              <Card>
                <CardHeader>
                  <CardTitle>My Profile</CardTitle>
                  <CardDescription>
                    Manage your account and view your feedback history
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="feedback">
                    <TabsList className="w-full mb-6">
                      <TabsTrigger value="feedback">Feedback History</TabsTrigger>
                      <TabsTrigger value="rewards">Rewards History</TabsTrigger>
                      <TabsTrigger value="settings">Account Settings</TabsTrigger>
                    </TabsList>

                    <TabsContent value="feedback">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 px-4 font-medium">Product</th>
                              <th className="text-left py-3 px-4 font-medium">Type</th>
                              <th className="text-left py-3 px-4 font-medium">Date</th>
                              <th className="text-left py-3 px-4 font-medium">Points</th>
                              <th className="text-left py-3 px-4 font-medium">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {feedbackHistory.map((feedback) => (
                              <tr key={feedback.id} className="border-b">
                                <td className="py-3 px-4">{feedback.product}</td>
                                <td className="py-3 px-4">
                                  <span
                                    className={`inline-block px-2 py-1 rounded text-xs ${
                                      feedback.type === "Video"
                                        ? "bg-primary/10 text-primary"
                                        : "bg-muted text-muted-foreground"
                                    }`}
                                  >
                                    {feedback.type}
                                  </span>
                                </td>
                                <td className="py-3 px-4">{feedback.date}</td>
                                <td className="py-3 px-4">+{feedback.points}</td>
                                <td className="py-3 px-4">
                                  <span className="inline-block px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                                    {feedback.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </TabsContent>

                    <TabsContent value="rewards">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 px-4 font-medium">Type</th>
                              <th className="text-left py-3 px-4 font-medium">Amount</th>
                              <th className="text-left py-3 px-4 font-medium">Date</th>
                              <th className="text-left py-3 px-4 font-medium">Points</th>
                              <th className="text-left py-3 px-4 font-medium">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {rewardsHistory.map((reward) => (
                              <tr key={reward.id} className="border-b">
                                <td className="py-3 px-4">{reward.type}</td>
                                <td className="py-3 px-4">{reward.amount}</td>
                                <td className="py-3 px-4">{reward.date}</td>
                                <td className="py-3 px-4">-{reward.points}</td>
                                <td className="py-3 px-4">
                                  <span className="inline-block px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                                    {reward.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                        <h3 className="font-medium mb-2">Redemption Options</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                          <BlurContainer className="p-4" hover={true}>
                            <div className="text-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mx-auto mb-3 text-primary"
                              >
                                <rect width="20" height="14" x="2" y="5" rx="2" />
                                <line x1="2" x2="22" y1="10" y2="10" />
                              </svg>
                              <h4 className="font-medium">PayPal Transfer</h4>
                              <p className="text-xs text-muted-foreground mb-2">
                                1,000 points = $10
                              </p>
                              <Button size="sm" variant="outline" className="text-xs">
                                Select
                              </Button>
                            </div>
                          </BlurContainer>

                          <BlurContainer className="p-4" hover={true}>
                            <div className="text-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mx-auto mb-3 text-primary"
                              >
                                <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
                                <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                                <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
                              </svg>
                              <h4 className="font-medium">Gift Cards</h4>
                              <p className="text-xs text-muted-foreground mb-2">
                                1,500 points = $15
                              </p>
                              <Button size="sm" variant="outline" className="text-xs">
                                Select
                              </Button>
                            </div>
                          </BlurContainer>

                          <BlurContainer className="p-4" hover={true}>
                            <div className="text-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mx-auto mb-3 text-primary"
                              >
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                <polyline points="14 2 14 8 20 8" />
                                <path d="M16 13H8" />
                                <path d="M16 17H8" />
                                <path d="M10 9H8" />
                              </svg>
                              <h4 className="font-medium">Bank Transfer</h4>
                              <p className="text-xs text-muted-foreground mb-2">
                                2,500 points = $25
                              </p>
                              <Button size="sm" variant="outline" className="text-xs">
                                Select
                              </Button>
                            </div>
                          </BlurContainer>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="settings">
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-medium mb-4">Account Information</h3>
                          <BlurContainer className="p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-1">
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  value={user.name}
                                  className="w-full px-3 py-2 border border-border rounded-md bg-transparent"
                                  readOnly
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-1">
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  value={user.email}
                                  className="w-full px-3 py-2 border border-border rounded-md bg-transparent"
                                  readOnly
                                />
                              </div>
                            </div>
                            <div>
                              <Button variant="outline" size="sm">
                                Edit Profile
                              </Button>
                            </div>
                          </BlurContainer>
                        </div>

                        <div>
                          <h3 className="font-medium mb-4">Preferences</h3>
                          <BlurContainer className="p-6 space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Email Notifications</p>
                                <p className="text-sm text-muted-foreground">
                                  Receive emails about new feedback opportunities
                                </p>
                              </div>
                              <div className="h-6 w-11 bg-muted rounded-full p-1 transition duration-200 ease-in-out relative">
                                <div className="h-4 w-4 bg-white rounded-full shadow-sm transform translate-x-4 transition duration-200 ease-in-out"></div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Two-Factor Authentication</p>
                                <p className="text-sm text-muted-foreground">
                                  Add an extra layer of security to your account
                                </p>
                              </div>
                              <div className="h-6 w-11 bg-muted rounded-full p-1 transition duration-200 ease-in-out relative">
                                <div className="h-4 w-4 bg-white rounded-full shadow-sm transition duration-200 ease-in-out"></div>
                              </div>
                            </div>
                          </BlurContainer>
                        </div>

                        <div className="flex justify-end">
                          <Button>Save Settings</Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </FadeTransition>
      </div>
    </div>
  );
};

export default Profile;
