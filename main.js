var phrases = [
"No. Your genes are inferior.",
"No. Donate to this website instead.",
"Yes. Lie back and think of England.",
"10/10 fertility gods agree that you should have sex.",
"No. Sex is weird and gross.",
"Yeah girl. Tap that shit.",
"No. Leave it to the professionals.",
"Yeah baby. Call me. 867-5309",
"No. Sex makes Jesus/Mohammed/Budda/Vishnu/etc cry. <picture of crying deity>",
"No. Humans are a cancer on this beautiful earth. Stop the spread.",
"lolololololololol. Oh, you were serious? LOLOLOLOLOLOLOL",
"Oh yes. Please. Mmmmmm.",
"Bow chicka wow wow.",
"Sex is contraindicated in patients with chronic internet use disorder.",
"Nah. Try out this lovely pornography instead.",
"No. Hitler had sex.",
"Have your sex. There are celibate kids in Africa.",
"Zeno's paradox proves that a penis cannot enter a vagina.",
"Yes. Sex is the most full and pure expression of self actualizing humanity possible on this tiny orb hurling through an empty, meaningless cosmos.",
"'should' or 'ought' I have sex is, of course, a moral question, best examined through Kant's dentological ethics. Formulated as universal law - everyone must have sex - we can clearly see a problem. Some people, such as those without genitals, cannot have sex. Therefore, you must not have sex."
];

var response = phrases[Math.floor(Math.random() * phrases.length)];
var elem = document.getElementById("response");
if (elem != null) {
	elem.innerHTML = response;
} else {
	console.log("Did not find response element.");
	document.write("Yes.");
}

