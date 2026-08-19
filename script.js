const funnyBtn = document.querySelector(".funny-btn")
const scaryBtn = document.querySelector(".scary-btn")
const adventureBtn = document.querySelector(".adventure-btn")

const resultParagraph = document.querySelector("#result");
const storyContainer = document.querySelector("#story-container");
const titleElement = document.querySelector("#story-title")


const storyObj = {
  scary: {
    title:"The Fifth Guest",
    story: `In the dark woods, a group of five friends — Ravi, Neha, Tanmay, Priya, and Sam — stumbled upon an old, abandoned cabin while hiking off the marked trail during a weekend trip.
 
The cabin sat at the bottom of a shallow valley, half-swallowed by overgrown vines, its windows boarded from the inside rather than the outside — a detail nobody noticed until much later.
 
"We should just camp here for the night," Tanmay said, shining his flashlight across the sagging porch. "Better than pitching tents in the rain."
 
Neha hesitated. "It looks like nobody's been here in decades. Why would the windows be boarded from the inside?"
 
Nobody had an answer, and hunger and exhaustion won out over caution. They forced the door open, and it groaned on rusted hinges like it hadn't been touched in fifty years — except the dust inside told a different story. There wasn't any. The floor was swept clean.
 
Inside, the cabin was surprisingly intact — a table set for four, chairs neatly tucked in, a fireplace with cold ashes that still smelled faintly of smoke, as if a fire had been put out hours, not decades, ago.
 
Priya found a leather journal on a shelf, its pages brittle and yellowed. The final entry, dated in a shaky hand, read: "It knows when you count us. Never count us out loud. It listens for the number that's missing."
 
Sam laughed it off. "Cute. Some old horror story to scare hikers."
 
They built a fire in the hearth, ate their rations, and settled in for the night, taking turns to keep watch. Around midnight, Ravi — on watch — noticed the fire's shadows moving strangely, stretching and bending in ways that didn't match the flickering flames.
 
He counted his friends to make sure everyone was accounted for. "One, two, three, four—" He stopped. He counted again. Four. There should have been five.
 
He turned to check who was missing and found Sam's sleeping bag empty, still warm.
 
"Guys," Ravi whispered, shaking Neha awake. "Guys, wake up. Sam's gone."
 
They searched the cabin room by room, flashlights trembling in their hands. The bedroom door at the end of the hall — which none of them remembered being there before — stood slightly ajar, a thin sliver of absolute darkness beyond it.
 
Inside, they found Sam standing perfectly still, facing the corner of an empty room, his back to them.
 
"Sam?" Priya's voice cracked. "Sam, what are you doing?"
 
He didn't turn around. His voice, when it came, sounded layered — as though two people were speaking in perfect unison, one half a second behind the other. "It counted us. It knows there were five. It wants to know why there are only four now."
 
Tanmay grabbed Sam's shoulder to pull him back, and Sam spun around — but his eyes were wrong, pupils blown wide and black, reflecting no light at all, like two holes cut into the world.
 
The lights — flashlights, the fire in the next room, even the moon through the window — dimmed all at once, as if something vast had inhaled the light from the air itself.
 
A voice, dry and ancient, seemed to come from every wall simultaneously: "Five came in. Five must leave. Or none will."
 
The floorboards beneath them groaned and split, and something long-dormant beneath the cabin's foundation began, at last, to stir — something that had been sealed there since the cabin's original owner buried it in 1911, along with whatever remained of the family who had lived here before him, and the four families who had wandered in afterward, never to wander out.
 
Neha grabbed the journal, flipping desperately to the last page, where a hurried postscript had been scrawled beneath the final entry, one she hadn't noticed before: "The only way out is to leave exactly as many as entered. It does not forgive a debt of souls."
 
Ravi understood first. "It's not about escaping the cabin," he breathed. "It's about balancing the count. Whatever it takes, it takes to keep the number even."
 
Sam's borrowed voice rasped, "Someone must stay so the rest may go."
 
What happened over the next four hours, none of the survivors — three, in the end — ever agreed on. Some say Sam offered himself in an act of clarity that broke through whatever had claimed him, his own voice returning for just long enough to tell the others to run. Others say something in the walls chose for him.
 
What is certain is this: three friends stumbled out of the woods the next morning, pale and shaking, unable to find the cabin again when park rangers went searching. The structure, when finally located weeks later using old survey maps, had collapsed in on itself entirely, as though it had been abandoned for a hundred years, not days.
 
And in the local ranger station's old logbook, an entry from 1911 lists a search party of five hikers who entered those same woods and were never found — all except one name, crossed out and rewritten in different ink, in a handwriting nobody could identify: Sam.`,
    borderColor: "#ee4b2b"
  },
  funny: {
    title:"The Great Eyebrow Incident",
    story: `During a weekend camping trip with his college friends, Mark decided this was finally his moment to show off his culinary skills, having watched exactly eleven cooking videos on his phone during the four-hour drive to the campsite.
 
"I've got this," he announced, tying an apron over his hiking clothes — an apron he had, inexplicably, packed specifically for this trip. "Tonight, I'm making my grandmother's famous fire-roasted chicken. You will all remember this meal for the rest of your lives."
 
His friend Deepika raised an eyebrow. "Didn't your grandmother's famous recipe involve an actual oven?"
 
"Details," Mark said, waving her off. "Fire is fire."
 
He built what he confidently called "a professional-grade campfire," which involved dumping an entire bag of charcoal briquettes onto a modest pile of twigs and then, when it wouldn't catch fast enough for his liking, adding a generous — and deeply unwise — splash of lighter fluid.
 
The fire did not so much start as it detonated. A column of flame roared four feet into the air with a sound like a jet engine clearing its throat, and Mark, who had been crouched directly over it fanning the embers with a paper plate, stumbled backward with a yelp that startled every bird within a half-mile radius.
 
"MARK YOUR EYEBROWS," someone screamed.
 
He hadn't felt it happen, but a quick, horrified inspection with his phone's front camera confirmed the damage: his eyebrows — both of them, symmetrically, as though God himself had reached down with tweezers — were simply gone. Not singed. Gone. In their place, two smooth patches of very surprised-looking forehead.
 
"I look like a confused thumb," Mark said, staring into his phone screen in disbelief.
 
The group's laughter was loud enough that a nearby camping family two sites over came to check if everyone was okay, only to find six college students in various stages of collapsing onto the ground, wheezing, while Mark stood there in his apron, eyebrow-less, holding a single sad, half-charred chicken thigh.
 
Undeterred — because if there is one universal truth about Mark, it is that catastrophe has never once discouraged him — he pressed on with dinner. The chicken, however, had other plans. Having been placed directly into the fireball's blast radius during the Great Eyebrow Incident, it was now less "fire-roasted" and more "structurally compromised." One side was cremated to the consistency of a hockey puck; the other side remained, alarmingly, raw.
 
"It's a fusion dish," Mark explained, holding up the offending chicken like a trophy. "Half Cajun blackened, half sashimi. Very avant-garde."
 
"Mark, that's salmonella with extra steps."
 
Refusing to be deterred, and now the proud, if singed, owner of a forehead that stretched a full extra inch further than it had that morning, Mark declared he would instead make his backup dish: campfire foil packets of potatoes and vegetables, "a much safer bet," he insisted, to a chorus of deep skepticism from everyone who had just watched him nearly become the campsite's second fire.
 
He wrapped the vegetables in foil with what he described as "generous" olive oil, which was in fact nearly half the bottle, and nestled the packets directly into the coals — upside down, as it turned out, a fact nobody discovered until forty minutes later when Deepika went to check on dinner and found the foil packets had fused themselves permanently to a rock, the vegetables inside reduced to something resembling volcanic ash.
 
By 9 p.m., the group's actual dinner consisted of granola bars, a bag of marshmallows meant for dessert, and one deeply humbled Mark, eyebrow-less, sitting by the now-manageable fire, eating a granola bar in silence while everyone else recounted the evening's events with the enthusiasm of people who had just witnessed a small, glorious disaster unfold in real time.
 
"To be fair," Mark finally said, breaking the silence, "the marshmallows I toasted were pretty good."
 
"Mark. You almost lit yourself on fire roasting marshmallows too. You held the stick too close and your sleeve caught for like two seconds."
 
"...The marshmallows were still good."
 
His eyebrows, for the record, took eleven weeks to fully grow back, during which time he was affectionately nicknamed "Forehead" by every single person on that trip, a title that — much like the chicken — never quite went away, no matter how much he protested.
 
To this day, whenever the group plans another camping trip, the group chat's first rule, pinned at the top by unanimous vote, reads simply: "Mark is not allowed near the fire. Mark may bring snacks. Mark may NOT cook."`,
    borderColor: "#f1be32"
  },
  adventure: {
    title:"The Serpent's Eyes",
    story: `Lost in the heart of the Amazon rain forest after their guide vanished during a sudden storm, Sarah and Jake found themselves alone with nothing but a torn map, a half-empty water bottle, and a growing, uneasy certainty that they were being watched.
 
"The map shows a river bend about two kilometers north," Sarah said, studying the water-damaged paper by the fading afternoon light filtering through the canopy. "If we follow it, we should hit the same trail our guide mentioned before he ran off."
 
"He didn't run off," Jake muttered, swatting at yet another cloud of insects. "He saw something and left. There's a difference."
 
They pushed north through dense undergrowth, vines snagging at their clothes, the humid air thick enough to feel like breathing through a wet towel. Hours passed before the jungle abruptly opened into a wide clearing — and there, half-consumed by centuries of roots and moss, stood the crumbling remains of an ancient stone temple, its entrance flanked by two weathered stone jaguars, their carved eyes somehow still unnervingly sharp despite the wear of time.
 
"This isn't on any map," Sarah breathed, pulling out her camera. "This could be completely undiscovered."
 
They approached cautiously. Carved into the archway above the entrance was a line of symbols — a sun, a serpent eating its own tail, and three vertical lines beneath a crescent moon.
 
"Some kind of warning?" Jake guessed.
 
"Or instructions," Sarah said. "Let's find out."
 
Inside, the temple's main corridor was lit by shafts of light breaking through cracks in the ceiling far above, illuminating faded murals along the walls depicting a lost civilization's rituals, harvests, and — troublingly — a recurring image of figures falling into what appeared to be a pit lined with spikes.
 
They hadn't gone twenty feet before Jake's foot caught a nearly invisible tripwire of woven vine.
 
"JAKE, DON'T MOVE—"
 
Too late. A section of the floor ahead of them dropped away with a grinding rumble, revealing a deep pit exactly like the one in the mural, lined with ancient, rotted wooden spikes. Jake froze mid-step, his back foot still on solid stone, his front foot hovering over open air.
 
Sarah grabbed the back of his shirt and hauled him backward just as the trapdoor mechanism reset itself with an ominous click, sealing shut as though nothing had happened.
 
"Okay," Jake said, breathing hard. "New rule. I walk exactly where you walk."
 
They pressed on more carefully, testing each stone with a stick before stepping, following the mural's story deeper into the temple until they reached a central chamber dominated by a raised stone altar, atop which sat a small, intricately carved obsidian idol shaped like a coiled serpent, its eyes set with two flawless emeralds.
 
"There it is," Sarah whispered. "That's what the guide's stories were about. The Serpent's Eyes."
 
"And I'm guessing there's a catch," Jake said, eyeing the altar warily. "There's always a catch."
 
There was. The moment Sarah's fingers closed around the idol, lifting it a mere inch off its stone pedestal, a deep grinding sound echoed through the chamber, and the emerald eyes flashed with reflected light as unseen mechanisms began to whir to life throughout the temple.
 
"Put it back! Put it back!"
 
"There's no un-lifting a cursed idol, Jake, we have to move!"
 
The ceiling above them began to lower with a slow, deliberate groan, stone dust raining down as ancient counterweights, dormant for centuries, engaged all at once. Behind them, the corridor they'd entered through began sealing itself shut, section by section, stone slabs sliding down from hidden recesses.
 
They sprinted, Sarah clutching the idol to her chest, Jake half-dragging her around a corner as a wall of spears shot out from the corridor walls behind them, missing Jake's shoulder by inches. They leapt over a swinging log trap, ducked beneath a shower of loosened rubble, and skidded to a halt at a ledge overlooking a wide chasm — the only way forward, a single crumbling rope bridge swaying precariously in the temple's stale, ancient air.
 
"That bridge is not going to hold both of us," Jake said.
 
"It's going to have to," Sarah shot back, already stepping onto the first plank. "Move!"
 
The bridge groaned and snapped strand by strand behind them as they crossed, the ceiling continuing its relentless descent, the temple seemingly determined to bury itself — and them — rather than surrender its treasure. They reached the far side just as the last rope gave way entirely, the bridge's remains crashing into the darkness below.
 
Beyond the chasm, a narrow shaft of daylight marked an exit — a crack in the temple's outer wall just wide enough to squeeze through. They burst out into the humid jungle air, coughing, scraped, and utterly triumphant, the temple's rumbling collapse continuing behind them as centuries of stonework finally gave in to gravity and time, sealing whatever remained inside forever.
 
Sarah opened her hand, revealing the obsidian serpent idol, its emerald eyes catching the sunlight for the first time in what might have been a thousand years.
 
"Okay," Jake said, collapsing onto the jungle floor, laughing with the particular delirium of someone who had just survived several near-deaths within the span of twenty minutes. "I take back everything I said about this trip being boring."
 
Three days later, having navigated their way back to the river using Sarah's compass and the stars, they were found by a search party sent out after their guide's panicked report. The idol, once studied by archaeologists, was dated to a civilization previously unknown to modern scholars — a discovery that would occupy research teams for the next decade, all beginning with two lost travelers, a torn map, and a temple that very nearly did not let them leave.`,
    borderColor: "#acd157"
  }
};


function displayStory(genre) {
  if (storyObj.hasOwnProperty(genre)) {
    titleElement.textContent = storyObj[genre].title;
    resultParagraph.textContent = storyObj[genre].story;
    storyContainer.style.borderColor = storyObj[genre].borderColor;
  }
}

scaryBtn.addEventListener("click", () => displayStory("scary"));
funnyBtn.addEventListener("click", () => displayStory("funny"));
adventureBtn.addEventListener("click", () => displayStory("adventure"));