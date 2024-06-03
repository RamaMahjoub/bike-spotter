import PageCarded from 'main/app/components/PageCarded/PageCarded'
import PageHeader from 'main/app/components/PageHeader'
import Content from './Content'

const TheftCasesList = () => {
    return (
        <PageCarded
            content={<Content />}
            header={<PageHeader title="Bike Thefts" />}
        />
    )
}

export default TheftCasesList
