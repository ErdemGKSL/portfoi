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
					subtitle: "Bir backend yazılım geliştiricisi",
					whoami: "Ben Erdem, doğma büyüme istanbuldayım, ve yaklaşık 3 yıldır yazılım ile uğraşıyorum, dökümantasyonu olan herhangi bir api ile entegrasyon yapabilirim.",
					whoami_extra: "Maltepe üniversitesinde yazılım mühendisliği 3. sınıf öğrencisiyim."
				},
				about: {
					aboutme: "Hakkımda",
					title: "Hakkımda Bilgiler",
					description: "Ben profesyonel bir backend developer'ım. Projelerimi sıfırdan ve ihtiyaca göre kodlarım, socket veya http gibi her türlü istekleri karşılayabilirim. Database için genelde postgresql kullanırım, performans konusunda hiç endişe etmenize gerek kalmadan akıcı bir backend sağlarım.",
					year_of_exp: "Deneyim yılı",
					projects: "Projeler",
					happy_clients: "Mutlu müşteriler",
					quality: "Kalite",
					abilities: "Yetenekler",
					other: "Diğer"
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
					subtitle: "A backend software developer",
					whoami: "I'm Erdem, I was born and raised in istanbul, and I've been coding for about 3 years, I can integrate with any api that has documentation.",
					whoami_extra: "I'm a 3rd year software engineering student at Maltepe University."
				},
				about: {
					aboutme: "About me",
					title: "Here i am",
					description: "I'm a professional backend developer. I code my projects from scratch and according to the need, I can meet any kind of requests such as socket or http. I usually use postgresql for the database, I provide a fluent backend without worrying about performance.",
					year_of_exp: "Years of experience",
					projects: "Projects",
					happy_clients: "Happy clients",
					quality: "Quality",
					abilities: "Abilities",
					other: "Other"
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
					subtitle: string;
					whoami: string;
					whoami_extra: string;
				}
				about: {
					title: string;
					aboutme: string;
					description: string;

					year_of_exp: string;
					projects: string;
					happy_clients: string;
					quality: string;

					abilities: string;
					other: string;
				}
			}
		};
	}
});

export type i18nKeys = "tr" | "en";
