export function empty(text:string){
    return text.replace(/^[ \t]+|[ \t]+$/,"")
}

export function newDate(text:string){
    if(text){
        const nDate = text.split("-")
        return (`${nDate[2]}/${nDate[1]}/${nDate[0]}` ||"20")
    }
}