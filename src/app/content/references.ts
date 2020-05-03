import { TaggedReference, BibleBookKey, TaggedVerse, VerseText, UiBibleReference, BibleBookMap } from '../models/bible';
import { VerseTagKey, offLimits } from '../models/tags';
import { difference } from 'lodash';

export const tagVerses = (verses: VerseText[], bibleBooks: BibleBookMap): TaggedVerse[] => {
    return verses.map((verse) => {
        const metaReference = references[verse.referenceId];
        const uiReference: UiBibleReference = {
            ...metaReference.reference,
            book: bibleBooks[metaReference.reference.book],
        };

        return {
            reference: uiReference,
            html: verse.html,
            tags: difference(metaReference.tags, offLimits),
            parallelGroup: metaReference.parallelGroup,
        };
    });
};

// tslint:disable:max-line-length
const references: { [index: string]: TaggedReference } = {
    'John:1:1-2': {
        reference: { book: BibleBookKey.John, chapter: 1, verses: '1-2', numericReference: 43001001, chronologicalIndex: 2 },
        tags: [VerseTagKey.God, VerseTagKey.Eternal, VerseTagKey.Word],
    },
    'John:1:3, 10': {
        reference: { book: BibleBookKey.John, chapter: 1, verses: '3, 10', numericReference: 43001003, chronologicalIndex: 2 },
        tags: [VerseTagKey.Creator],
    },
    'John:1:4': {
        reference: { book: BibleBookKey.John, chapter: 1, verses: '4', numericReference: 43001004, chronologicalIndex: 2 },
        tags: [VerseTagKey.Life],
    },
    'John:1:14': {
        reference: { book: BibleBookKey.John, chapter: 1, verses: '14', numericReference: 43001014, chronologicalIndex: 2 },
        tags: [VerseTagKey.Glory, VerseTagKey.Son, VerseTagKey.SoM, VerseTagKey.Word],
    },
    'John:1:15, 30': {
        reference: { book: BibleBookKey.John, chapter: 1, verses: '15, 30', numericReference: 43001015, chronologicalIndex: 2 },
        tags: [VerseTagKey.Eternal, VerseTagKey.Greater],
    },
    'John:1:18': {
        reference: { book: BibleBookKey.John, chapter: 1, verses: '18', numericReference: 43001018, chronologicalIndex: 2 },
        tags: [VerseTagKey.Son, VerseTagKey.Unique],
    },
    'Luke:1:16-17': {
        reference: { book: BibleBookKey.Luke, chapter: 1, verses: '16-17', numericReference: 42001016, chronologicalIndex: 5 },
        tags: [VerseTagKey.Lord, VerseTagKey.YHWH],
    },
    'Luke:1:32-33': {
        reference: { book: BibleBookKey.Luke, chapter: 1, verses: '32-33', numericReference: 42001032, chronologicalIndex: 6 },
        tags: [VerseTagKey.Son, VerseTagKey.King, VerseTagKey.Eternal, VerseTagKey.Christ],
    },
    'Luke:1:35': {
        reference: { book: BibleBookKey.Luke, chapter: 1, verses: '35', numericReference: 42001035, chronologicalIndex: 6 },
        tags: [VerseTagKey.Son, VerseTagKey.Holy, VerseTagKey.Unique],
    },
    'Luke:1:43': {
        reference: { book: BibleBookKey.Luke, chapter: 1, verses: '43', numericReference: 42001043, chronologicalIndex: 7 },
        tags: [VerseTagKey.Lord],
    },
    'Luke:1:66-67, 76': {
        reference: { book: BibleBookKey.Luke, chapter: 1, verses: '66-67, 76', numericReference: 42001066, chronologicalIndex: 8 },
        tags: [VerseTagKey.Lord, VerseTagKey.YHWH],
    },
    'Matt:1:18': {
        reference: { book: BibleBookKey.Matt, chapter: 1, verses: '18', numericReference: 40001018, chronologicalIndex: 9 },
        tags: [VerseTagKey.Unique],
    },
    'Matt:1:21': {
        reference: { book: BibleBookKey.Matt, chapter: 1, verses: '21', numericReference: 40001021, chronologicalIndex: 9 },
        tags: [VerseTagKey.His, VerseTagKey.Sin, VerseTagKey.Saviour],
    },
    'Matt:1:23': {
        reference: { book: BibleBookKey.Matt, chapter: 1, verses: '23', numericReference: 40001023, chronologicalIndex: 9 },
        tags: [VerseTagKey.God, VerseTagKey.Unique, VerseTagKey.Immanuel],
    },
    'Luke:2:11, 15': {
        reference: { book: BibleBookKey.Luke, chapter: 2, verses: '11, 15', numericReference: 42002011, chronologicalIndex: 11 },
        tags: [VerseTagKey.Lord, VerseTagKey.Saviour, VerseTagKey.Christ],
    },
    'Matt:2:2': {
        reference: { book: BibleBookKey.Matt, chapter: 2, verses: '2', numericReference: 40002002, chronologicalIndex: 14 },
        tags: [VerseTagKey.Worship, VerseTagKey.King, VerseTagKey.Unique],
    },
    'Matt:2:6': {
        reference: { book: BibleBookKey.Matt, chapter: 2, verses: '6', numericReference: 40002006, chronologicalIndex: 14 },
        tags: [VerseTagKey.Worship],
    },
    'Matt:2:15': {
        reference: { book: BibleBookKey.Matt, chapter: 2, verses: '15', numericReference: 40002015, chronologicalIndex: 15 },
        tags: [VerseTagKey.FP, VerseTagKey.Son],
    },
    'Luke:2:49': {
        reference: { book: BibleBookKey.Luke, chapter: 2, verses: '49', numericReference: 42002049, chronologicalIndex: 18 },
        tags: [VerseTagKey.Son],
    },
    'Matt:3:11-12': {
        reference: { book: BibleBookKey.Matt, chapter: 3, verses: '11-12', numericReference: 40003011, chronologicalIndex: 19 },
        parallelGroup: 1,
        tags: [VerseTagKey.Judge, VerseTagKey.His, VerseTagKey.Worthy, VerseTagKey.Greater, VerseTagKey.Honour],
    },
    'Mark:1:1-3': {
        reference: { book: BibleBookKey.Mark, chapter: 1, verses: '1-3', numericReference: 41001001, chronologicalIndex: 19 },
        tags: [VerseTagKey.YHWH, VerseTagKey.FP, VerseTagKey.Son, VerseTagKey.Christ],
    },
    'Mark:1:7-8': {
        reference: { book: BibleBookKey.Mark, chapter: 1, verses: '7-8', numericReference: 41001007, chronologicalIndex: 19 },
        parallelGroup: 1,
        tags: [VerseTagKey.Worthy, VerseTagKey.Honour, VerseTagKey.Greater],
    },
    'Luke:3:4': {
        reference: { book: BibleBookKey.Luke, chapter: 3, verses: '4', numericReference: 42003004, chronologicalIndex: 19 },
        tags: [VerseTagKey.YHWH],
    },
    'Luke:3:16-17': {
        reference: { book: BibleBookKey.Luke, chapter: 3, verses: '16-17', numericReference: 42003016, chronologicalIndex: 19 },
        parallelGroup: 1,
        tags: [VerseTagKey.Worthy, VerseTagKey.Honour, VerseTagKey.Judge, VerseTagKey.His, VerseTagKey.Greater],
    },
    'Matt:3:16-17': {
        reference: { book: BibleBookKey.Matt, chapter: 3, verses: '16-17', numericReference: 40003016, chronologicalIndex: 20 },
        parallelGroup: 2,
        tags: [VerseTagKey.Son, VerseTagKey.Unique],
    },
    'Mark:1:11': {
        reference: { book: BibleBookKey.Mark, chapter: 1, verses: '11', numericReference: 41001011, chronologicalIndex: 20 },
        parallelGroup: 2,
        tags: [VerseTagKey.Son, VerseTagKey.Unique],
    },
    'Luke:3:22': {
        reference: { book: BibleBookKey.Luke, chapter: 3, verses: '22', numericReference: 42003022, chronologicalIndex: 20 },
        parallelGroup: 2,
        tags: [VerseTagKey.Son, VerseTagKey.Unique],
    },
    'John:1:23': {
        reference: { book: BibleBookKey.John, chapter: 1, verses: '23', numericReference: 43001023, chronologicalIndex: 22 },
        tags: [VerseTagKey.YHWH],
    },
    'John:1:26-27': {
        reference: { book: BibleBookKey.John, chapter: 1, verses: '26-27', numericReference: 43001026, chronologicalIndex: 22 },
        parallelGroup: 1,
        tags: [VerseTagKey.Worthy, VerseTagKey.Honour],
    },
    'John:1:29': {
        reference: { book: BibleBookKey.John, chapter: 1, verses: '29', numericReference: 43001029, chronologicalIndex: 23 },
        tags: [VerseTagKey.Sin, VerseTagKey.Sacrifice],
    },
    'John:1:34': {
        reference: { book: BibleBookKey.John, chapter: 1, verses: '34', numericReference: 43001034, chronologicalIndex: 23 },
        tags: [VerseTagKey.Son],
    },
    'John:1:47-49': {
        reference: { book: BibleBookKey.John, chapter: 1, verses: '47-49', numericReference: 43001047, chronologicalIndex: 24 },
        tags: [VerseTagKey.Son, VerseTagKey.King, VerseTagKey.Omniscient, VerseTagKey.Faith],
    },
    'John:2:11': {
        reference: { book: BibleBookKey.John, chapter: 2, verses: '11', numericReference: 43002011, chronologicalIndex: 25 },
        tags: [VerseTagKey.Glory, VerseTagKey.Faith],
    },
    'John:2:16': {
        reference: { book: BibleBookKey.John, chapter: 2, verses: '16', numericReference: 43002016, chronologicalIndex: 26 },
        tags: [VerseTagKey.Son],
    },
    'John:2:24-25': {
        reference: { book: BibleBookKey.John, chapter: 2, verses: '24-25', numericReference: 43002024, chronologicalIndex: 26 },
        tags: [VerseTagKey.Omniscient],
    },
    'John:3:16-18': {
        reference: { book: BibleBookKey.John, chapter: 3, verses: '16-18', numericReference: 43003016, chronologicalIndex: 27 },
        tags: [VerseTagKey.Son, VerseTagKey.Saviour, VerseTagKey.Unique, VerseTagKey.Faith],
    },
    'John:3:29': {
        reference: { book: BibleBookKey.John, chapter: 3, verses: '29', numericReference: 43003029, chronologicalIndex: 29 },
        tags: [VerseTagKey.Bridegroom],
    },
    'John:3:31': {
        reference: { book: BibleBookKey.John, chapter: 3, verses: '31', numericReference: 43003031, chronologicalIndex: 29 },
        tags: [VerseTagKey.Heaven, VerseTagKey.Authority],
    },
    'John:3:35-36': {
        reference: { book: BibleBookKey.John, chapter: 3, verses: '35-36', numericReference: 43003035, chronologicalIndex: 29 },
        tags: [VerseTagKey.Life, VerseTagKey.Son, VerseTagKey.Authority, VerseTagKey.Saviour, VerseTagKey.Faith],
    },
    'John:4:13-14': {
        reference: { book: BibleBookKey.John, chapter: 4, verses: '13-14', numericReference: 43004013, chronologicalIndex: 32 },
        tags: [VerseTagKey.His, VerseTagKey.Life],
    },
    'John:4:16-19, 39': {
        reference: { book: BibleBookKey.John, chapter: 4, verses: '16-19, 39', numericReference: 43004016, chronologicalIndex: 32 },
        tags: [VerseTagKey.Omniscient, VerseTagKey.Faith],
    },
    'Matt:4:19': {
        reference: { book: BibleBookKey.Matt, chapter: 4, verses: '19', numericReference: 40004019, chronologicalIndex: 40 },
        tags: [VerseTagKey.Authority],
    },
    'Mark:1:23-26': {
        reference: { book: BibleBookKey.Mark, chapter: 1, verses: '23-26', numericReference: 41001023, chronologicalIndex: 41 },
        parallelGroup: 3,
        tags: [VerseTagKey.Holy, VerseTagKey.Demons, VerseTagKey.Authority],
    },
    'Luke:4:33-35': {
        reference: { book: BibleBookKey.Luke, chapter: 4, verses: '33-35', numericReference: 42004033, chronologicalIndex: 41 },
        parallelGroup: 3,
        tags: [VerseTagKey.Demons, VerseTagKey.Holy, VerseTagKey.Authority],
    },
    'Luke:4:41': {
        reference: { book: BibleBookKey.Luke, chapter: 4, verses: '41', numericReference: 42004041, chronologicalIndex: 43 },
        tags: [VerseTagKey.Son, VerseTagKey.Demons, VerseTagKey.Christ, VerseTagKey.Authority],
    },
    'Matt:4:23-24': {
        reference: { book: BibleBookKey.Matt, chapter: 4, verses: '23-24', numericReference: 40004023, chronologicalIndex: 45 },
        tags: [VerseTagKey.Power],
    },
    'Luke:5:8': {
        reference: { book: BibleBookKey.Luke, chapter: 5, verses: '8', numericReference: 42005008, chronologicalIndex: 47 },
        tags: [VerseTagKey.Worship, VerseTagKey.Lord, VerseTagKey.Holy],
    },
    'Matt:8:2-3': {
        reference: { book: BibleBookKey.Matt, chapter: 8, verses: '2-3', numericReference: 40008002, chronologicalIndex: 48 },
        parallelGroup: 4,
        tags: [VerseTagKey.Authority, VerseTagKey.Clean, VerseTagKey.Unique, VerseTagKey.Faith, VerseTagKey.Clean],
    },
    'Mark:1:40-42': {
        reference: { book: BibleBookKey.Mark, chapter: 1, verses: '40-42', numericReference: 41001040, chronologicalIndex: 48 },
        parallelGroup: 4,
        tags: [VerseTagKey.Authority, VerseTagKey.Clean, VerseTagKey.Unique, VerseTagKey.Faith, VerseTagKey.Clean],
    },
    'Luke:5:12-13': {
        reference: { book: BibleBookKey.Luke, chapter: 5, verses: '12-13', numericReference: 42005012, chronologicalIndex: 48 },
        parallelGroup: 4,
        tags: [VerseTagKey.Authority, VerseTagKey.Clean, VerseTagKey.Unique, VerseTagKey.Faith, VerseTagKey.Clean],
    },
    'Matt:9:2-8': {
        reference: { book: BibleBookKey.Matt, chapter: 9, verses: '2-8', numericReference: 40009002, chronologicalIndex: 49 },
        parallelGroup: 5,
        tags: [VerseTagKey.Sin, VerseTagKey.Blasphemy, VerseTagKey.Authority, VerseTagKey.SoM, VerseTagKey.Faith, VerseTagKey.Himself],
    },
    'Mark:2:5-12': {
        reference: { book: BibleBookKey.Mark, chapter: 2, verses: '5-12', numericReference: 41002005, chronologicalIndex: 49 },
        parallelGroup: 5,
        tags: [VerseTagKey.Sin, VerseTagKey.Blasphemy, VerseTagKey.Authority, VerseTagKey.SoM, VerseTagKey.Faith, VerseTagKey.Himself],
    },
    'Luke:5:20-25': {
        reference: { book: BibleBookKey.Luke, chapter: 5, verses: '20-25', numericReference: 42005020, chronologicalIndex: 49 },
        parallelGroup: 5,
        tags: [VerseTagKey.Sin, VerseTagKey.Blasphemy, VerseTagKey.Authority, VerseTagKey.SoM, VerseTagKey.Faith, VerseTagKey.Himself],
    },
    'Matt:9:13': {
        reference: { book: BibleBookKey.Matt, chapter: 9, verses: '13', numericReference: 40009013, chronologicalIndex: 51 },
        tags: [VerseTagKey.YHWH],
    },
    'Luke:5:34': {
        reference: { book: BibleBookKey.Luke, chapter: 5, verses: '34', numericReference: 42005034, chronologicalIndex: 51 },
        tags: [VerseTagKey.Bridegroom],
    },
    'John:5:8-9': {
        reference: { book: BibleBookKey.John, chapter: 5, verses: '8-9', numericReference: 43005008, chronologicalIndex: 53 },
        tags: [VerseTagKey.Power],
    },
    'John:5:18': {
        reference: { book: BibleBookKey.John, chapter: 5, verses: '18', numericReference: 43005018, chronologicalIndex: 54 },
        tags: [VerseTagKey.God, VerseTagKey.Son],
    },
    'John:5:19': {
        reference: { book: BibleBookKey.John, chapter: 5, verses: '19', numericReference: 43005019, chronologicalIndex: 54 },
        tags: [VerseTagKey.Lowly, VerseTagKey.Son],
    },
    'John:5:20-21': {
        reference: { book: BibleBookKey.John, chapter: 5, verses: '20-21', numericReference: 43005020, chronologicalIndex: 54 },
        tags: [VerseTagKey.Life, VerseTagKey.Omniscient, VerseTagKey.Son, VerseTagKey.Himself],
    },
    'John:5:22-23': {
        reference: { book: BibleBookKey.John, chapter: 5, verses: '22-23', numericReference: 43005022, chronologicalIndex: 54 },
        tags: [VerseTagKey.Judge, VerseTagKey.Honour, VerseTagKey.One, VerseTagKey.Son, VerseTagKey.Himself],
    },
    'John:5:30': {
        reference: { book: BibleBookKey.John, chapter: 5, verses: '30', numericReference: 43005030, chronologicalIndex: 54 },
        tags: [VerseTagKey.Lowly, VerseTagKey.Judge, VerseTagKey.Son],
    },
    'John:5:31-32': {
        reference: { book: BibleBookKey.John, chapter: 5, verses: '31-32', numericReference: 43005031, chronologicalIndex: 54 },
        tags: [VerseTagKey.Humility],
    },
    'John:5:39': {
        reference: { book: BibleBookKey.John, chapter: 5, verses: '39', numericReference: 43005039, chronologicalIndex: 54 },
        tags: [VerseTagKey.Honour, VerseTagKey.Himself, VerseTagKey.FP],
    },
    'Matt:12:6-8': {
        reference: { book: BibleBookKey.Matt, chapter: 12, verses: '6-8', numericReference: 40012006, chronologicalIndex: 55 },
        parallelGroup: 6,
        tags: [VerseTagKey.Greater, VerseTagKey.Lord, VerseTagKey.SoM, VerseTagKey.YHWH, VerseTagKey.Himself],
    },
    'Mark:2:28': {
        reference: { book: BibleBookKey.Mark, chapter: 2, verses: '28', numericReference: 41002028, chronologicalIndex: 55 },
        parallelGroup: 6,
        tags: [VerseTagKey.SoM, VerseTagKey.Lord, VerseTagKey.YHWH, VerseTagKey.Himself],
    },
    'Luke:6:5': {
        reference: { book: BibleBookKey.Luke, chapter: 6, verses: '5', numericReference: 42006005, chronologicalIndex: 55 },
        parallelGroup: 6,
        tags: [VerseTagKey.SoM, VerseTagKey.Lord, VerseTagKey.YHWH, VerseTagKey.Himself],
    },
    'Mark:3:11': {
        reference: { book: BibleBookKey.Mark, chapter: 3, verses: '11', numericReference: 41003011, chronologicalIndex: 58 },
        tags: [VerseTagKey.Son, VerseTagKey.Demons],
    },
    'Mark:3:14-15': {
        reference: { book: BibleBookKey.Mark, chapter: 3, verses: '14-15', numericReference: 41003014, chronologicalIndex: 60 },
        tags: [VerseTagKey.Authority],
    },
    'Matt:7:22-23': {
        reference: { book: BibleBookKey.Matt, chapter: 7, verses: '22-23', numericReference: 40007022, chronologicalIndex: 63 },
        tags: [VerseTagKey.Lord, VerseTagKey.Name, VerseTagKey.Judge, VerseTagKey.Himself],
    },
    'Matt:7:24': {
        reference: { book: BibleBookKey.Matt, chapter: 7, verses: '24', numericReference: 40007024, chronologicalIndex: 63 },
        tags: [VerseTagKey.Authority, VerseTagKey.Himself],
    },
    'Luke:6:46': {
        reference: { book: BibleBookKey.Luke, chapter: 6, verses: '46', numericReference: 42006046, chronologicalIndex: 63 },
        tags: [VerseTagKey.Lord, VerseTagKey.Himself],
    },
    'Matt:8:7-10': {
        reference: { book: BibleBookKey.Matt, chapter: 8, verses: '7-10', numericReference: 40008007, chronologicalIndex: 64 },
        parallelGroup: 7,
        tags: [VerseTagKey.Lord, VerseTagKey.Worthy, VerseTagKey.Authority, VerseTagKey.Faith],
    },
    'Luke:7:6-9': {
        reference: { book: BibleBookKey.Luke, chapter: 7, verses: '6-9', numericReference: 42007006, chronologicalIndex: 64 },
        parallelGroup: 7,
        tags: [VerseTagKey.Lord, VerseTagKey.Worthy, VerseTagKey.Authority, VerseTagKey.Faith],
    },
    'Luke:7:13-14': {
        reference: { book: BibleBookKey.Luke, chapter: 7, verses: '13-14', numericReference: 42007013, chronologicalIndex: 65 },
        tags: [VerseTagKey.Lord, VerseTagKey.Authority],
    },
    'Matt:11:28-30': {
        reference: { book: BibleBookKey.Matt, chapter: 11, verses: '28-30', numericReference: 40011028, chronologicalIndex: 68 },
        tags: [VerseTagKey.Saviour, VerseTagKey.Himself],
    },
    'Luke:7:37-50': {
        reference: { book: BibleBookKey.Luke, chapter: 7, verses: '37-50', numericReference: 42007037, chronologicalIndex: 69 },
        tags: [VerseTagKey.Sin, VerseTagKey.Honour, VerseTagKey.Himself],
    },
    'Mark:3:27': {
        reference: { book: BibleBookKey.Mark, chapter: 3, verses: '27', numericReference: 41003027, chronologicalIndex: 72 },
        tags: [VerseTagKey.Authority, VerseTagKey.Greater],
    },
    'Matt:12:41-42': {
        reference: { book: BibleBookKey.Matt, chapter: 12, verses: '41-42', numericReference: 40012041, chronologicalIndex: 73 },
        tags: [VerseTagKey.Greater, VerseTagKey.Himself],
    },
    'Matt:13:41-42': {
        reference: { book: BibleBookKey.Matt, chapter: 13, verses: '41-42', numericReference: 40013041, chronologicalIndex: 76 },
        tags: [VerseTagKey.SoM, VerseTagKey.King, VerseTagKey.Judge, VerseTagKey.Himself],
    },
    'Matt:8:26': {
        reference: { book: BibleBookKey.Matt, chapter: 8, verses: '26', numericReference: 40008026, chronologicalIndex: 78 },
        parallelGroup: 8,
        tags: [VerseTagKey.Authority, VerseTagKey.Power, VerseTagKey.Faith, VerseTagKey.Unique],
    },
    'Mark:4:39-41': {
        reference: { book: BibleBookKey.Mark, chapter: 4, verses: '39-41', numericReference: 41004039, chronologicalIndex: 78 },
        parallelGroup: 8,
        tags: [VerseTagKey.Authority, VerseTagKey.Power, VerseTagKey.Faith, VerseTagKey.Unique],
    },
    'Luke:8:24-25': {
        reference: { book: BibleBookKey.Luke, chapter: 8, verses: '24-25', numericReference: 42008024, chronologicalIndex: 78 },
        parallelGroup: 8,
        tags: [VerseTagKey.Authority, VerseTagKey.Power, VerseTagKey.Faith, VerseTagKey.Unique],
    },
    'Matt:8:29-32': {
        reference: { book: BibleBookKey.Matt, chapter: 8, verses: '29-32', numericReference: 40008029, chronologicalIndex: 79 },
        parallelGroup: 9,
        tags: [VerseTagKey.Son, VerseTagKey.Demons, VerseTagKey.Authority],
    },
    'Mark:5:7-13': {
        reference: { book: BibleBookKey.Mark, chapter: 5, verses: '7-13', numericReference: 41005007, chronologicalIndex: 79 },
        parallelGroup: 9,
        tags: [VerseTagKey.Son, VerseTagKey.Demons, VerseTagKey.Honour, VerseTagKey.Authority],
    },
    'Luke:8:28-33': {
        reference: { book: BibleBookKey.Luke, chapter: 8, verses: '28-33', numericReference: 42008028, chronologicalIndex: 79 },
        parallelGroup: 9,
        tags: [VerseTagKey.Authority, VerseTagKey.Son, VerseTagKey.Demons, VerseTagKey.Honour],
    },
    'Matt:9:20-22': {
        reference: { book: BibleBookKey.Matt, chapter: 9, verses: '20-22', numericReference: 40009020, chronologicalIndex: 82 },
        parallelGroup: 10,
        tags: [VerseTagKey.Clean, VerseTagKey.Faith],
    },
    'Mark:5:25, 27-29': {
        reference: { book: BibleBookKey.Mark, chapter: 5, verses: '25, 27-29', numericReference: 41005025, chronologicalIndex: 82 },
        parallelGroup: 10,
        tags: [VerseTagKey.Clean, VerseTagKey.Faith],
    },
    'Luke:8:43-44': {
        reference: { book: BibleBookKey.Luke, chapter: 8, verses: '43-44', numericReference: 42008043, chronologicalIndex: 82 },
        parallelGroup: 10,
        tags: [VerseTagKey.Clean, VerseTagKey.Faith],
    },
    'Luke:8:54-55': {
        reference: { book: BibleBookKey.Luke, chapter: 8, verses: '54-55', numericReference: 42008054, chronologicalIndex: 84 },
        tags: [VerseTagKey.Authority],
    },
    'Matt:9:28': {
        reference: { book: BibleBookKey.Matt, chapter: 9, verses: '28', numericReference: 40009028, chronologicalIndex: 85 },
        tags: [VerseTagKey.Authority, VerseTagKey.Faith, VerseTagKey.Lord, VerseTagKey.Himself],
    },
    'Matt:10:1': {
        reference: { book: BibleBookKey.Matt, chapter: 10, verses: '1', numericReference: 40010001, chronologicalIndex: 88 },
        tags: [VerseTagKey.Authority],
    },
    'Matt:10:22': {
        reference: { book: BibleBookKey.Matt, chapter: 10, verses: '22', numericReference: 40010022, chronologicalIndex: 88 },
        tags: [VerseTagKey.Name, VerseTagKey.Himself],
    },
    'Matt:10:33': {
        reference: { book: BibleBookKey.Matt, chapter: 10, verses: '33', numericReference: 40010033, chronologicalIndex: 88 },
        parallelGroup: 11,
        tags: [VerseTagKey.Son, VerseTagKey.Honour],
    },
    'Matt:10:39': {
        reference: { book: BibleBookKey.Matt, chapter: 10, verses: '39', numericReference: 40010039, chronologicalIndex: 88 },
        parallelGroup: 11,
        tags: [VerseTagKey.Honour, VerseTagKey.Himself],
    },
    'Matt:14:25': {
        reference: { book: BibleBookKey.Matt, chapter: 14, verses: '25', numericReference: 40014025, chronologicalIndex: 95 },
        tags: [VerseTagKey.Power, VerseTagKey.Unique, VerseTagKey.YHWH],
    },
    'Mark:6:50': {
        reference: { book: BibleBookKey.Mark, chapter: 6, verses: '50', numericReference: 41006050, chronologicalIndex: 95 },
        tags: [VerseTagKey.I_AM],
    },
    'Matt:14:32-33': {
        reference: { book: BibleBookKey.Matt, chapter: 14, verses: '32-33', numericReference: 40014032, chronologicalIndex: 96 },
        tags: [VerseTagKey.Power, VerseTagKey.Worship, VerseTagKey.Son],
    },
    'John:6:27-29, 33-35, 38': {
        reference: { book: BibleBookKey.John, chapter: 6, verses: '27-29, 33-35, 38', numericReference: 43006027, chronologicalIndex: 98 },
        tags: [VerseTagKey.Authority, VerseTagKey.Life, VerseTagKey.Heaven, VerseTagKey.SoM, VerseTagKey.Lord, VerseTagKey.Humility, VerseTagKey.Himself, VerseTagKey.Faith],
    },
    'John:6:35': {
        reference: { book: BibleBookKey.John, chapter: 6, verses: '35', numericReference: 43006035, chronologicalIndex: 98 },
        tags: [VerseTagKey.I_AM, VerseTagKey.Himself, VerseTagKey.Life, VerseTagKey.Faith],
    },
    'John:6:40': {
        reference: { book: BibleBookKey.John, chapter: 6, verses: '40', numericReference: 43006040, chronologicalIndex: 98 },
        tags: [VerseTagKey.Authority, VerseTagKey.Heaven, VerseTagKey.Life, VerseTagKey.Saviour, VerseTagKey.Son, VerseTagKey.Himself, VerseTagKey.Faith],
    },
    'John:6:45-46': {
        reference: { book: BibleBookKey.John, chapter: 6, verses: '45-46', numericReference: 43006045, chronologicalIndex: 98 },
        tags: [VerseTagKey.God, VerseTagKey.Son, VerseTagKey.Omniscient, VerseTagKey.Heaven, VerseTagKey.Himself],
    },
    'John:6:47-51': {
        reference: { book: BibleBookKey.John, chapter: 6, verses: '47-51', numericReference: 43006047, chronologicalIndex: 98 },
        tags: [VerseTagKey.Heaven, VerseTagKey.Life, VerseTagKey.Himself, VerseTagKey.I_AM, VerseTagKey.Faith],
    },
    'John:6:60-62': {
        reference: { book: BibleBookKey.John, chapter: 6, verses: '60-62', numericReference: 43006060, chronologicalIndex: 98 },
        tags: [VerseTagKey.Humility, VerseTagKey.SoM, VerseTagKey.Eternal, VerseTagKey.Heaven, VerseTagKey.Himself],
    },
    'John:6:64': {
        reference: { book: BibleBookKey.John, chapter: 6, verses: '64', numericReference: 43006064, chronologicalIndex: 98 },
        tags: [VerseTagKey.Omniscient],
    },
    'Matt:15:22': {
        reference: { book: BibleBookKey.Matt, chapter: 15, verses: '22', numericReference: 40015022, chronologicalIndex: 101 },
        tags: [VerseTagKey.Lord, VerseTagKey.Christ],
    },
    'Mark:7:34': {
        reference: { book: BibleBookKey.Mark, chapter: 7, verses: '34', numericReference: 41007034, chronologicalIndex: 102 },
        tags: [VerseTagKey.Authority],
    },
    'Matt:16:16-17': {
        reference: { book: BibleBookKey.Matt, chapter: 16, verses: '16-17', numericReference: 40016016, chronologicalIndex: 108 },
        tags: [VerseTagKey.Son, VerseTagKey.Himself, VerseTagKey.Christ, VerseTagKey.Faith],
    },
    'Matt:16:25': {
        reference: { book: BibleBookKey.Matt, chapter: 16, verses: '25', numericReference: 40016025, chronologicalIndex: 109 },
        tags: [VerseTagKey.Honour, VerseTagKey.Himself],
    },
    'Matt:16:27': {
        reference: { book: BibleBookKey.Matt, chapter: 16, verses: '27', numericReference: 40016027, chronologicalIndex: 109 },
        tags: [VerseTagKey.SoM, VerseTagKey.Judge, VerseTagKey.Glory, VerseTagKey.Son, VerseTagKey.Himself],
    },
    'Mark:8:35, 38': {
        reference: { book: BibleBookKey.Mark, chapter: 8, verses: '35, 38', numericReference: 41008035, chronologicalIndex: 109 },
        parallelGroup: 11,
        tags: [VerseTagKey.Honour, VerseTagKey.Glory, VerseTagKey.Son, VerseTagKey.SoM, VerseTagKey.Himself],
    },
    'Luke:9:24-26': {
        reference: { book: BibleBookKey.Luke, chapter: 9, verses: '24-26', numericReference: 42009024, chronologicalIndex: 109 },
        parallelGroup: 11,
        tags: [VerseTagKey.Honour, VerseTagKey.Glory, VerseTagKey.Son, VerseTagKey.SoM, VerseTagKey.Himself],
    },
    'Matt:17:2': {
        reference: { book: BibleBookKey.Matt, chapter: 17, verses: '2', numericReference: 40017002, chronologicalIndex: 110 },
        parallelGroup: 12,
        tags: [VerseTagKey.Glory, VerseTagKey.Humility],
    },
    'Matt:17:5': {
        reference: { book: BibleBookKey.Matt, chapter: 17, verses: '5', numericReference: 40017005, chronologicalIndex: 110 },
        parallelGroup: 12,
        tags: [VerseTagKey.Son],
    },
    'Mark:9:2-3': {
        reference: { book: BibleBookKey.Mark, chapter: 9, verses: '2-3', numericReference: 41009002, chronologicalIndex: 110 },
        parallelGroup: 12,
        tags: [VerseTagKey.Glory, VerseTagKey.Humility],
    },
    'Mark:9:7': {
        reference: { book: BibleBookKey.Mark, chapter: 9, verses: '7', numericReference: 41009007, chronologicalIndex: 110 },
        parallelGroup: 12,
        tags: [VerseTagKey.Son],
    },
    'Luke:9:29, 32, 35': {
        reference: { book: BibleBookKey.Luke, chapter: 9, verses: '29, 32, 35', numericReference: 42009029, chronologicalIndex: 110 },
        parallelGroup: 12,
        tags: [VerseTagKey.Glory, VerseTagKey.Son, VerseTagKey.Humility],
    },
    'Matt:17:18': {
        reference: { book: BibleBookKey.Matt, chapter: 17, verses: '18', numericReference: 40017018, chronologicalIndex: 112 },
        parallelGroup: 13,
        tags: [VerseTagKey.Authority],
    },
    'Mark:9:25': {
        reference: { book: BibleBookKey.Mark, chapter: 9, verses: '25', numericReference: 41009025, chronologicalIndex: 112 },
        parallelGroup: 13,
        tags: [VerseTagKey.Authority],
    },
    'Mark:9:37': {
        reference: { book: BibleBookKey.Mark, chapter: 9, verses: '37', numericReference: 41009037, chronologicalIndex: 116 },
        parallelGroup: 14,
        tags: [VerseTagKey.Name, VerseTagKey.Honour, VerseTagKey.Himself],
    },
    'Luke:9:48': {
        reference: { book: BibleBookKey.Luke, chapter: 9, verses: '48', numericReference: 42009048, chronologicalIndex: 116 },
        parallelGroup: 14,
        tags: [VerseTagKey.Honour, VerseTagKey.Name, VerseTagKey.Himself],
    },
    'Matt:18:20': {
        reference: { book: BibleBookKey.Matt, chapter: 18, verses: '20', numericReference: 40018020, chronologicalIndex: 120 },
        tags: [VerseTagKey.Omnipresent, VerseTagKey.Name, VerseTagKey.Himself],
    },
    'John:7:39': {
        reference: { book: BibleBookKey.John, chapter: 7, verses: '39', numericReference: 43007039, chronologicalIndex: 137 },
        tags: [VerseTagKey.Glory, VerseTagKey.Humility],
    },
    'John:8:12': {
        reference: { book: BibleBookKey.John, chapter: 8, verses: '12', numericReference: 43008012, chronologicalIndex: 144 },
        tags: [VerseTagKey.Life, VerseTagKey.I_AM, VerseTagKey.Himself, VerseTagKey.Light],
    },
    'John:8:19': {
        reference: { book: BibleBookKey.John, chapter: 8, verses: '19', numericReference: 43008019, chronologicalIndex: 144 },
        tags: [VerseTagKey.One, VerseTagKey.Son, VerseTagKey.Himself],
    },
    'John:8:23': {
        reference: { book: BibleBookKey.John, chapter: 8, verses: '23', numericReference: 43008023, chronologicalIndex: 145 },
        tags: [VerseTagKey.Heaven, VerseTagKey.Himself],
    },
    'John:8:50, 54': {
        reference: { book: BibleBookKey.John, chapter: 8, verses: '50, 54', numericReference: 43008050, chronologicalIndex: 146 },
        tags: [VerseTagKey.Glory, VerseTagKey.Humility, VerseTagKey.Son],
    },
    'John:8:58': {
        reference: { book: BibleBookKey.John, chapter: 8, verses: '58', numericReference: 43008058, chronologicalIndex: 146 },
        tags: [VerseTagKey.I_AM, VerseTagKey.Eternal, VerseTagKey.Himself],
    },
    'John:9:38': {
        reference: { book: BibleBookKey.John, chapter: 9, verses: '38', numericReference: 43009038, chronologicalIndex: 151 },
        tags: [VerseTagKey.Worship, VerseTagKey.Faith, VerseTagKey.Lord],
    },
    'John:10:7-9': {
        reference: { book: BibleBookKey.John, chapter: 10, verses: '7-9', numericReference: 43010007, chronologicalIndex: 153 },
        tags: [VerseTagKey.I_AM, VerseTagKey.Himself, VerseTagKey.Saviour],
    },
    'John:10:11': {
        reference: { book: BibleBookKey.John, chapter: 10, verses: '11', numericReference: 43010011, chronologicalIndex: 153 },
        tags: [VerseTagKey.I_AM, VerseTagKey.Himself, VerseTagKey.Saviour, VerseTagKey.Shepherd],
    },
    'John:10:15-16': {
        reference: { book: BibleBookKey.John, chapter: 10, verses: '15-16', numericReference: 43010015, chronologicalIndex: 153 },
        tags: [VerseTagKey.One, VerseTagKey.Shepherd, VerseTagKey.Saviour, VerseTagKey.Himself],
    },
    'John:10:17-18': {
        reference: { book: BibleBookKey.John, chapter: 10, verses: '17-18', numericReference: 43010017, chronologicalIndex: 153 },
        tags: [VerseTagKey.Son, VerseTagKey.Power, VerseTagKey.Authority, VerseTagKey.Himself],
    },
    'Luke:10:22': {
        reference: { book: BibleBookKey.Luke, chapter: 10, verses: '22', numericReference: 42010022, chronologicalIndex: 157 },
        tags: [VerseTagKey.Son, VerseTagKey.Omniscient, VerseTagKey.Himself],
    },
    'Luke:11:31-32': {
        reference: { book: BibleBookKey.Luke, chapter: 11, verses: '31-32', numericReference: 42011031, chronologicalIndex: 165 },
        tags: [VerseTagKey.Greater, VerseTagKey.Himself],
    },
    'Luke:12:5, 37, 40, 45-46': {
        reference: { book: BibleBookKey.Luke, chapter: 12, verses: '5, 37, 40, 45-46', numericReference: 42012005, chronologicalIndex: 172 },
        tags: [VerseTagKey.SoM, VerseTagKey.Authority, VerseTagKey.Judge, VerseTagKey.Himself],
    },
    'Luke:12:8-9': {
        reference: { book: BibleBookKey.Luke, chapter: 12, verses: '8-9', numericReference: 42012008, chronologicalIndex: 172 },
        tags: [VerseTagKey.Honour, VerseTagKey.Himself],
    },
    'John:10:27-30': {
        reference: { book: BibleBookKey.John, chapter: 10, verses: '27-30', numericReference: 43010027, chronologicalIndex: 183 },
        tags: [VerseTagKey.One, VerseTagKey.Life, VerseTagKey.YHWH, VerseTagKey.Shepherd, VerseTagKey.Lowly, VerseTagKey.Himself],
    },
    'John:10:33': {
        reference: { book: BibleBookKey.John, chapter: 10, verses: '33', numericReference: 43010033, chronologicalIndex: 183 },
        tags: [VerseTagKey.God, VerseTagKey.Blasphemy],
    },
    'John:10:37-38': {
        reference: { book: BibleBookKey.John, chapter: 10, verses: '37-38', numericReference: 43010037, chronologicalIndex: 183 },
        tags: [VerseTagKey.One, VerseTagKey.Himself, VerseTagKey.Faith, VerseTagKey.Son],
    },
    'Luke:13:34': {
        reference: { book: BibleBookKey.Luke, chapter: 13, verses: '34', numericReference: 42013034, chronologicalIndex: 187 },
        tags: [VerseTagKey.His],
    },
    'John:11:4': {
        reference: { book: BibleBookKey.John, chapter: 11, verses: '4', numericReference: 43011004, chronologicalIndex: 201 },
        tags: [VerseTagKey.Glory, VerseTagKey.Son, VerseTagKey.Omniscient, VerseTagKey.Himself],
    },
    'John:11:25-27': {
        reference: { book: BibleBookKey.John, chapter: 11, verses: '25-27', numericReference: 43011025, chronologicalIndex: 205 },
        tags: [VerseTagKey.I_AM, VerseTagKey.Himself, VerseTagKey.Life, VerseTagKey.Faith, VerseTagKey.Christ, VerseTagKey.Heaven],
    },
    'Luke:17:12-19': {
        reference: { book: BibleBookKey.Luke, chapter: 17, verses: '12-19', numericReference: 42017012, chronologicalIndex: 212 },
        tags: [VerseTagKey.Clean, VerseTagKey.Faith, VerseTagKey.God, VerseTagKey.Honour],
    },
    'Matt:19:16-17': {
        reference: { book: BibleBookKey.Matt, chapter: 19, verses: '16-17', numericReference: 40019016, chronologicalIndex: 223 },
        parallelGroup: 15,
        tags: [VerseTagKey.Lowly],
    },
    'Mark:10:17-18': {
        reference: { book: BibleBookKey.Mark, chapter: 10, verses: '17-18', numericReference: 41010017, chronologicalIndex: 223 },
        parallelGroup: 15,
        tags: [VerseTagKey.Lowly],
    },
    'Luke:18:18-19': {
        reference: { book: BibleBookKey.Luke, chapter: 18, verses: '18-19', numericReference: 42018018, chronologicalIndex: 223 },
        parallelGroup: 15,
        tags: [VerseTagKey.Lowly],
    },
    'Luke:18:31-33': {
        reference: { book: BibleBookKey.Luke, chapter: 18, verses: '31-33', numericReference: 42018031, chronologicalIndex: 226 },
        tags: [VerseTagKey.FP, VerseTagKey.Omniscient, VerseTagKey.SoM, VerseTagKey.Himself],
    },
    'Mark:10:42-45': {
        reference: { book: BibleBookKey.Mark, chapter: 10, verses: '42-45', numericReference: 41010042, chronologicalIndex: 228 },
        tags: [VerseTagKey.Humility, VerseTagKey.SoM, VerseTagKey.Saviour, VerseTagKey.Himself],
    },
    'Mark:10:51-52': {
        reference: { book: BibleBookKey.Mark, chapter: 10, verses: '51-52', numericReference: 41010051, chronologicalIndex: 229 },
        tags: [VerseTagKey.Authority, VerseTagKey.Faith],
    },
    'Matt:26:7, 10, 11': {
        reference: { book: BibleBookKey.Matt, chapter: 26, verses: '7, 10, 11', numericReference: 40026007, chronologicalIndex: 237 },
        parallelGroup: 16,
        tags: [VerseTagKey.Honour, VerseTagKey.Himself],
    },
    'Mark:14:3-6': {
        reference: { book: BibleBookKey.Mark, chapter: 14, verses: '3-6', numericReference: 41014003, chronologicalIndex: 237 },
        parallelGroup: 16,
        tags: [VerseTagKey.Honour, VerseTagKey.Himself],
    },
    'Matt:21:3-5': {
        reference: { book: BibleBookKey.Matt, chapter: 21, verses: '3-5', numericReference: 40021003, chronologicalIndex: 241 },
        parallelGroup: 17,
        tags: [VerseTagKey.King, VerseTagKey.FP, VerseTagKey.Himself, VerseTagKey.Lord, VerseTagKey.Humility],
    },
    'Matt:21:6-9': {
        reference: { book: BibleBookKey.Matt, chapter: 21, verses: '6-9', numericReference: 40021006, chronologicalIndex: 241 },
        parallelGroup: 17,
        tags: [VerseTagKey.Honour, VerseTagKey.FP, VerseTagKey.Christ, VerseTagKey.King],
    },
    'Luke:19:31': {
        reference: { book: BibleBookKey.Luke, chapter: 19, verses: '31', numericReference: 42019031, chronologicalIndex: 241 },
        parallelGroup: 17,
        tags: [VerseTagKey.Lord, VerseTagKey.Himself],
    },
    'Luke:19:35-40': {
        reference: { book: BibleBookKey.Luke, chapter: 19, verses: '35-40', numericReference: 42019035, chronologicalIndex: 241 },
        parallelGroup: 17,
        tags: [VerseTagKey.Honour, VerseTagKey.King, VerseTagKey.Himself, VerseTagKey.FP],
    },
    'Mark:11:7-10': {
        reference: { book: BibleBookKey.Mark, chapter: 11, verses: '7-10', numericReference: 41011007, chronologicalIndex: 242 },
        parallelGroup: 17,
        tags: [VerseTagKey.Honour, VerseTagKey.FP, VerseTagKey.Christ, VerseTagKey.King],
    },
    'John:12:13-16': {
        reference: { book: BibleBookKey.John, chapter: 12, verses: '13-16', numericReference: 43012013, chronologicalIndex: 242 },
        parallelGroup: 17,
        tags: [VerseTagKey.King, VerseTagKey.Honour, VerseTagKey.Glory, VerseTagKey.FP],
    },
    'Mark:11:29-33': {
        reference: { book: BibleBookKey.Mark, chapter: 11, verses: '29-33', numericReference: 41011029, chronologicalIndex: 252 },
        tags: [VerseTagKey.Humility],
    },
    'Matt:21:37': {
        reference: { book: BibleBookKey.Matt, chapter: 21, verses: '37', numericReference: 40021037, chronologicalIndex: 254 },
        parallelGroup: 18,
        tags: [VerseTagKey.Son],
    },
    'Mark:12:6': {
        reference: { book: BibleBookKey.Mark, chapter: 12, verses: '6', numericReference: 41012006, chronologicalIndex: 254 },
        parallelGroup: 18,
        tags: [VerseTagKey.Son],
    },
    'Luke:20:13': {
        reference: { book: BibleBookKey.Luke, chapter: 20, verses: '13', numericReference: 42020013, chronologicalIndex: 254 },
        parallelGroup: 18,
        tags: [VerseTagKey.Son],
    },
    'Matt:22:41-46': {
        reference: { book: BibleBookKey.Matt, chapter: 22, verses: '41-46', numericReference: 40022041, chronologicalIndex: 259 },
        parallelGroup: 19,
        tags: [VerseTagKey.Lord, VerseTagKey.Right_Hand, VerseTagKey.Christ, VerseTagKey.Himself],
    },
    'Mark:12:36-37': {
        reference: { book: BibleBookKey.Mark, chapter: 12, verses: '36-37', numericReference: 41012036, chronologicalIndex: 259 },
        parallelGroup: 19,
        tags: [VerseTagKey.Lord, VerseTagKey.Right_Hand, VerseTagKey.Christ, VerseTagKey.Himself],
    },
    'Luke:20:42-44': {
        reference: { book: BibleBookKey.Luke, chapter: 20, verses: '42-44', numericReference: 42020042, chronologicalIndex: 259 },
        parallelGroup: 19,
        tags: [VerseTagKey.Lord, VerseTagKey.Right_Hand, VerseTagKey.Christ, VerseTagKey.Himself],
    },
    'Luke:21:12, 15, 17': {
        reference: { book: BibleBookKey.Luke, chapter: 21, verses: '12, 15, 17', numericReference: 42021012, chronologicalIndex: 264 },
        tags: [VerseTagKey.Name, VerseTagKey.Omnipresent, VerseTagKey.Himself, VerseTagKey.Omniscient],
    },
    'Matt:24:27, 30-31': {
        reference: { book: BibleBookKey.Matt, chapter: 24, verses: '27, 30-31', numericReference: 40024027, chronologicalIndex: 265 },
        parallelGroup: 20,
        tags: [VerseTagKey.SoM, VerseTagKey.Judge, VerseTagKey.Glory, VerseTagKey.Clouds, VerseTagKey.His, VerseTagKey.Himself],
    },
    'Mark:13:26-27': {
        reference: { book: BibleBookKey.Mark, chapter: 13, verses: '26-27', numericReference: 41013026, chronologicalIndex: 266 },
        parallelGroup: 20,
        tags: [VerseTagKey.SoM, VerseTagKey.Clouds, VerseTagKey.Glory, VerseTagKey.Himself, VerseTagKey.His],
    },
    'Luke:21:27': {
        reference: { book: BibleBookKey.Luke, chapter: 21, verses: '27', numericReference: 42021027, chronologicalIndex: 266 },
        parallelGroup: 20,
        tags: [VerseTagKey.SoM, VerseTagKey.Clouds, VerseTagKey.Glory, VerseTagKey.Himself],
    },
    'Matt:24:35': {
        reference: { book: BibleBookKey.Matt, chapter: 24, verses: '35', numericReference: 40024035, chronologicalIndex: 268 },
        parallelGroup: 21,
        tags: [VerseTagKey.Authority, VerseTagKey.YHWH, VerseTagKey.Word, VerseTagKey.Himself],
    },
    'Matt:24:36': {
        reference: { book: BibleBookKey.Matt, chapter: 24, verses: '36', numericReference: 40024036, chronologicalIndex: 268 },
        parallelGroup: 22,
        tags: [VerseTagKey.Lowly],
    },
    'Mark:13:31': {
        reference: { book: BibleBookKey.Mark, chapter: 13, verses: '31', numericReference: 41013031, chronologicalIndex: 268 },
        parallelGroup: 21,
        tags: [VerseTagKey.Authority, VerseTagKey.YHWH, VerseTagKey.Word, VerseTagKey.Himself],
    },
    'Mark:13:32': {
        reference: { book: BibleBookKey.Mark, chapter: 13, verses: '32', numericReference: 41013032, chronologicalIndex: 268 },
        parallelGroup: 22,
        tags: [VerseTagKey.Lowly],
    },
    'Luke:21:33': {
        reference: { book: BibleBookKey.Luke, chapter: 21, verses: '33', numericReference: 42021033, chronologicalIndex: 268 },
        parallelGroup: 21,
        tags: [VerseTagKey.Authority, VerseTagKey.YHWH, VerseTagKey.Word, VerseTagKey.Himself],
    },
    'Luke:21:36': {
        reference: { book: BibleBookKey.Luke, chapter: 21, verses: '36', numericReference: 42021036, chronologicalIndex: 268 },
        tags: [VerseTagKey.Judge, VerseTagKey.SoM, VerseTagKey.Himself],
    },
    'Matt:25:31-34, 41': {
        reference: { book: BibleBookKey.Matt, chapter: 25, verses: '31-34, 41', numericReference: 40025031, chronologicalIndex: 271 },
        tags: [VerseTagKey.SoM, VerseTagKey.Glory, VerseTagKey.Judge, VerseTagKey.King, VerseTagKey.Lord, VerseTagKey.Son, VerseTagKey.Himself, VerseTagKey.Shepherd],
    },
    'John:12:32': {
        reference: { book: BibleBookKey.John, chapter: 12, verses: '32', numericReference: 43012032, chronologicalIndex: 275 },
        tags: [VerseTagKey.Honour, VerseTagKey.Himself],
    },
    'John:12:41': {
        reference: { book: BibleBookKey.John, chapter: 12, verses: '41', numericReference: 43012041, chronologicalIndex: 275 },
        tags: [VerseTagKey.God, VerseTagKey.Glory, VerseTagKey.YHWH],
    },
    'John:12:44-45': {
        reference: { book: BibleBookKey.John, chapter: 12, verses: '44-45', numericReference: 43012044, chronologicalIndex: 275 },
        tags: [VerseTagKey.One, VerseTagKey.Himself, VerseTagKey.Faith],
    },
    'John:13:3': {
        reference: { book: BibleBookKey.John, chapter: 13, verses: '3', numericReference: 43013003, chronologicalIndex: 280 },
        tags: [VerseTagKey.Authority, VerseTagKey.Son, VerseTagKey.Heaven, VerseTagKey.Omniscient],
    },
    'John:13:4b-5, 12-17': {
        reference: { book: BibleBookKey.John, chapter: 13, verses: '4b-5, 12-17', numericReference: 43013004, chronologicalIndex: 280 },
        tags: [VerseTagKey.Humility, VerseTagKey.Lord, VerseTagKey.Himself],
    },
    'John:13:31-32': {
        reference: { book: BibleBookKey.John, chapter: 13, verses: '31-32', numericReference: 43013031, chronologicalIndex: 284 },
        tags: [VerseTagKey.Glory, VerseTagKey.One, VerseTagKey.SoM, VerseTagKey.Himself],
    },
    'John:14:1': {
        reference: { book: BibleBookKey.John, chapter: 14, verses: '1', numericReference: 43014001, chronologicalIndex: 290 },
        tags: [VerseTagKey.One, VerseTagKey.Faith, VerseTagKey.Himself],
    },
    'John:14:6': {
        reference: { book: BibleBookKey.John, chapter: 14, verses: '6', numericReference: 43014006, chronologicalIndex: 291 },
        tags: [VerseTagKey.I_AM, VerseTagKey.Himself, VerseTagKey.Life],
    },
    'John:14:7-11': {
        reference: { book: BibleBookKey.John, chapter: 14, verses: '7-11', numericReference: 43014007, chronologicalIndex: 291 },
        tags: [VerseTagKey.One, VerseTagKey.Son, VerseTagKey.Lord, VerseTagKey.Himself],
    },
    'John:14:13': {
        reference: { book: BibleBookKey.John, chapter: 14, verses: '13', numericReference: 43014013, chronologicalIndex: 292 },
        tags: [VerseTagKey.Authority, VerseTagKey.Name, VerseTagKey.Son, VerseTagKey.Himself],
    },
    'John:14:15': {
        reference: { book: BibleBookKey.John, chapter: 14, verses: '15', numericReference: 43014015, chronologicalIndex: 292 },
        tags: [VerseTagKey.Honour, VerseTagKey.Himself],
    },
    'John:14:16': {
        reference: { book: BibleBookKey.John, chapter: 14, verses: '16', numericReference: 43014016, chronologicalIndex: 292 },
        tags: [VerseTagKey.Authority, VerseTagKey.Trinity, VerseTagKey.Himself],
    },
    'John:14:21': {
        reference: { book: BibleBookKey.John, chapter: 14, verses: '21', numericReference: 43014021, chronologicalIndex: 292 },
        tags: [VerseTagKey.One, VerseTagKey.Himself, VerseTagKey.Son],
    },
    'John:14:23': {
        reference: { book: BibleBookKey.John, chapter: 14, verses: '23', numericReference: 43014023, chronologicalIndex: 293 },
        tags: [VerseTagKey.One, VerseTagKey.Himself, VerseTagKey.Son],
    },
    'John:14:26': {
        reference: { book: BibleBookKey.John, chapter: 14, verses: '26', numericReference: 43014026, chronologicalIndex: 293 },
        tags: [VerseTagKey.Trinity, VerseTagKey.Son],
    },
    'John:14:27': {
        reference: { book: BibleBookKey.John, chapter: 14, verses: '27', numericReference: 43014027, chronologicalIndex: 293 },
        tags: [VerseTagKey.His, VerseTagKey.Himself],
    },
    'John:14:28': {
        reference: { book: BibleBookKey.John, chapter: 14, verses: '28', numericReference: 43014028, chronologicalIndex: 293 },
        tags: [VerseTagKey.Lowly],
    },
    'John:15:1': {
        reference: { book: BibleBookKey.John, chapter: 15, verses: '1', numericReference: 43015001, chronologicalIndex: 295 },
        tags: [VerseTagKey.I_AM, VerseTagKey.Himself, VerseTagKey.Son],
    },
    'John:15:4-7': {
        reference: { book: BibleBookKey.John, chapter: 15, verses: '4-7', numericReference: 43015004, chronologicalIndex: 295 },
        tags: [VerseTagKey.Life, VerseTagKey.I_AM, VerseTagKey.Himself],
    },
    'John:15:13': {
        reference: { book: BibleBookKey.John, chapter: 15, verses: '13', numericReference: 43015013, chronologicalIndex: 295 },
        tags: [VerseTagKey.Unique, VerseTagKey.Greater, VerseTagKey.Saviour, VerseTagKey.Himself],
    },
    'John:15:16': {
        reference: { book: BibleBookKey.John, chapter: 15, verses: '16', numericReference: 43015016, chronologicalIndex: 295 },
        tags: [VerseTagKey.Name, VerseTagKey.Authority, VerseTagKey.Son, VerseTagKey.Himself],
    },
    'John:15:23-24': {
        reference: { book: BibleBookKey.John, chapter: 15, verses: '23-24', numericReference: 43015023, chronologicalIndex: 295 },
        tags: [VerseTagKey.One, VerseTagKey.Son, VerseTagKey.Unique, VerseTagKey.Himself],
    },
    'John:15:26': {
        reference: { book: BibleBookKey.John, chapter: 15, verses: '26', numericReference: 43015026, chronologicalIndex: 295 },
        tags: [VerseTagKey.Trinity, VerseTagKey.Authority, VerseTagKey.Honour, VerseTagKey.Himself],
    },
    'John:16:13-15': {
        reference: { book: BibleBookKey.John, chapter: 16, verses: '13-15', numericReference: 43016013, chronologicalIndex: 295 },
        tags: [VerseTagKey.Trinity, VerseTagKey.Glory, VerseTagKey.His, VerseTagKey.Himself],
    },
    'John:16:24': {
        reference: { book: BibleBookKey.John, chapter: 16, verses: '24', numericReference: 43016024, chronologicalIndex: 295 },
        tags: [VerseTagKey.Name, VerseTagKey.Authority, VerseTagKey.Himself],
    },
    'John:16:30': {
        reference: { book: BibleBookKey.John, chapter: 16, verses: '30', numericReference: 43016030, chronologicalIndex: 295 },
        tags: [VerseTagKey.Omniscient, VerseTagKey.Heaven],
    },
    'John:16:33': {
        reference: { book: BibleBookKey.John, chapter: 16, verses: '33', numericReference: 43016033, chronologicalIndex: 295 },
        tags: [VerseTagKey.Authority, VerseTagKey.Himself],
    },
    'John:17:1-5': {
        reference: { book: BibleBookKey.John, chapter: 17, verses: '1-5', numericReference: 43017001, chronologicalIndex: 296 },
        tags: [VerseTagKey.One, VerseTagKey.Glory, VerseTagKey.Eternal, VerseTagKey.Heaven, VerseTagKey.Himself, VerseTagKey.Son, VerseTagKey.Lowly],
    },
    'John:17:10-11': {
        reference: { book: BibleBookKey.John, chapter: 17, verses: '10-11', numericReference: 43017010, chronologicalIndex: 296 },
        tags: [VerseTagKey.One, VerseTagKey.Glory, VerseTagKey.Name, VerseTagKey.Himself, VerseTagKey.Son],
    },
    'John:17:21-24': {
        reference: { book: BibleBookKey.John, chapter: 17, verses: '21-24', numericReference: 43017021, chronologicalIndex: 296 },
        tags: [VerseTagKey.One, VerseTagKey.Glory, VerseTagKey.Eternal, VerseTagKey.Faith, VerseTagKey.Son, VerseTagKey.Himself],
    },
    'John:18:4-6': {
        reference: { book: BibleBookKey.John, chapter: 18, verses: '4-6', numericReference: 43018004, chronologicalIndex: 301 },
        tags: [VerseTagKey.Omniscient, VerseTagKey.I_AM, VerseTagKey.Power],
    },
    'Matt:26:64-65': {
        reference: { book: BibleBookKey.Matt, chapter: 26, verses: '64-65', numericReference: 40026064, chronologicalIndex: 313 },
        parallelGroup: 23,
        tags: [VerseTagKey.SoM, VerseTagKey.Right_Hand, VerseTagKey.Clouds, VerseTagKey.Blasphemy, VerseTagKey.Himself, VerseTagKey.Power],
    },
    'Mark:14:61-64': {
        reference: { book: BibleBookKey.Mark, chapter: 14, verses: '61-64', numericReference: 41014061, chronologicalIndex: 313 },
        parallelGroup: 23,
        tags: [VerseTagKey.I_AM, VerseTagKey.SoM, VerseTagKey.Right_Hand, VerseTagKey.Clouds, VerseTagKey.Blasphemy, VerseTagKey.Christ, VerseTagKey.Himself, VerseTagKey.Power],
    },
    'Luke:22:67-70': {
        reference: { book: BibleBookKey.Luke, chapter: 22, verses: '67-70', numericReference: 42022067, chronologicalIndex: 313 },
        parallelGroup: 23,
        tags: [VerseTagKey.Right_Hand, VerseTagKey.SoM, VerseTagKey.Humility, VerseTagKey.I_AM, VerseTagKey.Son, VerseTagKey.Power, VerseTagKey.Himself],
    },
    'John:18:36': {
        reference: { book: BibleBookKey.John, chapter: 18, verses: '36', numericReference: 43018036, chronologicalIndex: 317 },
        tags: [VerseTagKey.Omniscient, VerseTagKey.King, VerseTagKey.Heaven, VerseTagKey.Himself],
    },
    'John:19:28': {
        reference: { book: BibleBookKey.John, chapter: 19, verses: '28', numericReference: 43019028, chronologicalIndex: 344 },
        tags: [VerseTagKey.Omniscient],
    },
    'Mark:15:39': {
        reference: { book: BibleBookKey.Mark, chapter: 15, verses: '39', numericReference: 41015039, chronologicalIndex: 353 },
        tags: [VerseTagKey.Son],
    },
    'John:20:17': {
        reference: { book: BibleBookKey.John, chapter: 20, verses: '17', numericReference: 43020017, chronologicalIndex: 375 },
        tags: [VerseTagKey.Lowly],
    },
    'Matt:28:9': {
        reference: { book: BibleBookKey.Matt, chapter: 28, verses: '9', numericReference: 40028009, chronologicalIndex: 376 },
        tags: [VerseTagKey.Worship],
    },
    'John:20:28-29': {
        reference: { book: BibleBookKey.John, chapter: 20, verses: '28-29', numericReference: 43020028, chronologicalIndex: 384 },
        tags: [VerseTagKey.God, VerseTagKey.Himself],
    },
    'John:21:15-17': {
        reference: { book: BibleBookKey.John, chapter: 21, verses: '15-17', numericReference: 43021015, chronologicalIndex: 386 },
        tags: [VerseTagKey.His, VerseTagKey.Lord, VerseTagKey.Shepherd, VerseTagKey.Himself],
    },
    'John:21:17-23': {
        reference: { book: BibleBookKey.John, chapter: 21, verses: '17-23', numericReference: 43021017, chronologicalIndex: 386 },
        tags: [VerseTagKey.Omniscient, VerseTagKey.Shepherd, VerseTagKey.Lord, VerseTagKey.Himself],
    },
    'Matt:28:17': {
        reference: { book: BibleBookKey.Matt, chapter: 28, verses: '17', numericReference: 40028017, chronologicalIndex: 389 },
        tags: [VerseTagKey.Worship],
    },
    'Matt:28:18-20': {
        reference: { book: BibleBookKey.Matt, chapter: 28, verses: '18-20', numericReference: 40028018, chronologicalIndex: 389 },
        tags: [VerseTagKey.Authority, VerseTagKey.Son, VerseTagKey.Trinity, VerseTagKey.Omnipresent, VerseTagKey.Himself, VerseTagKey.Name, VerseTagKey.Himself],
    },
    'Luke:24:46-47': {
        reference: { book: BibleBookKey.Luke, chapter: 24, verses: '46-47', numericReference: 42024046, chronologicalIndex: 389 },
        tags: [VerseTagKey.Name, VerseTagKey.Sin, VerseTagKey.Christ, VerseTagKey.Sin, VerseTagKey.Saviour, VerseTagKey.Himself],
    },
    'Luke:24:49': {
        reference: { book: BibleBookKey.Luke, chapter: 24, verses: '49', numericReference: 42024049, chronologicalIndex: 389 },
        tags: [VerseTagKey.Power, VerseTagKey.Son, VerseTagKey.Himself],
    },
    'Luke:24:51-52': {
        reference: { book: BibleBookKey.Luke, chapter: 24, verses: '51-52', numericReference: 42024051, chronologicalIndex: 390 },
        tags: [VerseTagKey.Worship, VerseTagKey.Heaven, VerseTagKey.Unique],
    },
    'John:20:31': {
        reference: { book: BibleBookKey.John, chapter: 20, verses: '31', numericReference: 43020031, chronologicalIndex: 391 },
        tags: [VerseTagKey.Son, VerseTagKey.Life, VerseTagKey.Name, VerseTagKey.Christ, VerseTagKey.Faith],
    },
};
