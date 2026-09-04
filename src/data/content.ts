export const links = {
  website: 'https://raindrop-open-house.pages.dev/',
  forms: 'https://forms.gle/UeM5ehHDEJTyJYCt7',
  camp: 'https://www.raindropdallas.org/2026-middle-school-high-school-winter-camp',
};

export const parentExpectations = [
  'Make direct eye contact with the mentor during drop-off and do not leave until the student has been received.',
  'Bring and pick up the student on time, and inform the mentor of any delay.',
  'Support consistent attendance at weekend programs, camps, and joint activities.',
  'Encourage tracking, spiritual practice, and reading at home, emphasizing consistency over results.',
  'Complete assigned meal, transportation, and supplies responsibilities on time.',
  'Discuss concerns constructively with the mentor first and with the coordinator if they continue.',
  'Follow announcements in parent WhatsApp groups and stay in communication.',
  'Participate actively in parent visits and PMA activities.',
];

export const studentExpectations = [
  ['Wait at the Door', 'Do not enter directly; ring the bell and wait for the mentor to open the door.'],
  ['Enter Calmly', 'Do not shout when entering; respect the home and the neighbors.'],
  ['Ask Permission', 'Do not walk around the home or enter other areas without the mentor’s permission.'],
  ['Respect Private Areas', 'Do not enter bedrooms or closed areas, and do not touch personal belongings.'],
  ['Participate Actively', 'Participate attentively in discussions, lessons, Qur’an, reading, and activities.'],
  ['Order & Responsibility', 'Leave the area clean and respect the order of the home where you are a guest.'],
  ['A Language of Brotherhood', 'Speak respectfully with mentors and friends, and do not exclude anyone.'],
  ['Come Prepared', 'Bring the required materials, suitable clothing, and personal necessities.'],
] as const;

export const resources = [
  ['Herkül', 'https://herkul.org/'], ['Herkül Nağme', 'https://www.youtube.com/@HerkulNagme'],
  ['Hikmet.net', 'https://hikmet.net/'], ['Raindrops.tv', 'https://www.youtube.com/@raindropstv'],
  ['Meridian TV', 'https://www.youtube.com/@Meridian_TV'], ['MentorPortal', 'https://lms.mentorportal.org/'],
  ['kitapokuyorum', 'https://kitapokuyorum.org/'],
] as const;

export const calendar = [
  ['August 28–29', 'Group Orientations', 'Opening meetings for our 7th and 8th grade groups.'],
  ['August 28', 'Programs Begin', 'Our 2026–2027 mentorship programs begin.'],
  ['October 3', 'September Monthly Gathering', 'Our monthly joint gathering.'],
  ['October 10–11', 'Mini Retreat', 'Middle school mini-retreat program.'],
  ['October 24 & 31', 'Service Fair & Monthly Gathering', 'October 24 Service Fair; October 31 monthly gathering.'],
  ['November 14–15', 'Parent Visits', 'Visits that strengthen parent–mentor partnership.'],
  ['November 28–29', 'Monthly Gathering & Parent Meeting', 'November 28 gathering; November 29 parent meeting.'],
  ['December 23–29', 'Winter Retreat', 'Winter retreat for middle and high school students.'],
  ['January 23', 'January Monthly Gathering', 'Our monthly joint gathering.'],
  ['February 20', 'February Monthly Gathering', 'Our monthly gathering during Ramadan.'],
  ['March 20 & 27', 'Seerah Fair & Qur’an Festival', 'March 20 Seerah Fair and gathering; March 27 Qur’an Festival.'],
  ['April 16–18', 'Mini Retreat & Academic Trip', 'April 16–17 mini retreat; April 18 academic trip.'],
  ['April 25 & May 1', 'Parent Meeting & Monthly Gathering', 'April 25 parent meeting; May 1 monthly gathering.'],
  ['May 29–June 4', 'Summer Retreat', 'End-of-year summer retreat.'],
] as const;

export const dayOne = [
  ['6:00–6:30 PM', 'Asr Prayer'], ['6:30–7:00 PM', 'Dinner'], ['7:00–7:45 PM', 'Study Hall'],
  ['7:45–8:00 PM', 'Group Reflection + Tracker Review'], ['8:00–8:20 PM', 'Maghrib Prayer'],
  ['8:20–8:40 PM', 'Weekly Lesson'], ['8:40–9:20 PM', 'Individual Reading'], ['9:20–10:00 PM', 'Isha Prayer'], ['10:30 PM', 'Lights Out'],
] as const;
export const dayTwo = [
  ['5:30–6:00 AM', 'Tahajjud + Fajr Prayer'], ['6:00–8:00 AM', 'Rest'], ['8:00–9:00 AM', 'Breakfast + Duha Prayer'],
  ['9:00–9:30 AM', 'Multimedia'], ['9:30–10:00 AM', 'KK Session'], ['10:15–11:00 AM', 'Guided Book Discussion'],
  ['11:00 AM–1:00 PM', 'Activity'], ['1:00–1:30 PM', 'Cleanup'], ['1:30–2:00 PM', 'Dhuhr Prayer'],
] as const;

export const books = {
  '7th Grade': [
    ['September', 'Görgü ve Nezaket Kuralları', '/assets/book-7-01.png'], ['October', 'Prayer Rehberi', '/assets/book-7-02.png'],
    ['November–December', 'Kalbimin Efendisi — 3 Kitap Takım', '/assets/book-7-03.png'], ['January–February', 'Himmeti Milleti Olan İnsan', '/assets/book-7-04.png'],
    ['March–April', 'Bediüzzaman Said Nursi — Wonder of the Age', '/assets/book-7-05.png'], ['May', 'Sultan Selim I — The Conqueror of the East', '/assets/book-7-06.png'],
  ],
  '8th Grade': [
    ['September', 'Adab-ı Muaşeret', '/assets/book-8-01.png'], ['October', 'The Luminous Life of Our Prophet', '/assets/book-8-02.png'],
    ['November–December', 'Peygamberin Genç Arkadaşları — Medine Gençleri', '/assets/book-8-03.png'], ['January–February', 'Gençlere Pırlanta Ölçüler', '/assets/book-8-04.png'],
    ['March–April', 'Küçük Sözler — Bediüzzaman Said Nursî', '/assets/book-8-05.png'], ['May', 'Great Eagle — Sultan Mehmet the Conqueror', '/assets/book-8-06.png'],
  ],
} as const;

export const gatheringSteps = ['Congregational Dhuhr prayer', 'Monthly book Kahoot', 'Prizes for the top three', 'Recognition for completing the book', 'Tracker achievement awards', 'Group activities'];
export const campaigns = ['Mawlid · Raghaib · Mi’raj', 'Sacred Months Tracker Challenge', 'Ramadan Tracker Challenge', 'Laylat al-Qadr Program', 'I‘tikaf Program', 'Monthly Kahoot & Tracker'];
export const mentorTraining = ['Code of Conduct', 'Child Abuse', 'Critical Policies', 'Suicide Prevention'];
export const packingList = [
  ['Learning & Spiritual Growth', 'Qur’an, notebook, pen, personal reading book, homework, and study materials.'],
  ['Overnight Stay', 'Bedding, an extra or travel pillow if possible, spare pajamas, and daily clothing.'],
  ['Personal Hygiene', 'Toothpaste and toothbrush, soap, shampoo, deodorant, towel, and personal hygiene products.'],
  ['Sports & Activities', 'Athletic shoes, suitable clothing, and a spare shirt or outfit after physical activity.'],
] as const;
export const pmaExpectations = [
  'Follow group communication and announcements consistently.',
  'Support prayer, Qur’an, reading, and tracker goals at home with encouraging language.',
  'Help complete camp, activity, and permission processes on time.',
  'Attend monthly parent seminars and apply the approaches at home.',
  'Share family feedback constructively with the representative and mentor.',
  'Support meal, transportation, gift, and organization teams when needed.',
];
export const permissionForms = ['Permission Slip / Waiver of Liability', 'Photo Release Form', 'Medical Treatment Permission Form', 'Boarding Program Permission Form', 'Technology Restriction Permission'];
export const supplies = ['6-roll toilet paper', '6-roll paper towels', '1 container of Clorox wipes', '1 refillable liquid soap', '20-count 30-gallon trash bags', '100 plastic plates · 100 forks · 100 spoons', '40 cups suitable for hot or cold drinks'];
