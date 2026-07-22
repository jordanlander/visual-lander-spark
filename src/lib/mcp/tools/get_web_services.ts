import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_web_services",
  title: "Get One Weekend Websites info",
  description:
    "Return information about One Weekend Websites — Jordan Lander's small-business web development service, including offering, pricing, and URL.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: () => {
    const service = {
      name: "One Weekend Websites",
      url: "https://www.oneweekendwebsites.com/",
      description:
        "Clean, mobile-first websites for small businesses. A fast, professional one-page site delivered by Monday.",
      pricing: "$499 flat rate",
      turnaround: "By Monday",
      focus: "Small business one-page websites",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(service, null, 2) }],
      structuredContent: service,
    };
  },
});
