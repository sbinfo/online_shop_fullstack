import { useContext } from 'react';
import { observer } from 'mobx-react-lite'
import { Context } from '..';
import {Card, Row} from 'react-bootstrap'

const BrandBar = observer(() => {
    const { brand } = useContext(Context);

    return (
        <Row className="d-flex">
            {
                brand.brands.map(item =>
                    <Card
                        key={item.id}
                        className="p-2 me-2 mb-2"
                        style={{ width: "auto", cursor: "pointer" }}
                        onClick={() => brand.setSelectedBrand(item)}
                        border={item.id === brand.selectedBrand.id ? 'success' : ''}
                    >
                        { item.name }
                    </Card>
                )}
        </Row>
    );
});

export default BrandBar
