// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            backgoround: string,
            secundary: string,
           
        },
        fonts: string[],
        fontSizes: {
            small: string,
            medium: string,
            large: string
        }


    }
}