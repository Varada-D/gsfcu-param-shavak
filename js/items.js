const posts = [];
const images = [
'img/growmacs.png',
'img/quantum espresso.jpg',
'img/ShengBTE.jpg',
'img/ucsf.jpg',
'img/wannier90.jpg',
'img/Xcrysden.jpg',
'img/XmGrace.jpg',
];

const titles = [
  " Image 1",
  " Image 2",
  " Image 3",
  " Image 4",
  " Image 5",
  " Image 6",
  " Image 7",
]

for (let i = 0; i < titles.length; i++) {
  let item = {
    id: i,
    title: titles[i],
    image: images[i],
  };
  posts.push(item);
}
