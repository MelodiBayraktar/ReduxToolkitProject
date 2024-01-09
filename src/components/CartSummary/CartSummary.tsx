import { useSelector } from 'react-redux';
import { Dropdown, DropdownDivider, Label } from 'semantic-ui-react';

export default function CartSummary() {

    const { cartItems } = useSelector((state: any) => state.cart);

    console.log(cartItems);

    return (
        <div>
            <Dropdown item text='Sepetiniz'>
                <Dropdown.Menu>
                    {
                        cartItems.map((cartItem: any, index:number) => (
                            <Dropdown.Item key={index}>
                                {cartItem.product.title}
                                <Label>
                                    {cartItem.quantity}
                                </Label>
                            </Dropdown.Item>
                        ))
                    }
                    <DropdownDivider />
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
