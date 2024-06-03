import { dateFormat } from '@core/utils'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { TheftCaseItem } from 'main/app/theft-cases/types/responses/TheftCaseItem'
import {
    InfoWrapper,
    StackItem,
    StyledAvatar,
    StyledListItem,
    StyledListItemAvatr
} from './styled-components'

interface Props {
    caseItem: TheftCaseItem
}

const CaseItem = ({ caseItem }: Props) => {
    return (
        <StyledListItem>
            <StyledListItemAvatr>
                <StyledAvatar
                    src={caseItem.thumb || '/images/bikeFallback.jpg'}
                    variant={'rounded'}
                />
            </StyledListItemAvatr>
            <InfoWrapper>
                <Typography
                    color="primary"
                    variant="h5"
                >
                    {caseItem.title}
                </Typography>
                <Stack
                    direction={'row'}
                    divider={
                        <Divider
                            flexItem
                            orientation="vertical"
                        />
                    }
                    flexWrap='wrap'
                >
                    <StackItem>
                        <CalendarTodayIcon
                            color="secondary"
                            fontSize="small"
                        />
                        <Typography
                            color="secondary"
                            variant="body2"
                        >
                            Stoled At
                        </Typography>
                        <Typography variant="body2">
                            {dateFormat(caseItem.date_stolen)}
                        </Typography>
                    </StackItem>
                    <StackItem>
                        <CalendarTodayIcon
                            color="secondary"
                            fontSize="small"
                        />
                        <Typography
                            color="secondary"
                            variant="body2"
                        >
                            Reported At
                        </Typography>
                        <Typography variant="body2">
                            {dateFormat(caseItem.report_date)}
                        </Typography>
                    </StackItem>
                    <StackItem>
                        <LocationOnIcon
                            color="secondary"
                            fontSize="small"
                        />
                        <Typography variant="body2">
                            {caseItem.stolen_location}
                        </Typography>
                    </StackItem>
                </Stack>
                <Typography variant="body1">{caseItem.description}</Typography>
            </InfoWrapper>
        </StyledListItem>
    )
}

export default CaseItem
