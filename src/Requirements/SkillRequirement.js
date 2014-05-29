var SkillRequirement = function (skill) {
    this.skill = skill;
};

SkillRequirement.prototype.isMet = function (character) {
    return character.hasSkill(this.skill) && (character.skills[this.skill.name].value === this.skill.value);
};

module.exports = SkillRequirement;