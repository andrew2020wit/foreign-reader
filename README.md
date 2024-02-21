# Foreign Reader - the web-application to read foreign texts and learn languages.

[https://andrew2020wit.github.io/foreign-reader/](https://andrew2020wit.github.io/foreign-reader/)

It's still under development. At the moment it doesn't support small screens (mobile).

## Functionality

You can open a plain text file (UTF-8 encoding).
This text will be converted into inner format
and stored locally in you web-browser storage (IDB-storage).

This application optimized to work with very big text files.

The text is shown to be easily to read, with large text-size and good font.
You can customize appearance (text size, colors and other). 

It supports multiple bookmarks and automatically remember last position.

It provides integration with translation.

It can be integrated with outer dictionary (like GoldenDict) via auto-coping to clipboard.

It has a built-in dictionary viewer, which support json-format dictionaries.
Some tools and dictionary was created to support json-format dictionaries.

It has a functionality for memory-cards like Anki-card.
You can easily create memory-cards (by one click) from dictionary-examples.

## YouTube intro

ToDo

### Dictionary functionality

#### go to Settings

- Load morphology.json and morphology-replace-rules.json. See: [dictionary](https://github.com/andrew2020wit/foreign-reader/tree/master/dictionary)
- Load main-dictionary. See "wordset-with-tr.json": [dictionary](https://github.com/andrew2020wit/foreign-reader/tree/master/dictionary)
- Turn-on dictionary-functionality.

#### There are some tools to convert dsl and mdx dictionaries to json, but they are specific for the certain dictionary.

See also:

Parser for Lingvo en-ru dsl-dictionary: [https://github.com/andrew2020wit/dsl-dictionary-parser](https://github.com/andrew2020wit/dsl-dictionary-parser)

Some utils (uniter and other) are also there.

Parser for Cambridge Advanced Learner's Dictionary 4th, mdx format: [https://github.com/andrew2020wit/cald-mdx-to-json](https://github.com/andrew2020wit/cald-mdx-to-json)

#### Morphology Replace Rules

See about morphology-replace-rules [here](https://github.com/andrew2020wit/foreign-reader/tree/master/dictionary/utils)

You can define you own Morphology Replace Rules.

index: index for replacement ( - 1 => from end)

See example /dictionary/morphology-replace-rules.json

And see /dictionary/utils/compute-morphology-rule(.spec).ts

## Translation

For the translation you can:

- go to menu (in book) - translation tab
- export for translation - it will create a special text file
- you have to translate it with google-translate (for documents).
- import the translation (the same format).

Then you can click on lines to see translation.

## Favorite Examples - is similar to Anki functionality.

It shows only first 1000 favorite examples (sorted by ToDoTime);

## Urls-tip

You can use:

https://andrew2020wit.github.io/foreign-reader/dictionary-viewer?term=%s

https://andrew2020wit.github.io/foreign-reader/dictionary-viewer?translate=%s

with [selection-search chrome-extension](https://chromewebstore.google.com/detail/selection-search/gipnlpdeieaidmmeaichnddnmjmcakoe)

(see its settings)

### Hot-keys

GoHome: 'Home', ShowMenu: '0', 'Escape', GoToNextItem: 'n', MarkIt: '1',
ShowTranslation: '2', EditChapterTitle: '9', GoToNextMark: 'm'.

### About some custom styles

Custom styles are applied only to the book-page.

Accent colors are related to headers.

Flex width - defines proportion for original text and translation.

Translation direction - "row" will replace original and translation.

Color primary/accent/warn - for buttons.

## Deference from  "Bilingua Dealer"

This is a new version of former [Bilingua Dealer](https://github.com/andrew2020wit/bilingua-dealer)

Removed useless functionality: fragments, speech-engine, translated text (bilingua mode),
creating bilingua, subtitle-imports.

### Changelog

[Changelog](https://github.com/andrew2020wit/foreign-reader/blob/master/changelog.md)

## Licence

- The author of this application is Andrii Faurash.
- You can use it only for personal non-commercial purposes.
- Don't include it (or part of it) in any other application/library/product/service.
- Don't share modified copies.
- You can use it without paying accordingly to this Licence.
- This application is provided "AS IS".
- The author of this application doesn't provide any guarantees.

Copyright (c) 2023-2024 Andrii Faurash
