import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact",
  title: "Get contact & social links",
  description:
    "Return ways to contact or connect with Jordan Lander online, including website and public profiles.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const contact = {
      website: "https://jordanlander.com",
      businessSite: "https://www.oneweekendwebsites.com/",
      amazonAuthor:
        "https://www.amazon.com/stores/Jordan-Charles-Lander/author/B0C5TYWMDD",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
      structuredContent: contact,
    };
  },
});
