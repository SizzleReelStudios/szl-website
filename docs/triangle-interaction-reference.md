# SZL interaction reference: moving names and expanding project panels

Recorded: 2026-09-16  
Reference: [Triangle Group](https://www.trianglegroup.live/)  
Status: documented design understanding and proposed SZL adaptation; not implemented.

## Purpose and scope

Preserve the reference analysis and intended behaviour so a future implementation can pick this up without reconstructing the conversation.

The user highlighted two things: the rows of names associated with Triangle, and the vertical image panels that expand and reveal imagery on hover. The user has requested documentation for now. The SZL choices below are recommendations, not final design approval or an instruction to start building.

The intended pairing is simple:

- Moving names communicate the breadth and credibility of SZL's work.
- Expanding project panels let visitors inspect the quality and character of that work.

Do not copy Triangle's content, imagery, logo, or proprietary typography. Translate the interaction into SZL's identity.

## Evidence and limits

The live desktop page, rendered elements, and its publicly served component code were inspected. The site is built with Framer. These observations describe the version inspected, not a permanent specification of Triangle's site.

- The user referred to three rows; the desktop version inspected displayed four.
- The names mix artists and event/brand names. Their inclusion alone does not establish the precise commercial relationship with Triangle.
- The inspected expanding panels sit in the “Why Asia” section and communicate market information. Using that interaction for SZL projects is our adaptation.
- Desktop expansion was observed and mouse-enter/mouse-leave handlers confirmed in the source. Mobile variants exist in the source, but their live touch behaviour was not tested.
- No formal loading-speed or accessibility audit was performed.

## 1. Moving names: observed reference

### Composition

A full-width black band contains large white uppercase names in tightly stacked horizontal rows. Some names are substantially larger than their neighbours. Grey triangle symbols separate the names and repeat Triangle's identity.

This resembles a moving festival lineup. The changing type scale creates visual rhythm; it should not automatically be interpreted as a formal ranking or categorisation.

The side edges fade into black. The inspected mask fades over roughly the outer 12.5% on each side, leaving the middle readable.

### Motion

- Adjacent rows alternate left and right.
- Content repeats to create continuous loops.
- The tracks move horizontally rather than moving each name independently.
- The inspected name rows use a hover speed factor of 1: they do not slow down or pause on hover.
- Names are presented as display text in the inspected section, not individual project links.

The design communicates an extensive body of work quickly, but constant motion makes individual names harder to inspect.

## 2. Moving names: proposed SZL behaviour

### Presentation

Start with three rows on desktop. This is a proposed SZL choice, not a claim about the reference.

Use two deliberate type sizes, generous separation between names, and a small SZL-specific separator. Keep the background and text contrast strong. Avoid individual boxes, outlines or glows around every name.

The section should sit close to the opening footage, so visitors encounter recognisable names early. Keep the existing year-by-year lineup posters and artist archives as the deeper, browsable portfolio.

Use relationship wording supported by the underlying records. For example, “Artists we've filmed” and “Clients we've worked for” are different claims. Do not label everyone a client or imply endorsement. If rows represent different relationship types, make those labels visible; otherwise, do not imply an invisible row taxonomy.

### Interaction

- Alternate directions: left / right / left.
- Begin with a slow, steady movement; tune speed using real names and phone testing rather than guessing a fixed loop duration.
- Pause a row on pointer hover and keyboard focus.
- Provide a visible pause/resume control for the moving section.
- When a related archive exists, make the name a link to it.
- Resume from the paused position without jumping back to the start.
- A name without a useful destination remains text and should not look clickable.

These pause and link behaviours are proposed improvements over the reference.

### Responsive and accessible behaviour

- On narrow screens, reduce type sizes and edge fading without making the labels tiny.
- Keep all names available through a normal static list or the full lineup archive; motion must not be the only way to discover them.
- With reduced motion enabled, show a static wrapping list or manually scrollable rows.
- Keep a single semantic set of names for assistive technology.
- Repeated visual copies must not create duplicate announcements or keyboard stops. Hidden copies must not contain focusable links.
- Ensure a focused link is visible and readable; pause or reposition the presentation as necessary.
- Any linked name must retain a visible focus indicator.

## 3. Expanding panels: observed reference

This is a horizontal image accordion: one row of panels redistributes its width around the active panel.

| State | Observed behaviour |
| --- | --- |
| Resting | Four panels share the row approximately equally. |
| Pointer enters a panel | That panel expands; the other three contract. |
| Expanded | Active allocation is approximately 55%, with about 15% for each neighbour, adjusted for gaps. |
| Pointer leaves | The component returns to its closed state. |
| Throughout | The row retains a fixed height; images are cropped to fill their panels. |

At the inspected desktop size, the active panel was approximately 689 px wide and its neighbours 194 px each, within a 1296 px row. These are reference measurements, not SZL dimensions.

Text changes prominence between closed and open states. The source uses a spring transition, giving the width change a smooth settling motion.

### Colour reveal: important distinction

The visual impression is that the panel becomes brighter and coloured. In the inspected implementation, an opaque black overlay becomes approximately 50% transparent on the active panel. There was no grayscale filter on the inspected panel or image.

Therefore, the reference is principally an image reveal through a changing overlay. A grayscale-to-colour transition for SZL would be an additional design choice.

## 4. Expanding panels: proposed SZL behaviour

### Content and composition

Use four featured projects as the starting point, chosen for complementary footage and credible names. Do not invent or lock project selections in this document.

Each panel contains:

- A deliberately selected colour poster image.
- A readable artist/event title.
- A short description of the delivered work, such as a multicamera set or social cutdowns.
- An optional short, silent preview.
- A clear “Watch project” link to the related project page.

Keep inactive imagery partly visible rather than covering it completely. The narrow crops should still hint at the scene and invite exploration.

Maintain a stable row height. Choose separate crop focal points where needed, so faces and important action remain visible in both narrow and expanded states. Expanding should reveal more of the image, not visibly stretch the subject.

### State model

1. **Resting:** equal widths, recognisable stills, titles visible, no preview downloads.
2. **Pointer hover or keyboard focus:** expand that panel and contract neighbours.
3. **Active:** reduce the dark overlay; optionally restore full saturation if a grayscale treatment is chosen.
4. **Preview ready:** fade a short silent clip over the still. Keep the still underneath throughout loading.
5. **Watch project:** navigate only after explicit activation of the link.
6. **Exit:** pause the preview and restore the resting layout once neither hover nor focus remains within the accordion.

Keyboard focus should take precedence over incidental pointer movement. Moving onto the panel's own link must not collapse it. Do not automatically navigate when a panel is hovered or expanded.

A restrained transition around 350–500 ms is a useful initial tuning range for a CSS implementation, not a measured timing from Triangle. Reduce or remove the transition for reduced-motion users.

### Mobile proposal

Do not squeeze four narrow desktop panels across a phone.

Preferred starting point: horizontally swipeable cards with a partial next-card preview and explicit previous/next controls. Show titles and project links without requiring hover. Posters remain useful even if no preview video plays.

Tap-to-expand is an alternative if testing supports it. If used, the expansion action and “Watch project” action must be distinct, so the first tap does not unexpectedly navigate.

## 5. Proposed placement and visual hierarchy

A possible commercial homepage sequence:

1. Opening footage and concise introduction.
2. Three moving rows of relevant names.
3. Four expanding featured projects.
4. Services and an enquiry prompt.
5. Meet the Snags / behind the scenes.
6. Recent work and contact.

This sequence is a recommendation, not approval to replace the SZL umbrella structure. The two components can also live within the SRS videography wing.

The names and panels should have different jobs. Avoid repeating the same list of artists in several adjacent sections. Let the expanding gallery be the main interactive feature; keep surrounding typography and decoration quieter.

## 6. Data, implementation and efficiency

### One source of content

Reuse the existing artist, project, client and venue relationships. Add only the presentation fields needed, such as featured status, order, name prominence, poster focal point, preview URL and destination.

Do not create separate competing lists for the moving names, recent work, project panels and archive. One project update should flow through relevant sections.

### Names

- Render names as text, not a giant image or canvas.
- Animate the row track with transforms.
- Duplicate only enough content for a seamless loop.
- Handle font loading, resizing and short lists without gaps or jumps.
- Pause motion while off-screen or when the browser tab is hidden.
- Avoid a site-wide animation dependency solely for this effect.

### Images and video

- Use one colour poster asset per panel; overlays or filters can provide inactive styling.
- Serve responsive image sizes and reserve dimensions to avoid layout jumps.
- Ensure the image is sharp at its expanded size without sending full-resolution production stills to every phone.
- Prefer lightweight CSS for panel transitions. If animating width or flex values, profile the local layout work on a real phone.
- Do not preload all previews or instantiate a full player in every panel.
- Attach preview sources only on deliberate interaction; allow at most one preview to play.
- Pause previews on deactivation, off-screen movement and tab hiding.
- Skip decorative autoplay for reduced-motion users.
- Keep the poster and project link usable when media fails or autoplay is blocked.
- Load full playback only after an explicit request.

The existing SRS media-delivery proposal on the `srs-v1` branch describes the same poster → preview → full-playback separation. Consult it when implementation begins rather than maintaining conflicting export specifications here.

## 7. Implementation acceptance checks

When these elements are eventually built, verify:

- Names loop without blank gaps or visible jumps after loading fonts and resizing.
- Pause/resume, reduced motion, links and keyboard focus work.
- Repeated names do not create duplicate accessibility announcements or tab stops.
- Expansion preserves the gallery height and does not distort images or clip titles.
- Switching panels rapidly does not flicker, repeatedly download media or play multiple previews.
- A slow connection or failed preview leaves a useful poster and working link.
- Mobile users can discover all projects and navigate without hover.
- Only necessary media loads before interaction.
- Existing artist archives and per-year lineups still work.
- The visual result is reviewed with actual SZL images and footage.

Documentation-only work requires no application build. These are checks for the future implementation, not tests already performed.

## 8. Open choices for the next design pass

- Exact names, relationship labels and prominence.
- Four featured projects and their selected frames.
- SZL separator artwork.
- Dark-overlay-only versus grayscale-and-colour treatment.
- Final motion speed and pause control placement.
- Swipeable versus tap-expand mobile presentation.
- Whether these elements sit on the umbrella homepage or the SRS wing.

Resolve these with the real content and a working preview when implementation is requested.

## Related repository context

- [Website roadmap](../ROADMAP.md)
- [Umbrella site plan](sizzle-reel-rebuild-plan.md)
- [Content workbook](content-population-checklist.md)
- [Open SRS V1 proposal, PR #1](https://github.com/SizzleReelStudios/szl-website/pull/1)
- [Media-delivery proposal on srs-v1](https://github.com/SizzleReelStudios/szl-website/blob/srs-v1/docs/srs-web-media-delivery.md)

The reference adds interaction guidance. It does not supersede the existing archive architecture, authorise the pending homepage PR to be merged, or resume the parked Frank and Portal work.
