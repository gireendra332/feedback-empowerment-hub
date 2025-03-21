
import React, { useState } from "react";
import { FadeTransition } from "@/components/ui/FadeTransition";
import { BlurContainer } from "@/components/ui/BlurContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  // Dummy data for the dashboard
  const overviewData = [
    { name: "Jan", value: 42 },
    { name: "Feb", value: 63 },
    { name: "Mar", value: 52 },
    { name: "Apr", value: 73 },
    { name: "May", value: 82 },
    { name: "Jun", value: 92 },
    { name: "Jul", value: 86 },
  ];

  const ratingData = [
    { name: "Design", value: 4.2 },
    { name: "Price", value: 3.5 },
    { name: "Quality", value: 4.7 },
    { name: "Usability", value: 3.9 },
    { name: "Performance", value: 4.1 },
  ];

  const recentFeedbacks = [
    {
      id: 1,
      user: "Sarah Johnson",
      type: "Text",
      product: "Smartphone X",
      rating: 4.5,
      date: "2023-08-15",
      comment: "The camera quality exceeds expectations, but battery life could be improved.",
    },
    {
      id: 2,
      user: "Michael Chen",
      type: "Video",
      product: "Smartphone X",
      rating: 5.0,
      date: "2023-08-14",
      comment: "Excellent performance and sleek design. Highly recommended!",
    },
    {
      id: 3,
      user: "Emma Davis",
      type: "Text",
      product: "Smartphone Y",
      rating: 3.5,
      date: "2023-08-13",
      comment: "Good value for money, but the interface is not very intuitive.",
    },
  ];

  // State for filter
  const [productFilter, setProductFilter] = useState("all");

  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeTransition>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="heading-lg mb-2">Brand Dashboard</h1>
              <p className="text-muted-foreground">
                View and analyze customer feedback to improve your products.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button>Download Report</Button>
            </div>
          </div>
        </FadeTransition>

        <Tabs defaultValue="overview" className="w-full">
          <FadeTransition delay={100}>
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
          </FadeTransition>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <FadeTransition delay={150}>
                <BlurContainer className="p-6">
                  <div className="flex flex-col">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">
                      Total Feedback
                    </h3>
                    <p className="text-4xl font-medium">427</p>
                    <span className="text-xs text-primary mt-2">
                      ↑ 12% from last month
                    </span>
                  </div>
                </BlurContainer>
              </FadeTransition>

              <FadeTransition delay={200}>
                <BlurContainer className="p-6">
                  <div className="flex flex-col">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">
                      Average Rating
                    </h3>
                    <p className="text-4xl font-medium">4.3</p>
                    <span className="text-xs text-primary mt-2">
                      ↑ 0.2 from last month
                    </span>
                  </div>
                </BlurContainer>
              </FadeTransition>

              <FadeTransition delay={250}>
                <BlurContainer className="p-6">
                  <div className="flex flex-col">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">
                      New Feedback
                    </h3>
                    <p className="text-4xl font-medium">52</p>
                    <span className="text-xs text-destructive mt-2">
                      ↓ 3% from last month
                    </span>
                  </div>
                </BlurContainer>
              </FadeTransition>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <FadeTransition delay={300}>
                <Card>
                  <CardHeader>
                    <CardTitle>Feedback Over Time</CardTitle>
                    <CardDescription>Monthly feedback submissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={overviewData}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: "rgba(255, 255, 255, 0.8)",
                              borderRadius: "8px",
                              border: "none",
                              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                            }} 
                          />
                          <Line
                            type="monotone"
                            dataKey="value"
                            stroke="hsl(var(--primary))"
                            strokeWidth={2}
                            dot={{ strokeWidth: 2 }}
                            activeDot={{ r: 6 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </FadeTransition>

              <FadeTransition delay={350}>
                <Card>
                  <CardHeader>
                    <CardTitle>Rating Analysis</CardTitle>
                    <CardDescription>Average ratings by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={ratingData}
                          layout="vertical"
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" opacity={0.2} horizontal={false} />
                          <XAxis type="number" domain={[0, 5]} />
                          <YAxis dataKey="name" type="category" width={80} />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: "rgba(255, 255, 255, 0.8)",
                              borderRadius: "8px",
                              border: "none",
                              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                            }} 
                          />
                          <Bar
                            dataKey="value"
                            fill="hsl(var(--primary))"
                            barSize={20}
                            radius={[0, 4, 4, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </FadeTransition>
            </div>

            <FadeTransition delay={400}>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Feedback</CardTitle>
                  <CardDescription>Latest customer submissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium">User</th>
                          <th className="text-left py-3 px-4 font-medium">Type</th>
                          <th className="text-left py-3 px-4 font-medium">Product</th>
                          <th className="text-left py-3 px-4 font-medium">Rating</th>
                          <th className="text-left py-3 px-4 font-medium">Comment</th>
                          <th className="text-left py-3 px-4 font-medium">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentFeedbacks.map((feedback) => (
                          <tr key={feedback.id} className="border-b">
                            <td className="py-3 px-4">{feedback.user}</td>
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
                            <td className="py-3 px-4">{feedback.product}</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <span className="mr-2">{feedback.rating}</span>
                                <div className="text-primary">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="none"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4 max-w-xs truncate">
                              {feedback.comment}
                            </td>
                            <td className="py-3 px-4">{feedback.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </FadeTransition>
          </TabsContent>

          <TabsContent value="feedback">
            <FadeTransition>
              <div className="bg-muted/30 p-8 rounded-lg text-center">
                <h3 className="text-xl font-medium mb-2">Feedback Tab Content</h3>
                <p className="text-muted-foreground mb-4">
                  This section will display detailed feedback listings with advanced filtering options.
                </p>
                <Button variant="outline">View Design</Button>
              </div>
            </FadeTransition>
          </TabsContent>

          <TabsContent value="analytics">
            <FadeTransition>
              <div className="bg-muted/30 p-8 rounded-lg text-center">
                <h3 className="text-xl font-medium mb-2">Analytics Tab Content</h3>
                <p className="text-muted-foreground mb-4">
                  This section will provide in-depth analytics and insights based on customer feedback.
                </p>
                <Button variant="outline">View Design</Button>
              </div>
            </FadeTransition>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
