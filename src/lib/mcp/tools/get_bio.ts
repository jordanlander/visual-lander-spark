import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_bio",
  title: "Get Jordan Lander's bio",
  description:
    "Return a short professional bio for Jordan Lander, including current role, background, and areas of expertise.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const bio = {
      name: "Jordan Lander",
      tagline: "Education Leader & Technology Innovator",
      currentRole: "Supervisor of Special Education, Northwest Tri-County IU5",
      summary:
        "Forward-thinking education administrator with 15+ years of experience designing inclusive STEAM curricula, leading change initiatives, and empowering teams through technology and creativity.",
      leadershipHighlights: [
        "Redesigned virtual learning program, saving over $800K in outplacement costs",
        "Led development of digital tools streamlining compliance and collaboration for K–12 staff",
        "Implemented strategies boosting reading and math performance on standardized assessments",
        "Built partnerships with families and organizations to support inclusive learning environments",
      ],
      expertise: {
        educationalLeadership: [
          "Curriculum Design",
          "STEAM Integration",
          "Data-Driven Instruction",
          "Special Education",
          "Virtual Learning",
        ],
        teamDevelopment: [
          "Professional Learning",
          "Coaching & Mentoring",
          "Change Management",
          "PBIS Implementation",
          "Inclusive Practices",
        ],
        technologyAndInnovation: [
          "LMS Platforms",
          "Digital Tools",
          "Web Development",
          "Ed Tech Integration",
          "Project Management",
        ],
      },
      website: "https://jordanlander.com",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(bio, null, 2) }],
      structuredContent: bio,
    };
  },
});
