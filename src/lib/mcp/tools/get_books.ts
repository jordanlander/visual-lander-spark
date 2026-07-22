import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_books",
  title: "Get published books",
  description:
    "Return Jordan Lander's published books available on Amazon, with titles, subtitles, prices, and purchase links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: () => {
    const books = [
      {
        title: "Circle Meditation",
        subtitle: "31 Days of Coloring & Reflection",
        author: "Jordan Charles Lander",
        price: "$9.99",
        amazon: "https://www.amazon.com/dp/B0H4BJRH7C",
      },
      {
        title: "Emerson the Super Squirrel",
        subtitle: "A PBIS Coloring Adventure for Positive Behavior",
        author: "Mr. Jordan Lander",
        price: "$7.99",
        amazon: "https://www.amazon.com/dp/B0F5Q5WVWM",
      },
      {
        title: "A Strong Woman",
        subtitle: "Coloring Book",
        author: "Jordan Charles Lander",
        price: "$12.99",
        amazon: "https://www.amazon.com/dp/B0DJRDPTJJ",
      },
      {
        title: "Passive-Aggressive Office Notes",
        subtitle: "The Funny and Relatable Adult Coloring Book",
        author: "Jordan Charles Lander",
        price: "$7.99",
        amazon: "https://www.amazon.com/dp/B0C52216QY",
      },
    ];
    const authorPage =
      "https://www.amazon.com/stores/Jordan-Charles-Lander/author/B0C5TYWMDD";
    return {
      content: [
        { type: "text", text: JSON.stringify({ books, authorPage }, null, 2) },
      ],
      structuredContent: { books, authorPage },
    };
  },
});
