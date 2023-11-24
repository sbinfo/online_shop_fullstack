import { useContext } from 'react';
import { observer } from 'mobx-react-lite'
import { Context } from '..';
import { ListGroup } from 'react-bootstrap'

const Sidebar = observer(() => {
    const { type } = useContext(Context);

    return (
        <ListGroup>
            {
                type.types.map(item =>
                    <ListGroup.Item
                        style={{ cursor: 'pointer' }}
                        active={item.id === type.selectedType.id}
                        onClick={() => type.setSelectedType(item)}
                        key={item.id}
                    >
                        { item.name }
                    </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default Sidebar
