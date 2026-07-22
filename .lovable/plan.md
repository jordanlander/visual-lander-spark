Goal: Make the site's social link preview more attractive and personal, and reposition the One Weekend Websites promotion so it doesn't interrupt the professional narrative.

## What we'll change

### 1. Create a branded social preview image
- The current OG/Twitter image points to `https://jordanlander.com/Jordan_Lander.jpg`, but the headshot is only in `src/assets`, not `public`. So the preview is likely broken.
- Generate a 1200×630 branded social card that includes Jordan's headshot, name, title, and a short tagline, using the existing teal/amber design tokens.
- Save it as `public/og-image.jpg` so it deploys to the site root and is accessible at `https://jordanlander.com/og-image.jpg`.
- Update `index.html` OG and Twitter meta tags to reference the new image, and verify the dimensions and alt text are set correctly.

### 2. Move One Weekend Websites into a compact footer banner
- Current location is directly after the About/Leadership Highlights section, which breaks the professional story flow.
- Move it to a compact, attractive callout between the News section and the Contact section.
- Redesign it as a slim banner/card rather than a full split-image section:
  - Clear headline (e.g., "Need a website fast?")
  - One sentence of value proposition
  - Prominent CTA button to `oneweekendwebsites.com`
  - Keep the teal/amber accent styling consistent with the rest of the site.
- Remove the existing full One Weekend section from its current position and update the nav link to point to the new banner (or remove the nav link if it becomes a footer callout).

### 3. Verify the changes
- Build the project to ensure no errors.
- Check that the new OG image is in `public/` and referenced correctly.
- Review the preview to confirm the One Weekend banner is compact and clear.