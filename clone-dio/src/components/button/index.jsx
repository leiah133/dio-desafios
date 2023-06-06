import { ButotnContainer } from "./styles"



export const Button = ({title, variant="primary", onClick}) => {
    return (
        <ButotnContainer variant={variant} onClick={onClick}>
            {title}
        </ButotnContainer>
    )
}
