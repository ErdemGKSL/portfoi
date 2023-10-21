import { browser } from "$app/environment";
import { writable } from "svelte/store"

export const data = writable({
	lang: "tr" as i18nKeys,
  theme: (browser ? (localStorage.getItem("theme") || "dark") : "dark") as "light" | "dark",
	i18n: {
		tr: {
			emoji: "https://em-content.zobj.net/source/joypixels/369/flag-turkey_1f1f9-1f1f7.png",
			routes: {
				home: "Anasayfa",
				about: "Hakkımda",
				settings: "Ayarlar"
			},
			pages: {
				landing: {
					title: "Erdem Göksel",
					subtitle: "Bir yazılım geliştiricisi",
					whoami: "Ben Erdem, doğma büyüme istanbuldayım, ve yaklaşık 2 yıldır yazılım ile uğraşıyorum, dökümantasyonu olan herhangi bir api ile entegrasyon yapabilirim.\n\nMaltepe üniversitesinde yazılım mühendisliği 3. sınıf öğrencisiyim."
				}
			}
		},
		en: {
			emoji: "https://em-content.zobj.net/source/joypixels/275/flag-united-states_1f1fa-1f1f8.png",
			routes: {
				home: "Home",
				about: "About",
				settings: "Settings"
			},
			pages: {
				landing: {
					title: "Erdem Göksel",
					subtitle: "A software developer",
					whoami: "I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University.I'm Erdem, I was born and raised in istanbul, and I've been coding for about 2 years, I can integrate with any api that has documentation.\n\nI'm a 3rd year software engineering student at Maltepe University."
				}
			}
		}
	} as {
		[key in i18nKeys]: {
			emoji: string;
			routes: {
				home: string;
				about: string;
				settings: string;
			};
			pages: {
				landing: {
					title: string;
					subtitle: string;
					whoami: string;
				}
			}
		};
	}
});

export type i18nKeys = "tr" | "en";
