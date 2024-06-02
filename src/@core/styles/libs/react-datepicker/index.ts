import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import 'react-datepicker/dist/react-datepicker.css'
import { hexToRGBA } from '@core/utils'
import { useBgColor } from '@core/hooks'

const DatePickerWrapper = styled(Box)<BoxProps>(({ theme }) => {
    const bgColors = useBgColor()

    return {
        '& .react-datepicker-popper': {
            zIndex: 20,
            '& svg': {
                display: 'none'
            }
        },
        '& .react-datepicker-wrapper': {
            width: '100%'
        },
        '& .react-datepicker': {
            color: theme.palette.text.primary,
            borderRadius: theme.shape.borderRadius,
            fontFamily: theme.typography.fontFamily,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[4],
            border: 'none',
            '& .react-datepicker__header': {
                padding: 0,
                border: 'none',
                fontWeight: 'normal',
                backgroundColor: theme.palette.background.paper,
                '&:not(.react-datepicker-year-header)': {
                    '& + .react-datepicker__month, & + .react-datepicker__year':
                        {
                            margin: theme.spacing(3.2),
                            marginTop: theme.spacing(6)
                        }
                },
                '&.react-datepicker-year-header': {
                    '& + .react-datepicker__month, & + .react-datepicker__year':
                        {
                            margin: theme.spacing(3.2),
                            marginTop: theme.spacing(4)
                        }
                }
            },
            '& > .react-datepicker__navigation': {
                top: 12,
                borderRadius: '50%',
                backgroundColor: theme.palette.action.selected,
                '&.react-datepicker__navigation--previous': {
                    width: 24,
                    height: 24,
                    border: 'none',
                    ...(theme.direction === 'ltr'
                        ? { left: 15 }
                        : { right: 15 }),
                    backgroundImage: `${"url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' style=\\'width:24px;height:24px\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\\' /%3E%3C/svg%3E')"
                        .replace('currentColor', theme.palette.text.secondary)
                        .replace('#', '%23')}`,
                    '& .react-datepicker__navigation-icon': {
                        display: 'none'
                    }
                },
                '&.react-datepicker__navigation--next': {
                    width: 24,
                    height: 24,
                    border: 'none',
                    ...(theme.direction === 'ltr'
                        ? { right: 15 }
                        : { left: 15 }),
                    backgroundImage: `${"url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' style=\\'width:24px;height:24px\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\\' /%3E%3C/svg%3E')"
                        .replace('currentColor', theme.palette.text.secondary)
                        .replace('#', '%23')}`,
                    '& .react-datepicker__navigation-icon': {
                        display: 'none'
                    }
                },
                '&.react-datepicker__navigation--next--with-time':
                    theme.direction === 'ltr' ? { right: 127 } : { left: 127 },
                '&:focus, &:active': {
                    outline: 0
                }
            },
            '& .react-datepicker__month-container': {
                paddingTop: theme.spacing(3.2),
                '& + .react-datepicker__month-container': {
                    borderLeft: `1px solid ${theme.palette.divider}`
                }
            },
            '& .react-datepicker__current-month, & .react-datepicker-year-header':
                {
                    lineHeight: 2.4,
                    fontWeight: 500,
                    letterSpacing: '0.15px',
                    marginBottom: theme.spacing(3),
                    color: theme.palette.text.primary,
                    fontSize: theme.typography.body1.fontSize
                },
            '& .react-datepicker__day-name': {
                margin: 0,
                lineHeight: '2.25rem',
                fontWeight: 500,
                width: '3.25rem',
                letterSpacing: '0.4px',
                color: theme.palette.text.primary,
                fontSize: theme.typography.body2.fontSize
            },
            '& .react-datepicker__day': {
                margin: 0,
                width: '3.25rem',
                borderRadius: '50%',
                lineHeight: '3.25rem',
                color: theme.palette.text.primary,
                fontSize: theme.typography.body2.fontSize,
                '&.react-datepicker__day--selected.react-datepicker__day--in-selecting-range.react-datepicker__day--selecting-range-start, &.react-datepicker__day--selected.react-datepicker__day--range-start.react-datepicker__day--in-range, &.react-datepicker__day--range-start':
                    {
                        borderTopLeftRadius: '50%',
                        borderBottomLeftRadius: '50%',
                        color: `${theme.palette.common.white} !important`,
                        backgroundColor: `${theme.palette.secondary.main} !important`
                    },
                '&.react-datepicker__day--range-end.react-datepicker__day--in-range':
                    {
                        boxShadow: theme.shadows[2],
                        borderTopRightRadius: '50%',
                        borderBottomRightRadius: '50%',
                        color: `${theme.palette.common.white} !important`,
                        backgroundColor: `${theme.palette.secondary.main} !important`
                    },
                '&:focus, &:active': {
                    outline: 0
                },
                '&.react-datepicker__day--outside-month, &.react-datepicker__day--disabled:not(.react-datepicker__day--selected)':
                    {
                        color: theme.palette.text.disabled,
                        '&:hover': {
                            backgroundColor: 'transparent'
                        }
                    },
                '&.react-datepicker__day--highlighted, &.react-datepicker__day--highlighted:hover':
                    {
                        color: theme.palette.success.main,
                        backgroundColor: `${bgColors.successLight.backgroundColor} !important`,
                        '&.react-datepicker__day--selected': {
                            backgroundColor: `${theme.palette.secondary.main} !important`
                        }
                    }
            },
            '& .react-datepicker__day--in-range, & .react-datepicker__day--in-selecting-range':
                {
                    borderRadius: 0,
                    color: theme.palette.primary.main,
                    backgroundColor: `${hexToRGBA(theme.palette.secondary.main, 0.16)} !important`
                },
            '& .react-datepicker__day--today': {
                fontWeight: 'normal',
                '&:not(.react-datepicker__day--selected):not(:empty)': {
                    lineHeight: '3.25rem',
                    color: theme.palette.secondary.main,
                    backgroundColor: `${hexToRGBA(theme.palette.secondary.main, 0.16)}`,
                    '&:hover': {
                        backgroundColor: hexToRGBA(
                            theme.palette.secondary.main,
                            0.04
                        )
                    },
                    '&.react-datepicker__day--keyboard-selected': {
                        backgroundColor: hexToRGBA(
                            theme.palette.secondary.main,
                            0.06
                        ),
                        '&:hover': {
                            backgroundColor: hexToRGBA(
                                theme.palette.secondary.main,
                                0.06
                            )
                        }
                    }
                }
            },
            '& .react-datepicker__month-text--today': {
                fontWeight: 'normal',
                '&:not(.react-datepicker__month--selected)': {
                    lineHeight: '3.125rem',
                    color: theme.palette.secondary.main,
                    border: `1px solid ${theme.palette.secondary.main}`,
                    '&:hover': {
                        backgroundColor: hexToRGBA(
                            theme.palette.secondary.main,
                            0.04
                        )
                    }
                }
            },
            '& .react-datepicker__year-text--today': {
                fontWeight: 'normal',
                '&:not(.react-datepicker__year-text--selected)': {
                    lineHeight: '2.125rem',
                    color: theme.palette.secondary.main,
                    border: `1px solid ${theme.palette.secondary.main}`,
                    '&:hover': {
                        backgroundColor: hexToRGBA(
                            theme.palette.secondary.main,
                            0.04
                        )
                    },
                    '&.react-datepicker__year-text--keyboard-selected': {
                        color: theme.palette.secondary.main,
                        backgroundColor: hexToRGBA(
                            theme.palette.secondary.main,
                            0.06
                        ),
                        '&:hover': {
                            color: theme.palette.secondary.main,
                            backgroundColor: hexToRGBA(
                                theme.palette.secondary.main,
                                0.06
                            )
                        }
                    }
                }
            },
            '& .react-datepicker__day--keyboard-selected': {
                '&:not(.react-datepicker__day--in-range)': {
                    backgroundColor: hexToRGBA(
                        theme.palette.secondary.light,
                        0.06
                    ),
                    '&:hover': {
                        backgroundColor: hexToRGBA(
                            theme.palette.secondary.light,
                            0.06
                        )
                    }
                },
                '&.react-datepicker__day--in-range:not(.react-datepicker__day--range-end):not(.react-datepicker__day--range-start)':
                    {
                        backgroundColor: `${bgColors.secondaryLight.backgroundColor} !important`
                    }
            },
            '& .react-datepicker__month-text--in-range:not(.react-datepicker__month-text--range-start):not(.react-datepicker__month-text--range-end), & .react-datepicker__month-text--in-selecting-range:not(.react-datepicker__month-text--range-start):not(.react-datepicker__month-text--range-end)':
                {
                    borderRadius: 0,
                    color: theme.palette.primary.main,
                    backgroundColor: `${hexToRGBA(theme.palette.secondary.main, 0.16)} !important`
                },
            '& .react-datepicker__month-text--range-start': {
                color: `${theme.palette.common.white} !important`,
                backgroundColor: `${theme.palette.secondary.main} !important`,
                '&:hover': {
                    color: `${theme.palette.common.white} !important`,
                    backgroundColor: `${theme.palette.secondary.main} !important`
                }
            },
            '& .react-datepicker__month-text--range-end': {
                color: `${theme.palette.common.white} !important`,
                backgroundColor: `${theme.palette.secondary.main} !important`
            },
            '& .react-datepicker__month-text--keyboard-selected': {
                '&:not(.react-datepicker__month--in-range)': {
                    color: theme.palette.common.white,
                    backgroundColor: theme.palette.secondary.main,
                    '&:hover': {
                        color: theme.palette.text.primary,
                        backgroundColor: hexToRGBA(
                            theme.palette.secondary.light,
                            0.06
                        )
                    }
                }
            },
            '& .react-datepicker__year-text--keyboard-selected, & .react-datepicker__quarter-text--keyboard-selected':
                {
                    color: theme.palette.text.primary,
                    backgroundColor: hexToRGBA(
                        theme.palette.secondary.light,
                        0.06
                    ),
                    '&:hover': {
                        color: theme.palette.text.primary,
                        backgroundColor: hexToRGBA(
                            theme.palette.secondary.light,
                            0.06
                        )
                    }
                },
            '& .react-datepicker__day--selected, & .react-datepicker__month--selected, & .react-datepicker__year-text--selected, & .react-datepicker__quarter--selected':
                {
                    boxShadow: theme.shadows[2],
                    color: `${theme.palette.common.white} !important`,
                    backgroundColor: `${theme.palette.secondary.main} !important`,
                    '&:hover': {
                        backgroundColor: `${theme.palette.secondary.dark} !important`
                    }
                },
            '& .react-datepicker__week-number': {
                margin: 0,
                fontWeight: 500,
                width: '2.125rem',
                lineHeight: '2.125rem',
                color: theme.palette.text.primary
            },
            '& .react-datepicker__month-text, & .react-datepicker__year-text, & .react-datepicker__quarter-text':
                {
                    margin: 0,
                    width: '6rem',
                    alignItems: 'center',
                    lineHeight: '3.125rem',
                    display: 'inline-flex',
                    justifyContent: 'center',
                    borderRadius: theme.shape.borderRadius,
                    fontSize: theme.typography.body1.fontSize,
                    '&:focus, &:active': {
                        outline: 0
                    }
                },
            '& .react-datepicker__year--container': {
                paddingTop: theme.spacing(3.2)
            },
            '& .react-datepicker__year-wrapper': {
                maxWidth: 205,
                justifyContent: 'center'
            },
            '& .react-datepicker__input-time-container': {
                display: 'flex',
                alignItems: 'center',
                ...(theme.direction === 'rtl'
                    ? { flexDirection: 'row-reverse' }
                    : {})
            },
            '& .react-datepicker__today-button': {
                borderTop: 0,
                borderRadius: '1rem',
                margin: theme.spacing(0, 4, 4),
                color: theme.palette.common.white,
                backgroundColor: theme.palette.secondary.main
            },
            '& .react-datepicker__day:hover, & .react-datepicker__month-text:hover, & .react-datepicker__quarter-text:hover, & .react-datepicker__year-text:hover':
                {
                    backgroundColor: hexToRGBA(
                        theme.palette.secondary.light,
                        0.08
                    )
                }
        }
    }
})

export default DatePickerWrapper
