var Attribute = require('./Attribute'),
    Edge = require('./Edge');

//All edges from Savage Worlds Deluxe
module.exports = [

    //Background Edges
    new Edge('Alertness', Edge.requires('N'), '+2 Notice', 'Background Edges'),
    new Edge('Ambidextrous', [Edge.requires('N'), Edge.requires(Attribute.Agility, 'd8')], 'Ignore -2 penalty for using off-hand', 'Background Edges'),
    new Edge('Arcane Background', Edge.requires('N'), 'Allows access to supernatural powers', 'Background Edges'),
    new Edge('Arcane Resistance', [Edge.requires('N'), Edge.requires(Attribute.Spirit, 'd8')], 'Armor 2 vs. magic, +2 to resist magic effects', 'Background Edges'),
        new Edge('Improved Arcane Resistance', [Edge.requires('N'), Edge.requires('Arcane Resistance')], 'Armor 4 vs. magic, +4 to resist magic effects', 'Background Edges'),
    new Edge('Attractive', [Edge.requires('N'), Edge.requires(Attribute.Vigor, 'd6')], 'Charisma +2', 'Background Edges'),
        new Edge('Very Attractive', [Edge.requires('N'), Edge.requires('Attractive')], 'Charisma +4', 'Background Edges'),
    new Edge('Berserk', [Edge.requires('N')], 'Smarts roll or go Berserk after being wounded; +2 Fighting and Strength rolls, -2 Parry, +2 Toughness; Roll of 1on Fighting die hits random adjacent target', 'Background Edges'),
    new Edge('Brave', [Edge.requires('N'), Edge.requires(Attribute.Spirit, 'd6')], '+2 to Fear tests', 'Background Edges'),
    new Edge('Brawny', [Edge.requires('N'), Edge.requires(Attribute.Strength, 'd6'), Edge.requires(Attribute.Vigor, 'd6')], 'Toughness +1; load limit is 8xStr instead of 5xStr', 'Background Edges'),
    new Edge('Fast Healer', [Edge.requires('N'), Edge.requires(Attribute.Vigor, 'd8')], '+2 to natural healing rolls', 'Background Edges'),
    new Edge('Fleet-Footed', [Edge.requires('N'), Edge.requires(Attribute.Agility, 'd6')], '+2 Pace, d10 running die instead of d6', 'Background Edges'),
    new Edge('Linguist', [Edge.requires('N'), Edge.requires(Attribute.Smarts, 'd6')], 'Begin play with a number of languages equal to Smarts; Smarts –2 to be understood in any language heard for a week', 'Background Edges'),
    new Edge('Luck', [Edge.requires('N')], '+1 Benny per session', 'Background Edges'),
        new Edge('Great Luck', [Edge.requires('N')], '+2 Benny per session', 'Background Edges'),
    new Edge('Noble', [Edge.requires('N')], '+2 Charisma; Character is noble born with status and wealth', 'Background Edges'),
    new Edge('Quick', [Edge.requires('N'), Edge.requires(Attribute.Agility, 'd8')], 'Discard draw of 5 or less for new card', 'Background Edges'),
    new Edge('Rich', [Edge.requires('N')], '3x starting funds, $75K annual salary', 'Background Edges'),
        new Edge('Filty rich', [Edge.requires('N'), Edge.requires.either('Rich', 'Noble')], '5x starting funds, $250K annual salary', 'Background Edges'),

    //Combat Edges
    new Edge('Block', [Edge.requires('S'), Edge.requires('Fighting', 'd8')], 'Parry +1', 'Combat Edges'),
        new Edge('Improved Block', [Edge.requires('V'), Edge.requires('Block')], 'Parry +2', 'Combat Edges'),
    new Edge('Brawler', [Edge.requires('N'), Edge.requires(Attribute.Strength, 'd8')], '+2 to unarmed damage rolls', 'Combat Edges'),
        new Edge('Bruiser', [Edge.requires('S'), Edge.requires('Brawler')], 'Bonus die to unarmed damage is d8 instead of d6', 'Combat Edges'),
    new Edge('Combat Reflexes', Edge.requires('S'), '+2 to recover from Shaken', 'Combat Edges'),
    new Edge('Counterattack', [Edge.requires('S'), Edge.requires('Fighting', 'd8')], 'Receive free Fighting attack at –2 once per round when a foe fails a Fighting attack', 'Combat Edges'),
        new Edge('Improved Counterattack', [Edge.requires('V'), Edge.requires('Counterattack')], 'As above but ignore the –2 penalty', 'Combat Edges'),
    new Edge('Dodge', [Edge.requires('S'), Edge.requires(Attribute.Agility, 'd8')], '-1 to be hit with ranged attacks', 'Combat Edges'),
        new Edge('Improved Dodge', [Edge.requires('V'), Edge.requires('Dodge')], '-2 to be hit with ranged attacks', 'Combat Edges'),
    new Edge('Elan', [Edge.requires('N'), Edge.requires(Attribute.Spirit, 'd8')], '+2 when spending a Benny on a Trait roll (including Soak rolls)', 'Combat Edges'),
    new Edge('Extraction', [Edge.requires('N'), Edge.requires(Attribute.Agility, 'd8')], 'Ignore one foe’s free attack when withdrawing from melee with an Agility roll', 'Combat Edges'),
        new Edge('Improved Extraction', [Edge.requires('N'), Edge.requires('Extraction')], 'As above. With a raise, no foes get their free melee attack.', 'Combat Edges'),
    new Edge('First Strike', [Edge.requires('N'), Edge.requires(Attribute.Agility, 'd8')], 'May attack one foe who moves adjacent', 'Combat Edges'),
        new Edge('Improved First Strike', [Edge.requires('H'), Edge.requires('First Strike')], 'May attack every foe who moves adjacent', 'Combat Edges'),
    new Edge('Florentine', [Edge.requires('N'), Edge.requires(Attribute.Agility, 'd8'), Edge.requires('Fighting', 'd8')], '+1 vs foes with single weapon and no shield; ignore 1 point of gang up bonus', 'Combat Edges'),
    new Edge('Frenzy', [Edge.requires('S'), Edge.requires('Fighting', 'd10')], '1 extra Fighting attack at -2', 'Combat Edges'),
        new Edge('Improved Frenzy', [Edge.requires('V'), Edge.requires('Frenzy')], '1 extra Fighting attack', 'Combat Edges'),
    new Edge('Giant Killer', Edge.requires('V'), '+1d6 damage when attacking larger creatures', 'Combat Edges'),
    new Edge('Hard to Kill', [Edge.requires('N'), Edge.requires(Attribute.Spirit, 'd8')], 'Ignore would penalties for Vigor rolls made on the Knockout or Injury tables', 'Combat Edges'),
        new Edge('Harder to Kill', [Edge.requires('V'), Edge.requires(Attribute.Spirit, 'd8')], 'Ignore would penalties for Vigor rolls made on the Knockout or Injury tables', 'Combat Edges'),
    new Edge('Improvisational Fighter', [Edge.requires('S'), Edge.requires(Attribute.Smarts, 'd6')], 'Ignores the usual –1 penalty to attack and Parry for improvised weapons', 'Combat Edges'),
    new Edge('Killer Instinct', [Edge.requires('H')], 'Wins tied opposed rolls, may reroll opposed skill die if it comes up a “1”', 'Combat Edges'),
    new Edge('Level Headed', [Edge.requires('S'), Edge.requires(Attribute.Smarts, 'd8')], ' Act on best of two cards in combat', 'Combat Edges'),
        new Edge('Improved Level Headed', [Edge.requires('S'), Edge.requires('Level Headed')], ' Act on best of three cards in combat', 'Combat Edges'),
    new Edge('Marksman', Edge.requires('S'), 'Aim maneuver (+2 Shooting) if hero does not move', 'Combat Edges'),
    new Edge('Martial Artist', [Edge.requires('N'), Edge.requires('Fighting', 'd6')], 'Never considered unarmed, +d4 to unarmed damage rolls', 'Combat Edges'),
        new Edge('Improved Martial Artist', [Edge.requires('V'), Edge.requires('Martial Artist'), Edge.requires('Fighting', 'd10')], '+d6 to unarmed damage rolls', 'Combat Edges'),
    new Edge('Nerves of Steel', [Edge.requires('N'), Edge.requires(Attribute.Vigor, 'd8')], 'Ignore 1 point of wound penalties', 'Combat Edges'),
        new Edge('Improved Nerves of Steel', [Edge.requires('N'), Edge.requires('Nerves of Steel')], ' Ignore 2 points of wound penalties', 'Combat Edges'),
    new Edge('No Mercy', Edge.requires('S'), 'May spend bennies on damage rolls', 'Combat Edges'),
    new Edge('Quick Draw', Edge.requires('N'), 'may draw weapon as a free action', 'Combat Edges'),
    new Edge('Rock and Roll!', [Edge.requires('S'), Edge.requires('Shooting', 'd8')], 'Ignore full-auto penalty if shooter doesn’t move', 'Combat Edges'),
    new Edge('Steady Hands', [Edge.requires('N'), Edge.requires(Attribute.Agility, 'd8')], 'Ignore unstable platform penalty', 'Combat Edges'),
    new Edge('Sweep', [Edge.requires('N'), Edge.requires(Attribute.Strength, 'd8'), Edge.requires('Fighting', 'd8')], 'Attack all adjacent foes at -2', 'Combat Edges'),
        new Edge('Improved Sweep', [Edge.requires('V'), Edge.requires('Sweep')], 'Attack all adjacent foes', 'Combat Edges'),
    new Edge('Trademark  Weapon', [Edge.requires('N'), Edge.requires.either(Edge.requires('Fighting', 'd10'), Edge.requires('Shooting', 'd10'))], '+1 Fighting or Shooting with particular weapon', 'Combat Edges'),
        new Edge('Improved Trademark  Weapon', [Edge.requires('V'), Edge.requires('Trademark Weapon')], '+2 Fighting or Shooting with particular weapon', 'Combat Edges'),
    new Edge('Two-Fisted', [Edge.requires('N'), Edge.requires(Attribute.Agility, 'd8')], 'May attack with a weapon in each hand without multi-action penalty.', 'Combat Edges'),

    //Command Edges
    new Edge('Command', [Edge.requires('N'), Edge.requires(Attribute.Smarts, 'd8')], '+1 to troops recovering from Shaken', 'Leadership Edges'),
    new Edge('Command Presence', [Edge.requires('N'), Edge.requires('Command')], 'Increase command radius to 10”', 'Leadership Edges'),
    new Edge('Fervor', [Edge.requires('V'), Edge.requires(Attribute.Spirit, 'd8'), Edge.requires('Command')], '+1 melee damage to troops in command', 'Leadership Edges'),
    new Edge('Hold the Line!', [Edge.requires('S'), Edge.requires(Attribute.Spirit, 'd8'), Edge.requires('Command')], 'Troops have +1 toughness', 'Leadership Edges'),
    new Edge('Inspire', [Edge.requires('S'), Edge.requires('Command')], '+1 to Spirit rolls of all troops in command', 'Leadership Edges'),
    new Edge('Natural Leader', [Edge.requires('N'), Edge.requires(Attribute.Spirit, 'd8'), Edge.requires('Command')], 'Leader may give bennies to troops in command', 'Leadership Edges'),
    new Edge('Leader of Men', [Edge.requires('V'), Edge.requires('Command')], 'Roll a d10 as the Wild Die for subordinates’ group rolls', 'Leadership Edges'),

    //Power Edges
    new Edge('New Power', [Edge.requires('N'), Edge.requires('Arcane Background')], 'Character gains one new power', 'Power Edges'),
    new Edge('Power Points', [Edge.requires('N'), Edge.requires('Arcane Background')], '+5 Power Points, once per rank only', 'Power Edges'),
    new Edge('Rapid Recharge', [Edge.requires('S'), Edge.requires(Attribute.Spirit, 'd6'), Edge.requires('Arcane Background')], 'Regain 1 Power Point every 30 minutes', 'Power Edges'),
        new Edge('Improved Rapid Recharge', [Edge.requires('V'), Edge.requires('Rapid Recharge')], 'Regain 1 Power Point every 15 minutes', 'Power Edges'),
    new Edge('Soul Drain', [Edge.requires('S'), Edge.requires('Arcane Background'), Edge.requires('Knowledge (Arcana)', 'd10')], 'Drain energy from your own soul to get more power points', 'Power Edges'),
    
    //Professional Edges
    new Edge('Ace', [Edge.requires('N'), Edge.requires(Attribute.Agility, 'd8')], '+2 to Boating, Driving, Piloting; may make soak rolls for vehicle at -2', 'Professional Edges'),
    new Edge('Acrobat', [Edge.requires('N'), Edge.requires(Attribute.Agility, 'd8'), Edge.requires(Attribute.Strength, 'd6')], '+2 to nimbleness-based Agility rolls; +1 Parry if unencumbered','Professional Edges'),
    new Edge('Adept', [Edge.requires('N'), Edge.requires('Arcane Background'), Edge.requires('Martial Artist'), Edge.requires('Faith', 'd8'), Edge.requires('Fighting', 'd8')], 'Unarmed attack do Str+d4, always considered armed; Gain boost/lower trait, deflection, healing, smite, or speed as free action at each new Rank','Professional Edges'),
    new Edge('Assassin', [Edge.requires('N'), Edge.requires(Attribute.Agility, 'd8'), Edge.requires('Climbing', 'd6'), Edge.requires('Fighting','d6'), Edge.requires('Stealth', 'd8')], '+2 damage against unaware foe','Professional Edges'),
    new Edge('Champion', [Edge.requires('N'), Edge.requires('Arcane Background'), Edge.requires(Attribute.Spirit, 'd8'), Edge.requires(Attribute.Strength, 'd6'), Edge.requires('Faith', 'd6'), Edge.requires('Fighting', 'd8')], '+2 damage vs good/evil source; +2 Toughness vs good/evil', 'Professional Edges'),
    new Edge('Gadgeteer', [Edge.requires('N'), Edge.requires('Arcane Background'), Edge.requires(Attribute.Smarts, 'd8'), Edge.requires('Repair', 'd8'), Edge.requires('Weird Science', 'd8'), Edge.requires(/^Knowledge/, 'd6', 2)], 'May “jury-rig” a device once per game session', 'Professional Edges'),
    new Edge('Holy/Unholy Warrior', [Edge.requires('N'), Edge.requires(Attribute.Spirit, 'd8'), Edge.requires('Faith', 'd6')], 'Call upon your chosen deity to repulse good/evil creatures', 'Professional Edges'),
    new Edge('Investigator', [Edge.requires('N'), Edge.requires(Attribute.Smarts, 'd8'), Edge.requires('Investigation', 'd8'), Edge.requires('Streetwise', 'd8')], '+2 Investigation and Streetwise', 'Professional Edges'),
    new Edge('Jack-of-all-Trades', [Edge.requires('N'), Edge.requires(Attribute.Smarts, 'd10')], 'No -2 for unskilled Smarts based attempts', 'Professional Edges'),
    new Edge('McGyver', [Edge.requires('N'), Edge.requires(Attribute.Smarts, 'd6'), Edge.requires('Repair', 'd6'), Edge.requires('Notice', 'd8')], 'Professional Edges'),
    new Edge('Mentalist', [Edge.requires('N'), Edge.requires('Arcane Background'), Edge.requires(Attribute.Smarts, 'd8'), Edge.requires('Psionics', 'd6')], '+2 to any opposed Psionics roll', 'Professional Edges'),
    new Edge('Mr. Fix It', [Edge.requires('N'), Edge.requires('Arcane Background'), Edge.requires(Attribute.Smarts, 'd10'), Edge.requires('Repair', 'd8'), Edge.requires('Weird Science', 'd8'), Edge.requires(/^Knowledge/, 'd6', 2)], '+2 to Repair rolls, 1/2 Repair time with raise', 'Professional Edges'),
    new Edge('Scholar', [Edge.requires('N'), Edge.requires.skills(/^Knowledge/, 'd8', 2)], '+2 to two different Knowledge skills', 'Professional Edges'),
    new Edge('Tactician', [Edge.requires('S'), Edge.requires(Attribute.Smarts, 'd8'), Edge.requires('Knowledge (Battle)', 'd6'), Edge.requires('Command')], 'Make a Knowledge (Battle) roll at the beginning of a fight to get an Action Card per success and raise; these may be given to any allies', 'Professional Edges'),
    new Edge('Thief', [Edge.requires('N'), Edge.requires(Attribute.Agility, 'd8'), Edge.requires('Climbing', 'd6'), Edge.requires('Lockpicking', 'd6'), Edge.requires('Stealth', 'd8')], '+2 Climb, Lockpick, Stealth, or to disarm traps', 'Professional Edges'),
    new Edge('Wizard', [Edge.requires('N'), Edge.requires('Arcane Background'), Edge.requires(Attribute.Smarts, 'd8'), Edge.requires('Knowledge (Arcanca)', 'd8'), Edge.requires('Spellcasting', 'd6')], 'Each raise reduces cost of spell by 1 point', 'Professional Edges'),
    new Edge('Woodsman', [Edge.requires('N'), Edge.requires(Attribute.Spirit, 'd6'), Edge.requires('Survival', 'd8'), Edge.requires('Tracking', 'd8')], '+2 Tracking Survival, and Stealth', 'Professional Edges'),

    //Social Edges
    new Edge('Charismatic', [Edge.requires('N'), Edge.requires(Attribute.Spirit, 'd8')], '+2 Charisma', 'Social Edges'),
    new Edge('Common Bond', [Edge.requires('N'), Edge.requires(Attribute.Spirit, 'd8')], 'Can share bennies with other Wild Cards', 'Social Edges'),
    new Edge('Connections', Edge.requires('N'), 'Call upon powerful friends', 'Social Edges'),

    //Weird Edges
    new Edge('Strong Willed', [Edge.requires('N'), Edge.requires('Initimidation', 'd6')], '+2 Intimidation and Taunt, +2 to resist', 'Weird Edges'),
    new Edge('Beast Bond', Edge.requires('N'), 'Character may spend bennies for his animals', 'Weird Edges'),
    new Edge('Beast Master', [Edge.requires('N'), Edge.requires(Attribute.Spirit, 'd8')], 'You gain an animal companion', 'Weird Edges'),
    new Edge('Danger Sense', Edge.requires('N'), 'Notice at -2 to detect surprise attacks/danger', 'Weird Edges'),
    new Edge('Healer', [Edge.requires('N'), Edge.requires(Attribute.Spirit, 'd8')], '+2 Healing', 'Weird Edges'),
    new Edge('Liquid Courage', [Edge.requires('N'), Edge.requires(Attribute.Vigor, 'd8')], 'increase Vigor when drunk; ignore 1 wound modifier', 'Weird Edges'),
    new Edge('Scavenger', [Edge.requires('N'), Edge.requires('Luck')], 'can acquire an item once per session', 'Weird Edges'),

    //Wild card Edges
    new Edge('Dead Shot', [Edge.requires('S'), Edge.requires.either(Edge.requires('Shooting', 'd10'), Edge.requires('Shooting', 'd10'))], 'Double ranged damage when dealt Joker', 'Wild Card Edges'),
    new Edge('Mighty Blow', [Edge.requires('S'), Edge.requires('Fighting', 'd10')], 'Double melee damage when dealt Joker', 'Wild Card Edges'),
    new Edge('Power Surge', [Edge.requires('S'), Edge.requires('Arcane Background')], '+2d6 Power Points when dealt a Joker', 'Wild Card Edges'),

    //Legendary Edges
    new Edge('Followers', Edge.requires('L'), 'Attract 5 henchmen', 'Wild Card Edges'),
    new Edge('Martial Arts Master', [Edge.requires('L'), Edge.requires('Fighting', 'd12')], 'Trait becomes d12+1', 'Legendary Edges'),
    new Edge('Professional', [Edge.requires('L'), Edge.requires.skills(/./, 'd12')], 'Trait becomes d12+1', 'Legendary Edges'),
    new Edge('Expert', [Edge.requires('L'), Edge.requires('Professional')], 'Trait becomes d12+2', 'Legendary Edges'),
    new Edge('Master', [Edge.requires('L'), Edge.requires('Master')], 'Wild Die is d10 for one Trait', 'Legendary Edges'),
    new Edge('Sidekick', Edge.requires('L'), 'Character gains a Novice WC sidekick', 'Legendary Edges'),
    new Edge('Tough as Nails', Edge.requires('L'), 'Toughness +1', 'Legendary Edges'),
        new Edge('Improved Tough as Nails', [Edge.requires('L'), Edge.requires('Tough as Nails')], 'Toughness +2', 'Legendary Edges'),
    new Edge('Weapon Master', [Edge.requires('L'), Edge.requires('Fighting', 'd12')], 'Parry +1', 'Legendary Edges'),
    new Edge('Master of Arms', [Edge.requires('L'), Edge.requires('Weapon Master')], 'Parry +2', 'Legendary Edges')
];
