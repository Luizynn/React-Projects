export function isNameCorrect(value){
    return value.length > 4;
}

export function isTitleCorrect(value){
    return value.trim().length >= 4 && value.trim().length < 40
}

export function isOpinionCorrect(value){
    return value.trim().length >= 10 && value.trim().length <= 255;
}