import { parseSrt } from './parse-srt';

describe('parseSrt', () => {
  it('set 1', () => {
    expect(parseSrt(testSrtText1)).toEqual(testResult1);
  });

  it('set 2', () => {
    expect(parseSrt(testSrtText12)).toEqual(testResult1);
  });
});

const testSrtText1 = `1
00:00:00,000 --> 00:00:01,893
(upbeat music)

2
00:00:01,893 --> 00:00:06,410
Hello, and welcome to the complete JavaScript course.

3
00:00:06,410 --> 00:00:11,220
I'm really, really happy to welcome you to this huge course

9
00:00:26,710 --> 00:00:31,710
but also because it basically powers the entire modern web.

96
00:05:19,846 --> 00:05:22,513
(upbeat music)


`;

const testSrtText12 = `


1
00:00:00,000 --> 00:00:01,893
(upbeat music)

2
00:00:01,893 --> 00:00:06,410
Hello, and welcome to the complete JavaScript course.

3
00:00:06,410 --> 00:00:11,220
I'm really, really happy to welcome you to this huge course

9
00:00:26,710 --> 00:00:31,710
but also because it basically powers the entire modern web.

96
00:05:19,846 --> 00:05:22,513
(upbeat music)


`;

const testResult1 = [
  {
    index: '1',
    time: '00:00:00,000 --> 00:00:01,893',
    text: '(upbeat music)',
  },
  {
    index: '2',
    time: '00:00:01,893 --> 00:00:06,410',
    text: 'Hello, and welcome to the complete JavaScript course.',
  },
  {
    index: '3',
    time: '00:00:06,410 --> 00:00:11,220',
    text: "I'm really, really happy to welcome you to this huge course",
  },
  {
    index: '9',
    time: '00:00:26,710 --> 00:00:31,710',
    text: 'but also because it basically powers the entire modern web.',
  },
  {
    index: '96',
    time: '00:05:19,846 --> 00:05:22,513',
    text: '(upbeat music)',
  },
];
