export function deviceType(){
    if(window.innerWidth < 1300){
        return 'tablet'
    }else if(window.innerWidth < 600){
        return 'phone'
    }else{
        return 'desktop'
    }
}