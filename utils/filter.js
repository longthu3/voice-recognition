const conditions = ['chỉ đường', 'chỉ đường tới', 'tới', 'đường tới', 'đến'];
const conditionsMusic = ['Bài hát', 'Mở bài hát', 'Nghe bài hát'];

const isSearchMap = (label) => {
    return conditions.some(condition => label.includes(condition));
}

const isSearchMusic = (label) => {
    return conditionsMusic.some(condition => label.includes(condition));
}


const getPlace = (label) => {
    let place = label.toLowerCase();
    conditions.forEach(condition => {
        place = place.replace(condition.toLowerCase(), '');
    });
    return place.trim().replace('.', '');
}

const getMusic = (label) => {
    let music = label.toLowerCase();
    conditionsMusic.forEach(condition => {
        music = music.replace(condition.toLowerCase(), '');
    });
    return music.trim().replace('.', '');
}

export {
    getPlace,
    getMusic,
    isSearchMap,
    isSearchMusic
};