function calculateLevel(experienceValue) {
    levelValue = Math.trunc((experienceValue / 100));
    if (levelValue > 100) {
        levelValue = 100;
    }
    return levelValue;
}

function calculateRank(levelValue) {
    const rankValueNumber = Math.trunc((levelValue / 10));
    let rankValue = "";
    switch (rankValueNumber) {
        case 0:
            rankValue = "Pushover";
            break;
        case 1:
            rankValue = "Novice";
            break;
        case 2:
            rankValue = "Fighter";
            break;
        case 3:
            rankValue = "Warrior";
            break;
        case 4:
            rankValue = "Veteran";
            break;
        case 5:
            rankValue = "Sage";
            break;
        case 6:
            rankValue = "Elite";
            break;
        case 7:
            rankValue = "Conqueror";
            break;
        case 8:
            rankValue = "Champion";
            break;
        case 9:
            rankValue = "Master";
            break;
        default:
            rankValue = "Greatest";
            break;
    }
    return rankValue;
}

function updateLevelAndRank(Warrior) {
    Warrior.levelValue = calculateLevel(Warrior.experienceValue);
    Warrior.rankValue = calculateRank(Warrior.levelValue);
}

class Warrior {
    constructor() {
        this.levelValue = 1;
        this.rankValue = "Pushover";
        this.experienceValue = 100;
        this.achievementsValue = [];
    }
    training(event) {
        let result = "";
        if (this.levelValue >= event[2]) {
            this.experienceValue += event[1];
            this.achievementsValue.push(event[0]);
            result = event[0];
        } else {
            result = "Not strong enough";
        }
        if (this.experienceValue > 10000) {
            this.experienceValue = 10000;
        }
        updateLevelAndRank(this);
        return result;
    }
    battle(enemy_level) {
        let summary = "";
        let enemyRank = calculateRank(enemy_level);
        if (enemy_level >= 1 && enemy_level <= 100) {
            if (enemy_level === this.levelValue) {
                this.experienceValue += 10;
                summary = "A good fight";
            } else if (enemy_level === this.levelValue - 1) {
                this.experienceValue += 5;
                summary = "A good fight";
            } else if (enemy_level <= this.levelValue - 2) {
                this.experienceValue += 0;
                summary = "Easy fight";
            } else if (enemy_level >= this.levelValue + 5 && enemyRank !== this.rankValue) {
                summary = "You've been defeated";
            } else if (enemy_level > this.levelValue && enemyRank === this.rankValue || enemy_level <= this.levelValue + 5) {
                this.experienceValue += 20 * ((enemy_level - this.levelValue) ** 2);
                summary = "An intense fight";
            }
        } else {
            return "Invalid level";
        }
        if (this.experienceValue > 10000) {
            this.experienceValue = 10000;
        }
        updateLevelAndRank(this);
        return summary;
    }
    level() {
        return this.levelValue;
    }
    rank() {
        return this.rankValue;
    }
    experience() {
        return this.experienceValue;
    }
    achievements() {
        return this.achievementsValue;
    }
}
