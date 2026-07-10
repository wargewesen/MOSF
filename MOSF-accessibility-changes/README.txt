MOSF — Calendar & NavBar accessibility changes
Branch: date-picker-improvements-team (1 commit ahead of main)

WHAT CHANGED (4 files, all under src/design-system/):
  - Calendar.tsx        aria-labels on date buttons; role=grid + month header association; larger hit area
  - Calendar.module.css day cell hit area expanded to 44x44px
  - NavBar.tsx          descriptive aria-labels on the icon nav buttons
  - SectionLabel.tsx    brackets marked presentation-only; label exposed as a heading

HOW TO UPLOAD VIA GITHUB WEB:
  1. Go to https://github.com/wargewesen/MOSF
  2. (Optional) create/switch to a branch, e.g. date-picker-improvements-team
  3. Click "Add file" -> "Upload files"
  4. Drag the "files/src" folder from this package into the uploader
     (GitHub keeps the folder paths, so files land in src/design-system/)
  5. Add a commit message and commit -> then open a Pull Request

ALTERNATIVE (for an engineer): apply accessibility-changes.patch with:
     git checkout -b date-picker-improvements-team
     git apply accessibility-changes.patch
