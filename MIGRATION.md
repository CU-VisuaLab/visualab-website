# Publication migration — initial batch

Imported **31** publication records from the lab's existing [publications page](https://unc-visualab.org/publications.html). This is a **partial migration**, not a complete bibliography. Records include the original bibliography as a provenance link until each paper URL has been individually validated.

## Important verification tasks

- Check exact author lists and typography, especially long collaborative papers (the Grand Challenges record is **abbreviated** and must be completed).
- Check publication year versus conference presentation year for TVCG/VIS papers.
- Add verified DOI, individual PDF/code/demo URLs, abstracts, thumbnails, and BibTeX.
- Migrate remaining 2016–2021 entries, then reconcile 2025–2026 papers using authoritative publisher records.
- Do not represent these records as complete or BibTeX-verified.

## Data model

One Markdown file per publication in `src/content/publications/`; edit via Decap CMS after OAuth is configured. `themes` associates records with research pages.
