var phrases = [
"No. Your genes are inferior.",
"No. Donate to shouldihavesex.com instead.",
"Yes. Lie back and think of England.",
"10/10 fertility gods agree that you should have sex.",
"No. Sex is weird and gross.",
"Yeah girl. Tap that shit.",
"No. Leave it to the professionals.",
"Yeah baby. Call me. 867-5309",
"No. Sex makes Jesus/Mohammed/Buddha/Vishnu/etc cry. <picture of crying deity>",
"No. Humans are a cancer on this beautiful earth. Stop the spread.",
"lolololololololol. Oh, you were serious? LOLOLOLOLOLOLOL",
"Oh yes. Please. Mmmmmm.",
"Bow chicka wow wow.",
"Sex is contraindicated in patients with chronic internet use disorder.",
"Nah. Try out some lovely pornography instead.",
"No. Hitler had sex.",
"Have your sex. There are celibate kids in Africa.",
"Zeno's paradox proves that a penis cannot enter a vagina.",
"Yes. Sex is the most full and pure expression of self actualizing humanity possible on this tiny orb hurling through an empty, meaningless cosmos.",
"'should' or 'ought' I have sex is, of course, a moral question, best examined through Kant's deontological ethics. Formulated as universal law - everyone must have sex - we can clearly see a problem. Some people, such as those without genitals, cannot have sex. Therefore, you must not have sex.",
"Yes. Children are the perfect distraction from your crippling inadequacy.",
"Yes. Most nations provide $500-1000 per month in bad-life-decision payments per child.",
"S-E-X. What's that? Let me see... oh. You filthy pervert! Out! GET OUT!",
"Yes. After all, they're not going to love you for your personality.",
"Confucius says 'sex is like wisdom - all for Confucius, none for you.'",
"404. Sex not found.",
"403. Sex forbidden.",
"It's 'should WE have sex', you narcissistic scumbag.",
"Yeah, sure, you conformist square. Try thinking for yourself for once.",
"Nelson Mandela, Mother Teresa, and Martin Luther King Jr. all had sex. Coincidence? I think not.",
"<span style=\"font-size: 200%\">IT'S THE CIRCLE OF LIFE.</span>",
"When polled, 100% of your ex-lovers said 'no' and then added 'never ever ever.'",
"Oh yes. Wouldn't that be lovely. And perhaps a spot of tea afterwards, m'dear?",
"Yes. Send pics to pics@shouldihavesex.com",
"No. I'm too tired.",
"Sex<sup>tm</sup> is a registered trademark of HBO. Engaging in Sex<sup>tm</sup> without prior written consent of HBO or its subsidiaries is a violation of the Telecommunications Act of 1996 and carries with it penalties of up to $10,000 fine and 1 year jail time.",
"Yes. In the immortal words of Sigmund Freud, 'sometimes a penis is just a penis'.",
"Urban dictionary defines sex as 'What kind of moron are you that you look up sex in the urban dictionary?' Oh... that's not what... I swear I was going somewhere with this...",
"Sex vad?"
];

var response = phrases[Math.floor(Math.random() * phrases.length)];
var elem = document.getElementById("response");
if (elem != null) {
	elem.innerHTML = response;
} else {
	console.log("Did not find response element.");
	document.write("Yes.");
}

