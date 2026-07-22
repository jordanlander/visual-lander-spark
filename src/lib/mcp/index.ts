import { defineMcp } from "@lovable.dev/mcp-js";
import getBio from "./tools/get_bio";
import getExperience from "./tools/get_experience";
import getBooks from "./tools/get_books";
import getNews from "./tools/get_news";
import getWebServices from "./tools/get_web_services";
import getContact from "./tools/get_contact";

export default defineMcp({
  name: "jordan-lander-portfolio",
  title: "Jordan Lander Portfolio",
  version: "0.1.0",
  instructions:
    "Read-only tools for Jordan Lander's professional portfolio. Use `get_bio` for a summary, `get_experience` for the work history timeline, `get_books` for published titles on Amazon, `get_news` for media features and recognition, `get_web_services` for the One Weekend Websites offering, and `get_contact` for online links. All data is public.",
  tools: [getBio, getExperience, getBooks, getNews, getWebServices, getContact],
});
