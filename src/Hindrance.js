var Hindrance = function (name, cost) {
    Object.defineProperty(this, 'name', {
        value: name
    });
    Object.defineProperty(this, 'cost', {
        value: /^Major$/i.test(cost) ? 'Major' : 'Minor'
    });
};

Hindrance.prototype.toString = function () {
    return this.name;
};

Hindrance.AllThumbs = new Hindrance('All Thumbs');
Hindrance.Anemic = new Hindrance('Anemic');
Hindrance.Arrogant = new Hindrance('Arrogant', 'Major');
Hindrance.BadEyes = new Hindrance('Bad Eyes', 'Major');
Hindrance.SlightlyBadEyes = new Hindrance('Bad Eyes');
Hindrance.BadLuck = new Hindrance('Bad Luck', 'Major');
Hindrance.BigMouth = new Hindrance('Bad Eyes');
Hindrance.Blind = new Hindrance('Blind', 'Major');
Hindrance.Bloodthirsty = new Hindrance('Bloodthirsty', 'Major');
Hindrance.Cautious = new Hindrance('Cautious');
Hindrance.Clueless = new Hindrance('Clueless', 'Major');
Hindrance.CodeOfHonour = new Hindrance('Code Of Honour', 'Major');
Hindrance.DeathWish = new Hindrance('Death Wish', 'Major');
Hindrance.Delusional = new Hindrance('Delusional', 'Major');
Hindrance.SlightlyDelusional = new Hindrance('Delusional');
Hindrance.DoubtingThomas = new Hindrance('Doubting Thomas');
Hindrance.Elderly = new Hindrance('Elderly', 'Major');
Hindrance.Enemy = new Hindrance('Enemy', 'Major');
Hindrance.EnemyMinor = new Hindrance('Enemy');
Hindrance.Greedy = new Hindrance('Greedy', 'Major');
Hindrance.SlightlyGreedy = new Hindrance('Greedy');
Hindrance.Habit = new Hindrance('Habit', 'Major');
Hindrance.SlightHabit = new Hindrance('Habit');
Hindrance.HardOfHearing = new Hindrance('Hard of Hearing', 'Major');
Hindrance.SlightlyHardOfHearing = new Hindrance('Hard of Hearing');

module.exports = Hindrance;

/*
All Thumbs Minor –2 Repair; Roll of 1 causes malfunction
Anemic Minor –2 to Fatigue tests
Arrogant Major Must humiliate opponent, challenge the ‘leader’
Bad Eyes Minor/Major –2 to attack or notice something more than 5” distant
Bad Luck Major One less Benny per session
Big Mouth Minor Unable to keep a secret, blabs at the worst time
Blind Major –6 to all actions that rely on vision; –2 on social rolls, gain additional Edge
Bloodthirsty Major Never takes prisoners
Cautious Minor Character is overly careful
Clueless Major –2 to most Common Knowledge rolls
Code of Honor Major Character keeps his word and acts like a gentleman
Curious Major Character wants to know about everything
Death Wish Minor Hero wants to die after completing some task
Delusional Minor/Major Character suffers from grave delusions
Doubting Thomas Minor Character doesn’t believe in the supernatural
Elderly Major Pace –1, –1 to Strength and Vigor die types; +5 skill points for any skill linked to Smarts
Enemy Minor/Major Character has a recurring nemesis of some sort
Greedy Minor/Major Character is obsessed with wealth
Habit Minor/Major Charisma –1; Fatigue rolls when deprived of Major Habits
Hard of Hearing Minor/Major –2 to Notice sounds; automatic failure if completely deaf
Heroic Major Character always helps those in need
Illiterate Minor Hero is unable to read or write
Lame Major –2 Pace and running die is a d4
Loyal Minor The hero tries to never betray or disappoint his friends
Mean Minor –2 to his Charisma for ill-temper and surliness
Obese Minor +1 Toughness, –1 Pace, d4 running die
One Arm Major –4 to tasks requiring two arms
One Eye Major –1 Charisma, –2 to rolls requiring depth perception
One Leg Major Pace –2, d4 running die, –2 to rolls requiring mobility, –2 to Swimming skill
Outsider Minor –2 Charisma, treated badly by those of dominant society
Overconfident Major The hero believes he can do anything
Pacifist Minor/Major Character fights only in self-defense as a Minor Hindrance;
 won’t harm living creatures as Major Hindrance
Phobia Minor/Major –2 or –4 to Trait tests when near the phobia
Poverty Minor Half starting funds, inability to hang onto future income
Quirk Minor Character has some minor but persistent foible
Small Major –1 Toughness
Stubborn Minor Hero always wants his way
Ugly Minor –2 Charisma due to appearance
Vengeful Minor/Major Character holds a grudge; will kill as a Major Hindrance
Vow Minor/Major A pledge to a group, deity, or religion
Wanted Minor/Major The character is a criminal of some sort
Yellow Major The character is cowardly and suffers –2 to Fear checks
Young Major 3 points for Attributes, 10 skill points, +1 Benny per session
*/