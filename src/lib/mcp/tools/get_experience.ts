import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_experience",
  title: "Get professional experience",
  description:
    "Return Jordan Lander's professional experience timeline, including titles, organizations, dates, and highlights for each role.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const experience = [
      {
        title: "Supervisor of Special Education",
        organization: "Northwest Tri-County IU5",
        period: "Jul 2025 – Present",
        highlights: [
          "Lead strategic vision & daily operations for special education across multiple districts",
          "Manage IEP development, compliance with IDEA/Pennsylvania regs, and transition planning",
          "Supervise & mentor certified teachers & paraprofessionals in student-centered culture",
          "Design & deliver professional learning on PBIS, inclusive practices, and data-driven instruction",
        ],
      },
      {
        title: "Assistant Principal & Cyber Liaison",
        organization: "Corry Area SD",
        period: "Jan 2022 – Jun 2025",
        highlights: [
          "Redesigned Corry Virtual Academy, cutting cyber placement costs by $800K+ annually",
          "Supervised curriculum development and professional learning for virtual instruction",
          "Led data-driven instructional improvements across K–12",
          "Launched digital platforms for district-wide collaboration and compliance tracking",
        ],
      },
      {
        title: "Science Teacher",
        organization: "Erie's Public Schools",
        period: "Aug 2016 – Jan 2022",
        highlights: [
          "Led advanced science and CTE programs while mentoring colleagues in technology integration",
          "Consulted on curriculum design and building-wide instructional initiatives",
          "Recognized for innovative instruction and student engagement",
        ],
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(experience, null, 2) }],
      structuredContent: { experience },
    };
  },
});
