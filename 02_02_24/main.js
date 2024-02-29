// data
// data
const info = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true,
    //technologies: ['Front', 'Back', 'DevOps'],
    technologies: [
        {
            title: 'Front',
            id: 1
        },
        {
            title: 'Back',
            id: 2
        },
        {
            title: 'DevOps',
            id: 3
        },
    ],
}


// render
let pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = info.title;
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement('input');
graduatesCountElement.value = info.graduatesCount;
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement('input');
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = info.areYouChampion;
document.body.append(areYouChampionElement);

let selectElement = document.createElement('select');
info.technologies.forEach(technology => {
    let optionElement = document.createElement('option');
    optionElement.value = technology.title;
    optionElement.append(technology.title);
    optionElement.id = technology.id;
    selectElement.append(optionElement);
});
document.body.append(selectElement);