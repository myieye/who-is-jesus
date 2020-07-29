# Todo

## Doing
- [Bugfix(2)] Fix compile warnings

## Ideas/Backlog
- [Function(5)] Show in context (load over API without red-letter)
- [Function(7)] Simplify/Group tags for better overview
    - 2 Modes/Categorizations: Identity + Attributes/Characteristics
- [Content(5)] (?) More thorough discussions for each tag
- [Design(2)] (?) Hero image
- [Function(1)] Rethink collapsed/expanded sticky tag list. Collapsed could be handy on big screens too.
- [Bugfix(2)] When merging parallels from the same book, parts could get filtered out before the merge

## Done
- [Refactor(2)] Optimize verse refreshing (algorithm is fast; rendering is slow)
- [Design(4)] Dark mode
- [Design(4)] Optimize Cordova version for Android
- [Bugfix(1)] Verse tags are under BibleGateway icon
- [Platform(2)] Prepare first signed APK for publishing
- [Platform(5)] Configure Cordova completely
    - Load German verses with script tag in header
- [Content(2)] Add instructions (Calvin - " I think instructions are always good so maybe a nice little title above the tags that says something like narrow results by selecting one or more tags.")
- [Platform(5)] Configure Cordova build
- [Content(1)] Add page intro
- [Bugfix(1)] BG translation dialog: can't close keyboard on enter in search field
- [Option(2)] Show verse tags. Either:
    - Simple clickable circle with number
    - [on/off = off]
- [Bugfix(1)] Info-dialog headers don't fit on small screens
- [Content(2)] Add feedback section to info dialog
    - Don't need an Impressum (https://www.impressum-generator.de/2016/11/impressumspflicht-private-homepage/)
- [Bugfix(1)] Combo boxes don't fit in screen at certain size
- [Bugfix(1)] Tags not properly synced to URL when changing between single/multi
- [Bugfix(1)] Sticky tag list not synced when changing between single/multi selection
- [Bugfix(1)] Couldn't change back to single tag selection?
- [Design(2)] Center Tag-group-header texts to match verses and references
- [Design(2)] Center verses in page
- [Design(2)] Center tag list
- [Option(3)] Merge parallels [on/off = off]
- [Function(2)] When "Group by tag" disabled show all tags + descriptions at top (Me + Calvin)
- [Design(2)] Only stick tags when bottom of list is at top of screen
- [Bug(1)] When source is selected (eg. Luke), but no tags, then all tags are always enabled on page load
- [Content(1)] Add message when no verses match filter
- [i18n(1)] Hide "beim Drüberfahren..." on mobile
- [Content(8)] Translate into German
    - Translate templates
    - Translate code
    - Use German translations on BibleGateway
    - Find German Bible translation
    - Add German Bible translation
    - Proof read for parsing/text errors
    - Add copyright notice
    - Change German info-dialog Translation-info
- [Option(3)] Choose Bible Gateway translations (Max 3)
- [Design(2)] Make "about" more findable (either move the button to the top or use expandable text at the top w/o a dialog)
- [Function(2)] Show tag w/ description by tag group
- [i18n(1)] Choose best available language for user
- [Option(2)] Group by tag [on/off = on] (or off, if putting all active tags at the top looks ok)
    - Add Option
    - Implement grouping
- [Option(1)] Tag selection [single/multiple = single]
    - Add options list/component
    - Add option
- [Design(1)] Change font to: Montserrat
- Save source-filter, verse-order and selected-tags in URL
- Add tag descriptions on hover
- Add info dialog with about, translation and chronological soring info