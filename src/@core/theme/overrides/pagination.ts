import { hexToRGBA } from '@core/utils'
import { OwnerStateThemeType } from '.'

const pagination = {
    MuiPagination: {
        styleOverrides: {
            ul: {
                rowGap: 6
            }
        },
        variants: [
            {
                props: { variant: 'text', color: 'primary' },
                style: ({ theme }: OwnerStateThemeType) => ({
                    '& .MuiPaginationItem-root.Mui-selected': {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        '&:hover': {
                            backgroundColor: theme.palette.primary.light
                        }
                    },
                    '& .MuiPaginationItem-root:hover:not(.Mui-selected):not(.MuiPaginationItem-ellipsis)':
                        {
                            backgroundColor: hexToRGBA(
                                theme.palette.primary.light,
                                0.16
                            ),
                            color: theme.palette.primary.main
                        }
                })
            }
        ]
    },
    MuiPaginationItem: {
        styleOverrides: {
            ellipsis: {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }
    }
}

export default pagination
