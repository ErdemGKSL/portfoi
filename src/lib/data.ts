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
				education: "Eğitim"
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
				},
				education: {
					title: "Eğitim",
					my_education_history: "Eğitim geçmişim",
					my_education_history_data: [
						{
							school: "Maltepe Üniversitesi",
							year: "2021 - Şuan",
							grade: "Lisans"
						},
						{
							school: "Bostancı Doğa Anadolu Lisesi",
							year: "2017 - 2021",
							grade: "Lise"
						},
						{
							school: "Kartal Doğa Koleji",
							year: "2013 - 2017",
							grade: "Ortaokul"
						},
						{
							school: "Ahmet Rasim İlköğretim Okulu",
							year: "2009 - 2013",
							grade: "İlkokul"
						}
					],

					my_certificates: "Sertifikalarım",
					my_certificates_data: [
						{
							name: "Pascal Sınavında Üstünlük Belgesi",
							image: "https://cdn.discordapp.com/attachments/685842268606693376/1165758669066084362/394863391_1031097251537617_2409289332824342684_n.png?ex=6548045d&is=65358f5d&hm=d49deffb9ed2a1a41c48f563f8da09b6af829dca34857546dab9fe7cf047f07b&"
						},
						{
							name: "Pearson Onaylı MUN Sertifikası",
							image: "https://cdn.discordapp.com/attachments/685842268606693376/1165758610136125521/395213976_1791800104594342_5884365559336959065_n.png?ex=6548044f&is=65358f4f&hm=78a62b463033680cb2fe54170ca8054dc2d9efecee7372c453c7141f52c0b531&"
						}
					]
				}
			}
		},
		en: {
			emoji: "https://em-content.zobj.net/source/joypixels/275/flag-united-states_1f1fa-1f1f8.png",
			routes: {
				home: "Home",
				about: "About",
				education: "Education"
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
				},
				education: {
					title: "Education",
					my_education_history: "My education history",
					my_education_history_data: [
						{
							school: "Maltepe University",
							year: "2021 - Present",
							grade: "Bachelor's degree"
						},
						{
							school: "Bostancı Doğa High School",
							year: "2017 - 2021",
							grade: "High School"
						},
						{
							school: "Kartal Doğa College",
							year: "2013 - 2017",
							grade: "Middle School"
						},
						{
							school: "Ahmet Rasim Primary School",
							year: "2009 - 2013",
							grade: "Primary School"
						}
					],
					my_certificates: "My certificates",
					my_certificates_data: [
						{
							name: "Distinction Certificate in Pascal Exam",
							image: "https://cdn.discordapp.com/attachments/685842268606693376/1165758669066084362/394863391_1031097251537617_2409289332824342684_n.png?ex=6548045d&is=65358f5d&hm=d49deffb9ed2a1a41c48f563f8da09b6af829dca34857546dab9fe7cf047f07b&"
						},
						{
							name: "Pearson Approved MUN Certificate",
							image: "https://cdn.discordapp.com/attachments/685842268606693376/1165758610136125521/395213976_1791800104594342_5884365559336959065_n.png?ex=6548044f&is=65358f4f&hm=78a62b463033680cb2fe54170ca8054dc2d9efecee7372c453c7141f52c0b531&"
						}
					]

				}
			}
		}
	} as {
		[key in i18nKeys]: {
			emoji: string;
			routes: {
				home: string;
				about: string;
				education: string;
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
				education: {
					title: string;
					my_education_history: string;
					my_education_history_data: {
						school: string;
						year: string;
						grade: string;
					}[]

					my_certificates: string;
					my_certificates_data: {
						name: string;
						image: string;
					}[]
				}
			}
		};
	},
	popUpUrl: null as string | null
});

export type i18nKeys = "tr" | "en";
