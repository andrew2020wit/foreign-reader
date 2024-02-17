# Foreign Reader - the web-application to read foreign texts and learn languages.

[https://andrew2020wit.github.io/foreign-reader/](https://andrew2020wit.github.io/foreign-reader/)

This is a new version of former [Bilingua Dealer](https://github.com/andrew2020wit/bilingua-dealer)

It's still under development

## Deference from  "Bilingua Dealer"

Removed useless functionality: fragments, speech-engine, translated text (bilingua mode),
creating bilingua, subtitle-imports.

It doesn't support small screens (mobile), because I don't fink it would be useful.

Added: Google-translate integration. You have to install locally
[proxy-translation-server](https://github.com/andrew2020wit/proxy-translation-server)
for it. And then check settings.

## Information

### Hot-keys

GoHome: 'Home', ShowMenu: '0', 'Escape', GoToNextItem: 'n', MarkIt: '1',
ShowTranslation: '2', EditChapterTitle: '9', GoToNextMark: 'm'.

### About some custom styles

Custom styles are applied only to the book-page.

Accent colors are related to headers.

Flex width - defines proportion for original text and translation.

Translation direction - "row" will replace original and translation.

Color primary/accent/warn - for buttons.

### Dictionary functionality

Settings => load a morphology-dictionary, main-dictionary. Turn-on dictionary.

I use the Lingvo+Longman-dictionaries, but I cannot share them because of copyright.

You can get free Wordset-dictionary (wordset-with-tr.json) from here:

[https://github.com/andrew2020wit/bilingua-dealer/tree/master/dictionary](https://github.com/andrew2020wit/bilingua-dealer/tree/master/dictionary)

You also have to load morphology.json and morphology-replace-rules.json.

See also:

[https://github.com/andrew2020wit/dsl-dictionary-parser](https://github.com/andrew2020wit/dsl-dictionary-parser)

[https://github.com/andrew2020wit/cald-mdx-to-json](https://github.com/andrew2020wit/cald-mdx-to-json)

At the moment Dictionary functionality isn't  optimized for mobile (small screens). You have to use a large screen.

It shows only first 1000 favorite examples (sorted by ToDoTime);

#### Morphology Replace Rules

You can define you own Morphology Replace Rules.

index: index for replacement ( - 1 => from end)

See example /dictionary/morphology-replace-rules.json

And see /dictionary/utils/compute-morphology-rule(.spec).ts

### Changelog


## Licence

- The author of this application is Andrii Faurash.
- You can use it only for personal non-commercial purposes.
- Don't include it (or part of it) in any other application/library/product/service.
- Don't share modified copies.
- You can use it without paying accordingly to this Licence.
- This application is provided "AS IS".
- The author of this application doesn't provide any guarantees.

Copyright (c) 2023-2024 Andrii Faurash
