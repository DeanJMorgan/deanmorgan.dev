---
description: Steps for creating a new MDX-based blog post
---

# Workflow: Creating a Blog Post

This project uses MDX for blog content, located in `src/content/blog/`.

1. **Create the MDX File**
   - Create a new file: `src/content/blog/[slug].mdx`.
   - Use a clear, hyphenated slug that matches the title.

2. **Add Frontmatter**
   - Every post MUST have the following metadata at the top:
     ```mdx
     ---
     title: "A Clear and Compelling Title"
     description: "A short summary for search results and previews."
     date: "YYYY-MM-DD"
     author: "Dean Morgan"
     tags: ["eCommerce", "AI", "Performance"]
     ---
     ```

3. **Write the Content**
   - Follow the **British English** skill (e.g., use 'optimise' instead of 'optimize').
   - Use standard Markdown for structure (headings, lists, code blocks).
   - You can use React components directly in the MDX if needed.

4. **Verify Locally**
   - Navigate to `/blog/[slug]` to ensure the post renders correctly.
   - Check the blog index page to see if the post appears in the list.

5. **Lint and Format**
   - Ensure there are no syntax errors in the MDX or frontmatter.
