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
			}
		},
		en: {
			emoji: "https://em-content.zobj.net/source/joypixels/275/flag-united-states_1f1fa-1f1f8.png",
			routes: {
				home: "Home",
				about: "About",
				settings: "Settings"
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
		};
	}
});

export type i18nKeys = "tr" | "en";
