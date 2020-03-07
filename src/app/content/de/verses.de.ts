import { BibleBookKey, TaggedVerse } from '../../models/bible';
import { bibleBooks } from './bible-books.de';
import { VerseTagKey } from '../../models/tags';

// tslint:disable:max-line-length
export const verses: TaggedVerse[] = [
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 1, verses: '18', numericReference: 40001018, chronologicalIndex: 8 },
        html: 'Now the birth of Jesus Christ was like this; because when his mother, Mary, had been engaged to Joseph, before they came together, she was found pregnant by the Holy Spirit.',
        tags: [ VerseTagKey.Unique ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 1, verses: '21', numericReference: 40001021, chronologicalIndex: 8 },
        html: 'She shall bring forth a son. You shall call his name JESUS, for it is he who shall save his people from their sins."',
        tags: [ VerseTagKey.His, VerseTagKey.Sin, VerseTagKey.Saviour ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 1, verses: '23', numericReference: 40001023, chronologicalIndex: 8 },
        html: '"Behold, the virgin shall be with child, and shall bring forth a son. They shall call his name Immanuel;" which is, being interpreted, "God with us."',
        tags: [ VerseTagKey.God, VerseTagKey.Unique, VerseTagKey.Immanuel ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 2, verses: '2', numericReference: 40002002, chronologicalIndex: 13 },
        html: '"Where is he who is born King of the Jews? For we saw his star in the east, and have come to worship him."',
        tags: [ VerseTagKey.Worship, VerseTagKey.King, VerseTagKey.Unique ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 2, verses: '6', numericReference: 40002006, chronologicalIndex: 13 },
        html: 'They came into the house and saw the young child with Mary, his mother, and they fell down and worshiped him. Opening their treasures, they offered to him gifts: gold, frankincense, and myrrh.',
        tags: [ VerseTagKey.Worship ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 2, verses: '15', numericReference: 40002015, chronologicalIndex: 14 },
        html: 'He arose and took the young child and his mother by night, and departed into Egypt, and was there until the death of Herod; that it might be fulfilled which was spoken by the Lord through the prophet, saying, "Out of Egypt I called my son."',
        tags: [ VerseTagKey.FP, VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 3, verses: '11-12', numericReference: 40003011, chronologicalIndex: 18 },
        html: 'I indeed baptize you in water for repentance, but he who comes after me is mightier than I, whose shoes I am not worthy to carry. He shall baptize you in the Holy Spirit. His winnowing fork is in his hand, and he will thoroughly cleanse his threshing floor. He will gather his wheat into the barn, but the chaff he will burn up with unquenchable fire."',
        tags: [ VerseTagKey.Judge, VerseTagKey.His, VerseTagKey.Worthy, VerseTagKey.Greater, VerseTagKey.Honour ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 3, verses: '16-17', numericReference: 40003016, chronologicalIndex: 19 },
        html: 'Jesus, when he was baptized, went up directly from the water: and behold, the heavens were opened to him. He saw the Spirit of God descending as a dove, and coming on him. Behold, a voice out of the heavens said, "This is my beloved Son, in whom I am well pleased."',
        tags: [ VerseTagKey.Son, VerseTagKey.Unique ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 4, verses: '19', numericReference: 40004019, chronologicalIndex: 39 },
        html: 'He said to them, <span class="jesus-words">"Come, follow me, and I will make you fishers for men."</span>',
        tags: [ VerseTagKey.Authority ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 4, verses: '23-24', numericReference: 40004023, chronologicalIndex: 44 },
        html: 'Jesus went about in all Galilee, teaching in their synagogues, preaching the gospel of the kingdom, and healing every disease and every sickness among the people. The report about him went forth into all Syria. They brought to him all who were sick, afflicted with various diseases and torments, possessed with demons, epileptics, and paralytics; and he healed them.',
        tags: [ VerseTagKey.Power ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 7, verses: '22-23', numericReference: 40007022, chronologicalIndex: 62 },
        html: '<span class="jesus-words">Many will tell me in that day, \'Lord, Lord, didn\'t we prophesy by your name, by your name cast out demons, and by your name do many mighty works?\' Then I will tell them, \'I never knew you. Depart from me, you who work iniquity.\'</span>',
        tags: [ VerseTagKey.Lord, VerseTagKey.Name, VerseTagKey.Judge, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 7, verses: '24', numericReference: 40007024, chronologicalIndex: 62 },
        html: '<span class="jesus-words">"Everyone therefore who hears these words of mine, and does them, I will liken him to a wise man, who built his house on a rock.</span>',
        tags: [ VerseTagKey.Authority, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 8, verses: '2-3', numericReference: 40008002, chronologicalIndex: 47 },
        html: 'Behold, a leper came to him and worshiped him, saying, "Lord, if you want to, you can make me clean." Jesus stretched out his hand, and touched him, saying, <span class="jesus-words">"I want to. Be made clean."</span> Immediately his leprosy was cleansed.',
        tags: [ VerseTagKey.Authority, VerseTagKey.Clean, VerseTagKey.Unique, VerseTagKey.Faith, VerseTagKey.Clean ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 8, verses: '7-10', numericReference: 40008007, chronologicalIndex: 63 },
        html: '<sup class="verse-number">7</sup>Jesus said to him, <span class="jesus-words">“I will come and heal him.”</span> <sup class="verse-number">8</sup>The centurion answered, “Lord, I’m not worthy for you to come under my roof. Just say the word, and my servant will be healed. <sup class="verse-number">9</sup>For I am also a man under authority, having under myself soldiers. I tell this one, ‘Go,’ and he goes; and tell another, ‘Come,’ and he comes; and tell my servant, ‘Do this,’ and he does it.” <sup class="verse-number">10</sup>When Jesus heard it, he marveled and said to those who followed, <span class="jesus-words">“Most certainly I tell you, I haven’t found so great a faith, not even in Israel.</span>',
        tags: [ VerseTagKey.Lord, VerseTagKey.Worthy, VerseTagKey.Authority, VerseTagKey.Faith ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 8, verses: '26', numericReference: 40008026, chronologicalIndex: 77 },
        html: 'He said to them, <span class="jesus-words">"Why are you fearful, oh you of little faith?"</span> Then he got up, rebuked the wind and the sea, and there was a great calm.',
        tags: [ VerseTagKey.Authority, VerseTagKey.Power, VerseTagKey.Faith, VerseTagKey.Unique ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 8, verses: '29-32', numericReference: 40008029, chronologicalIndex: 78 },
        html: 'Behold, they cried out, saying, "What do we have to do with you, Jesus, Son of God? Have you come here to torment us before the time?" Now there was a herd of many pigs feeding far away from them. The demons begged him, saying, "If you cast us out, permit us to go away into the herd of pigs." He said to them, <span class="jesus-words">"Go!"</span> They came out, and went into the herd of pigs: and behold, the whole herd of pigs rushed down the cliff into the sea, and died in the water.',
        tags: [ VerseTagKey.Son, VerseTagKey.Demons, VerseTagKey.Authority ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 9, verses: '2-8', numericReference: 40009002, chronologicalIndex: 48 },
        html: 'Behold, they brought to him a man who was paralyzed, lying on a bed. Jesus, seeing their faith, said to the paralytic, <span class="jesus-words">"Son, cheer up! Your sins are forgiven you."</span> Behold, some of the scribes said to themselves, "This man blasphemes." Jesus, knowing their thoughts, said, <span class="jesus-words">"Why do you think evil in your hearts? For which is easier, to say, \'Your sins are forgiven;\' or to say, \'Get up, and walk?\' But that you may know that the Son of Man has authority on earth to forgive sins..."</span> (then he said to the paralytic), <span class="jesus-words">"Get up, and take up your mat, and go up to your house."</span> He arose and departed to his house. But when the multitudes saw it, they marveled and glorified God, who had given such authority to men.',
        tags: [ VerseTagKey.Sin, VerseTagKey.Blasphemy, VerseTagKey.Authority, VerseTagKey.SoM, VerseTagKey.Faith, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 9, verses: '13', numericReference: 40009013, chronologicalIndex: 50 },
        html: '<span class="jesus-words">But you go and learn what this means: \'I desire mercy, and not sacrifice,\' for I came not to call the righteous, but sinners to repentance."</span>',
        tags: [ VerseTagKey.YHWH ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 9, verses: '28', numericReference: 40009028, chronologicalIndex: 84 },
        html: 'When he had come into the house, the blind men came to him. Jesus said to them, <span class="jesus-words">"Do you believe that I am able to do this?"</span> They told him, "Yes, Lord."',
        tags: [ VerseTagKey.Authority, VerseTagKey.Faith, VerseTagKey.Lord, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 10, verses: '1', numericReference: 40010001, chronologicalIndex: 87 },
        html: 'He called to himself his twelve disciples, and gave them authority over unclean spirits, to cast them out, and to heal every disease and every sickness.',
        tags: [ VerseTagKey.Authority ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 10, verses: '22', numericReference: 40010022, chronologicalIndex: 87 },
        html: '<span class="jesus-words">You will be hated by all men for my name\'s sake, but he who endures to the end, the same will be saved.</span>',
        tags: [ VerseTagKey.Name, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 10, verses: '33', numericReference: 40010033, chronologicalIndex: 87 },
        html: '<span class="jesus-words">But whoever denies me before men, him will I also deny before my Father who is in heaven.</span>',
        tags: [ VerseTagKey.Son, VerseTagKey.Honour ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 10, verses: '39', numericReference: 40010039, chronologicalIndex: 87 },
        html: '<span class="jesus-words">He who finds his life will lose it; and he who loses his life for my sake will find it.</span>',
        tags: [ VerseTagKey.Honour, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 11, verses: '28-30', numericReference: 40011028, chronologicalIndex: 67 },
        html: '<span class="jesus-words">"Come to me, all you who labor and are heavily burdened, and I will give you rest. Take my yoke on you, and learn from me, for I am humble and lowly in heart; and you will find rest for your souls. For my yoke is easy, and my burden is light."</span>',
        tags: [ VerseTagKey.Saviour, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 12, verses: '6-8', numericReference: 40012006, chronologicalIndex: 54 },
        html: '<span class="jesus-words">But I tell you that one greater than the temple is here. But if you had known what this means, \'I desire mercy, and not sacrifice,\' you would not have condemned the guiltless. For the Son of Man is Lord of the Sabbath."</span>',
        tags: [ VerseTagKey.Greater, VerseTagKey.Lord, VerseTagKey.SoM, VerseTagKey.YHWH, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 12, verses: '41-42', numericReference: 40012041, chronologicalIndex: 72 },
        html: '<span class="jesus-words">The men of Nineveh will stand up in the judgment with this generation, and will condemn it, for they repented at the preaching of Jonah; and behold, someone greater than Jonah is here. The queen of the south will rise up in the judgment with this generation, and will condemn it, for she came from the ends of the earth to hear the wisdom of Solomon; and behold, someone greater than Solomon is here.</span>',
        tags: [ VerseTagKey.Greater, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 13, verses: '41-42', numericReference: 40013041, chronologicalIndex: 75 },
        html: '<span class="jesus-words">The Son of Man will send forth his angels, and they will gather out of his kingdom all things that cause stumbling, and those who do iniquity, and will cast them into the furnace of fire. There will be weeping and the gnashing of teeth.</span>',
        tags: [ VerseTagKey.SoM, VerseTagKey.King, VerseTagKey.Judge, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 14, verses: '25', numericReference: 40014025, chronologicalIndex: 94 },
        html: 'In the fourth watch of the night Jesus came to them, walking on the sea.',
        tags: [ VerseTagKey.Power, VerseTagKey.Unique, VerseTagKey.YHWH ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 14, verses: '32-33', numericReference: 40014032, chronologicalIndex: 95 },
        html: 'When they got up into the boat, the wind ceased. Those who were in the boat came and worshiped him, saying, "You are truly the Son of God!"',
        tags: [ VerseTagKey.Power, VerseTagKey.Worship, VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 15, verses: '22', numericReference: 40015022, chronologicalIndex: 100 },
        html: 'Behold, a Canaanite woman came out from those borders, and cried, saying, "Have mercy on me, Lord, you son of David. My daughter is grievously vexed with a demon."',
        tags: [ VerseTagKey.Lord, VerseTagKey.Christ ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 16, verses: '16-17', numericReference: 40016016, chronologicalIndex: 107 },
        html: 'Simon Peter answered, "You are the Christ, the Son of the living God." Jesus answered him, <span class="jesus-words">"Blessed are you, Simon Bar-jonah, for flesh and blood has not revealed this to you, but my Father who is in heaven.</span>',
        tags: [ VerseTagKey.Son, VerseTagKey.Himself, VerseTagKey.Christ, VerseTagKey.Faith ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 16, verses: '25', numericReference: 40016025, chronologicalIndex: 108 },
        html: '<span class="jesus-words">For whoever desires to save his life will lose it, and whoever will lose his life for my sake will find it.</span>',
        tags: [ VerseTagKey.Honour, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 16, verses: '27', numericReference: 40016027, chronologicalIndex: 108 },
        html: '<span class="jesus-words">For the Son of Man will come in the glory of his Father with his angels, and then will he render to every man according to his deeds.</span>',
        tags: [ VerseTagKey.SoM, VerseTagKey.Judge, VerseTagKey.Glory, VerseTagKey.Son, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 17, verses: '2', numericReference: 40017002, chronologicalIndex: 109 },
        html: 'He was transfigured before them. His face shone like the sun, and his garments became white as the light.',
        tags: [ VerseTagKey.Glory, VerseTagKey.Humility ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 17, verses: '5', numericReference: 40017005, chronologicalIndex: 109 },
        html: 'While he was still speaking, behold, a bright cloud overshadowed them. Behold, a voice out of the cloud, saying, "This is my beloved Son, in whom I am well pleased. Listen to him."',
        tags: [ VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 17, verses: '18', numericReference: 40017018, chronologicalIndex: 111 },
        html: 'Jesus rebuked him, the demon went out of him, and the boy was cured from that hour.',
        tags: [ VerseTagKey.Authority ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 18, verses: '20', numericReference: 40018020, chronologicalIndex: 119 },
        html: '<span class="jesus-words">For where two or three are gathered together in my name, there I am in the midst of them."</span>',
        tags: [ VerseTagKey.Omnipresent, VerseTagKey.Name, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 21, verses: '3-5', numericReference: 40021003, chronologicalIndex: 240 },
        html: '<span class="jesus-words"><sup class="verse-number">3</sup>If anyone says anything to you, you shall say, ‘The Lord needs them,’ and immediately he will send them.”</span> <sup class="verse-number">4</sup>All this was done that it might be fulfilled which was spoken through the prophet, saying, <sup class="verse-number">5</sup>"Tell the daughter of Zion, Behold, your King comes to you, Humble, and riding on a donkey, On a colt, the foal of a donkey."',
        tags: [ VerseTagKey.King, VerseTagKey.FP, VerseTagKey.Himself, VerseTagKey.Lord, VerseTagKey.Humility ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 21, verses: '6-9', numericReference: 40021006, chronologicalIndex: 280 },
        html: 'The disciples went, and did just as Jesus commanded them, and brought the donkey and the colt, and laid their clothes on them; and he sat on them. A very great multitude spread their clothes on the road. Others cut branches from the trees, and spread them on the road. The multitudes who went before him, and who followed, cried, "Hosanna to the son of David! Blessed is he who comes in the name of the Lord! Hosanna in the highest!"',
        tags: [ VerseTagKey.Honour, VerseTagKey.FP, VerseTagKey.Christ, VerseTagKey.King ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 21, verses: '37', numericReference: 40021037, chronologicalIndex: 253 },
        html: '<span class="jesus-words">But afterward he sent to them his son, saying, \'They will respect my son.\'</span>',
        tags: [ VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 22, verses: '41-46', numericReference: 40022041, chronologicalIndex: 258 },
        html: 'Now while the Pharisees were gathered together, Jesus asked them a question, saying, <span class="jesus-words">"What do you think of the Christ? Whose son is he?"</span> They said to him, "Of David." He said to them, <span class="jesus-words">"How then does David in the Spirit call him Lord, saying, \'The Lord said to my Lord, Sit on my right hand, Until I make your enemies a footstool for your feet?\' "If then David calls him Lord, how is he his son?"</span> No one was able to answer him a word, neither dared any man from that day forth ask him any more questions.',
        tags: [ VerseTagKey.Lord, VerseTagKey.Right_Hand, VerseTagKey.Christ, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 24, verses: '27, 30-31', numericReference: 40024027, chronologicalIndex: 280 },
        html: '<span class="jesus-words">For as the lightning comes forth from the east, and is seen even to the west, so will be the coming of the Son of Man.</span><span class="verse-break"></span><span class="jesus-words">and then the sign of the Son of Man will appear in the sky. Then all the tribes of the earth will mourn, and they will see the Son of Man coming on the clouds of the sky with power and great glory. He will send forth his angels with a great sound of a trumpet, and they will gather together his elect from the four winds, from one end of the sky to the other.</span>',
        tags: [ VerseTagKey.SoM, VerseTagKey.Judge, VerseTagKey.Glory, VerseTagKey.Clouds, VerseTagKey.His, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 24, verses: '35', numericReference: 40024035, chronologicalIndex: 267 },
        html: '<span class="jesus-words">Heaven and earth will pass away, but my words will not pass away.</span>',
        tags: [ VerseTagKey.Authority, VerseTagKey.YHWH, VerseTagKey.Word, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 25, verses: '31-34,41', numericReference: 40025031, chronologicalIndex: 270 },
        html: '<span class="jesus-words">"But when the Son of Man comes in his glory, and all the holy angels with him, then will he sit on the throne of his glory. Before him all the nations will be gathered, and he will separate them one from another, as the shepherd separates the sheep from the goats. He will set the sheep on his right hand, but the goats on the left. Then the King will tell them on his right hand, \'Come, blessed of my Father, inherit the kingdom prepared for you from the foundation of the world;</span><span class="verse-break"></span><span class="jesus-words">Then will he say also to them on the left hand, \'Depart from me, you cursed, into the eternal fire which is prepared for the devil and his angels;</span>',
        tags: [ VerseTagKey.SoM, VerseTagKey.Glory, VerseTagKey.Judge, VerseTagKey.King, VerseTagKey.Lord, VerseTagKey.Son, VerseTagKey.Himself, VerseTagKey.Shepherd ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 26, verses: '7, 10, 11', numericReference: 40026007, chronologicalIndex: 236 },
        html: 'a woman came to him having an alabaster jar of very expensive ointment, and she poured it on his head as he sat at the table.<span class="verse-break"></span>But Jesus, knowing this, said to them, <span class="jesus-words">"Why do you trouble the woman? For she has done a good work for me. For you always have the poor with you; but you don\'t always have me.</span>',
        tags: [ VerseTagKey.Honour, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 26, verses: '64, 65', numericReference: 40026064, chronologicalIndex: 280 },
        html: 'Jesus said to him, <span class="jesus-words">"You have said it. Nevertheless, I tell you, henceforth you will see the Son of Man sitting at the right hand of Power, and coming on the clouds of the sky."</span> Then the high priest tore his clothing, saying, "He has spoken blasphemy! Why do we need any more witnesses? Behold, now you have heard his blasphemy.',
        tags: [ VerseTagKey.SoM, VerseTagKey.Right_Hand, VerseTagKey.Clouds, VerseTagKey.Blasphemy, VerseTagKey.Himself, VerseTagKey.Power ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 28, verses: '9', numericReference: 40028009, chronologicalIndex: 280 },
        html: 'As they went to tell his disciples, behold, Jesus met them, saying, <span class="jesus-words">"Rejoice!"</span> They came and took hold of his feet, and worshiped him.',
        tags: [ VerseTagKey.Worship ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 28, verses: '17', numericReference: 40028017, chronologicalIndex: 280 },
        html: 'When they saw him, they bowed down to him, but some doubted.',
        tags: [ VerseTagKey.Worship ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 28, verses: '18-20', numericReference: 40028018, chronologicalIndex: 280 },
        html: 'Jesus came to them and spoke to them, saying, <span class="jesus-words">"All authority has been given to me in heaven and on earth. Go, and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things which I commanded you. Behold, I am with you always, even to the end of the age."</span> Amen.',
        tags: [ VerseTagKey.Authority, VerseTagKey.Son, VerseTagKey.Trinity, VerseTagKey.Omnipresent, VerseTagKey.Himself, VerseTagKey.Name, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 1, verses: '1-3', numericReference: 41001001, chronologicalIndex: 18 },
        html: 'The beginning of the gospel of Jesus Christ, the Son of God. As it is written in the prophets, "Behold, I send my messenger before your face, Who will prepare your way before you. The voice of one crying in the wilderness, \'Make ready the way of the Lord! Make his paths straight!\'"',
        tags: [ VerseTagKey.YHWH, VerseTagKey.FP, VerseTagKey.Son, VerseTagKey.Christ ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 1, verses: '7-8', numericReference: 41001007, chronologicalIndex: 18 },
        html: 'He preached, saying, "After me comes he who is mightier than I, the thong of whose sandals I am not worthy to stoop down and loosen. I baptized you in water, but he will baptize you in the Holy Spirit."',
        tags: [ VerseTagKey.Worthy, VerseTagKey.Honour, VerseTagKey.Greater ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 1, verses: '11', numericReference: 41001011, chronologicalIndex: 19 },
        html: 'A voice came out of the sky, "You are my beloved Son, in whom I am well pleased."',
        tags: [ VerseTagKey.Son, VerseTagKey.Unique ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 1, verses: '23-26', numericReference: 41001023, chronologicalIndex: 40 },
        html: 'Immediately there was in their synagogue a man with an unclean spirit, and he cried out, saying, "Ha! What do we have to do with you, Jesus, you Nazarene? Have you come to destroy us? I know you who you are: the Holy One of God." Jesus rebuked him, saying, <span class="jesus-words">"Be quiet, and come out of him!"</span> The unclean spirit, convulsing him and crying with a loud voice, came out of him.',
        tags: [ VerseTagKey.Holy, VerseTagKey.Demons, VerseTagKey.Authority ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 1, verses: '40-42', numericReference: 41001040, chronologicalIndex: 47 },
        html: 'There came to him a leper, begging him, kneeling down to him, and saying to him, "If you want to, you can make me clean." Being moved with compassion, he stretched forth his hand, and touched him, and said to him, <span class="jesus-words">"I want to. Be made clean."</span> When he had said this, immediately the leprosy departed from him, and he was made clean.',
        tags: [ VerseTagKey.Authority, VerseTagKey.Clean, VerseTagKey.Unique, VerseTagKey.Faith, VerseTagKey.Clean ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 2, verses: '5-12', numericReference: 41002005, chronologicalIndex: 48 },
        html: '<sup class="verse-number">5</sup>Jesus, seeing their faith, said to the paralytic, <span class="jesus-words">“Son, your sins are forgiven you.”</span> <sup class="verse-number">6</sup>But there were some of the scribes sitting there and reasoning in their hearts, <sup class="verse-number">7</sup>“Why does this man speak blasphemies like that? Who can forgive sins but God alone?” <sup class="verse-number">8</sup>Immediately Jesus, perceiving in his spirit that they so reasoned within themselves, said to them, <span class="jesus-words">“Why do you reason these things in your hearts? <sup class="verse-number">9</sup>Which is easier, to tell the paralytic, ‘Your sins are forgiven;’ or to say, ‘Arise, and take up your bed, and walk?’ <sup class="verse-number">10</sup>But that you may know that the Son of Man has authority on earth to forgive sins”</span> — he said to the paralytic — <span class="jesus-words"><sup class="verse-number">11</sup>“I tell you, arise, take up your mat, and go to your house.”</span> <sup class="verse-number">12</sup>He arose, and immediately took up the mat and went out in front of them all, so that they were all amazed and glorified God, saying, “We never saw anything like this!”',
        tags: [ VerseTagKey.Sin, VerseTagKey.Blasphemy, VerseTagKey.Authority, VerseTagKey.SoM, VerseTagKey.Faith, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 2, verses: '28', numericReference: 41002028, chronologicalIndex: 54 },
        html: '<span class="jesus-words">Therefore the Son of Man is lord even of the Sabbath."</span>',
        tags: [ VerseTagKey.SoM, VerseTagKey.Lord, VerseTagKey.YHWH, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 3, verses: '11', numericReference: 41003011, chronologicalIndex: 57 },
        html: 'The unclean spirits, whenever they saw him, fell down before him, and cried, "You are the Son of God!"',
        tags: [ VerseTagKey.Son, VerseTagKey.Demons ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 3, verses: '14-15', numericReference: 41003014, chronologicalIndex: 59 },
        html: 'He appointed twelve, that they might be with him, and that he might send them out to preach, and to have authority to heal sicknesses and to cast out demons:',
        tags: [ VerseTagKey.Authority ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 3, verses: '27', numericReference: 41003027, chronologicalIndex: 71 },
        html: '<span class="jesus-words">But no one can enter into the house of the strong man to plunder, unless he first binds the strong man; and then he will plunder his house.</span>',
        tags: [ VerseTagKey.Authority, VerseTagKey.Greater ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 4, verses: '39-41', numericReference: 41004039, chronologicalIndex: 77 },
        html: 'He awoke, and rebuked the wind, and said to the sea, <span class="jesus-words">"Peace! Be still!"</span> The wind ceased, and there was a great calm. He said to them, <span class="jesus-words">"Why are you so afraid? How is it that you have no faith?"</span> They were greatly afraid, and said to one another, "Who then is this, that even the wind and the sea obey him?"',
        tags: [ VerseTagKey.Authority, VerseTagKey.Power, VerseTagKey.Faith, VerseTagKey.Unique ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 5, verses: '7-13', numericReference: 41005007, chronologicalIndex: 78 },
        html: '<sup class="verse-number">7</sup>and crying out with a loud voice, he said, “What have I to do with you, Jesus, you Son of the Most High God? I adjure you by God, don’t torment me.” <sup class="verse-number">8</sup>For he said to him, <span class="jesus-words">“Come out of the man, you unclean spirit!”</span> <sup class="verse-number">9</sup>He asked him, <span class="jesus-words">“What is your name?”</span> He said to him, “My name is Legion, for we are many.” <sup class="verse-number">10</sup>He begged him much that he would not send them away out of the country. <sup class="verse-number">11</sup>Now on the mountainside there was a great herd of pigs feeding. <sup class="verse-number">12</sup>All the demons begged him, saying, “Send us into the pigs, that we may enter into them.” <sup class="verse-number">13</sup>At once Jesus gave them permission. The unclean spirits came out and entered into the pigs. The herd of about two thousand rushed down the steep bank into the sea, and they were drowned in the sea.',
        tags: [ VerseTagKey.Son, VerseTagKey.Demons, VerseTagKey.Honour, VerseTagKey.Authority ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 5, verses: '25, 27-29', numericReference: 41005025, chronologicalIndex: 81 },
        html: '<sup class="verse-number">25</sup>A certain woman, who had a discharge of blood for twelve years,<span class="verse-break"></span><sup class="verse-number">27</sup>having heard the things concerning Jesus, came up behind him in the crowd, and touched his clothes. <sup class="verse-number">28</sup>For she said, “If I just touch his clothes, I will be made well.” <sup class="verse-number">29</sup>Immediately the flow of her blood was dried up, and she felt in her body that she was healed of her affliction.',
        tags: [ VerseTagKey.Clean, VerseTagKey.Faith ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 6, verses: '50', numericReference: 41006050, chronologicalIndex: 94 },
        html: 'for they all saw him, and were troubled. But he immediately spoke with them, and said to them, <span class="jesus-words">"Cheer up! It is I! Don\'t be afraid."</span>',
        tags: [ VerseTagKey.I_AM ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 7, verses: '34', numericReference: 41007034, chronologicalIndex: 101 },
        html: 'Looking up to heaven, he sighed, and said to him, <span class="jesus-words">"Ephphatha!"</span> that is, <span class="jesus-words">"Be opened!"</span> Immediately his ears were opened, and the impediment of his tongue was loosed, and he spoke clearly.',
        tags: [ VerseTagKey.Authority ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 8, verses: '35, 38', numericReference: 41008035, chronologicalIndex: 108 },
        html: '<span class="jesus-words">For whoever wants to save his life will lose it; and whoever will lose his life for my sake and the gospel\'s will save it.</span><span class="verse-break"></span><span class="jesus-words">For whoever will be ashamed of me and of my words in this adulterous and sinful generation, the Son of Man also will be ashamed of him, when he comes in the glory of his Father with the holy angels."</span>',
        tags: [ VerseTagKey.Honour, VerseTagKey.Glory, VerseTagKey.Son, VerseTagKey.SoM, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 9, verses: '2-3', numericReference: 41009002, chronologicalIndex: 109 },
        html: 'After six days Jesus took with him Peter, James, and John, and brought them up onto a high mountain privately by themselves, and he was changed into another form in front of them. His clothing became glistening, exceedingly white, like snow, such as no launderer on earth can whiten them.',
        tags: [ VerseTagKey.Glory, VerseTagKey.Humility ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 9, verses: '7', numericReference: 41009007, chronologicalIndex: 109 },
        html: 'A cloud came, overshadowing them, and a voice came out of the cloud, "This is my beloved Son. Listen to him."',
        tags: [ VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 9, verses: '25', numericReference: 41009025, chronologicalIndex: 111 },
        html: 'When Jesus saw that a multitude came running together, he rebuked the unclean spirit, saying to him, <span class="jesus-words">"You mute and deaf spirit, I command you, come out of him, and enter no more into him!"</span> Having cried out, and convulsed greatly, it came out of him. The boy became like one dead; so much that most of them said, "He is dead." But Jesus took him by the hand, and raised him up; and he arose.',
        tags: [ VerseTagKey.Authority ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 9, verses: '37', numericReference: 41009037, chronologicalIndex: 115 },
        html: '<span class="jesus-words">"Whoever receives one such little child in my name, receives me, and whoever receives me, doesn\'t receive me, but him who sent me."</span>',
        tags: [ VerseTagKey.Name, VerseTagKey.Honour, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 10, verses: '42-45', numericReference: 41010042, chronologicalIndex: 227 },
        html: 'Jesus called them to him, and said to them, <span class="jesus-words">"You know that they who are recognized as rulers over the Gentiles lord it over them, and their great ones exercise authority over them. But it shall not be so among you, but whoever wants to become great among you, will be your servant. Whoever of you wants to become first among you, shall be servant of all. For the Son of Man also came not to be served, but to serve, and to give his life as a ransom for many."</span>',
        tags: [ VerseTagKey.Humility, VerseTagKey.SoM, VerseTagKey.Saviour, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 10, verses: '51-52', numericReference: 41010051, chronologicalIndex: 228 },
        html: 'Jesus answered him, <span class="jesus-words">"What do you want me to do for you?"</span> The blind man said to him, "Rhabboni, that I may see again." Jesus said to him, <span class="jesus-words">"Go your way. Your faith has made you well."</span> Immediately he received his sight, and followed Jesus in the way.',
        tags: [ VerseTagKey.Authority, VerseTagKey.Faith ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 11, verses: '7-10', numericReference: 41011007, chronologicalIndex: 241 },
        html: 'They brought the colt to Jesus, and threw their garments on him, and Jesus sat on him. Many spread their garments on the way, and others were cutting down branches from the trees, and spreading them on the road. Those who went in front, and those who followed, cried, "Hosanna! Blessed is he who comes in the name of the Lord! Blessed is the kingdom of our father David that is coming in the name of the Lord! Hosanna in the highest!"',
        tags: [ VerseTagKey.Honour, VerseTagKey.FP, VerseTagKey.Christ, VerseTagKey.King ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 11, verses: '29-33', numericReference: 41011029, chronologicalIndex: 251 },
        html: 'Jesus said to them, <span class="jesus-words">"I will ask you one question. Answer me, and I will tell you by what authority I do these things. The baptism of John -- was it from heaven, or from men? Answer me."</span> They reasoned with themselves, saying, "If we should say, \'From heaven;\' he will say, \'Why then did you not believe him?\' If we should say, \'From men\'"--they feared the people, for all held John to really be a prophet.  They answered Jesus, "We don\'t know." Jesus said to them, <span class="jesus-words">"Neither do I tell you by what authority I do these things."</span>',
        tags: [ VerseTagKey.Humility ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 12, verses: '6', numericReference: 41012006, chronologicalIndex: 253 },
        html: '<span class="jesus-words">Therefore he had yet one, a beloved son, he sent him last to them, saying, \'They will respect my son.\'</span>',
        tags: [ VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 12, verses: '36-37', numericReference: 41012036, chronologicalIndex: 258 },
        html: '<span class="jesus-words">For David himself said in the Holy Spirit, \'The Lord said to my Lord, Sit at my right hand, Until I make your enemies the footstool of your feet.\' Therefore David himself calls him Lord, so how can he be his son?"</span> The common people heard him gladly.',
        tags: [ VerseTagKey.Lord, VerseTagKey.Right_Hand, VerseTagKey.Christ, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 13, verses: '26-27', numericReference: 41013026, chronologicalIndex: 265 },
        html: '<span class="jesus-words">Then will they see the Son of Man coming in clouds with great power and glory. Then will he send forth his angels, and will gather together his elect from the four winds, from the ends of the earth to the ends of the sky.</span>',
        tags: [ VerseTagKey.SoM, VerseTagKey.Clouds, VerseTagKey.Glory, VerseTagKey.Himself, VerseTagKey.His ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 13, verses: '31', numericReference: 41013031, chronologicalIndex: 267 },
        html: '<span class="jesus-words">Heaven and earth will pass away, but my words will not pass away.</span>',
        tags: [ VerseTagKey.Authority, VerseTagKey.YHWH, VerseTagKey.Word, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 14, verses: '3-6', numericReference: 41014003, chronologicalIndex: 236 },
        html: 'While he was at Bethany, in the house of Simon the leper, as he sat at the table, there came a woman having an alabaster jar of ointment of pure nard -- very costly. She broke the jar, and poured it over his head. But there were some who had indignation among themselves, saying, "Why has this ointment been wasted? For this might have been sold for more than three hundred denarii, and given to the poor." They grumbled against her. But Jesus said, <span class="jesus-words">"Leave her alone. Why do you trouble her? She has done a good work for me.</span>',
        tags: [ VerseTagKey.Honour, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 14, verses: '61-64', numericReference: 41014061, chronologicalIndex: 280 },
        html: 'But he stayed quiet, and answered nothing. Again the high priest asked him, "Are you the Christ, the Son of the Blessed?" Jesus said, <span class="jesus-words">"I AM. You will see the Son of Man sitting at the right hand of Power, and coming with the clouds of the sky."</span> The high priest tore his clothes, and said, "What further need have we of witnesses? You have heard the blasphemy! What do you think?" They all condemned him to be worthy of death.',
        tags: [ VerseTagKey.I_AM, VerseTagKey.SoM, VerseTagKey.Right_Hand, VerseTagKey.Clouds, VerseTagKey.Blasphemy, VerseTagKey.Christ, VerseTagKey.Himself, VerseTagKey.Power ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 15, verses: '39', numericReference: 41015039, chronologicalIndex: 280 },
        html: 'When the centurion, who stood by opposite him, saw that he cried out like this and breathed his last, he said, "Truly this man was the Son of God!"',
        tags: [ VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 1, verses: '16-17', numericReference: 42001016, chronologicalIndex: 4 },
        html: 'He will turn many of the children of Israel to the Lord, their God. He will go before his face in the spirit and power of Elijah, \'to turn the hearts of the fathers to the children,\' and the disobedient to the wisdom of the just; to make ready a people prepared for the Lord."',
        tags: [ VerseTagKey.Lord, VerseTagKey.YHWH ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 1, verses: '32-33', numericReference: 42001032, chronologicalIndex: 5 },
        html: 'He will be great, and will be called the Son of the Most High. The Lord God will give to him the throne of his father, David, and he will reign over the house of Jacob forever. There will be no end of his kingdom."',
        tags: [ VerseTagKey.Son, VerseTagKey.King, VerseTagKey.Eternal, VerseTagKey.Christ ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 1, verses: '35', numericReference: 42001035, chronologicalIndex: 5 },
        html: 'The angel answered her, "The Holy Spirit will come on you, and the power of the Most High will overshadow you. Therefore also the holy one which is born from you will be called the Son of God.',
        tags: [ VerseTagKey.Son, VerseTagKey.Holy, VerseTagKey.Unique ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 1, verses: '43', numericReference: 42001043, chronologicalIndex: 6 },
        html: 'Why am I so favored, that the mother of my Lord should come to me?',
        tags: [ VerseTagKey.Lord ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 1, verses: '66-67, 76', numericReference: 42001066, chronologicalIndex: 7 },
        html: 'All who heard them laid them up in their heart, saying, "What then will this child be?" The hand of the Lord was with him. His father Zacharias was filled with the Holy Spirit, and prophesied, saying,<span class="verse-break"></span>And you, child, will be called a prophet of the Most High; for you will go before the face of the Lord to make ready his ways,',
        tags: [ VerseTagKey.Lord, VerseTagKey.YHWH ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 2, verses: '11, 15', numericReference: 42002011, chronologicalIndex: 10 },
        html: 'For there is born to you, this day, in the city of David, a Savior, who is Christ the Lord.<span class="verse-break"></span>It happened, when the angels went away from them into the sky, that the shepherds said one to another, "Let\'s go to Bethlehem, now, and see this thing that has happened, which the Lord has made known to us."',
        tags: [ VerseTagKey.Lord, VerseTagKey.Saviour, VerseTagKey.Christ ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 2, verses: '49', numericReference: 42002049, chronologicalIndex: 17 },
        html: 'He said to them, <span class="jesus-words">"Why were you looking for me? Didn\'t you know that I must be in my Father\'s house?"</span>',
        tags: [ VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 3, verses: '4', numericReference: 42003004, chronologicalIndex: 18 },
        html: 'As it is written in the book of the words of Isaiah the prophet, "The voice of one crying in the wilderness, \'Make ready the way of the Lord. Make his paths straight.',
        tags: [ VerseTagKey.YHWH ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 3, verses: '16-17', numericReference: 42003016, chronologicalIndex: 18 },
        html: 'John answered them all, "I indeed baptize you with water, but he comes who is mightier than I, the latchet of whose sandals I am not worthy to loosen. He will baptize you in the Holy Spirit and fire, whose fan is in his hand, and he will thoroughly cleanse his threshing floor, and will gather the wheat into his barn; but he will burn up the chaff with unquenchable fire."',
        tags: [ VerseTagKey.Worthy, VerseTagKey.Honour, VerseTagKey.Judge, VerseTagKey.His, VerseTagKey.Greater ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 3, verses: '22', numericReference: 42003022, chronologicalIndex: 19 },
        html: 'and the Holy Spirit descended in a bodily form, as a dove on him; and a voice came out of the sky, saying "You are my beloved Son. In you I am well pleased."',
        tags: [ VerseTagKey.Son, VerseTagKey.Unique ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 4, verses: '33-35', numericReference: 42004033, chronologicalIndex: 40 },
        html: 'In the synagogue there was a man who had a spirit of an unclean demon, and he cried out with a loud voice, saying, "Ah! what have we to do with you, Jesus of Nazareth? Have you come to destroy us? I know you who you are: the Holy One of God!" Jesus rebuked him, saying, <span class="jesus-words">"Be silent, and come out of him!"</span> When the demon had thrown him down in their midst, he came out of him, having done him no harm.',
        tags: [ VerseTagKey.Demons, VerseTagKey.Holy, VerseTagKey.Authority ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 4, verses: '41', numericReference: 42004041, chronologicalIndex: 42 },
        html: 'Demons also came out from many, crying out, and saying, "You are the Christ, the Son of God!" Rebuking them, he didn\'t allow them to speak, because they knew that he was the Christ.',
        tags: [ VerseTagKey.Son, VerseTagKey.Demons, VerseTagKey.Christ, VerseTagKey.Authority ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 5, verses: '8', numericReference: 42005008, chronologicalIndex: 46 },
        html: 'But Simon Peter, when he saw it, fell down at Jesus\' knees, saying, "Depart from me, for I am a sinful man, Lord."',
        tags: [ VerseTagKey.Worship, VerseTagKey.Lord, VerseTagKey.Holy ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 5, verses: '12-13', numericReference: 42005012, chronologicalIndex: 47 },
        html: 'It happened, while he was in one of the cities, behold, there was a man full of leprosy. When he saw Jesus, he fell on his face, and begged him, saying, "Lord, if you want to, you can make me clean." He stretched forth his hand, and touched him, saying, <span class="jesus-words">"I want to. Be made clean."</span> Immediately the leprosy departed from him.',
        tags: [ VerseTagKey.Authority, VerseTagKey.Clean, VerseTagKey.Unique, VerseTagKey.Faith, VerseTagKey.Clean ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 5, verses: '20-25', numericReference: 42005020, chronologicalIndex: 48 },
        html: '<sup class="verse-number">20</sup>Seeing their faith, he said to him, <span class="jesus-words">“Man, your sins are forgiven you.”</span> <sup class="verse-number">21</sup>The scribes and the Pharisees began to reason, saying, “Who is this who speaks blasphemies? Who can forgive sins, but God alone?” <sup class="verse-number">22</sup>But Jesus, perceiving their thoughts, answered them, <span class="jesus-words">“Why are you reasoning so in your hearts? <sup class="verse-number">23</sup>Which is easier to say, ‘Your sins are forgiven you,’ or to say, ‘Arise and walk?’ <sup class="verse-number">24</sup>But that you may know that the Son of Man has authority on earth to forgive sins,”</span> he said to the paralyzed man, <span class="jesus-words">“I tell you, arise, take up your cot, and go to your house.”</span> <sup class="verse-number">25</sup>Immediately he rose up before them, and took up that which he was laying on, and departed to his house, glorifying God.',
        tags: [ VerseTagKey.Sin, VerseTagKey.Blasphemy, VerseTagKey.Authority, VerseTagKey.SoM, VerseTagKey.Faith, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 5, verses: '34', numericReference: 42005034, chronologicalIndex: 50 },
        html: '<span class="jesus-words">He said to them, "Can you make the friends of the bridegroom fast, while the bridegroom is with them?</span>',
        tags: [ VerseTagKey.Bridegroom ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 6, verses: '5', numericReference: 42006005, chronologicalIndex: 54 },
        html: 'He said to them, <span class="jesus-words">"The Son of Man is lord of the Sabbath."</span>',
        tags: [ VerseTagKey.SoM, VerseTagKey.Lord, VerseTagKey.YHWH, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 6, verses: '46', numericReference: 42006046, chronologicalIndex: 62 },
        html: '<span class="jesus-words">Why do you call me, \'Lord, Lord,\' and don\'t do the things which I say?</span>',
        tags: [ VerseTagKey.Lord, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 7, verses: '6-9', numericReference: 42007006, chronologicalIndex: 63 },
        html: 'Jesus went with them. When he was now not far from the house, the centurion sent friends to him, saying to him, "Lord, don\'t trouble yourself, for I am not worthy for you to come under my roof. Therefore I didn\'t even think myself worthy to come to you; but say the word, and my servant will be healed. For I also am a man placed under authority, having under myself soldiers. I tell this one, \'Go!\' and he goes; and to another, \'Come!\' and he comes; and to my servant, \'Do this,\' and he does it." When Jesus heard these things, he marveled at him, and turned and said to the multitude who followed him, <span class="jesus-words">"I tell you, I have not found so great faith, no, not in Israel."</span>',
        tags: [ VerseTagKey.Lord, VerseTagKey.Worthy, VerseTagKey.Authority, VerseTagKey.Faith ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 7, verses: '13-14', numericReference: 42007013, chronologicalIndex: 64 },
        html: 'When the Lord saw her, he had compassion on her, and said to her, <span class="jesus-words">"Don\'t cry."</span> He came near and touched the coffin, and the bearers stood still. He said, </span>"Young man, I tell you, arise!"</span>',
        tags: [ VerseTagKey.Lord, VerseTagKey.Authority ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 7, verses: '37-50', numericReference: 42007037, chronologicalIndex: 68 },
        html: 'Behold, a woman in the city who was a sinner, when she knew that he was reclining in the Pharisee\'s house, she brought an alabaster jar of ointment. Standing behind at his feet weeping, she began to wet his feet with her tears, and she wiped them with the hair of her head, kissed his feet, and anointed them with the ointment. Now when the Pharisee who had invited him saw it, he said to himself, "This man, if he were a prophet, would have perceived who and what kind of woman this is who touches him, that she is a sinner." Jesus answered him, <span class="jesus-words">"Simon, I have something to tell you."</span> He said, "Teacher, say on." <span class="jesus-words">"A certain lender had two debtors. The one owed five hundred denarii, and the other fifty. When they couldn\'t pay, he forgave them both. Which of them therefore will love him most?"</span> Simon answered, "He, I suppose, to whom he forgave the most." He said to him, <span class="jesus-words">"You have judged correctly."</span> Turning to the woman, he said to Simon, <span class="jesus-words">"Do you see this woman? I entered into your house, and you gave me no water for my feet, but she has wet my feet with her tears, and wiped them with the hair of her head. You gave me no kiss, but she, since the time I came in, has not ceased to kiss my feet. You didn\'t anoint my head with oil, but she has anointed my feet with ointment. Therefore I tell you, her sins, which are many, are forgiven, for she loved much. But to whom little is forgiven, the same loves little."</span> He said to her, <span class="jesus-words">"Your sins are forgiven."</span> Those who sat at the table with him began to say to themselves, "Who is this who even forgives sins?" He said to the woman, <span class="jesus-words">"Your faith has saved you. Go in peace."</span>',
        tags: [ VerseTagKey.Sin, VerseTagKey.Honour, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 8, verses: '24-25', numericReference: 42008024, chronologicalIndex: 77 },
        html: 'They came to him, and awoke him, saying, "Master, master, we are dying!" He awoke, and rebuked the wind and the raging of the water, and they ceased, and it was calm. He said to them, <span class="jesus-words">"Where is your faith?"</span> Being afraid they marveled, saying one to another, "Who is this, then, that he commands even the winds and the water, and they obey him?"',
        tags: [ VerseTagKey.Authority, VerseTagKey.Power, VerseTagKey.Faith, VerseTagKey.Unique ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 8, verses: '28-33', numericReference: 42008028, chronologicalIndex: 78 },
        html: '<sup class="verse-number">28</sup>When he saw Jesus, he cried out, and fell down before him, and with a loud voice said, <span class="jesus-words">“What do I have to do with you, Jesus, you Son of the Most High God? I beg you, don’t torment me!”</span> <sup class="verse-number">29</sup>For Jesus was commanding the unclean spirit to come out of the man. For the unclean spirit had often seized the man. He was kept under guard, and bound with chains and fetters. Breaking the bonds apart, he was driven by the demon into the desert. <sup class="verse-number">30</sup>Jesus asked him, <span class="jesus-words">“What is your name?”</span> He said, “Legion,” for many demons had entered into him. <sup class="verse-number">31</sup>They begged him that he would not command them to go into the abyss. <sup class="verse-number">32</sup>Now there was there a herd of many pigs feeding on the mountain, and they begged him that he would allow them to enter into those. Then he allowed them. <sup class="verse-number">33</sup>The demons came out of the man, and entered into the pigs, and the herd rushed down the steep bank into the lake, and were drowned.',
        tags: [ VerseTagKey.Authority, VerseTagKey.Son, VerseTagKey.Demons, VerseTagKey.Honour ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 8, verses: '54-55', numericReference: 42008054, chronologicalIndex: 83 },
        html: 'But he put them all outside, and taking her by the hand, he called, saying, <span class="jesus-words">"Little girl, arise!"</span> Her spirit returned, and she rose up immediately. He commanded that something be given to her to eat.',
        tags: [ VerseTagKey.Authority ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 9, verses: '24-26', numericReference: 42009024, chronologicalIndex: 108 },
        html: '<span class="jesus-words">For whoever desires to save his life will lose it, but whoever will lose his life for my sake, the same will save it. For what does it profit a man if he gains the whole world, and loses or forfeits his own self? For whoever will be ashamed of me and of my words, of him will the Son of Man be ashamed, when he comes in the glory of himself, of the Father, and of the holy angels.</span>',
        tags: [ VerseTagKey.Honour, VerseTagKey.Glory, VerseTagKey.Son, VerseTagKey.SoM, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 9, verses: '29, 32, 35', numericReference: 42009029, chronologicalIndex: 109 },
        html: 'As he was praying, the appearance of his face was altered, and his clothing became white and dazzling.<span class="verse-break"></span>Now Peter and those who were with him were heavy with sleep, but when they were fully awake, they saw his glory, and the two men who stood with him.<span class="verse-break"></span>A voice came out of the cloud, saying, "This is my beloved Son. Listen to him!"',
        tags: [ VerseTagKey.Glory, VerseTagKey.Son, VerseTagKey.Humility ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 9, verses: '48', numericReference: 42009048, chronologicalIndex: 115 },
        html: 'and said to them, <span class="jesus-words">"Whoever receives this little child in my name receives me. Whoever receives me receives him who sent me. For whoever is least among you all, this one will be great."</span>',
        tags: [ VerseTagKey.Honour, VerseTagKey.Name, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 10, verses: '22', numericReference: 42010022, chronologicalIndex: 156 },
        html: 'Turning to the disciples, he said, <span class="jesus-words">"All things have been delivered to me from my Father. No one knows who the Son is, except the Father, and who the Father is, except the Son, and he to whoever the Son desires to reveal him."</span>',
        tags: [ VerseTagKey.Son, VerseTagKey.Omniscient, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 12, verses: '5, 37, 40, 45-46', numericReference: 42012005, chronologicalIndex: 280 },
        html: '<span class="jesus-words">But I will warn you whom you shall fear. Fear him, who after he has killed, has power to cast into Gehenna. Yes, I tell you, fear him.</span><span class="verse-break"></span><span class="jesus-words">Blessed are those servants, whom the lord will find watching when he comes. Most assuredly I tell you, that he will gird himself, and make them recline, and will come and serve them.</span><span class="verse-break"></span><span class="jesus-words">Therefore be ready also, for the Son of Man is coming in an hour that you don\'t expect him."</span><span class="verse-break"></span><span class="jesus-words">But if that servant says in his heart, \'My lord delays his coming,\' and begins to beat the menservants and the maidservants, and to eat and drink, and to be drunken, then the lord of that servant will come in a day when he isn\'t expecting him, and in an hour that he doesn\'t know, and will cut him apart, and place his portion with the unfaithful.</span>',
        tags: [ VerseTagKey.SoM, VerseTagKey.Authority, VerseTagKey.Judge, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 12, verses: '8-9', numericReference: 42012008, chronologicalIndex: 171 },
        html: '<span class="jesus-words">I tell you, everyone who confesses me before men, him will the Son of Man also confess before the angels of God; but he who denies me in the presence of men will be denied in the presence of the angels of God.</span>',
        tags: [ VerseTagKey.Honour, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 13, verses: '34', numericReference: 42013034, chronologicalIndex: 186 },
        html: '<span class="jesus-words">"Jerusalem, Jerusalem, that kills the prophets, and stones those who are sent to her! How often I wanted to gather your children together, like a hen gathers her own brood under her wings, and you refused!</span>',
        tags: [ VerseTagKey.His ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 18, verses: '31-33', numericReference: 42018031, chronologicalIndex: 225 },
        html: 'He took the twelve aside, and said to them, <span class="jesus-words">"Behold, we are going up to Jerusalem, and all the things that are written through the prophets concerning the Son of Man will be completed. For he will be delivered up to the Gentiles, will be mocked, treated shamefully, and spit on. They will scourge and kill him. On the third day, he will rise again."</span>',
        tags: [ VerseTagKey.FP, VerseTagKey.Omniscient, VerseTagKey.SoM, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 19, verses: '31', numericReference: 42019031, chronologicalIndex: 240 },
        html: '<span class="jesus-words">If anyone asks you, \'Why are you untying it?\' say to him: \'The Lord needs it.\'"</span>',
        tags: [ VerseTagKey.Lord, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 19, verses: '35-40', numericReference: 42019035, chronologicalIndex: 280 },
        html: 'They brought it to Jesus. They threw their cloaks on the colt, and set Jesus on them. As he went, they spread their cloaks in the way. As he was now getting near, at the descent of the Mount of Olives, the whole multitude of the disciples began to rejoice and praise God with a loud voice for all the mighty works which they had seen, saying, "Blessed is the King who comes in the name of the Lord! Peace in heaven, and glory in the highest!" Some of the Pharisees from the multitude said to him, "Teacher, rebuke your disciples!" He answered them, <span class="jesus-words">"I tell you that if these were silent, the stones would cry out."</span>',
        tags: [ VerseTagKey.Honour, VerseTagKey.King, VerseTagKey.Himself, VerseTagKey.FP ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 20, verses: '13', numericReference: 42020013, chronologicalIndex: 253 },
        html: '<span class="jesus-words">The lord of the vineyard said, \'What will I do? I will send my beloved son. It may be that seeing him, they will respect him.\'</span>',
        tags: [ VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 20, verses: '42-44', numericReference: 42020042, chronologicalIndex: 258 },
        html: '<span class="jesus-words">David himself says in the book of Psalms, \'The Lord said to my Lord, "Sit at my right hand, Until I make your enemies the footstool of your feet."\' "David therefore calls him Lord, so how is he his son?"</span>',
        tags: [ VerseTagKey.Lord, VerseTagKey.Right_Hand, VerseTagKey.Christ, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 21, verses: '12, 15, 17', numericReference: 42021012, chronologicalIndex: 263 },
        html: '<span class="jesus-words">But before all these things, they will lay their hands on you and will persecute you, delivering you up to synagogues and prisons, bringing you before kings and governors for my name\'s sake.</span><span class="verse-break"></span><span class="jesus-words">for I will give you a mouth and wisdom which all your adversaries will not be able to withstand or to contradict.</span><span class="verse-break"></span><span class="jesus-words">You will be hated by all men for my name\'s sake.</span>',
        tags: [ VerseTagKey.Name, VerseTagKey.Omnipresent, VerseTagKey.Himself, VerseTagKey.Omniscient ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 21, verses: '27', numericReference: 42021027, chronologicalIndex: 265 },
        html: '<span class="jesus-words">Then they will see the Son of Man coming in a cloud with power and great glory.</span>',
        tags: [ VerseTagKey.SoM, VerseTagKey.Clouds, VerseTagKey.Glory, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 21, verses: '33', numericReference: 42021033, chronologicalIndex: 267 },
        html: '<span class="jesus-words">Heaven and earth will pass away, but my words will by no means pass away.</span>',
        tags: [ VerseTagKey.Authority, VerseTagKey.YHWH, VerseTagKey.Word, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 21, verses: '36', numericReference: 42021036, chronologicalIndex: 267 },
        html: '<span class="jesus-words">Therefore be watchful all the time, asking that you may be counted worthy to escape all these things that will happen, and to stand before the Son of Man."</span>',
        tags: [ VerseTagKey.Judge, VerseTagKey.SoM, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 22, verses: '67-70', numericReference: 42022067, chronologicalIndex: 280 },
        html: '"If you are the Christ, tell us." But he said to them, <span class="jesus-words">"If I tell you, you won\'t believe, and if I ask, you will in no way answer me or let me go. From now on, the Son of Man will be seated at the right hand of the power of God."</span> They all said, "Are you then the Son of God?" He said to them, <span class="jesus-words">"You say it, because I AM."</span>',
        tags: [ VerseTagKey.Right_Hand, VerseTagKey.SoM, VerseTagKey.Humility, VerseTagKey.I_AM, VerseTagKey.Son, VerseTagKey.Power, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 24, verses: '46-47', numericReference: 42024046, chronologicalIndex: 280 },
        html: 'He said to them, <span class="jesus-words">"Thus it is written, and thus it was necessary for the Christ to suffer and to rise from the dead the third day, and that repentance and remission of sins should be preached in his name to all the nations, beginning at Jerusalem.</span>',
        tags: [ VerseTagKey.Name, VerseTagKey.Sin, VerseTagKey.Christ, VerseTagKey.Sin, VerseTagKey.Saviour, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 24, verses: '49', numericReference: 42024049, chronologicalIndex: 280 },
        html: '<span class="jesus-words">Behold, I send forth the promise of my Father on you. But wait in the city of Jerusalem until you are clothed with power from on high."</span>',
        tags: [ VerseTagKey.Power, VerseTagKey.Son, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 24, verses: '51-52', numericReference: 42024051, chronologicalIndex: 280 },
        html: 'It happened, while he blessed them, that he withdrew from them, and was carried up into heaven. They worshiped him, and returned to Jerusalem with great joy',
        tags: [ VerseTagKey.Worship, VerseTagKey.Heaven, VerseTagKey.Unique ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 1, verses: '1-2', numericReference: 43001001, chronologicalIndex: 1 },
        html: '<sup class="verse-number">1</sup>In the beginning was the Word, and the Word was with God, and the Word was God. <sup class="verse-number">2</sup>The same was in the beginning with God.',
        tags: [ VerseTagKey.God, VerseTagKey.Eternal, VerseTagKey.Word ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 1, verses: '3, 10', numericReference: 43001003, chronologicalIndex: 1 },
        html: '<sup class="verse-number">3</sup>All things were made through him. Without him was not anything made that has been made.<span class="verse-break"></span><sup class="verse-number">10</sup>He was in the world, and the world was made through him, and the world didn\'t recognize him.',
        tags: [ VerseTagKey.Creator ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 1, verses: '4', numericReference: 43001004, chronologicalIndex: 1 },
        html: '<sup class="verse-number">4</sup>In him was life, and the life was the light of men.',
        tags: [ VerseTagKey.Life ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 1, verses: '14', numericReference: 43001014, chronologicalIndex: 1 },
        html: '<sup class="verse-number">14</sup>The Word became flesh, and lived among us. We saw his glory, such glory as of the only Son of the Father, full of grace and truth.',
        tags: [ VerseTagKey.Glory, VerseTagKey.Son, VerseTagKey.SoM, VerseTagKey.Word ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 1, verses: '15, 30', numericReference: 43001015, chronologicalIndex: 280 },
        html: '<sup class="verse-number">15</sup>John testified about him. He cried out, saying, "This was he of whom I said, \'He who comes after me has surpassed me, for he was before me.\'"<span class="verse-break"></span><sup class="verse-number">30</sup>This is he of whom I said, \'After me comes a man who is preferred before me, for he was before me.\'',
        tags: [ VerseTagKey.Eternal, VerseTagKey.Greater ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 1, verses: '18', numericReference: 43001018, chronologicalIndex: 1 },
        html: '<sup class="verse-number">18</sup>No one has seen God at any time. The one and only Son, who is in the bosom of the Father, he has declared him.',
        tags: [ VerseTagKey.Son, VerseTagKey.Unique ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 1, verses: '23', numericReference: 43001023, chronologicalIndex: 21 },
        html: '<sup class="verse-number">23</sup>He said, "I am the voice of one crying in the wilderness, \'Make straight the way of the Lord,\' as Isaiah the prophet said."',
        tags: [ VerseTagKey.YHWH ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 1, verses: '26-27', numericReference: 43001026, chronologicalIndex: 21 },
        html: '<sup class="verse-number">26</sup>John answered them, "I baptize in water, but among you stands one whom you don\'t know, <sup class="verse-number">27</sup>he who comes after me, whose sandal strap I\'m not worthy to untie."',
        tags: [ VerseTagKey.Worthy, VerseTagKey.Honour ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 1, verses: '29', numericReference: 43001029, chronologicalIndex: 22 },
        html: '<sup class="verse-number">29</sup>On the next day, he saw Jesus coming to him, and said, "Behold, the Lamb of God, who takes away the sin of the world!',
        tags: [ VerseTagKey.Sin, VerseTagKey.Sacrifice ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 1, verses: '34', numericReference: 43001034, chronologicalIndex: 22 },
        html: '<sup class="verse-number">34</sup>I have seen, and have testified that this is the Son of God."',
        tags: [ VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 1, verses: '47-49', numericReference: 43001047, chronologicalIndex: 23 },
        html: '<sup class="verse-number">47</sup>Jesus saw Nathanael coming to him, and said about him, <span class="jesus-words">"Behold, an Israelite indeed, in whom is no deceit!"</span> <sup class="verse-number">48</sup>Nathanael said to him, "How do you know me?" Jesus answered him, <span class="jesus-words">"Before Philip called you, when you were under the fig tree, I saw you."</span> <sup class="verse-number">49</sup>Nathanael answered him, "Rabbi, you are the Son of God! You are King of Israel!"',
        tags: [ VerseTagKey.Son, VerseTagKey.King, VerseTagKey.Omniscient, VerseTagKey.Faith ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 2, verses: '11', numericReference: 43002011, chronologicalIndex: 24 },
        html: '<sup class="verse-number">11</sup>This beginning of his signs Jesus did in Cana of Galilee, and revealed his glory; and his disciples believed in him.',
        tags: [ VerseTagKey.Glory, VerseTagKey.Faith ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 2, verses: '16', numericReference: 43002016, chronologicalIndex: 25 },
        html: '<sup class="verse-number">16</sup>To those who sold the doves, he said, <span class="jesus-words">"Take these things out of here! Don\'t make my Father\'s house a marketplace!"</span>',
        tags: [ VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 2, verses: '24-25', numericReference: 43002024, chronologicalIndex: 25 },
        html: '<sup class="verse-number">24</sup>But Jesus didn\'t trust himself to them, because he knew all people, <sup class="verse-number">25</sup>and because he didn\'t need for anyone to testify concerning man; for he himself knew what was in man.',
        tags: [ VerseTagKey.Omniscient ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 3, verses: '16-18', numericReference: 43003016, chronologicalIndex: 26 },
        html: '<span class="jesus-words"><sup class="verse-number">16</sup>For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life. <sup class="verse-number">17</sup>For God didn\'t send his Son into the world to judge the world, but that the world should be saved through him. <sup class="verse-number">18</sup>He who believes in him is not judged. He who doesn\'t believe has been judged already, because he has not believed in the name of the only born Son of God.</span>',
        tags: [ VerseTagKey.Son, VerseTagKey.Saviour, VerseTagKey.Unique, VerseTagKey.Faith ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 3, verses: '29', numericReference: 43003029, chronologicalIndex: 28 },
        html: '<sup class="verse-number">29</sup>He who has the bride is the bridegroom; but the friend of the bridegroom, who stands and hears him, rejoices greatly because of the bridegroom\'s voice. This, my joy, therefore is made full.',
        tags: [ VerseTagKey.Bridegroom ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 3, verses: '31', numericReference: 43003031, chronologicalIndex: 28 },
        html: '<sup class="verse-number">31</sup>He who comes from above is above all. He who is from the Earth belongs to the Earth, and speaks of the Earth. He who comes from heaven is above all.',
        tags: [ VerseTagKey.Heaven, VerseTagKey.Authority ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 3, verses: '35-36', numericReference: 43003035, chronologicalIndex: 28 },
        html: '<sup class="verse-number">35</sup>The Father loves the Son, and has given all things into his hand. <sup class="verse-number">36</sup>He who believes in the Son has eternal life, but he who disobeys the Son won\'t see life, but the wrath of God remains on him."',
        tags: [ VerseTagKey.Life, VerseTagKey.Son, VerseTagKey.Authority, VerseTagKey.Saviour, VerseTagKey.Faith ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 4, verses: '13-14', numericReference: 43004013, chronologicalIndex: 31 },
        html: '<sup class="verse-number">13</sup>Jesus answered her, <span class="jesus-words">"Everyone who drinks of this water will thirst again, <sup class="verse-number">14</sup>but whoever drinks of the water that I will give him will never thirst; but the water that I will give him will become in him a well of water springing up to eternal life."</span>',
        tags: [ VerseTagKey.His, VerseTagKey.Life ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 4, verses: '16-19, 39', numericReference: 43004016, chronologicalIndex: 280 },
        html: '<sup class="verse-number">16</sup>Jesus said to her, <span class="jesus-words">"Go, call your husband, and come here."</span> <sup class="verse-number">17</sup>The woman answered, "I have no husband." Jesus said to her, <span class="jesus-words">"You said well, \'I have no husband,\' <sup class="verse-number">18</sup>for you have had five husbands; and he whom you now have is not your husband. This you have said truly."</span> <sup class="verse-number">19</sup>The woman said to him, "Sir, I perceive that you are a prophet.<span class="verse-break"></span><sup class="verse-number">39</sup>From that city many of the Samaritans believed in him because of the word of the woman, who testified, \'He told me everything that I did."',
        tags: [ VerseTagKey.Omniscient, VerseTagKey.Faith ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 5, verses: '8-9', numericReference: 43005008, chronologicalIndex: 52 },
        html: '<sup class="verse-number">8</sup>Jesus said to him, <span class="jesus-words">"Arise, take up your mat, and walk."</span> <sup class="verse-number">9</sup>Immediately, the man was made well, and took up his mat and walked.',
        tags: [ VerseTagKey.Power ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 5, verses: '18', numericReference: 43005018, chronologicalIndex: 53 },
        html: '<sup class="verse-number">18</sup>For this cause therefore the Jews sought the more to kill him, because he not only broke the Sabbath, but also called God his own Father, making himself equal with God.',
        tags: [ VerseTagKey.God, VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 5, verses: '19', numericReference: 43005019, chronologicalIndex: 53 },
        html: '<sup class="verse-number">19</sup>Jesus therefore answered them, <span class="jesus-words">"Most assuredly, I tell you, the Son can do nothing of himself, but what he sees the Father doing. For whatever things he does, these the Son also does likewise.</span>',
        tags: [ VerseTagKey.Lowly, VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 5, verses: '20-21', numericReference: 43005020, chronologicalIndex: 53 },
        html: '<span class="jesus-words"><sup class="verse-number">20</sup>For the Father loves the Son, and shows him all things that he himself does. He will show him greater works than these, that you may marvel. <sup class="verse-number">21</sup>For as the Father raises the dead and gives them life, even so the Son also gives life to whom he desires.</span>',
        tags: [ VerseTagKey.Life, VerseTagKey.Omniscient, VerseTagKey.Son, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 5, verses: '22-23', numericReference: 43005022, chronologicalIndex: 53 },
        html: '<span class="jesus-words"><sup class="verse-number">22</sup>For neither does the Father judge any man, but he has given all judgment to the Son, <sup class="verse-number">23</sup>that all may honor the Son, even as they honor the Father. He who doesn\'t honor the Son doesn\'t honor the Father who sent him.</span>',
        tags: [ VerseTagKey.Judge, VerseTagKey.Honour, VerseTagKey.One, VerseTagKey.Son, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 5, verses: '30', numericReference: 43005030, chronologicalIndex: 53 },
        html: '<span class="jesus-words"><sup class="verse-number">30</sup>I can of myself do nothing. As I hear, I judge, and my judgment is righteous; because I don\'t seek my own will, but the will of my Father who sent me.</span>',
        tags: [ VerseTagKey.Lowly, VerseTagKey.Judge, VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 5, verses: '31-32', numericReference: 43005031, chronologicalIndex: 53 },
        html: '<span class="jesus-words"><sup class="verse-number">31</sup>"If I testify about myself, my witness is not valid. <sup class="verse-number">32</sup>It is another who testifies about me. I know that the testimony which he testifies about me is true.</span>',
        tags: [ VerseTagKey.Humility ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 5, verses: '39', numericReference: 43005039, chronologicalIndex: 53 },
        html: '<span class="jesus-words"><sup class="verse-number">39</sup>"You search the Scriptures, because you think that in them you have eternal life; and these are they which testify about me.</span>',
        tags: [ VerseTagKey.Honour, VerseTagKey.Himself, VerseTagKey.FP ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 6, verses: '27-29, 33-35, 38', numericReference: 43006027, chronologicalIndex: 97 },
        html: '<span class="jesus-words"><sup class="verse-number">27</sup>Don\'t work for the food which perishes, but for the food which remains to eternal life, which the Son of Man will give to you. For the Father, even God, has sealed him."</span> <sup class="verse-number">28</sup>They said therefore to him, "What must we do, that we may work the works of God?" <sup class="verse-number">29</sup>Jesus answered them, <span class="jesus-words">"This is the work of God, that you believe in him whom he has sent."</span><span class="verse-break"></span><span class="jesus-words"><sup class="verse-number">33</sup>For the bread of God is that which comes down out of heaven, and gives life to the world."</span> <sup class="verse-number">34</sup>They said therefore to him, "Lord, always give us this bread." <sup class="verse-number">35</sup>Jesus said to them. <span class="jesus-words">"I am the bread of life. He who comes to me will not be hungry, and he who believes in me will never be thirsty.</span><span class="verse-break"></span><span class="jesus-words"><sup class="verse-number">38</sup>For I have come down from heaven, not to do my own will, but the will of him who sent me.</span>',
        tags: [ VerseTagKey.Authority, VerseTagKey.Life, VerseTagKey.Heaven, VerseTagKey.SoM, VerseTagKey.Lord, VerseTagKey.Humility, VerseTagKey.Himself, VerseTagKey.Faith ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 6, verses: '35', numericReference: 43006035, chronologicalIndex: 97 },
        html: '<sup class="verse-number">35</sup>Jesus said to them. <span class="jesus-words">"I am the bread of life. He who comes to me will not be hungry, and he who believes in me will never be thirsty.</span>',
        tags: [ VerseTagKey.I_AM, VerseTagKey.Himself, VerseTagKey.Life, VerseTagKey.Faith ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 6, verses: '40', numericReference: 43006040, chronologicalIndex: 97 },
        html: '<span class="jesus-words"><sup class="verse-number">40</sup>This is the will of the one who sent me, that everyone who sees the Son, and believes in him, should have eternal life; and I will raise him up at the last day."</span>',
        tags: [ VerseTagKey.Authority, VerseTagKey.Heaven, VerseTagKey.Life, VerseTagKey.Saviour, VerseTagKey.Son, VerseTagKey.Himself, VerseTagKey.Faith ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 6, verses: '45-46', numericReference: 43006045, chronologicalIndex: 97 },
        html: '<span class="jesus-words"><sup class="verse-number">45</sup>It is written in the prophets, \'They will all be taught by God.\' Therefore everyone who hears from the Father, and has learned, comes to me. <sup class="verse-number">46</sup>Not that any man has seen the Father, except he who is from God. He has seen the Father.</span>',
        tags: [ VerseTagKey.God, VerseTagKey.Son, VerseTagKey.Omniscient, VerseTagKey.Heaven, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 6, verses: '47-51', numericReference: 43006047, chronologicalIndex: 97 },
        html: '<span class="jesus-words"><sup class="verse-number">47</sup>Most assuredly, I tell you, he who believes in me has eternal life. <sup class="verse-number">48</sup>I am the bread of life. <sup class="verse-number">49</sup>Your fathers ate the manna in the wilderness, and they died. <sup class="verse-number">50</sup>This is the bread which comes down out of heaven, that a man may eat of it, and not die. <sup class="verse-number">51</sup>I am the living bread which came down out of heaven. If anyone eats of this bread, he will live forever. Yes, the bread which I will give is my flesh, for the life of the world."</span>',
        tags: [ VerseTagKey.Heaven, VerseTagKey.Life, VerseTagKey.Himself, VerseTagKey.I_AM, VerseTagKey.Faith ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 6, verses: '60-62', numericReference: 43006060, chronologicalIndex: 97 },
        html: '<sup class="verse-number">60</sup>Therefore many of his disciples, when they heard this, said, "This is a hard saying! Who can hear it?" <sup class="verse-number">61</sup>But Jesus knowing in himself that his disciples murmured at this, said to them, <span class="jesus-words">"Does this cause you to stumble? <sup class="verse-number">62</sup>What if you would see the Son of Man ascending to where he was before?</span>',
        tags: [ VerseTagKey.Humility, VerseTagKey.SoM, VerseTagKey.Eternal, VerseTagKey.Heaven, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 6, verses: '64', numericReference: 43006064, chronologicalIndex: 97 },
        html: '<span class="jesus-words"><sup class="verse-number">64</sup>But there are some of you who don\'t believe."</span> For Jesus knew from the beginning who they were who didn\'t believe, and who it was who would betray him.',
        tags: [ VerseTagKey.Omniscient ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 7, verses: '39', numericReference: 43007039, chronologicalIndex: 136 },
        html: '<sup class="verse-number">39</sup>But he said this about the Spirit, which those believing in him were to receive. For the Holy Spirit was not yet given, because Jesus wasn\'t yet glorified.',
        tags: [ VerseTagKey.Glory, VerseTagKey.Humility ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 8, verses: '12', numericReference: 43008012, chronologicalIndex: 143 },
        html: '<sup class="verse-number">12</sup>Again, therefore, Jesus spoke to them, saying, <span class="jesus-words">"I am the light of the world. He who follows me will not walk in the darkness, but will have the light of life."</span>',
        tags: [ VerseTagKey.Life, VerseTagKey.I_AM, VerseTagKey.Himself, VerseTagKey.Light ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 8, verses: '19', numericReference: 43008019, chronologicalIndex: 143 },
        html: '<sup class="verse-number">19</sup>They said therefore to him, "Where is your Father?" Jesus answered, <span class="jesus-words">"You know neither me, nor my Father. If you knew me, you would know my Father also."</span>',
        tags: [ VerseTagKey.One, VerseTagKey.Son, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 8, verses: '23', numericReference: 43008023, chronologicalIndex: 144 },
        html: '<sup class="verse-number">23</sup>He said to them, <span class="jesus-words">"You are from beneath. I am from above. You are of this world. I am not of this world.</span>',
        tags: [ VerseTagKey.Heaven, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 8, verses: '50, 54', numericReference: 43008050, chronologicalIndex: 145 },
        html: '<span class="jesus-words"><sup class="verse-number">50</sup>But I don\'t seek my own glory. There is one who seeks and judges.</span><span class="verse-break"></span><sup class="verse-number">54</sup>Jesus answered, <span class="jesus-words">"If I glorify myself, my glory is nothing. It is my Father who glorifies me, of whom you say that he is our God.</span>',
        tags: [ VerseTagKey.Glory, VerseTagKey.Humility, VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 8, verses: '58', numericReference: 43008058, chronologicalIndex: 145 },
        html: '<sup class="verse-number">58</sup>Jesus said to them, <span class="jesus-words">"Most assuredly, I tell you, before Abraham was born, I AM."</span>',
        tags: [ VerseTagKey.I_AM, VerseTagKey.Eternal, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 9, verses: '38', numericReference: 43009038, chronologicalIndex: 150 },
        html: '<sup class="verse-number">38</sup>He said, "Lord, I believe!" and he worshiped him.',
        tags: [ VerseTagKey.Worship, VerseTagKey.Faith, VerseTagKey.Lord ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 10, verses: '7-9', numericReference: 43010007, chronologicalIndex: 152 },
        html: '<sup class="verse-number">7</sup>Jesus therefore said to them again, <span class="jesus-words">"Most assuredly, I tell you, I am the sheep\'s door. <sup class="verse-number">8</sup>All who came before me are thieves and robbers, but the sheep didn\'t listen to them. <sup class="verse-number">9</sup>I am the door. If anyone enters in by me, he will be saved, and will go in and go out, and will find pasture.</span>',
        tags: [ VerseTagKey.I_AM, VerseTagKey.Himself, VerseTagKey.Saviour ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 10, verses: '11', numericReference: 43010011, chronologicalIndex: 152 },
        html: '<span class="jesus-words"><sup class="verse-number">11</sup>I am the good shepherd. The good shepherd lays down his life for the sheep.</span>',
        tags: [ VerseTagKey.I_AM, VerseTagKey.Himself, VerseTagKey.Saviour, VerseTagKey.Shepherd ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 10, verses: '15-16', numericReference: 43010015, chronologicalIndex: 152 },
        html: '<span class="jesus-words"><sup class="verse-number">15</sup>even as the Father knows me, and I know the Father. I lay down my life for the sheep. <sup class="verse-number">16</sup>I have other sheep, which are not of this fold. I must bring them also, and they will hear my voice. They will become one flock with one shepherd.</span>',
        tags: [ VerseTagKey.One, VerseTagKey.Shepherd, VerseTagKey.Saviour, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 10, verses: '17-18', numericReference: 43010017, chronologicalIndex: 152 },
        html: '<span class="jesus-words"><sup class="verse-number">17</sup>Therefore the Father loves me, because I lay down my life, that I may take it again. <sup class="verse-number">18</sup>No one takes it away from me, but I lay it down by myself. I have power to lay it down, and I have power to take it again. I received this commandment from my Father."</span>',
        tags: [ VerseTagKey.Son, VerseTagKey.Power, VerseTagKey.Authority, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 10, verses: '27-30', numericReference: 43010027, chronologicalIndex: 182 },
        html: '<span class="jesus-words"><sup class="verse-number">27</sup>My sheep hear my voice, and I know them, and they follow me. <sup class="verse-number">28</sup>I give eternal life to them. They will never perish, and no one will snatch them out of my hand. <sup class="verse-number">29</sup>My Father, who has given them to me, is greater than all. No one is able to snatch them out of my Father\'s hand. <sup class="verse-number">30</sup>I and the Father are one."</span>',
        tags: [ VerseTagKey.One, VerseTagKey.Life, VerseTagKey.YHWH, VerseTagKey.Shepherd, VerseTagKey.Lowly, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 10, verses: '33', numericReference: 43010033, chronologicalIndex: 182 },
        html: '<sup class="verse-number">33</sup>The Jews answered him, "We don\'t stone you for a good work, but for blasphemy: because you, being a man, make yourself God."',
        tags: [ VerseTagKey.God, VerseTagKey.Blasphemy ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 10, verses: '37-38', numericReference: 43010037, chronologicalIndex: 182 },
        html: '<span class="jesus-words"><sup class="verse-number">37</sup>If I don\'t do the works of my Father, don\'t believe me. <sup class="verse-number">38</sup>But if I do them, though you don\'t believe me, believe the works; that you may know and believe that the Father is in me, and I in the Father."</span>',
        tags: [ VerseTagKey.One, VerseTagKey.Himself, VerseTagKey.Faith, VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 11, verses: '4', numericReference: 43011004, chronologicalIndex: 200 },
        html: '<sup class="verse-number">4</sup>But when Jesus heard it, he said, <span class="jesus-words">"This sickness is not to death, but for the glory of God, that God\'s Son may be glorified by it."</span>',
        tags: [ VerseTagKey.Glory, VerseTagKey.Son, VerseTagKey.Omniscient, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 11, verses: '25-27', numericReference: 43011025, chronologicalIndex: 204 },
        html: '<sup class="verse-number">25</sup>Jesus said to her, <span class="jesus-words">"I am the resurrection and the life. He who believes in me, though he die, yet will he live. <sup class="verse-number">26</sup>Whoever lives and believes in me will never die. Do you believe this?"</span> <sup class="verse-number">27</sup>She said to him, "Yes, Lord. I have come to believe that you are the Christ, God\'s Son, he who comes into the world."',
        tags: [ VerseTagKey.I_AM, VerseTagKey.Himself, VerseTagKey.Life, VerseTagKey.Faith, VerseTagKey.Christ, VerseTagKey.Heaven ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 12, verses: '13-16', numericReference: 43012013, chronologicalIndex: 241 },
        html: '<sup class="verse-number">3</sup>they took the branches of the palm trees, and went out to meet him, and cried out, "Hosanna! Blessed is he who comes in the name of the Lord, the King of Israel!" <sup class="verse-number">14</sup>Jesus, having found a young donkey, sat on it. As it is written, <sup class="verse-number">15</sup>"Don\'t be afraid, daughter of Zion. Behold, your King comes, sitting on a donkey\'s colt." <sup class="verse-number">16</sup>His disciples didn\'t understand these things at first, but when Jesus was glorified, then they remembered that these things were written about him, and that they had done these things to him.',
        tags: [ VerseTagKey.King, VerseTagKey.Honour, VerseTagKey.Glory, VerseTagKey.FP ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 12, verses: '32', numericReference: 43012032, chronologicalIndex: 274 },
        html: '<span class="jesus-words"><sup class="verse-number">32</sup>I, if I am lifted up from the earth, will draw all men to myself."</span>',
        tags: [ VerseTagKey.Honour, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 12, verses: '41', numericReference: 43012041, chronologicalIndex: 274 },
        html: '<sup class="verse-number">41</sup>Isaiah said these things when he saw his glory, and he spoke of him.',
        tags: [ VerseTagKey.Glory, VerseTagKey.YHWH ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 12, verses: '44-45', numericReference: 43012044, chronologicalIndex: 274 },
        html: '<sup class="verse-number">44</sup>Jesus cried out and said, <span class="jesus-words">"Whoever believes in me, believes not in me, but in him who sent me. <sup class="verse-number">45</sup>He who sees me sees him who sent me.</span>',
        tags: [ VerseTagKey.One, VerseTagKey.Himself, VerseTagKey.Faith ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 13, verses: '3', numericReference: 43013003, chronologicalIndex: 279 },
        html: '<sup class="verse-number">3</sup>Jesus, knowing that the Father had given all things into his hands, and that he came forth from God, and was going to God,',
        tags: [ VerseTagKey.Authority, VerseTagKey.Son, VerseTagKey.Heaven, VerseTagKey.Omniscient ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 13, verses: '4b-5, 12-17', numericReference: 43013004, chronologicalIndex: 279 },
        html: 'He took a towel, and wrapped a towel around his waist. <sup class="verse-number">5</sup>Then he poured water into the basin, and began to wash the disciples\' feet, and to wipe them with the towel that was wrapped around him.<span class="verse-break"></span><sup class="verse-number">12</sup>So when he had washed their feet, put his outer garment back on, and sat down again, he said to them, <span class="jesus-words">"Do you know what I have done to you? <sup class="verse-number">13</sup>You call me, \'Teacher\' and \'Lord.\' You say so correctly, for so I am. <sup class="verse-number">14</sup>If I then, the Lord and the Teacher, have washed your feet, you also ought to wash one another\'s feet. <sup class="verse-number">15</sup>For I have given you an example, that you also should do as I have done to you. <sup class="verse-number">16</sup>Most assuredly I tell you, a servant is not greater than his lord, neither one who is sent greater than he who sent him. <sup class="verse-number">17</sup>If you know these things, blessed are you if you do them.</span>',
        tags: [ VerseTagKey.Humility, VerseTagKey.Lord, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 13, verses: '31-32', numericReference: 43013031, chronologicalIndex: 283 },
        html: '<sup class="verse-number">31</sup>When he had gone out, Jesus said, "Now the Son of Man is glorified, and God is glorified in him. <sup class="verse-number">32</sup>If God is glorified in him, God will also glorify him in himself, and he will glorify him immediately.',
        tags: [ VerseTagKey.Glory, VerseTagKey.One, VerseTagKey.SoM, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 14, verses: '1', numericReference: 43014001, chronologicalIndex: 289 },
        html: '<span class="jesus-words"><sup class="verse-number">1</sup>"Don\'t let your heart be troubled. Believe in God. Believe also in me.</span>',
        tags: [ VerseTagKey.One, VerseTagKey.Faith, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 14, verses: '6', numericReference: 43014006, chronologicalIndex: 290 },
        html: '<sup class="verse-number">6</sup>Jesus said to him, <span class="jesus-words">"I am the way, the truth, and the life. No one comes to the Father, but by me.</span>',
        tags: [ VerseTagKey.I_AM, VerseTagKey.Himself, VerseTagKey.Life ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 14, verses: '7-11', numericReference: 43014007, chronologicalIndex: 290 },
        html: '<span class="jesus-words"><sup class="verse-number">7</sup>If you had known me, you would have known my Father also. From now on, you know him, and have seen him."</span> <sup class="verse-number">8</sup>Philip said to him, "Lord, show us the Father, and that will be enough for us." <sup class="verse-number">9</sup>Jesus said to him, <span class="jesus-words">"Have I been with you such a long time, and do you not know me, Philip? He who has seen me has seen the Father. How do you say, \'Show us the Father?\' <sup class="verse-number">10</sup>Don\'t you believe that I am in the Father, and the Father in me? The words that I tell you, I speak not from myself; but the Father living in me does his works. <sup class="verse-number">11</sup>Believe me that I am in the Father, and the Father in me; or else believe me for the very works\' sake.</span>',
        tags: [ VerseTagKey.One, VerseTagKey.Son, VerseTagKey.Lord, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 14, verses: '13', numericReference: 43014013, chronologicalIndex: 291 },
        html: '<span class="jesus-words"><sup class="verse-number">13</sup>Whatever you will ask in my name, that will I do, that the Father may be glorified in the Son. <sup class="verse-number">14</sup>If you will ask anything in my name, that will I do.</span>',
        tags: [ VerseTagKey.Authority, VerseTagKey.Name, VerseTagKey.Son, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 14, verses: '15', numericReference: 43014015, chronologicalIndex: 291 },
        html: '<span class="jesus-words"><sup class="verse-number">15</sup>If you love me, keep my commandments.</span>',
        tags: [ VerseTagKey.Honour, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 14, verses: '16', numericReference: 43014016, chronologicalIndex: 291 },
        html: '<span class="jesus-words"><sup class="verse-number">16</sup>I will pray to the Father, and he will give you another Counselor, that he may be with you forever,</span>',
        tags: [ VerseTagKey.Authority, VerseTagKey.Trinity, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 14, verses: '21', numericReference: 43014021, chronologicalIndex: 291 },
        html: '<span class="jesus-words"><sup class="verse-number">21</sup>Someone who has my commandments, and keeps them, that person is one who loves me. One who loves me will be loved by my Father, and I will love him, and will reveal myself to him."</span>',
        tags: [ VerseTagKey.One, VerseTagKey.Himself, VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 14, verses: '23', numericReference: 43014023, chronologicalIndex: 292 },
        html: '<sup class="verse-number">23</sup>Jesus answered him, <span class="jesus-words">"If a man loves me, he will keep my word. My Father will love him, and we will come to him, and make our home with him.</span>',
        tags: [ VerseTagKey.One, VerseTagKey.Himself, VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 14, verses: '26', numericReference: 43014026, chronologicalIndex: 292 },
        html: '<span class="jesus-words"><sup class="verse-number">26</sup>But the Counselor, the Holy Spirit, whom the Father will send in my name, he will teach you all things, and bring to your memory all that I said to you.</span>',
        tags: [ VerseTagKey.Trinity, VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 14, verses: '27', numericReference: 43014027, chronologicalIndex: 292 },
        html: '<span class="jesus-words"><sup class="verse-number">27</sup>Peace I leave with you. My peace I give to you; not as the world gives, give I to you. Don\'t let your heart be troubled, neither let it be fearful.</span>',
        tags: [ VerseTagKey.His, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 15, verses: '1', numericReference: 43015001, chronologicalIndex: 294 },
        html: '<span class="jesus-words"><sup class="verse-number">1</sup>"I am the true vine, and my Father is the farmer.</span>',
        tags: [ VerseTagKey.I_AM, VerseTagKey.Himself, VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 15, verses: '4-7', numericReference: 43015004, chronologicalIndex: 294 },
        html: '<span class="jesus-words"><sup class="verse-number">4</sup>Remain in me, and I in you. As the branch can\'t bear fruit by itself, unless it remains in the vine, so neither can you, unless you remain in me. <sup class="verse-number">5</sup>I am the vine. You are the branches. He who remains in me, and I in him, the same bears much fruit, for apart from me you can do nothing. <sup class="verse-number">6</sup>If a man doesn\'t remain in me, he is thrown out as a branch, and is withered; and they gather them, throw them into the fire, and they are burned. <sup class="verse-number">7</sup>If you remain in me, and my words remain in you, you will ask whatever you desire, and it will be done to you.</span>',
        tags: [ VerseTagKey.Life, VerseTagKey.I_AM, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 15, verses: '13', numericReference: 43015013, chronologicalIndex: 294 },
        html: '<span class="jesus-words"><sup class="verse-number">13</sup>Greater love has no one than this, that a man lay down his life for his friends.</span>',
        tags: [ VerseTagKey.Unique, VerseTagKey.Greater, VerseTagKey.Saviour, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 15, verses: '16', numericReference: 43015016, chronologicalIndex: 294 },
        html: '<span class="jesus-words"><sup class="verse-number">16</sup>You didn\'t choose me, but I chose you, and appointed you, that you should go and bear fruit, and that your fruit should remain; that whatever you will ask of the Father in my name, he may give it to you.</span>',
        tags: [ VerseTagKey.Name, VerseTagKey.Authority, VerseTagKey.Son, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 15, verses: '23-24', numericReference: 43015023, chronologicalIndex: 294 },
        html: '<span class="jesus-words"><sup class="verse-number">23</sup>He who hates me, hates my Father also. <sup class="verse-number">24</sup>If I hadn\'t done among them the works which no one else did, they wouldn\'t have had sin. But now have they seen and also hated both me and my Father.</span>',
        tags: [ VerseTagKey.One, VerseTagKey.Son, VerseTagKey.Unique, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 15, verses: '26', numericReference: 43015026, chronologicalIndex: 294 },
        html: '<span class="jesus-words"><sup class="verse-number">26</sup>"When the Counselor has come, whom I will send to you from the Father, the Spirit of truth, who proceeds from the Father, he will testify about me.</span>',
        tags: [ VerseTagKey.Trinity, VerseTagKey.Authority, VerseTagKey.Honour, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 16, verses: '13-15', numericReference: 43016013, chronologicalIndex: 294 },
        html: '<span class="jesus-words"><sup class="verse-number">13</sup>However when he, the Spirit of truth, has come, he will guide you into all the truth, for he will not speak from himself; but whatever things he hears, he will speak. He will declare to you the things that are to come. <sup class="verse-number">14</sup>He will glorify me, for he will take from what is mine, and will declare it to you. <sup class="verse-number">15</sup>All things whatever the Father has are mine; therefore I said that he takes of mine, and will declare it to you.</span>',
        tags: [ VerseTagKey.Trinity, VerseTagKey.Glory, VerseTagKey.His, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 16, verses: '24', numericReference: 43016024, chronologicalIndex: 294 },
        html: '<span class="jesus-words"><sup class="verse-number">24</sup>Until now, you have asked nothing in my name. Ask, and you will receive, that your joy may be made full.</span>',
        tags: [ VerseTagKey.Name, VerseTagKey.Authority, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 16, verses: '30', numericReference: 43016030, chronologicalIndex: 294 },
        html: '<sup class="verse-number">30</sup>Now we know that you know all things, and don\'t need for anyone to question you. By this we believe that you came forth from God."',
        tags: [ VerseTagKey.Omniscient, VerseTagKey.Heaven ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 16, verses: '33', numericReference: 43016033, chronologicalIndex: 294 },
        html: '<span class="jesus-words"><sup class="verse-number">33</sup>I have told you these things, that in me you may have peace. In the world you have oppression; but cheer up! I have overcome the world."</span>',
        tags: [ VerseTagKey.Authority, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 17, verses: '1-5', numericReference: 43017001, chronologicalIndex: 295 },
        html: '<sup class="verse-number">1</sup>Jesus said these things, and lifting up his eyes to heaven, he said, <span class="jesus-words">"Father, the time has come. Glorify your Son, that your Son may also glorify you; <sup class="verse-number">2</sup>even as you gave him authority over all flesh, that to all whom you have given him, he will give eternal life. <sup class="verse-number">3</sup>This is eternal life, that they should know you, the only true God, and him whom you sent, Jesus Christ. <sup class="verse-number">4</sup>I glorified you on the earth. I have accomplished the work which you have given me to do. <sup class="verse-number">5</sup>Now, Father, glorify me with your own self with the glory which I had with you before the world existed.</span>',
        tags: [ VerseTagKey.One, VerseTagKey.Glory, VerseTagKey.Eternal, VerseTagKey.Heaven, VerseTagKey.Himself, VerseTagKey.Son, VerseTagKey.Lowly ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 17, verses: '10-11', numericReference: 43017010, chronologicalIndex: 295 },
        html: '<span class="jesus-words"><sup class="verse-number">10</sup>All things that are mine are yours, and yours are mine, and I am glorified in them. <sup class="verse-number">11</sup>I am no more in the world, and these are in the world, and I am coming to you. Holy Father, keep them through your name which you have given me, that they may be one, even as we are.</span>',
        tags: [ VerseTagKey.One, VerseTagKey.Glory, VerseTagKey.Name, VerseTagKey.Himself, VerseTagKey.Son ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 17, verses: '21-24', numericReference: 43017021, chronologicalIndex: 295 },
        html: '<span class="jesus-words"><sup class="verse-number">21</sup>that they may all be one; even as you, Father, are in me, and I in you, that they also may be one in us; that the world may believe that you sent me. <sup class="verse-number">22</sup>The glory which you have given me, I have given to them; that they may be one, even as we are one; <sup class="verse-number">23</sup>I in them, and you in me, that they may be perfected into one; that the world may know that you sent me, and loved them, even as you loved me. <sup class="verse-number">24</sup>Father, I desire that they also whom you have given me be with me where I am, that they may see my glory, which you have given me, for you loved me before the foundation of the world.</span>',
        tags: [ VerseTagKey.One, VerseTagKey.Glory, VerseTagKey.Eternal, VerseTagKey.Faith, VerseTagKey.Son, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 18, verses: '4-6', numericReference: 43018004, chronologicalIndex: 300 },
        html: '<sup class="verse-number">4</sup>Jesus therefore, knowing all the things that were coming on him, went forth, and said to them, <span class="jesus-words">"Who are you looking for?"</span> <sup class="verse-number">5</sup>They answered him, "Jesus of Nazareth." Jesus said to them, <span class="jesus-words">"I AM."</span> Judas also, who betrayed him, was standing with them. <sup class="verse-number">6</sup>When therefore he said to them, "I AM," they went backward, and fell to the ground.',
        tags: [ VerseTagKey.Omniscient, VerseTagKey.I_AM, VerseTagKey.Power ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 18, verses: '36', numericReference: 43018036, chronologicalIndex: 316 },
        html: '<sup class="verse-number">36</sup>Jesus answered, <span class="jesus-words">"My kingdom is not of this world. If my kingdom were of this world, then my servants would fight, that I wouldn\'t be delivered to the Jews. But now my kingdom is not from here."</span>',
        tags: [ VerseTagKey.Omniscient, VerseTagKey.King, VerseTagKey.Heaven, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 19, verses: '28', numericReference: 43019028, chronologicalIndex: 343 },
        html: '<sup class="verse-number">28</sup>After this, Jesus, seeing that all things were now finished, that the Scripture might be fulfilled, said, <span class="jesus-words">"I am thirsty."</span>',
        tags: [ VerseTagKey.Omniscient ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 20, verses: '17', numericReference: 43020017, chronologicalIndex: 374 },
        html: '<sup class="verse-number">17</sup>Jesus said to her, <span class="jesus-words">"Don\'t touch me, for I haven\'t yet ascended to my Father; but go to my brothers, and tell them, \'I am ascending to my Father and your Father, and my God and your God.\'"</span>',
        tags: [ VerseTagKey.Lowly ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 20, verses: '28-29', numericReference: 43020028, chronologicalIndex: 383 },
        html: '<sup class="verse-number">28</sup>Thomas answered him, "My Lord and my God!" <sup class="verse-number">29</sup>Jesus said to him, <span class="jesus-words">"Because you have seen me, you have believed. Blessed are those who have not seen, and have believed."</span>',
        tags: [ VerseTagKey.God, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 20, verses: '31', numericReference: 43020031, chronologicalIndex: 390 },
        html: '<sup class="verse-number">31</sup>but these are written, that you may believe that Jesus is the Christ, the Son of God, and that believing you may have life in his name.',
        tags: [ VerseTagKey.Son, VerseTagKey.Life, VerseTagKey.Name, VerseTagKey.Christ, VerseTagKey.Faith ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 21, verses: '15-17', numericReference: 43021015, chronologicalIndex: 385 },
        html: '<sup class="verse-number">15</sup>So when they had eaten their breakfast, Jesus said to Simon Peter, <span class="jesus-words">"Simon, son of Jonah, do you love me more than these?"</span> He said to him, "Yes, Lord; you know that I have affection for you." He said to him, <span class="jesus-words">"Feed my lambs."</span> <sup class="verse-number">16</sup>He said to him again a second time, <span class="jesus-words">"Simon, son of Jonah, do you love me?"</span> He said to him, "Yes, Lord; you know that I have affection for you." He said to him, <span class="jesus-words">"Tend my sheep."</span> <sup class="verse-number">17</sup>He said to him the third time, <span class="jesus-words">"Simon, son of Jonah, do you have affection for me?"</span> Peter was grieved because he asked him the third time, "Do you have affection for me?" He said to him, "Lord, you know everything. You know that I have affection for you." Jesus said to him, <span class="jesus-words">"Feed my sheep.</span>',
        tags: [ VerseTagKey.His, VerseTagKey.Lord, VerseTagKey.Shepherd, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 21, verses: '17-23', numericReference: 43021017, chronologicalIndex: 385 },
        html: '<sup class="verse-number">17</sup>He said to him the third time, <span class="jesus-words">"Simon, son of Jonah, do you have affection for me?"</span> Peter was grieved because he asked him the third time, "Do you have affection for me?" He said to him, "Lord, you know everything. You know that I have affection for you." Jesus said to him, <span class="jesus-words">"Feed my sheep. <sup class="verse-number">18</sup>Most assuredly I tell you, when you were young, you dressed yourself, and walked where you wanted to. But when you are old, you will stretch out your hands, and another will dress you, and carry you where you don\'t want to go."</span> <sup class="verse-number">19</sup>Now he said this, signifying by what kind of death he would glorify God. When he had said this, he said to him, <span class="jesus-words">"Follow me."</span> <sup class="verse-number">20</sup>Then Peter, turning around, saw a disciple following. This was the disciple whom Jesus sincerely loved, the one who had also leaned on Jesus\' breast at the supper and asked, "Lord, who is going to betray You?" <sup class="verse-number">21</sup>Peter seeing him, said to Jesus, "Lord, and what will this man do?" <sup class="verse-number">22</sup>Jesus said to him, <span class="jesus-words">"If I desire that he stay until I come, what is that to you? You follow me."</span> <sup class="verse-number">23</sup>This saying therefore went forth among the brothers, that this disciple wouldn\'t die. Yet Jesus didn\'t say to him that he wouldn\'t die, but, "If I desire that he stay until I come, what is that to you?"',
        tags: [ VerseTagKey.Omniscient, VerseTagKey.Shepherd, VerseTagKey.Lord, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 17, verses: '12-19', numericReference: 42017012, chronologicalIndex: 280 },
        html: '<sup class="verse-number">12</sup>As he entered into a certain village, ten men who were lepers met him, who stood at a distance. <sup class="verse-number">13</sup>They lifted up their voices, saying, “Jesus, Master, have mercy on us!” <sup class="verse-number">14</sup>When he saw them, he said to them, <span class="jesus-words">“Go and show yourselves to the priests.”</span> As they went, they were cleansed. <sup class="verse-number">15</sup>One of them, when he saw that he was healed, turned back, glorifying God with a loud voice. <sup class="verse-number">16</sup>He fell on his face at Jesus’ feet, giving him thanks; and he was a Samaritan. <sup class="verse-number">17</sup>Jesus answered, <span class="jesus-words">“Weren’t the ten cleansed? But where are the nine? <sup class="verse-number">18</sup>Were there none found who returned to give glory to God, except this foreigner?”</span> <sup class="verse-number">19</sup>Then he said to him, <span class="jesus-words">“Get up, and go your way. Your faith has healed you.”</span>',
        tags: [ VerseTagKey.Clean, VerseTagKey.Faith, VerseTagKey.God, VerseTagKey.Honour ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 9, verses: '20-22', numericReference: 40009020, chronologicalIndex: 81 },
        html: '<sup class="verse-number">20</sup>Behold, a woman who had a discharge of blood for twelve years came behind him, and touched the fringe of his garment; <sup class="verse-number">21</sup>for she said within herself, “If I just touch his garment, I will be made well.” <sup class="verse-number">22</sup>But Jesus, turning around and seeing her, said, <span class="jesus-words">“Daughter, cheer up! Your faith has made you well.”</span> And the woman was made well from that hour.',
        tags: [ VerseTagKey.Clean, VerseTagKey.Faith ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 8, verses: '43-44', numericReference: 42008043, chronologicalIndex: 81 },
        html: '<sup class="verse-number">43</sup>A woman who had a flow of blood for twelve years, who had spent all her living on physicians and could not be healed by any <sup class="verse-number">44</sup>came behind him, and touched the fringe of his cloak. Immediately the flow of her blood stopped.',
        tags: [  ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 11, verses: '31-32', numericReference: 42011031, chronologicalIndex: 164 },
        html: '<span class="jesus-words"><sup class="verse-number">31</sup>The Queen of the South will rise up in the judgment with the men of this generation, and will condemn them: for she came from the ends of the earth to hear the wisdom of Solomon; and behold, one greater than Solomon is here. <sup class="verse-number">32</sup>The men of Nineveh will stand up in the judgment with this generation, and will condemn it: for they repented at the preaching of Jonah, and behold, one greater than Jonah is here.</span>',
        tags: [ VerseTagKey.Greater, VerseTagKey.Himself ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 14, verses: '28', numericReference: 43014028, chronologicalIndex: 292 },
        html: '<span class="jesus-words"><sup class="verse-number">28</sup>You heard how I told you, ‘I go away, and I come to you.’ If you loved me, you would have rejoiced, because I said ‘I am going to my Father;’ for the Father is greater than I.</span>',
        tags: [ VerseTagKey.Lowly ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 10, verses: '17-18', numericReference: 41010017, chronologicalIndex: 222 },
        html: '<sup class="verse-number">17</sup>As he was going out into the way, one ran to him, knelt before him, and asked him, “Good Teacher, what shall I do that I may inherit eternal life?” <sup class="verse-number">18</sup>Jesus said to him, <span class="jesus-words">“Why do you call me good? No one is good except one—God.</span>',
        tags: [ VerseTagKey.Lowly ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Luke], chapter: 18, verses: '18-19', numericReference: 42018018, chronologicalIndex: 222 },
        html: '<sup class="verse-number">18</sup>A certain ruler asked him, saying, “Good Teacher, what shall I do to inherit eternal life?” <sup class="verse-number">19</sup>Jesus asked him, <span class="jesus-words">“Why do you call me good? No one is good, except one: God.</span>',
        tags: [ VerseTagKey.Lowly ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 19, verses: '16-17', numericReference: 40019016, chronologicalIndex: 222 },
        html: '<sup class="verse-number">16</sup>Behold, one came to him and said, “Good teacher, what good thing shall I do, that I may have eternal life?” <sup class="verse-number">17</sup>He said to him, <span class="jesus-words">“Why do you call me good? No one is good but one, that is, God. But if you want to enter into life, keep the commandments.”</span>',
        tags: [ VerseTagKey.Lowly ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Mark], chapter: 13, verses: '32', numericReference: 41013032, chronologicalIndex: 267 },
        html: '<span class="jesus-words"><sup class="verse-number">32</sup>But of that day or that hour no one knows, not even the angels in heaven, nor the Son, but only the Father.</span>',
        tags: [ VerseTagKey.Lowly ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.Matt], chapter: 24, verses: '36', numericReference: 40024036, chronologicalIndex: 267 },
        html: '<span class="jesus-words"><sup class="verse-number">36</sup>“But no one knows of that day and hour, not even the angels of heaven, but my Father only.</span>',
        tags: [ VerseTagKey.Lowly ],
    },
    {
        reference: { book: bibleBooks[BibleBookKey.John], chapter: 12, verses: '41', numericReference: 43012041, chronologicalIndex: 274 },
        html: '<sup class="verse-number">41</sup>Isaiah said these things when he saw his glory, and spoke of him.',
        tags: [ VerseTagKey.God, VerseTagKey.YHWH ],
    },
];
