import { createStyle } from "@gluestack-style/react";

export const Text = createStyle({
    color: "$textLight700",
    _dark: {
        color: "$textDark200",
    },
    fontWeight: "$normal",
    fontFamily: "$body",
    fontStyle: "normal",
    letterSpacing: "$md",
    // props: {
    //     regular: {
    //         fontFamily: "Outfit_400Regular",
    //     },
    //     medium: {
    //         fontFamily: "Outfit_500Medium",
    //     },
    //     semiBold: {
    //         fontFamily: "Outfit_600SemiBold",
    //     },
    //     bold: {
    //         fontFamily: "Outfit_700Bold",
    //     },
    // },
    variants: {
        isTruncated: {
            true: {
                props: {
                    // @ts-ignore
                    numberOfLines: 1,
                    ellipsizeMode: "tail",
                },
            },
        },
        bold: {
            true: {
                fontFamily: "$bold",
            },
        },
        semibold: {
            true: {
                fontFamily: "$semibold",
            },
        },
        medium: {
            true: {
                fontFamily: "$medium",
            },
        },
        capitalize: {
            true: {
                textTransform: "capitalize",
            },
        },
        uppercase: {
            true: {
                textTransform: "uppercase",
            },
        },
        underline: {
            true: {
                textDecorationLine: "underline",
            },
        },
        strikeThrough: {
            true: {
                textDecorationLine: "line-through",
            },
        },
        sub: {
            true: {
                fontSize: "$xs",
                lineHeight: "$xs",
            },
        },
        italic: {
            true: {
                fontStyle: "italic",
            },
        },
        highlight: {
            true: {
                bg: "$yellow500",
            },
        },
        size: {
            "2xs": {
                fontSize: "$2xs",
                lineHeight: "$2xs",
            },
            xs: {
                fontSize: "$xs",
                lineHeight: "$sm",
            },

            sm: {
                fontSize: "$sm",
                lineHeight: "$sm",
            },

            md: {
                fontSize: "$md",

                /**
                 * @todo Fix the lineHeight issue
                 * https://github.com/gluestack/gluestack-ui/issues/1836
                 */
                // lineHeight: '$md',
            },

            lg: {
                fontSize: "$lg",
                lineHeight: "$xl",
            },

            xl: {
                fontSize: "$xl",
                lineHeight: "$xl",
            },

            "2xl": {
                fontSize: "$2xl",
                lineHeight: "$2xl",
            },

            "3xl": {
                fontSize: "$3xl",
                lineHeight: "$3xl",
            },

            "4xl": {
                fontSize: "$4xl",
                lineHeight: "$4xl",
            },

            "5xl": {
                fontSize: "$5xl",
                lineHeight: "$6xl",
            },

            "6xl": {
                fontSize: "$6xl",
                lineHeight: "$7xl",
            },
        },
    },

    defaultProps: {
        size: "md",
    },
});
