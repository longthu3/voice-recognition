import {
    FACEBOOK,
    GOOGLE,
    GOOGLE_DRIVE, 
    GOOGLE_MAPS, 
    YOUTUBE
} from "../constants/action_label.js";

import { 
    FACEBOOK_LINK, 
    GOOGLE_DRIVE_LINK, 
    GOOGLE_LINK, 
    GOOGLE_MAPS_LINK, 
    YOUTUBE_LINK 
} from "../constants/action_links.js";

const redirect = (path) => {
    window.open(path,"_blank")
}

const voiceRecognition = (label) => {
    let isRedirect = false;
    switch (label.toLowerCase()) {
        case FACEBOOK:
            isRedirect = true;
            redirect(FACEBOOK_LINK);
            break;
        case GOOGLE:
            isRedirect = true;
            redirect(GOOGLE_LINK);
            break;
        case YOUTUBE:
            isRedirect = true;
            redirect(YOUTUBE_LINK);
            break;
        case GOOGLE_DRIVE:
            isRedirect = true;
            redirect(GOOGLE_DRIVE_LINK);
            break;
        case GOOGLE_MAPS:
            isRedirect = true;
            redirect(GOOGLE_MAPS_LINK);
            break;
    }
    if (!isRedirect) {
        alert('Không tìm thấy kết quả phù hợp.');
    }
}

const voiceRecognitionSearchMap = (place) => {
    const search = `https://www.google.com/maps/search/${place}`;
    redirect(search);
}

const voiceRecognitionSearchMusic = (music) => {
    const search = `https://zingmp3.vn/tim-kiem/tat-ca?q=${music}`;
    redirect(search);
}



export {
    voiceRecognition,
    voiceRecognitionSearchMap,
    voiceRecognitionSearchMusic
};