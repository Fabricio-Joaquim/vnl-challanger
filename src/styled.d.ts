// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            bgwhite: string,
            bgdark: string,
            persianGreen: string,
            lightBlue: string,
            onyx: string
        },
        fonts: string[],
        fontSizes: {
            small: string,
            medium: string,
            large: string
        }


    }
}