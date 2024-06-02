import { OwnerStateThemeType } from '.'

const Button = {
    MuiButton: {
        styleOverrides: {
            root: ({ theme }: OwnerStateThemeType) => ({
                minWidth: 50,
                textTransform: 'none',
                '&:not(.Mui-disabled):active': {
                    transform: 'scale(0.98)'
                },
                transition: theme.transitions.create(
                    [
                        'background-color',
                        'box-shadow',
                        'border-color',
                        'color',
                        'transform'
                    ],
                    { duration: theme.transitions.duration.shortest }
                )
            }),
            endIcon: ({ ownerState }: OwnerStateThemeType) => ({
                ...(ownerState.size === 'small' && {
                    '& > *:nth-of-type(1)': {
                        fontSize: '1rem'
                    }
                }),
                ...(ownerState.size === 'medium' && {
                    '& > *:nth-of-type(1)': {
                        fontSize: '1.125rem'
                    }
                }),
                ...(ownerState.size === 'large' && {
                    '& > *:nth-of-type(1)': {
                        fontSize: '1.25rem'
                    }
                })
            }),
            startIcon: ({ ownerState }: OwnerStateThemeType) => ({
                ...(ownerState.size === 'small' && {
                    '& > *:nth-of-type(1)': {
                        fontSize: '1rem'
                    }
                }),
                ...(ownerState.size === 'medium' && {
                    '& > *:nth-of-type(1)': {
                        fontSize: '1.125rem'
                    }
                }),
                ...(ownerState.size === 'large' && {
                    '& > *:nth-of-type(1)': {
                        fontSize: '1.25rem'
                    }
                })
            }),
            contained: ({ theme }: OwnerStateThemeType) => ({
                boxShadow: theme.shadows[2],
                '&:hover': {
                    boxShadow: theme.shadows[2]
                }
            }),
            sizeSmall: ({ ownerState, theme }: OwnerStateThemeType) => ({
                borderRadius: theme.spacing(1),
                lineHeight: 2,
                fontSize: '1.4rem',
                ...(ownerState.variant === 'contained' && {
                    padding: theme.spacing(1.3, 2)
                })
            }),
            sizeMedium: ({ theme, ownerState }: OwnerStateThemeType) => ({
                borderRadius: theme.spacing(1),
                lineHeight: 2,
                ...(ownerState.variant === 'contained' && {
                    padding: theme.spacing(2)
                })
            }),
            sizeLarge: ({ ownerState, theme }: OwnerStateThemeType) => ({
                borderRadius: theme.spacing(1),
                lineHeight: 2,
                fontSize: '1.0625rem',
                ...(ownerState.variant === 'contained' && {
                    padding: theme.spacing(3.2, 3)
                })
            })
        }
    },
    MuiButtonBase: {
        defaultProps: {
            disableRipple: true
        }
    }
}

export default Button
