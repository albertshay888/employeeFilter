import { Card } from 'semantic-ui-react'

const List = ({searchTerm, filteredResults, APIData}) => {
    return (
        <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
        {searchTerm.length > 1 ? (
            filteredResults.map((item) => {
                return (
                    <Card>
                        <Card.Content>
                            <Card.Header>{item.first_name}{" "}{item.last_name}</Card.Header>
                            {/* <Card.Header>{item.last_name}</Card.Header> */}
                            <Card.Description>
                            
                             {item.email}
                         
                            </Card.Description>
                        </Card.Content>
                    </Card>
                )
            })
        ) : (
            APIData.map((item) => {
                return (
                    <Card>
                        <Card.Content>
                            <Card.Header>{item.name}</Card.Header>
                            <Card.Description>
                                {item.email}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                )
            })
        )}
    </Card.Group>
    )
}

export default List;