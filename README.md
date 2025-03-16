# Sheetfinder
WIPHomemade app to handle Pathfinder 1st Edition character sheets, based loosely on https://charactersheet.co.uk/pathfinder


# Notes
Just jotting down notes here as I think about later features.

### Item/Bonus System
Just finished Offense Section with string-based attacks and I thought about how number based attacks would really need a whole item system, with sources and bonus types.
Here is the general outline I have come up with:
- There should be a system of Stats that each character has, with each different Stat knowing what modifiers and bonuses it has.
- This allows looking up a given stats bonuses, what is overlapping that the player could optomize out or what is missing to allow a non-conflicting power-up.
- Each Bonus should contain a statName key, a bonusName key, and a sourceName key. This allows drilling down into the Stats, Bonus layout and both add a bonus or remove a bonus depending on sourceName.
- Each Item then also contains a list of modifiers, not necessarily separated by the keys, and perhaps with conditional fulfilment
- Some items have a slot, the lack of which implies no slot.
- Ability/Power/Feature Map: The way abilities might work is that there is an abilityName key, with each type being possibly undefined, implying the character simply doesn't have access to that ability.
