import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_news",
  title: "Get news & recognition",
  description:
    "Return media features and community recognition articles mentioning Jordan Lander, with dates, summaries, and source URLs.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: () => {
    const news = [
      {
        title: "Students honor valor in verse",
        date: "2023-11-08",
        summary:
          "Supported a Veterans Day poetry tribute blending service learning with student creativity.",
        url: "https://www.thecorryjournal.com/news/article_601bf1ca-7e40-11ee-8e9f-0f5b8a2de589.html",
      },
      {
        title: "Heroes bring early Christmas for Corry, UC kids",
        date: "2024-12-20",
        summary:
          "Collaborated with community partners to deliver magical early-Christmas experiences for students.",
        url: "https://www.thecorryjournal.com/news/article_837a2826-be4a-11ef-b99c-dffd8f302ff5.html",
      },
      {
        title: "Santa Fund campaign underway",
        date: "2023-12-09",
        summary:
          "Supported the Santa Fund drive, providing festive support to dozens of local families in need.",
        url: "https://www.thecorryjournal.com/news/article_ff57e93e-95f5-11ee-a773-f336ac1d073e.html",
      },
      {
        title: "Acclaimed children's author visits schools",
        date: "2024-03-07",
        summary:
          "Coordinated with library staff to curate live author visits that inspired a renewed passion for reading.",
        url: "https://www.thecorryjournal.com/news/article_8c495c80-dc03-11ee-8b6b-07e7c75a2175.html",
      },
      {
        title: "CAIS supports city K‑9 initiative",
        date: "2022-12-08",
        summary:
          "Worked with law-enforcement liaisons on a K‑9 initiative strengthening safety partnerships and student engagement.",
        url: "https://www.thecorryjournal.com/news/article_9d2e9196-7714-11ed-8804-bfd14463a803.html",
      },
      {
        title: "CAIS finalist in 'How Cool is Your School?'",
        date: "2022-11-01",
        summary:
          "Led a student-driven media team producing award-winning project videos, fueling a culture of innovation.",
        url: "https://www.thecorryjournal.com/news/article_904f14d2-59fa-11ed-89a9-2fb400f148c8.html",
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(news, null, 2) }],
      structuredContent: { news },
    };
  },
});
